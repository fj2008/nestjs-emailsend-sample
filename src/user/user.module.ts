import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from 'src/email/email.module';
@Module({
  imports: [ConfigModule.forRoot(), EmailModule],
  controllers: [UserController],
  providers: [UserController],
})
export class UserModule {}
