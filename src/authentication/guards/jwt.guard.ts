import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../../database/services/prisma.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization: token } = request.headers;
    if (!token) return false;

    const payload = jwt.verify(token, 'SECRET');
    const user = await this.prisma.user.findUnique({
      where: { id: payload['id'] },
    });

    if (!user) return false;

    return true;
  }
}
