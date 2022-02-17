import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthenticationController } from './controllers/authentication';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthenticationController]
  })
export class AuthenticationModule {}
