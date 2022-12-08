import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../core/app/services/user';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
