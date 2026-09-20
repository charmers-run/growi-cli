import * as fs from "node:fs";
import type { ProjectConfig } from "./model";
import { projectConfigDirPath, projectConfigFilePath } from "./paths";

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
    if (ProjectConfigRepository.exists(projectPath)) {
      if (options.force) {
        try {
          fs.rmdirSync(projectPath);
        } catch (e) {
          console.error("Failed to remove current project. Please continue");
          return;
        }
      } else {
        console.error("In this folder project setting included.");
        return;
      }
    }
    if (ProjectConfigRepository.exists(projectPath) && !options.force) {
      console.error(`Project config already exists in ${projectPath}`);
      return;
    }

    try {
      fs.mkdirSync(projectConfigDirPath(projectPath), { recursive: true });
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return;
    }

    const now = new Date().toISOString();
    const config: ProjectConfig = {
      profile,
      path,
      createdAt: now,
      updatedAt: now,
    };

    try {
      fs.writeFileSync(projectConfigFilePath(projectPath), JSON.stringify(config, null, 2));
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return;
    }

    console.log(`Project config created in ${projectPath}`);
  },

  update: (projectPath, data) => {
    if (!ProjectConfigRepository.exists(projectPath)) {
      console.error(`Project config does not exist in ${projectPath}`);
      return;
    }

    const currentConfig = ProjectConfigRepository.load(projectPath);
    const config: ProjectConfig = {
      ...currentConfig,
      ...data,
      updatedAt: new Date().toISOString(),
    };

    try {
      fs.writeFileSync(projectConfigFilePath(projectPath), JSON.stringify(config, null, 2));
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
    }
  },
};

export { ProjectConfigRepository };
export type { ProjectConfigInitOptions, ProjectConfigRepositoryType, ProjectConfigUpdate };
