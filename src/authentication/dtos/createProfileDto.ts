import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}