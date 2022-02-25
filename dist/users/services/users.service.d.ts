import { PrismaService } from '../../database/services/prisma.service';
import { UpdateProfile } from '../dtos/updateProfile';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    update(id: number, data: UpdateProfile): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findPosts(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
}
