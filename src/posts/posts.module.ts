import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PostsController } from './controllers/posts.controller';

@Module({
  imports: [DatabaseModule],
  // providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
