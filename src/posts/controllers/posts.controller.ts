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
  update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return this.postsService.update(JSON.parse(id), data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(JSON.parse(id));
  }

  @Get()
  findMany() {
    return this.postsService.findMany();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.delete(JSON.parse(id));
  }
}
