import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
