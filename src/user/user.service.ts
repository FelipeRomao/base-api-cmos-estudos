import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

type Body = { id: string; username: string; password: string };

export const users = [
  {
    id: '1',
    username: 'emesson',
    password: '123',
  },
  {
    id: '2',
    username: 'kel',
    password: '123',
  },
  {
    id: '3',
    username: 'saulo',
    password: '123',
  },
];

@Injectable()
export class UserService {
  findAll() {
    return users;
  }

  async create(params: Body): Promise<Body> {
    const user = users.find((item) => item.username === params.username);

    if (user) {
      throw new HttpException(
        'Usuário já existe na base',
        HttpStatus.BAD_REQUEST,
      );
    }

    return params;
  }

  async update(
    id: string,
    params,
  ): Promise<{ id: string; username: string; password: string }[]> {
    const user = users.find((item) => item.id === id);

    if (!user) {
      throw new HttpException(
        'Usuário não existe na base',
        HttpStatus.NOT_FOUND,
      );
    }

    return users.map((item) => (item.id === id ? { ...params, id } : item));
  }
}
