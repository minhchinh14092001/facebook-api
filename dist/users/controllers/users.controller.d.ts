import { UpdateProfile } from '../dtos/updateProfile';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly usersservice;
    constructor(usersservice: UsersService);
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    update(id: string, data: UpdateProfile): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findPosts(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
}
