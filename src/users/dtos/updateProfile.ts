import { IsNotEmpty } from 'class-validator';

export class UpdateProfile {
  @IsNotEmpty()
  firstName?: string;

  @IsNotEmpty()
  lastName?: string;
}