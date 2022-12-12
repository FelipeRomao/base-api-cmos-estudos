import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T> {
  public readonly id: string;

  constructor(public readonly props: Omit<T, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) this.id = uuidv4();

    if (!props) {
      // @ts-expect-error used for ORM
      this.props = {};
      return;
    }
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
