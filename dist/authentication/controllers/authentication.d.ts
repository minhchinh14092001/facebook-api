import { Response } from 'express';
import { PrismaService } from '../../database/services/prisma.service';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
export declare class AuthenticationController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(res: Response, data: RegisterDto): Promise<Response<any, Record<string, any>>>;
    login({ email, password }: LoginDto): Promise<import(".prisma/client").User>;
}
