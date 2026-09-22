type AppErrorOptions = {
  cause?: unknown;
  details?: unknown;
};

class AppError extends Error {
  public readonly code: string;
  public readonly details?: unknown;

  public constructor(message: string, code: string, options: AppErrorOptions = {}) {
    super(message, { cause: options.cause });
    this.name = new.target.name;
    this.code = code;
    this.details = options.details;
  }
}

export { AppError };
export type { AppErrorOptions };
