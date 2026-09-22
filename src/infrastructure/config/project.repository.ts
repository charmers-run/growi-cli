import * as fs from "node:fs";
import type { ProjectConfig } from "./model";
import { projectConfigDirPath, projectConfigFilePath } from "./paths";
import { ensureConfigDirectory, writeConfigFile } from "./permissions";
import { ConflictError, FileSystemError, NotFoundError } from "../../shared/errors";

type ProjectConfigUpdate = Partial<Omit<ProjectConfig, "createdAt" | "updatedAt">>;
type ProjectConfigInitOptions = {
  force?: boolean;
};

type ProjectConfigRepositoryType = {
  exists: (projectPath: string) => boolean;
  load: (projectPath: string) => ProjectConfig;
  init: (projectPath: string, profile: string, path: string, options?: ProjectConfigInitOptions) => void;
  update: (projectPath: string, data: ProjectConfigUpdate) => void;
};

const ProjectConfigRepository: ProjectConfigRepositoryType = {
  exists: (projectPath) => fs.existsSync(projectConfigFilePath(projectPath)),

  load: (projectPath) => JSON.parse(fs.readFileSync(projectConfigFilePath(projectPath), "utf-8")) as ProjectConfig,

  init: (projectPath, profile, path = "", options = {}) => {
    if (ProjectConfigRepository.exists(projectPath) && !options.force) {
      throw new ConflictError(`Project config already exists in ${projectPath}`, {
        details: { projectPath },
      });
    }

    try {
      ensureConfigDirectory(projectConfigDirPath(projectPath));
    } catch (e) {
      throw new FileSystemError(`Failed to create project config directory in ${projectPath}`, {
        cause: e,
        path: projectConfigDirPath(projectPath),
      });
    }

    const now = new Date().toISOString();
    const config: ProjectConfig = {
      profile,
      path,
      createdAt: now,
      updatedAt: now,
    };

    try {
      writeConfigFile(projectConfigFilePath(projectPath), JSON.stringify(config, null, 2));
    } catch (e) {
      throw new FileSystemError(`Failed to write project config in ${projectPath}`, {
        cause: e,
        path: projectConfigFilePath(projectPath),
      });
    }

    console.log(`Project config created in ${projectPath}`);
  },

  update: (projectPath, data) => {
    if (!ProjectConfigRepository.exists(projectPath)) {
      throw new NotFoundError(`Project config does not exist in ${projectPath}`, {
        resource: "project-config",
        details: { projectPath },
      });
    }

    const currentConfig = ProjectConfigRepository.load(projectPath);
    const config: ProjectConfig = {
      ...currentConfig,
      ...data,
      updatedAt: new Date().toISOString(),
    };

    try {
      writeConfigFile(projectConfigFilePath(projectPath), JSON.stringify(config, null, 2));
    } catch (e) {
      throw new FileSystemError(`Failed to write project config in ${projectPath}`, {
        cause: e,
        path: projectConfigFilePath(projectPath),
      });
    }
  },
};

export { ProjectConfigRepository };
export type { ProjectConfigInitOptions, ProjectConfigRepositoryType, ProjectConfigUpdate };
