  import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
  import * as jwt from 'jsonwebtoken';
  import { User } from '@prisma/client';
  import { PrismaService } from '../../database/services/prisma.service';
  import { LoginDto } from '../dtos/loginDto';
  import { RegisterDto } from '../dtos/RegisterDto';
  
  @Injectable()
  export class AuthenticationService {
    constructor(private readonly prisma: PrismaService) {}
  
    async register(data: RegisterDto) {
      const user = await this.prisma.user.create({
        data: { email: data.email, password: data.password },
      });
  
      await this.prisma.profile.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          userId: user.id,
        },
      });
  
      return { user: user }
    }
  
    async login({ email, password }: LoginDto) {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user || user.password !== password) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
  
      return user;
    }

    generateAccessToken(user: User) {
        const payload = { id: user.id };
    
        return jwt.sign(payload, 'SECRET');
      }
  }
  