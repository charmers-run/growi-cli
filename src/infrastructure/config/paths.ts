import * as os from "node:os";
import * as path from "node:path";

const APP_CONFIG_DIR_NAME = "growi";
const PROFILE_CONFIG_FILE_NAME = "profile.json";
const PROJECT_CONFIG_DIR_NAME = ".growi";
const PROJECT_CONFIG_FILE_NAME = "config.json";

const userConfigHome = (): string => process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
const appConfigDirPath = (): string => path.join(userConfigHome(), APP_CONFIG_DIR_NAME);
const profileConfigFilePath = (): string => path.join(appConfigDirPath(), PROFILE_CONFIG_FILE_NAME);
const projectConfigDirPath = (projectPath: string): string => path.join(projectPath || ".", PROJECT_CONFIG_DIR_NAME);
const projectConfigFilePath = (projectPath: string): string => path.join(projectConfigDirPath(projectPath), PROJECT_CONFIG_FILE_NAME);

export {
  appConfigDirPath,
  profileConfigFilePath,
  projectConfigDirPath,
  projectConfigFilePath,
  userConfigHome,
};
