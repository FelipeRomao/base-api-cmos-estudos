import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { UserService } from 'src/core/app/services/create-user.serice';
import { CreateUserTypeOrmRepository } from 'src/core/infra/typeorm/repositories/create-user';
import { UserController } from './user.controller';
import UserSchema from 'src/core/infra/typeorm/schema/user';
import { CreateUserRepository } from 'src/core/infra/create-user.repository';
import { User } from 'src/core/domain/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UserController],
  providers: [
    // Fabricando o repositório do type orm
    {
      provide: CreateUserTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new CreateUserTypeOrmRepository(
          dataSource.getRepository(UserSchema),
        );
      },
      inject: [getDataSourceToken()],
    },

    // Frabicando o serviço de usuário
    {
      provide: UserService,
      useFactory: (repo: CreateUserRepository<User>) => {
        return new UserService(repo);
      },
      inject: [CreateUserTypeOrmRepository],
    },
  ],
})
export class UserModule {}
