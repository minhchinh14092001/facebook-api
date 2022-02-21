import { Controller, Body, Delete, Get, UseGuards, Param, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
// import { JwtGuard } from '../../authentication/guards/jwt.guard';
import { CreatePostDto } from '../dtos/createPostDto';
import { UpdatePostDto } from '../dtos/updatePostDto';

// @UseGuards(JwtGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  create(@Body() data: CreatePostDto) {
      return this.prisma.post.create({ data });
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdatePostDto) {
      return this.prisma.post.update({ where: { id }, data });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
      return this.prisma.post.findUnique({ where: { id } });
  }

  @Get()
  findMany() {
      return this.prisma.post.findMany();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
      return this.prisma.post.delete({ where: { id } });
  }
}