export type Profile = {
  id: string;
  accessToken: string;
  endpoint: string;
  enabled: boolean;
};

export type ProfileConfig = {
  profiles: Profile[];
};

export type ProjectConfig = {
  profile: string;
  path: string;

  createdAt: string;
  updatedAt: string;
};
