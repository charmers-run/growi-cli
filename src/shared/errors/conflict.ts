import { AppError, type AppErrorOptions } from "./app-error";

class ConflictError extends AppError {
  public constructor(message: string, options?: AppErrorOptions) {
    super(message, "CONFLICT", options);
  }
}

export { ConflictError };
