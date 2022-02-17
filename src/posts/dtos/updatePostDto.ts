import { IsNotEmpty, IsInt } from 'class-validator';

export class UpdatePostDto {
  @IsInt()
  authorId: string;

  @IsNotEmpty()
  message: string;
}