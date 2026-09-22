import * as fs from "node:fs";
import { ChmodPermission } from "../../domain/chmod";

const CONFIG_DIRECTORY_PERMISSION = ChmodPermission.fromOctal("700");
const CONFIG_FILE_PERMISSION = ChmodPermission.fromOctal("600");

const ensureConfigDirectory = (dirPath: string): void => {
  fs.mkdirSync(dirPath, {
    mode: CONFIG_DIRECTORY_PERMISSION.toMode(),
    recursive: true,
  });
  fs.chmodSync(dirPath, CONFIG_DIRECTORY_PERMISSION.toMode());
};

const writeConfigFile = (filePath: string, data: string): void => {
  fs.writeFileSync(filePath, data, {
    mode: CONFIG_FILE_PERMISSION.toMode(),
  });
  fs.chmodSync(filePath, CONFIG_FILE_PERMISSION.toMode());
};

export {
  CONFIG_DIRECTORY_PERMISSION,
  CONFIG_FILE_PERMISSION,
  ensureConfigDirectory,
  writeConfigFile,
};
