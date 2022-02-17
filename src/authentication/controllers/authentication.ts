import { Controller, Body, Delete, Get, UseGuards, Param, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../../database/services/prisma.service';
// import { JwtGuard } from '../../authentication/guards/jwt.guard';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';

// @UseGuards(JwtGuard)
@Controller('posts')
export class AuthenticationController {
    constructor(private readonly prisma: PrismaService) {}

    @Post('/register')
    register(@Body() data: RegisterDto) {
        return this.prisma.user.create({ data });
    }
    
    @Post('/login')
    login(@Body() data: LoginDto) {
        // return this.prisma.post.findUnique({ data });
    }

 
}