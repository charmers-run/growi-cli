import { AppError, type AppErrorOptions } from "./app-error";

class ValidationError extends AppError {
  public constructor(message: string, options?: AppErrorOptions) {
    super(message, "VALIDATION_ERROR", options);
  }
}

export { ValidationError };
