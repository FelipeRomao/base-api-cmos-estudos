import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
export default class UserSchema {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  email: string;
}
