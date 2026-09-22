import { describe, expect, test } from "bun:test";
import { AppError } from "../../shared/errors";
import {
  GrowiAuthenticationError,
  GrowiConnectionError,
  GrowiError,
  GrowiForbiddenError,
  GrowiNotFoundError,
  GrowiRequestError,
  GrowiResponseError,
} from "./errors";

describe("GROWI errors", () => {
  test("GrowiError keeps GROWI request metadata", () => {
    const cause = new Error("network");
    const responseBody = { error: "invalid token" };
    const error = new GrowiError("GROWI failed", "GROWI_ERROR", {
      cause,
      endpoint: "https://growi.example.com",
      status: 401,
      responseBody,
    });

    expect(error).toBeInstanceOf(AppError);
    expect(error.name).toBe("GrowiError");
    expect(error.code).toBe("GROWI_ERROR");
    expect(error.cause).toBe(cause);
    expect(error.endpoint).toBe("https://growi.example.com");
    expect(error.status).toBe(401);
    expect(error.responseBody).toBe(responseBody);
  });

  test("specific GROWI errors expose stable codes", () => {
    expect(new GrowiRequestError("request failed").code).toBe("GROWI_REQUEST_ERROR");
    expect(new GrowiAuthenticationError().code).toBe("GROWI_AUTHENTICATION_ERROR");
    expect(new GrowiForbiddenError().code).toBe("GROWI_FORBIDDEN_ERROR");
    expect(new GrowiNotFoundError().code).toBe("GROWI_NOT_FOUND_ERROR");
    expect(new GrowiResponseError().code).toBe("GROWI_RESPONSE_ERROR");
    expect(new GrowiConnectionError().code).toBe("GROWI_CONNECTION_ERROR");
  });
});
