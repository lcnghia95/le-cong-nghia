import { BaseMapper, ResourceBuilder, ResourceModel } from '../../../../domain';
import { IResource } from '../schema';

export class ResourceMapper implements BaseMapper<ResourceModel, IResource> {
  fromDomain(domain: ResourceModel): IResource {
    return {
      id: domain.getId(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
      deletedAt: domain.getDeletedAt(),
      name: domain.getName(),
      description: domain.getDescription(),
      status: domain.getStatus(),
    } as IResource;
  }

  toDomain(external: IResource): ResourceModel {
    const builder = new ResourceBuilder();
    return builder
      .setId(external.id)
      .setCreatedAt(external.createdAt)
      .setUpdatedAt(external.updatedAt)
      .setDeletedAt(external.deletedAt)
      .setName(external.name)
      .setDescription(external.description)
      .setStatus(external.status)
      .build();
  }

  fromDomains(domains: ResourceModel[]): IResource[] {
    return domains.map((domain) => this.fromDomain(domain));
  }

  toDomains(externals: IResource[]): ResourceModel[] {
    return externals.map((external) => this.toDomain(external));
  }
}
