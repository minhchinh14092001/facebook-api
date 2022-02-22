import {
  Controller,
  Body,
  Delete,
  Get,
  UseGuards,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { JwtGuard } from '../../authentication/guards/jwt.guard';
import { CreatePostDto } from '../dtos/createPostDto';
import { UpdatePostDto } from '../dtos/updatePostDto';
import { PostsService } from '../services/posts.service';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() data: CreatePostDto) {
    return this.postsService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdatePostDto) {
    return this.postsService.update(id, data);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Get()
  findMany() {
    return this.postsService.findMany();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postsService.delete(id);
  }
}
