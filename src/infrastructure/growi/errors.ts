import { AppError, type AppErrorOptions } from "../../shared/errors";

type GrowiErrorOptions = AppErrorOptions & {
  endpoint?: string;
  status?: number;
  responseBody?: unknown;
};

class GrowiError extends AppError {
  public readonly endpoint?: string;
  public readonly status?: number;
  public readonly responseBody?: unknown;

  public constructor(message: string, code: string, options: GrowiErrorOptions = {}) {
    super(message, code, options);
    this.endpoint = options.endpoint;
    this.status = options.status;
    this.responseBody = options.responseBody;
  }
}

class GrowiRequestError extends GrowiError {
  public constructor(message: string, options?: GrowiErrorOptions) {
    super(message, "GROWI_REQUEST_ERROR", options);
  }
}

class GrowiAuthenticationError extends GrowiError {
  public constructor(message = "GROWI authentication failed", options?: GrowiErrorOptions) {
    super(message, "GROWI_AUTHENTICATION_ERROR", options);
  }
}

class GrowiForbiddenError extends GrowiError {
  public constructor(message = "GROWI request is forbidden", options?: GrowiErrorOptions) {
    super(message, "GROWI_FORBIDDEN_ERROR", options);
  }
}

class GrowiNotFoundError extends GrowiError {
  public constructor(message = "GROWI resource not found", options?: GrowiErrorOptions) {
    super(message, "GROWI_NOT_FOUND_ERROR", options);
  }
}

class GrowiResponseError extends GrowiError {
  public constructor(message = "GROWI returned an invalid response", options?: GrowiErrorOptions) {
    super(message, "GROWI_RESPONSE_ERROR", options);
  }
}

class GrowiConnectionError extends GrowiError {
  public constructor(message = "Failed to connect to GROWI", options?: GrowiErrorOptions) {
    super(message, "GROWI_CONNECTION_ERROR", options);
  }
}

export {
  GrowiAuthenticationError,
  GrowiConnectionError,
  GrowiError,
  GrowiForbiddenError,
  GrowiNotFoundError,
  GrowiRequestError,
  GrowiResponseError,
};
export type { GrowiErrorOptions };
