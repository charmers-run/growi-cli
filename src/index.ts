#!/usr/bin/env node

import { Command } from "commander";
import { InitCommand } from "./presentation/cli/commands/init";
import { ProfileCommand } from "./presentation/cli/commands/profile";
import CommandBase from "./presentation/cli/commands/base";
import { AppError } from "./shared/errors";

const program = new Command()
  .name("growi")
  .description("Growi CLI")
  .version("0.0.1");

const commands: CommandBase[] = [
  new InitCommand(),
  new ProfileCommand()
];

commands.forEach((command) => {
  program.addCommand(command.build())
});

try {
  await program.parseAsync(process.argv);
} catch (e) {
  if (e instanceof AppError) {
    console.error(`[${e.code}] ${e.message}`);
    process.exitCode = 1;
  } else {
    console.error(e);
    process.exitCode = 1;
  }
}
