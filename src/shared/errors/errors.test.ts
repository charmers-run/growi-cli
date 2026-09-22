import { describe, expect, test } from "bun:test";
import { AppError, ConflictError, FileSystemError, NotFoundError, ValidationError } from ".";

describe("shared errors", () => {
  test("AppError keeps name, code, cause, and details", () => {
    const cause = new Error("cause");
    const error = new AppError("Something failed", "SOMETHING_FAILED", {
      cause,
      details: { field: "profile" },
    });

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("AppError");
    expect(error.message).toBe("Something failed");
    expect(error.code).toBe("SOMETHING_FAILED");
    expect(error.cause).toBe(cause);
    expect(error.details).toEqual({ field: "profile" });
  });

  test("NotFoundError uses NOT_FOUND code and keeps resource", () => {
    const error = new NotFoundError("Profile not found", { resource: "profile" });

    expect(error.name).toBe("NotFoundError");
    expect(error.code).toBe("NOT_FOUND");
    expect(error.resource).toBe("profile");
  });

  test("FileSystemError uses FILE_SYSTEM_ERROR code and keeps path", () => {
    const error = new FileSystemError("Failed to write file", { path: "/tmp/config.json" });

    expect(error.name).toBe("FileSystemError");
    expect(error.code).toBe("FILE_SYSTEM_ERROR");
    expect(error.path).toBe("/tmp/config.json");
  });

  test("ValidationError and ConflictError expose stable error codes", () => {
    expect(new ValidationError("Invalid input").code).toBe("VALIDATION_ERROR");
    expect(new ConflictError("Already exists").code).toBe("CONFLICT");
  });
});
