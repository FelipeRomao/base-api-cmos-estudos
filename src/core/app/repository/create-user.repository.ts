export interface CreateUserUseCase<T> {
  handle(entity: T): Promise<T>;
}
