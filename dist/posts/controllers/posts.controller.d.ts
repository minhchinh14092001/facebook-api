import { CreatePostDto } from '../dtos/createPostDto';
import { UpdatePostDto } from '../dtos/updatePostDto';
import { PostsService } from '../services/posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(data: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    update(id: string, data: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    findMany(): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
}
