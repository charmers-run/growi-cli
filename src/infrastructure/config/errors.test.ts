import { describe, expect, test } from "bun:test";
import { AppError } from "../../shared/errors";
import {
  ConfigFileSystemError,
  ProfileConfigConflictError,
  ProfileConfigNotFoundError,
  ProjectConfigConflictError,
  ProjectConfigNotFoundError,
} from "./errors";

describe("config errors", () => {
  test("profile errors include stable codes and profile id details", () => {
    const notFound = new ProfileConfigNotFoundError("default");
    const conflict = new ProfileConfigConflictError("default");

    expect(notFound).toBeInstanceOf(AppError);
    expect(notFound.code).toBe("CONFIG_NOT_FOUND");
    expect(notFound.details).toEqual({ profileId: "default" });
    expect(conflict.code).toBe("CONFIG_CONFLICT");
    expect(conflict.details).toEqual({ profileId: "default" });
  });

  test("project errors include stable codes, path, and project path details", () => {
    const notFound = new ProjectConfigNotFoundError("/tmp/project");
    const conflict = new ProjectConfigConflictError("/tmp/project");

    expect(notFound.code).toBe("CONFIG_NOT_FOUND");
    expect(notFound.path).toBe("/tmp/project");
    expect(notFound.details).toEqual({ projectPath: "/tmp/project" });
    expect(conflict.code).toBe("CONFIG_CONFLICT");
    expect(conflict.path).toBe("/tmp/project");
    expect(conflict.details).toEqual({ projectPath: "/tmp/project" });
  });

  test("file system error keeps path and cause", () => {
    const cause = new Error("permission denied");
    const error = new ConfigFileSystemError("Failed to write config", {
      cause,
      path: "/tmp/config.json",
    });

    expect(error.code).toBe("CONFIG_FILE_SYSTEM_ERROR");
    expect(error.path).toBe("/tmp/config.json");
    expect(error.cause).toBe(cause);
  });
});
