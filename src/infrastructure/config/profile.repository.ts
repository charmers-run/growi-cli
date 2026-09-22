import * as fs from "node:fs";
import type { Profile, ProfileConfig } from "./model";
import { appConfigDirPath, profileConfigFilePath } from "./paths";
import { ensureConfigDirectory, writeConfigFile } from "./permissions";

type ProfileConfigRepositoryType = {
  find: (id: string) => null | Profile;
  load: () => ProfileConfig;
  init: () => void;
  add: (id: string, accessToken: string, endpoint: string) => ProfileConfig;
  remove: (id: string) => ProfileConfig;
  update: (profiles: Profile[]) => ProfileConfig;
};

const ProfileConfigRepository: ProfileConfigRepositoryType = {
  find: (id) => {
    if (!fs.existsSync(profileConfigFilePath())) return null;

    const config = ProfileConfigRepository.load();
    return config.profiles.find((profile) => profile.id === id) ?? null;
  },

  load: () => {
    if (!fs.existsSync(profileConfigFilePath())) return { profiles: [] };

    return JSON.parse(fs.readFileSync(profileConfigFilePath(), "utf-8")) as ProfileConfig;
  },

  init: () => {
    if (ProfileConfigRepository.load().profiles.length > 0) return;
    ProfileConfigRepository.update([]);
  },

  add: (id, accessToken, endpoint) => {
    const currentConfig = ProfileConfigRepository.load();
    const profile: Profile = {
      id,
      accessToken,
      endpoint,
      enabled: true,
    };

    const profiles = ProfileConfigRepository.find(id)
      ? currentConfig.profiles.map((currentProfile) => currentProfile.id === id ? profile : currentProfile)
      : [...currentConfig.profiles, profile];

    return ProfileConfigRepository.update(profiles);
  },

  remove: (id) => {
    const currentConfig = ProfileConfigRepository.load();
    return ProfileConfigRepository.update(currentConfig.profiles.filter((profile) => profile.id !== id));
  },

  update: (profiles) => {
    const config: ProfileConfig = { profiles };

    try {
      ensureConfigDirectory(appConfigDirPath());
      writeConfigFile(profileConfigFilePath(), JSON.stringify(config, null, 2));
    } catch (e) {
      if (e instanceof Error) console.error(e.message, { cause: e.cause });
    }

    return config;
  },
};

export { ProfileConfigRepository };
export type { ProfileConfigRepositoryType };
