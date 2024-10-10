import { UserType } from '../../../types/user.type.js';

export class UpdateUserDto {
  public avatarUlr?: string;
  public name?: string;
  public type?: UserType;
}
