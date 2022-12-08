import { HttpException, HttpStatus } from '@nestjs/common';
import { users, UserService } from '.';

let userService: UserService;

describe('Tests UserService', () => {
  beforeEach(() => {
    userService = new UserService();
  });

  it('should to verify if user already exists in database', async () => {
    const createUserSpy = jest.spyOn(UserService.prototype, 'create');

    expect(() =>
      userService.create({
        id: '6',
        username: 'emesson',
        password: '123',
      }),
    ).rejects.toThrow(
      new HttpException('Usuário já existe na base', HttpStatus.BAD_REQUEST),
    );

    expect(createUserSpy).toHaveBeenCalledTimes(1);
  });

  it('should verify if user payload is equal', async () => {
    const paylaod = {
      id: '8',
      username: 'gustavo',
      password: '123',
    };

    const response = await userService.create(paylaod);
    expect(response).toStrictEqual(paylaod);
  });

  it('findAll', () => {
    expect(userService.findAll()).toStrictEqual(users);
  });

  it('update', async () => {
    const updateUserSpy = jest.spyOn(UserService.prototype, 'update');

    const payload = {
      username: 'dudu',
      password: '123',
    };

    expect(() => userService.update('8', payload)).rejects.toThrow(
      new HttpException('Usuário não existe na base', HttpStatus.NOT_FOUND),
    );

    expect(updateUserSpy).toHaveBeenCalledTimes(1);

    const response = await userService.update('3', payload);
    const userUpdated = response.find((item) => item.id === '3');

    expect(userUpdated).toStrictEqual({ ...payload, id: '3' });
  });
});
