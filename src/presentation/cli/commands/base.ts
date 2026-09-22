import { Command } from "commander";


abstract class CommandBase {
  protected abstract readonly name: string;
  protected abstract readonly description: string;
  protected readonly subCommands: CommandBase[] = [];

  protected configure(_command: Command): void {
    return;
  }

  protected async action(..._args: unknown[]): Promise<void> {
    return;
  }

  public build(): Command {
    const command = new Command(this.name)
      .description(this.description);

    this.configure(command);

    this.subCommands.forEach((subCommand) => {
      command.addCommand(subCommand.build());
    });

    command.action((...args: unknown[]) => {
      if (this.subCommands.length > 0) {
        command.help();
      }

      return this.action(...args);
    });

    return command;
  }
}

export default CommandBase;
