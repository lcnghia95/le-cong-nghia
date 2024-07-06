import { IResourceRepository, NotFoundException } from '../../domain';

export class DeleteResourceUseCase {
  constructor(private readonly resourceRepository: IResourceRepository) {}

  async execute(id: string): Promise<string> {
    const resource = await this.resourceRepository.getById(id);

    if (!resource || !resource.isActive()) {
      throw new NotFoundException('Resource Not Found');
    }

    resource.delete();

    await this.resourceRepository.update(resource);

    return id;
  }
}
