import { Controller, Body, UseGuards, Post } from '@nestjs/common';
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
    register(@Body() data: RegisterDto, @Body() firstName: string, @Body() lastName: string) {
        this.prisma.user.create({ data: { email: data.email, password: data.password } })
        .then((user) => {

            this.prisma.profile.create({ data: {
                firstName: firstName,
                lastName: lastName,
                userId: user.id
            } })
            .then(() => {
                return { user: user }
            })

            
        })
 
    }
    
    @Post('/login')
    login(@Body() data: LoginDto) {
        // return this.prisma.post.findUnique({ data });
    }

 
}