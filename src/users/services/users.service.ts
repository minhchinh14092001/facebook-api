import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
import { UpdateProfile } from '../dtos/updateProfile';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    update(id: number, data: UpdateProfile) {
        return this.prisma.profile.update({ where: { id }, data });
    }

    findOne(id: number) {
        return this.prisma.profile.findUnique({where: {id}})
    }

    findPosts(id: string) {
        return this.prisma.post.findMany({where: { authorId: id}})
    }
}
