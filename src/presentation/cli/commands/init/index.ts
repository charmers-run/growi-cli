import { Command } from "commander";
import { Config } from "../../../../infrastructure/config";
import { AppError, ConflictError, FileSystemError, NotFoundError, ValidationError } from "../../../../shared/errors";
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
    if (!profileId) throw new ValidationError("Profile ID is required");

    const profile = Config.profiles.find(profileId);
    if (!profile) throw new NotFoundError(`Profile '${profileId}' not found`, { resource: "profile" });

    const projectPath = process.cwd();
    if (Config.projects.exists(projectPath) && !force) {
      throw new ConflictError(`Project config already exists in ${projectPath}`, {
        details: { projectPath },
      });
    }

    try {
      Config.projects.init(projectPath, profile.id, articlePath, { force });
    } catch (e) {
      if (e instanceof AppError) throw e;

      throw new FileSystemError("Failed to create config folder", {
        cause: e,
        path: projectPath,
      });
    }

    console.log("Initialize this folder");

    return;
  }
}

export { InitCommand };
