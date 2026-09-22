import { AppError, type AppErrorOptions } from "../../shared/errors";

type ConfigErrorOptions = AppErrorOptions & {
  path?: string;
};

class ConfigError extends AppError {
  public readonly path?: string;

  public constructor(message: string, code: string, options: ConfigErrorOptions = {}) {
    super(message, code, options);
    this.path = options.path;
  }
}

class ConfigNotFoundError extends ConfigError {
  public constructor(message: string, options?: ConfigErrorOptions) {
    super(message, "CONFIG_NOT_FOUND", options);
  }
}

class ConfigConflictError extends ConfigError {
  public constructor(message: string, options?: ConfigErrorOptions) {
    super(message, "CONFIG_CONFLICT", options);
  }
}

class ConfigFileSystemError extends ConfigError {
  public constructor(message: string, options?: ConfigErrorOptions) {
    super(message, "CONFIG_FILE_SYSTEM_ERROR", options);
  }
}

class ProfileConfigNotFoundError extends ConfigNotFoundError {
  public constructor(profileId: string, options: ConfigErrorOptions = {}) {
    super(`Profile '${profileId}' not found`, {
      ...options,
      details: {
        ...(typeof options.details === "object" && options.details !== null ? options.details : {}),
        profileId,
      },
    });
  }
}

class ProfileConfigConflictError extends ConfigConflictError {
  public constructor(profileId: string, options: ConfigErrorOptions = {}) {
    super(`Profile '${profileId}' already exists`, {
      ...options,
      details: {
        ...(typeof options.details === "object" && options.details !== null ? options.details : {}),
        profileId,
      },
    });
  }
}

class ProjectConfigNotFoundError extends ConfigNotFoundError {
  public constructor(projectPath: string, options: ConfigErrorOptions = {}) {
    super(`Project config does not exist in ${projectPath}`, {
      ...options,
      path: options.path ?? projectPath,
      details: {
        ...(typeof options.details === "object" && options.details !== null ? options.details : {}),
        projectPath,
      },
    });
  }
}

class ProjectConfigConflictError extends ConfigConflictError {
  public constructor(projectPath: string, options: ConfigErrorOptions = {}) {
    super(`Project config already exists in ${projectPath}`, {
      ...options,
      path: options.path ?? projectPath,
      details: {
        ...(typeof options.details === "object" && options.details !== null ? options.details : {}),
        projectPath,
      },
    });
  }
}

export {
  ConfigConflictError,
  ConfigError,
  ConfigFileSystemError,
  ConfigNotFoundError,
  ProfileConfigConflictError,
  ProfileConfigNotFoundError,
  ProjectConfigConflictError,
  ProjectConfigNotFoundError,
};
export type { ConfigErrorOptions };
