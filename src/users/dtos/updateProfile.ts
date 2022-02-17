import { IsNotEmpty } from 'class-validator';

export class UpdateProfile {
  @IsNotEmpty()
  firstName?: number;

  @IsNotEmpty()
  lastName?: number;
}