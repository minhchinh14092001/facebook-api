import { Response } from 'express';
import { PrismaService } from '../../database/services/prisma.service';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
export declare class AuthenticationController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(res: Response, data: RegisterDto): void;
    login(data: LoginDto): void;
}
