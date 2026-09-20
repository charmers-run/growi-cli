import { Command } from "commander";


abstract class CommandBase {
  protected abstract readonly name: string;
  protected abstract readonly description: string;

  protected abstract configure(command: Command): void;
  protected abstract action(...args: unknown[]): Promise<void>;

  public build(): Command {
    const command = new Command(this.name)
      .description(this.description);

    this.configure(command);

    command.action((...args: unknown[]) => this.action(...args));

    return command;
  }
}

export default CommandBase;
