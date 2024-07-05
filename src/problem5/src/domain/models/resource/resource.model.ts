import { BaseModel } from '../../base';
import { ResourceBuilder } from './resource.builder';
import { EResourceStatus, IResourceData, IUpdateResource } from './resource.interface';

export class ResourceModel extends BaseModel {
  protected name: string;
  protected description: string | null;
  protected status: EResourceStatus;

  constructor(builder: ResourceBuilder) {
    super(builder.id, builder.createdAt, builder.updatedAt, builder.deletedAt);
    this.name = builder.name;
    this.description = builder.description;
    this.status = builder.status;
  }

  getStatus(): EResourceStatus {
    return this.status;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string | null {
    return this.description;
  }

  getData(): IResourceData {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      name: this.name,
      description: this.description,
      status: this.status,
    };
  }

  update(updatePayload: IUpdateResource): void {
    this.updatedAt = new Date();
    if (updatePayload.name !== undefined) {
      this.name = updatePayload.name;
    }
    if (updatePayload.description !== undefined) {
      this.description = updatePayload.description;
    }
  }

  delete(): void {
    super.delete()
    this.status = EResourceStatus.INACTIVE
  }

  isActive(): boolean {
    return this.status == EResourceStatus.ACTIVE;
  }
}
