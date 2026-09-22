import { ValidationError } from "../../shared/errors";

type ChmodPermissionTarget = "owner" | "group" | "others";
type ChmodPermissionAction = "read" | "write" | "execute";

type ChmodPermissionSet = {
  read?: boolean;
  write?: boolean;
  execute?: boolean;
};

type ChmodPermissionInput = {
  owner?: ChmodPermissionSet;
  group?: ChmodPermissionSet;
  others?: ChmodPermissionSet;
};

const MIN_MODE = 0o000;
const MAX_MODE = 0o777;

const TARGET_SHIFTS: Record<ChmodPermissionTarget, number> = {
  owner: 6,
  group: 3,
  others: 0,
};

const ACTION_BITS: Record<ChmodPermissionAction, number> = {
  read: 4,
  write: 2,
  execute: 1,
};

class ChmodPermission {
  private constructor(private readonly mode: number) {
    ChmodPermission.assertValidMode(mode);
  }

  public static fromMode(mode: number): ChmodPermission {
    return new ChmodPermission(mode);
  }

  public static fromOctal(octal: string | number): ChmodPermission {
    const value = String(octal);

    if (!/^(?:0)?[0-7]{3}$/.test(value)) {
      throw new ValidationError(`Invalid chmod permission: ${octal}`, {
        details: { octal },
      });
    }

    return new ChmodPermission(Number.parseInt(value, 8));
  }

  public static fromSymbolic(symbolic: string): ChmodPermission {
    if (!/^[r-][w-][x-][r-][w-][x-][r-][w-][x-]$/.test(symbolic)) {
      throw new ValidationError(`Invalid symbolic permission: ${symbolic}`, {
        details: { symbolic },
      });
    }

    const targets: ChmodPermissionTarget[] = ["owner", "group", "others"];
    const actions: ChmodPermissionAction[] = ["read", "write", "execute"];

    return targets.reduce((permission, target, targetIndex) => {
      return actions.reduce((current, action, actionIndex) => {
        const symbolicIndex = targetIndex * actions.length + actionIndex;
        return symbolic[symbolicIndex] === "-" ? current : current.allow(target, action);
      }, permission);
    }, ChmodPermission.fromMode(0o000));
  }

  public static from(input: ChmodPermissionInput): ChmodPermission {
    const targets: ChmodPermissionTarget[] = ["owner", "group", "others"];
    const actions: ChmodPermissionAction[] = ["read", "write", "execute"];

    return targets.reduce((permission, target) => {
      return actions.reduce((current, action) => {
        return input[target]?.[action] ? current.allow(target, action) : current;
      }, permission);
    }, ChmodPermission.fromMode(0o000));
  }

  public toMode(): number {
    return this.mode;
  }

  public toOctal(): string {
    return this.mode.toString(8).padStart(3, "0");
  }

  public toSymbolic(): string {
    const targets: ChmodPermissionTarget[] = ["owner", "group", "others"];
    const actions: ChmodPermissionAction[] = ["read", "write", "execute"];
    const symbols: Record<ChmodPermissionAction, string> = {
      read: "r",
      write: "w",
      execute: "x",
    };

    return targets
      .flatMap((target) => actions.map((action) => this.has(target, action) ? symbols[action] : "-"))
      .join("");
  }

  public has(target: ChmodPermissionTarget, action: ChmodPermissionAction): boolean {
    return (this.mode & ChmodPermission.bitFor(target, action)) !== 0;
  }

  public allow(target: ChmodPermissionTarget, action: ChmodPermissionAction): ChmodPermission {
    return new ChmodPermission(this.mode | ChmodPermission.bitFor(target, action));
  }

  public deny(target: ChmodPermissionTarget, action: ChmodPermissionAction): ChmodPermission {
    return new ChmodPermission(this.mode & ~ChmodPermission.bitFor(target, action));
  }

  public equals(other: ChmodPermission): boolean {
    return this.mode === other.mode;
  }

  private static bitFor(target: ChmodPermissionTarget, action: ChmodPermissionAction): number {
    return ACTION_BITS[action] << TARGET_SHIFTS[target];
  }

  private static assertValidMode(mode: number): void {
    if (!Number.isInteger(mode) || mode < MIN_MODE || mode > MAX_MODE) {
      throw new ValidationError(`Invalid chmod mode: ${mode}`, {
        details: { mode },
      });
    }
  }
}

export { ChmodPermission };
export type { ChmodPermissionAction, ChmodPermissionInput, ChmodPermissionSet, ChmodPermissionTarget };
