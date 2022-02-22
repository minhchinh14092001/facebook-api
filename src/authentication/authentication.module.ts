import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationService } from './services/authentication.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService]
  })
export class AuthenticationModule {}
