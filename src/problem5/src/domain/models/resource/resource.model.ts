import { BaseModel } from '../../base';
import { ResourceBuilder } from './resource.builder';
import { IResourceData } from './resource.interface';

export class ResourceModel extends BaseModel {
  protected name: string;
  protected description: string;

  constructor(builder: ResourceBuilder) {
    super(builder.id, builder.createdAt, builder.updatedAt, builder.deletedAt);
    this.name = builder.name;
    this.description = builder.description;
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  getData(): IResourceData {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      name: this.name,
      description: this.description,
    };
  }
}
