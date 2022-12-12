export interface CreateUserRepository<T> {
  execute(entity: T): Promise<T>;
}
