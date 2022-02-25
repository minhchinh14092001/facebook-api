import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from '../../database/services/prisma.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(request, response, next) {
    const { authorization: token } = request.headers;

    try {
      const payload = jwt.verify(token, 'SECRET');
      const user = await this.prisma.user.findUnique({
        where: { id: payload['id'] },
      });
      if (!user) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      request.user = user;
      next();
    } catch (_error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
