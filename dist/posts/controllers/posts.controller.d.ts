import { PrismaService } from '../../database/services/prisma.service';
import { CreatePostDto } from '../dtos/createPostDto';
import { UpdatePostDto } from '../dtos/updatePostDto';
export declare class PostsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    update(id: number, data: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    findMany(): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
}
