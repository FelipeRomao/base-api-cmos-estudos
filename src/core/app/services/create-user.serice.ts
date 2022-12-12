import { User, UserProps } from 'src/core/domain/entities/user';
import { CreateUserRepository } from 'src/core/infra/create-user.repository';
import { CreateUserUseCase } from '../repository/create-user.repository';

export class UserService implements CreateUserUseCase<UserProps> {
  constructor(private readonly repository: CreateUserRepository<UserProps>) {}

  handle(input: UserProps): Promise<UserProps> {
    // TODO: Se existir o usuário alertar o sistema
    const user = User.create(input);
    return this.repository.execute(user.toJSON());
  }
}
