import { IResourceData, IResourceRepository, NotFoundException} from '../../domain';

export class GetResourceUseCase {
  constructor(private readonly resourceRepository: IResourceRepository) {}

  async execute(id: string): Promise<IResourceData> {
    const resource = await this.resourceRepository.getById(id);

    if (!resource || !resource.isActive()) {
      throw new NotFoundException('Resource Not Found');
    }

    return resource.getData();
  }
}
