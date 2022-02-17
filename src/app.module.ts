import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { PostsModule } from './posts/posts.module';
import { UserssModule } from './users/users.module';


@Module({
  imports: [AuthenticationModule, UserssModule, PostsModule],
})
export class AppModule {}
