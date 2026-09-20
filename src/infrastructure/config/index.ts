import type { Profile, ProfileConfig, ProjectConfig } from "./model";
import { ProfileConfigRepository } from "./profile.repository";
import { ProjectConfigRepository } from "./project.repository";

const Config = {
  profiles: ProfileConfigRepository,
  projects: ProjectConfigRepository,
};

export { Config };
export type { Profile, ProfileConfig, ProjectConfig };
