import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserSchema from './core/infra/typeorm/schema/user';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // Config Type Orm
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/db.sql',
      entities: [UserSchema],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
