export interface QueryOptions<Z> {
  pageNumber: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filter?: Z;
}

export interface BaseRepo<T, IGetOption, IGetListOption, IPagingOption> {
  get(option: IGetOption): Promise<T | null>;
  getList(option: IGetListOption): Promise<T[]>;
  getListPaging(option: QueryOptions<IPagingOption>): Promise<[T[], number]>;
  getById(id: string): Promise<T | null>;
  getByIds(ids: string[]): Promise<T[]>;
  create(item: T): Promise<T>;
  createMany(items: T[]): Promise<T[]>;
  update(item: T): Promise<string>;
  updateMany(items: T[]): Promise<string[]>;
  delete(id: string): Promise<void>;
}
