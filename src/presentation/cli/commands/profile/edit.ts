import { Command } from "commander";
import { Config } from "../../../../infrastructure/config";
import { ProfileConfigNotFoundError } from "../../../../infrastructure/config/errors";
import CommandBase from "../base";


class ProfileEditCommand extends CommandBase {
  protected readonly name = "edit";
  protected readonly description = "edit growi profile";

  protected configure(command: Command): void {
    command
      .argument("<profileId>", "Id of profile")
      .argument("<accessToken>", "Growi access token")
      .argument("<baseEndpoint>", "Growi base endpoint");
  }

  protected async action(profileId: string, accessToken: string, baseEndpoint: string): Promise<void> {
    if (!Config.profiles.find(profileId)) throw new ProfileConfigNotFoundError(profileId);

    Config.profiles.add(profileId, accessToken, baseEndpoint);
    console.log(`Profile '${profileId}' updated`);
  }
}


export { ProfileEditCommand }
