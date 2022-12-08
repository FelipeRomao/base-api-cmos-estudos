import { Module } from '@nestjs/common';
import { UserModule } from './resources/user/user.module';

@Module({ imports: [UserModule] })
export class AppModule {}
