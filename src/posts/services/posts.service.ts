import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
import { CreatePostDto } from '../dtos/createPostDto';
import { UpdatePostDto } from '../dtos/updatePostDto';

@Injectable()
export class PostsService {
    constructor(private readonly prisma: PrismaService) {}

    create(data: CreatePostDto) {
        return this.prisma.post.create({ data })
    }

    update(id: number, data: UpdatePostDto) {
        return this.prisma.post.update({ where: { id }, data });
    }

    findOne(id: number) {
        return this.prisma.post.findUnique({ where: { id } })
    }

    findMany() {
        return this.prisma.post.findMany()
    }

    delete(id: number) {
        return this.prisma.post.delete({ where: { id } })
    }
}
