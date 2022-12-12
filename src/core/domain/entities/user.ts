import { Entity } from 'src/shared/domain/entity';

export type UserProps = {
  username: string;
  password: string;
  email?: string;
};

export class User extends Entity<UserProps> {
  constructor(public readonly props: UserProps) {
    super(props);

    // TODO: Validar as regras para os atributos
  }

  static create(props: UserProps) {
    return new User(props);
  }

  get username(): string {
    return this.props.username;
  }

  private set username(value: string) {
    /* const regex = /dddsea/i;

    if (!regex.test(value)) {
      throw new Error('');
    } */

    this.props.username = value;
  }

  get password(): string {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get email(): string {
    return this.props.email;
  }

  private set email(value: string) {
    this.props.email = value;
  }
}
