import { AppError, type AppErrorOptions } from "./app-error";

type FileSystemErrorOptions = AppErrorOptions & {
  path?: string;
};

class FileSystemError extends AppError {
  public readonly path?: string;

  public constructor(message: string, options: FileSystemErrorOptions = {}) {
    super(message, "FILE_SYSTEM_ERROR", options);
    this.path = options.path;
  }
}

export { FileSystemError };
export type { FileSystemErrorOptions };
