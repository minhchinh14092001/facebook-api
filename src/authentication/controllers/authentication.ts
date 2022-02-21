import { Controller, Body, UseGuards, Post, Res, HttpStatus  } from '@nestjs/common';
import { Response } from 'express';

import { PrismaService } from '../../database/services/prisma.service';
// import { JwtGuard } from '../../authentication/guards/jwt.guard';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
// import { CreateProfileDto } from '../dtos/createprofileDto';

// @UseGuards(JwtGuard)
@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly prisma: PrismaService) {}

    @Post('/register')
    register(@Res() res: Response, @Body() data: RegisterDto) {
        this.prisma.user.create({ data: { email: data.email, password: data.password } })
        .then((user) => {

            this.prisma.profile.create({ data: {
                firstName: data.firstName,
                lastName: data.lastName,
                userId: user.id
            } })
            .then(() => {
                return res.status(HttpStatus.OK).json({ user: user })
            })
            
        })
    }
    
    @Post('/login')
    login(@Body() data: LoginDto) {
        // return this.prisma.post.findUnique({ data });
    }

 
}