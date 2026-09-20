#!/usr/bin/env node

import { Command } from "commander";
import { InitCommand } from "./presentation/cli/commands/init";
import CommandBase from "./presentation/cli/commands/base";

const program = new Command()
  .name("growi")
  .description("Growi CLI")
  .version("0.0.1");

const commands: CommandBase[] = [
  new InitCommand()
];

commands.forEach((command) => {
  program.addCommand(command.build())
})


await program.parseAsync(process.argv);
