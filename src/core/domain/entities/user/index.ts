import { Entity } from 'src/shared/domain/entity';

export type UserProps = {
  userId: string;
  username: string;
  password: string;
};

export class User extends Entity<UserProps> {
  constructor(public readonly props: UserProps) {
    super(props);
  }

  static create(user: UserProps) {
    return new User(user);
  }

  get userId(): string {
    return this.props.userId;
  }

  private set userId(value: string) {
    this.props.userId = value;
  }

  get username(): string {
    return this.props.username;
  }

  private set username(value: string) {
    this.props.username = value;
  }

  get password(): string {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }
}
