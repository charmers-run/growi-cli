import type { Command } from "commander";
import { Config } from "../../../infrastructure/config";
import { ProfileRemoveCommand } from "./profile/remove";
import { ProfileAddCommand } from "./profile/add";
import { ProfileEditCommand } from "./profile/edit";

import CommandBase from "./base";



class ProfileCommand extends CommandBase {
  protected readonly name = "profile";
  protected readonly description = "manage your growi accounts and provider";
  protected readonly subCommands = [
    new ProfileAddCommand(),
    new ProfileEditCommand(),
    new ProfileRemoveCommand(),
  ];
}



export { ProfileCommand };
