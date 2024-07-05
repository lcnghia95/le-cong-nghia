import { ResourceModel } from './resource.model';
import { v4 as uuidv4 } from 'uuid';
import { BaseBuilder } from '../../base';

export class ResourceBuilder implements BaseBuilder<ResourceBuilder> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  name: string;
  description: string;

  build(): ResourceModel {
    if (!this.id) {
      this.id = uuidv4();
      this.createdAt = new Date();
    }
    const model = new ResourceModel(this);
    return model;
  }

  setId(id: string): ResourceBuilder {
    this.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date): ResourceBuilder {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date): ResourceBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  setDeletedAt(deletedAt: Date | null): ResourceBuilder {
    this.deletedAt = deletedAt;
    return this;
  }

  setName(name: string): ResourceBuilder {
    this.name = name;
    return this;
  }

  setDescription(description: string): ResourceBuilder {
    this.description = description;
    return this;
  }
}
