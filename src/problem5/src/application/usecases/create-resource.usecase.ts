import { IResourceData, IResourceRepository, ResourceBuilder } from '../../domain';

export class CreateResourceUseCase {
  constructor(private readonly resourceRepository: IResourceRepository) {}

  async execute(name: string, description: string): Promise<IResourceData> {
    const builder = new ResourceBuilder();
    const resourceRaw = builder.setName(name).setDescription(description).build();

    const resource = await this.resourceRepository.create(resourceRaw);

    return resource.getData();
  }
}
