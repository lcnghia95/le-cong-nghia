import { MongooseError } from 'mongoose';
import {
  IResourceGetListOption,
  IResourceGetOption,
  IResourceGetPagingOption,
  IResourceRepository,
  QueryOptions,
  ResourceModel,
} from '../../../../domain';
import { ResourceMapper } from '../mapper';
import { Resource } from '../schema';

export class ResourceRepoImpl implements IResourceRepository {
  private readonly mapper: ResourceMapper;

  constructor(mapper: ResourceMapper) {
    this.mapper = mapper;
  }

  async get(option: IResourceGetOption): Promise<ResourceModel | null> {
    const user = await Resource.findOne(option);
    if (!user) return null;
    return this.mapper.toDomain(user);
  }

  async getList(option: IResourceGetListOption): Promise<ResourceModel[]> {
    const user = await Resource.find(option);
    return this.mapper.toDomains(user);
  }

  async getById(id: string): Promise<ResourceModel | null> {
    const user = await Resource.findOne({ id });
    if (!user) return null;
    return this.mapper.toDomain(user);
  }

  async getByIds(ids: string[]): Promise<ResourceModel[]> {
    const user = await Resource.where({
      id: { $in: ids },
    });
    return this.mapper.toDomains(user);
  }

  async create(model: ResourceModel): Promise<ResourceModel> {
    try {
      const userDoc = this.mapper.fromDomain(model);
      const user = await Resource.create(userDoc);
      return this.mapper.toDomain(user);
    } catch (error) {
      throw error;
    }
  }

  async createMany(items: ResourceModel[]): Promise<ResourceModel[]> {
    try {
      const userDocs = this.mapper.fromDomains(items);
      const users = await Resource.create(userDocs);
      return this.mapper.toDomains(users);
    } catch (error) {
      throw error;
    }
  }
  async update(item: ResourceModel): Promise<string> {
    try {
      const doc = this.mapper.fromDomain(item);
      await Resource.updateOne(
        {
          id: doc.id,
        },
        doc,
      );
      return doc.id;
    } catch (error) {
      throw error;
    }
  }

  async updateMany(items: ResourceModel[]): Promise<string[]> {
    try {
      const users = items.map((o) => {
        const userEntity = this.mapper.fromDomain(o);
        return new Resource(userEntity);
      });

      await Resource.bulkSave(users);

      return users.map((o) => o.id);
    } catch (error) {
      throw error;
    }
  }

  getListPaging(option: QueryOptions<IResourceGetPagingOption>): Promise<[ResourceModel[], number]> {
    throw new Error('Method not implemented.');
  }
}
