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

import { JwtGuard } from '../guards/jwt.guard';
import { LoginDto } from '../dtos/loginDto';
import { RegisterDto } from '../dtos/RegisterDto';
import { AuthenticationService } from '../services/authentication.service';

@UseGuards(JwtGuard)
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/register')
  async register(@Res() res: Response, @Body() data: RegisterDto) {
    const user = await this.authenticationService.register(data);

    return res.status(HttpStatus.OK).json({ user: user });
  }

  @Post('/login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authenticationService.login(dto);
    return {
      user,
      token: this.authenticationService.generateAccessToken(user),
    };
  }
}
