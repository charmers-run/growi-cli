import { ProfileRemoveCommand } from "./remove";
import { ProfileAddCommand } from "./add";
import { ProfileEditCommand } from "./edit";
import CommandBase from "../base";


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
