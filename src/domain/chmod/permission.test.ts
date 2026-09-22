import { describe, expect, test } from "bun:test";
import { ChmodPermission } from "./permission";

describe("ChmodPermission", () => {
  test("creates permission from octal number and string", () => {
    expect(ChmodPermission.fromOctal(600).toMode()).toBe(0o600);
    expect(ChmodPermission.fromOctal("600").toMode()).toBe(0o600);
    expect(ChmodPermission.fromOctal("0600").toMode()).toBe(0o600);
  });

  test("creates permission from symbolic representation", () => {
    const permission = ChmodPermission.fromSymbolic("rwxr-x---");

    expect(permission.toOctal()).toBe("750");
    expect(permission.toSymbolic()).toBe("rwxr-x---");
  });

  test("creates permission from structured input", () => {
    const permission = ChmodPermission.from({
      owner: { read: true, write: true },
      group: { read: true },
      others: {},
    });

    expect(permission.toOctal()).toBe("640");
    expect(permission.toSymbolic()).toBe("rw-r-----");
  });

  test("checks individual permission bits", () => {
    const permission = ChmodPermission.fromOctal("640");

    expect(permission.has("owner", "read")).toBe(true);
    expect(permission.has("owner", "write")).toBe(true);
    expect(permission.has("owner", "execute")).toBe(false);
    expect(permission.has("group", "read")).toBe(true);
    expect(permission.has("group", "write")).toBe(false);
    expect(permission.has("others", "read")).toBe(false);
  });

  test("returns a new permission when allowing and denying bits", () => {
    const original = ChmodPermission.fromOctal("600");
    const executable = original.allow("owner", "execute");
    const readOnly = executable.deny("owner", "write");

    expect(original.toOctal()).toBe("600");
    expect(executable.toOctal()).toBe("700");
    expect(readOnly.toOctal()).toBe("500");
  });

  test("compares permissions by mode", () => {
    expect(ChmodPermission.fromOctal("600").equals(ChmodPermission.fromMode(0o600))).toBe(true);
    expect(ChmodPermission.fromOctal("600").equals(ChmodPermission.fromOctal("700"))).toBe(false);
  });

  test("rejects invalid chmod modes", () => {
    expect(() => ChmodPermission.fromMode(-1)).toThrow();
    expect(() => ChmodPermission.fromMode(0o1000)).toThrow();
    expect(() => ChmodPermission.fromMode(0.5)).toThrow();
    expect(() => ChmodPermission.fromOctal("888")).toThrow();
    expect(() => ChmodPermission.fromOctal("7777")).toThrow();
    expect(() => ChmodPermission.fromSymbolic("rwx")).toThrow();
    expect(() => ChmodPermission.fromSymbolic("rwxrwxrwq")).toThrow();
  });
});
