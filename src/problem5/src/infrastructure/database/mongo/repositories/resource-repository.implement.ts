import { MongooseError } from 'mongoose';
import {
  IGetResourceOption,
  IGetResourcePagingOption,
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

  async get(option: IGetResourceOption): Promise<ResourceModel | null> {
    const user = await Resource.findOne(option);
    if (!user) return null;
    return this.mapper.toDomain(user);
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

  async getListPaging(option: QueryOptions<IGetResourcePagingOption>): Promise<[ResourceModel[], number]> {
    const { page, limit, filters } = option;

    const skip = (page - 1) * limit;

    const query = {
      ...(filters.name && { name: { $regex: filters.name, $options: 'i' } }),
      ...(filters.description && { description: { $regex: filters.description, $options: 'i' } }),
      ...(filters.status && { status: filters.status }),
    };

    const [resources, total] = await Promise.all([
      Resource.find(query).skip(skip).limit(limit),
      Resource.countDocuments(query),
    ]);

    return [this.mapper.toDomains(resources), total];
  }
}
