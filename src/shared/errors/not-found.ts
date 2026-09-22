import { AppError, type AppErrorOptions } from "./app-error";

type NotFoundErrorOptions = AppErrorOptions & {
  resource?: string;
};

class NotFoundError extends AppError {
  public readonly resource?: string;

  public constructor(message: string, options: NotFoundErrorOptions = {}) {
    super(message, "NOT_FOUND", options);
    this.resource = options.resource;
  }
}

export { NotFoundError };
export type { NotFoundErrorOptions };
