import { PrismaService } from '../../database/services/prisma.service';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
export declare class AuthenticationController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(data: RegisterDto, firstName: string, lastName: string): void;
    login(data: LoginDto): void;
}
