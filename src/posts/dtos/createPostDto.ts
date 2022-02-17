import { IsNotEmpty, IsInt } from 'class-validator';

export class CreatePostDto {
  @IsInt()
  authorId: string;

  @IsNotEmpty()
  message: string;
}