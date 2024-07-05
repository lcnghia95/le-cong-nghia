import { IResourceRepository, NotFoundException } from '../../domain';

export class UpdateResourceUseCase {
  constructor(private readonly resourceRepository: IResourceRepository) {}

  async execute(id: string, name: string, description: string): Promise<string> {
    const resource = await this.resourceRepository.getById(id);

    if (!resource || !resource.isActive()) {
      throw new NotFoundException('Resource Not Found');
    }

    resource.update({
      name,
      description,
    });

    await this.resourceRepository.update(resource);

    return id;
  }
}
