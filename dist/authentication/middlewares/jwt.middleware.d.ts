import { NestMiddleware } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
export declare class JwtMiddleware implements NestMiddleware {
    private readonly prisma;
    constructor(prisma: PrismaService);
    use(request: any, response: any, next: any): Promise<void>;
}
