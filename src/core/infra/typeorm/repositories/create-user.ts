import { UserProps } from 'src/core/domain/entities/user';
import { Repository } from 'typeorm';
import { CreateUserRepository } from '../../create-user.repository';
import UserSchema from '../schema/user';

export class CreateUserTypeOrmRepository
  implements CreateUserRepository<UserProps>
{
  constructor(private readonly repoOrm: Repository<UserSchema>) {}

  execute(entity: UserProps): Promise<UserProps> {
    return this.repoOrm.save(entity);
  }
}
