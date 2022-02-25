import { Controller, Body, Get, UseGuards, Param, Patch } from '@nestjs/common';
import { JwtGuard } from '../../authentication/guards/jwt.guard';
import { UpdateProfile } from '../dtos/updateProfile';
import { UsersService } from '../services/users.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersservice: UsersService) {}

  @Get(':id/profile')
  findOne(@Param('id') id: string) {
    return this.usersservice.findOne(JSON.parse(id));
  }

  @Patch(':id/profile')
  update(@Param('id') id: string, @Body() data: UpdateProfile) {
    return this.usersservice.update(JSON.parse(id), data);
  }

  @Get(':id/posts')
  findPosts(@Param('id') id: string) {
    return this.usersservice.findPosts(id);
  }
}
