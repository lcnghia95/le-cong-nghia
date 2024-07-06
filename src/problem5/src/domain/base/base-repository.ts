export interface QueryOptions<Z> {
  page: number;
  limit: number;
  filters?: Z;
}

export interface BaseRepo<T, IGetOption, IPagingOption> {
  get(option: IGetOption): Promise<T | null>;
  getListPaging(option: QueryOptions<IPagingOption>): Promise<[T[], number]>;
  getById(id: string): Promise<T | null>;
  getByIds(ids: string[]): Promise<T[]>;
  create(item: T): Promise<T>;
  createMany(items: T[]): Promise<T[]>;
  update(item: T): Promise<string>;
  updateMany(items: T[]): Promise<string[]>;
}
