import { Command } from "commander";
import { Config } from "../../../../infrastructure/config";
import CommandBase from "../base";

class ProfileRemoveCommand extends CommandBase {
  protected readonly name = "remove";
  protected readonly description = "remove growi profile";

  protected configure(command: Command): void {
    command.argument("<profileId>", "Id of profile");
  }

  protected async action(profileId: string): Promise<void> {
    if (!Config.profiles.find(profileId)) throw new Error(`Profile '${profileId}' not found`);

    Config.profiles.remove(profileId);
    console.log(`Profile '${profileId}' removed`);
  }
}

export { ProfileRemoveCommand }
