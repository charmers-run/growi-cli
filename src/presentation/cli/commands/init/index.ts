import { Command } from "commander";
import { Config } from "../../../../infrastructure/config";
import CommandBase from "../base";


type Options = {
  force?: boolean;
  path?: string;
  profile?: string;
};

class InitCommand extends CommandBase {
  protected readonly name = "init";
  protected readonly description = "init growi project";

  protected configure(command: Command): void {
    command
      .option("-f, --force", "If the folder has growi project, overwrite this folder")
      .option("--path <path>", "Growi Article Path")
      .option("--profile <profileId>", "Id of profile");

  }

  protected async action(options: Options): Promise<void> {
    const { force, path: articlePath = "/", profile: profileId } = options;
    if (!profileId) throw new Error("Profile ID is required");

    const profile = Config.profiles.find(profileId);
    if (!profile) throw new Error("Profile Not Found");

    const projectPath = process.cwd();
    if (Config.projects.exists(projectPath) && !force) {
      throw new Error(`Project config already exists in ${projectPath}`);
    }

    try {
      Config.projects.init(projectPath, profile.id, articlePath, { force });
    } catch (e) {
      console.error("Failed to create config folder");
      console.error(e);
      return;
    }

    console.log("Initialize this folder");

    return;
  }
}

export { InitCommand };
