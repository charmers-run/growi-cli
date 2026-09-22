import { Command } from "commander";
import { describe, expect, test } from "bun:test";
import CommandBase from "./base";

class LeafCommand extends CommandBase {
  protected readonly name = "leaf";
  protected readonly description = "leaf command";

  public calledWith: unknown[] | null = null;

  protected configure(command: Command): void {
    command.argument("<value>", "value");
  }

  protected async action(...args: unknown[]): Promise<void> {
    this.calledWith = args;
  }
}

class ParentCommand extends CommandBase {
  protected readonly name = "parent";
  protected readonly description = "parent command";

  public constructor(protected readonly subCommands: CommandBase[]) {
    super();
  }
}

describe("CommandBase", () => {
  test("builds a command with configured name, description, and arguments", async () => {
    const leaf = new LeafCommand();
    const command = leaf.build();

    expect(command.name()).toBe("leaf");
    expect(command.description()).toBe("leaf command");

    await command.parseAsync(["node", "test", "value"], { from: "node" });

    expect(leaf.calledWith?.[0]).toBe("value");
  });

  test("builds nested subcommands", () => {
    const parent = new ParentCommand([new LeafCommand()]);
    const command = parent.build();

    expect(command.commands.map((subCommand) => subCommand.name())).toEqual(["leaf"]);
  });
});
