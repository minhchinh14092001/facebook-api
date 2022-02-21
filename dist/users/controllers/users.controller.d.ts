import { PrismaService } from '../../database/services/prisma.service';
import { UpdateProfile } from '../dtos/updateProfile';
export declare class UsersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findMany(id: number, data: UpdateProfile): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findManyPost(id: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
}
