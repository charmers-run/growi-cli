import { Command } from "commander";
import { Config } from "../../../../infrastructure/config";
import CommandBase from "../base";


class ProfileAddCommand extends CommandBase {
  protected readonly name = "add";
  protected readonly description = "add growi profile";

  protected configure(command: Command): void {
    command
      .argument("<profileId>", "Id of profile")
      .argument("<accessToken>", "Growi access token")
      .argument("<baseEndpoint>", "Growi base endpoint");
  }

  protected async action(profileId: string, accessToken: string, baseEndpoint: string): Promise<void> {
    const profile = Config.profiles.find(profileId);
    if (profile) throw Error("Profile defined");

    Config.profiles.add(profileId, accessToken, baseEndpoint);
    console.log(`Profile '${profileId}' added`);
  }
}

export { ProfileAddCommand }
