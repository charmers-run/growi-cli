import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { ConflictError, NotFoundError } from "../../shared/errors";
import { ProfileConfigRepository } from "./profile.repository";
import { ProjectConfigRepository } from "./project.repository";

const permissionOf = (targetPath: string): string => {
  return (fs.statSync(targetPath).mode & 0o777).toString(8).padStart(3, "0");
};

const quietProjectInit = (projectPath: string, profile: string, articlePath: string, options?: { force?: boolean }): void => {
  const originalConsoleLog = console.log;
  try {
    console.log = () => undefined;
    ProjectConfigRepository.init(projectPath, profile, articlePath, options);
  } finally {
    console.log = originalConsoleLog;
  }
};

describe("config permissions", () => {
  const originalXdgConfigHome = process.env.XDG_CONFIG_HOME;
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "growi-cli-config-permissions-"));
    process.env.XDG_CONFIG_HOME = path.join(tempDir, "config-home");
  });

  afterEach(() => {
    process.env.XDG_CONFIG_HOME = originalXdgConfigHome;
    fs.rmSync(tempDir, { force: true, recursive: true });
  });

  test("profile config directory is 700 and profile config file is 600", () => {
    ProfileConfigRepository.add("default", "token", "https://example.com");

    const appConfigDir = path.join(process.env.XDG_CONFIG_HOME as string, "growi");
    const profileConfigFile = path.join(appConfigDir, "profile.json");

    expect(permissionOf(appConfigDir)).toBe("700");
    expect(permissionOf(profileConfigFile)).toBe("600");
  });

  test("profile config permissions are fixed when an existing file is updated", () => {
    const appConfigDir = path.join(process.env.XDG_CONFIG_HOME as string, "growi");
    const profileConfigFile = path.join(appConfigDir, "profile.json");

    fs.mkdirSync(appConfigDir, { mode: 0o777, recursive: true });
    fs.writeFileSync(profileConfigFile, JSON.stringify({ profiles: [] }), { mode: 0o666 });

    ProfileConfigRepository.add("default", "token", "https://example.com");

    expect(permissionOf(appConfigDir)).toBe("700");
    expect(permissionOf(profileConfigFile)).toBe("600");
  });

  test("project config directory is 700 and project config file is 600", () => {
    const projectDir = path.join(tempDir, "project");
    fs.mkdirSync(projectDir);

    quietProjectInit(projectDir, "default", "/");

    const projectConfigDir = path.join(projectDir, ".growi");
    const projectConfigFile = path.join(projectConfigDir, "config.json");

    expect(permissionOf(projectConfigDir)).toBe("700");
    expect(permissionOf(projectConfigFile)).toBe("600");
  });

  test("project config file permission is fixed when an existing file is updated", () => {
    const projectDir = path.join(tempDir, "project");
    const projectConfigDir = path.join(projectDir, ".growi");
    const projectConfigFile = path.join(projectConfigDir, "config.json");

    fs.mkdirSync(projectConfigDir, { mode: 0o777, recursive: true });
    fs.writeFileSync(
      projectConfigFile,
      JSON.stringify({
        profile: "default",
        path: "/",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
      { mode: 0o666 },
    );

    ProjectConfigRepository.update(projectDir, { path: "/docs" });

    expect(permissionOf(projectConfigFile)).toBe("600");
  });
});

describe("ProfileConfigRepository", () => {
  const originalXdgConfigHome = process.env.XDG_CONFIG_HOME;
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "growi-cli-profile-repository-"));
    process.env.XDG_CONFIG_HOME = path.join(tempDir, "config-home");
  });

  afterEach(() => {
    process.env.XDG_CONFIG_HOME = originalXdgConfigHome;
    fs.rmSync(tempDir, { force: true, recursive: true });
  });

  test("load returns an empty profile config when the file does not exist", () => {
    expect(ProfileConfigRepository.load()).toEqual({ profiles: [] });
  });

  test("add creates a profile and find returns it", () => {
    const config = ProfileConfigRepository.add("default", "token", "https://example.com");

    expect(config.profiles).toEqual([
      {
        id: "default",
        accessToken: "token",
        endpoint: "https://example.com",
        enabled: true,
      },
    ]);
    expect(ProfileConfigRepository.find("default")).toEqual(config.profiles[0]);
  });

  test("add replaces an existing profile with the same id", () => {
    ProfileConfigRepository.add("default", "token", "https://example.com");
    const config = ProfileConfigRepository.add("default", "new-token", "https://example.org");

    expect(config.profiles).toHaveLength(1);
    expect(config.profiles[0]).toMatchObject({
      id: "default",
      accessToken: "new-token",
      endpoint: "https://example.org",
    });
  });

  test("remove deletes a profile by id", () => {
    ProfileConfigRepository.add("default", "token", "https://example.com");
    ProfileConfigRepository.add("secondary", "token-2", "https://example.org");

    const config = ProfileConfigRepository.remove("default");

    expect(config.profiles.map((profile) => profile.id)).toEqual(["secondary"]);
    expect(ProfileConfigRepository.find("default")).toBeNull();
  });

  test("init creates an empty profile config only when no profiles exist", () => {
    ProfileConfigRepository.init();
    expect(ProfileConfigRepository.load()).toEqual({ profiles: [] });

    ProfileConfigRepository.add("default", "token", "https://example.com");
    ProfileConfigRepository.init();

    expect(ProfileConfigRepository.load().profiles).toHaveLength(1);
  });
});

describe("ProjectConfigRepository", () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "growi-cli-project-repository-"));
  });

  afterEach(() => {
    fs.rmSync(tempDir, { force: true, recursive: true });
  });

  test("init creates a project config", () => {
    const projectDir = path.join(tempDir, "project");
    fs.mkdirSync(projectDir);

    quietProjectInit(projectDir, "default", "/docs");

    expect(ProjectConfigRepository.exists(projectDir)).toBe(true);
    expect(ProjectConfigRepository.load(projectDir)).toMatchObject({
      profile: "default",
      path: "/docs",
    });
  });

  test("init throws a conflict error for an existing project config without force", () => {
    const projectDir = path.join(tempDir, "project");
    fs.mkdirSync(projectDir);

    quietProjectInit(projectDir, "default", "/docs");

    expect(() => ProjectConfigRepository.init(projectDir, "secondary", "/other")).toThrow(ConflictError);
  });

  test("init overwrites an existing project config with force", () => {
    const projectDir = path.join(tempDir, "project");
    fs.mkdirSync(projectDir);

    quietProjectInit(projectDir, "default", "/docs");
    quietProjectInit(projectDir, "secondary", "/other", { force: true });

    expect(ProjectConfigRepository.load(projectDir)).toMatchObject({
      profile: "secondary",
      path: "/other",
    });
  });

  test("update merges data and refreshes updatedAt", async () => {
    const projectDir = path.join(tempDir, "project");
    fs.mkdirSync(projectDir);

    quietProjectInit(projectDir, "default", "/docs");
    const beforeUpdate = ProjectConfigRepository.load(projectDir);

    await new Promise((resolve) => setTimeout(resolve, 1));
    ProjectConfigRepository.update(projectDir, { path: "/updated" });
    const afterUpdate = ProjectConfigRepository.load(projectDir);

    expect(afterUpdate).toMatchObject({
      profile: "default",
      path: "/updated",
      createdAt: beforeUpdate.createdAt,
    });
    expect(afterUpdate.updatedAt).not.toBe(beforeUpdate.updatedAt);
  });

  test("update throws a not found error when project config does not exist", () => {
    const projectDir = path.join(tempDir, "missing-project");
    fs.mkdirSync(projectDir);

    expect(() => ProjectConfigRepository.update(projectDir, { path: "/docs" })).toThrow(NotFoundError);
  });
});
