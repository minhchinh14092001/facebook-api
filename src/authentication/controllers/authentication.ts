import {
  Controller,
  Body,
  UseGuards,
  Post,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

import { PrismaService } from '../../database/services/prisma.service';
import { JwtGuard } from '../guards/jwt.guard';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';

@UseGuards(JwtGuard)
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('/register')
  async register(@Res() res: Response, @Body() data: RegisterDto) {
    const user = await this.prisma.user.create({
      data: { email: data.email, password: data.password },
    });

    const profile = await this.prisma.profile.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        userId: user.id,
      },
    });

    return res.status(HttpStatus.OK).json({ user: user });
  }

  @Post('/login')
  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || user.password !== password) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}
