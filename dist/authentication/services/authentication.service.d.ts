import { User } from '@prisma/client';
import { PrismaService } from '../../database/services/prisma.service';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
export declare class AuthenticationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(data: RegisterDto): Promise<{
        user: User;
    }>;
    login({ email, password }: LoginDto): Promise<User>;
    generateAccessToken(user: User): any;
}
