import { IResourceRepository, IResourceData } from '../../domain';
import { CreateResourceUseCase, UpdateResourceUseCase } from '../usecases';

export class ResourceService {
  private readonly createResourceUseCase: CreateResourceUseCase;
  private readonly updateResourceUseCase: UpdateResourceUseCase;

  constructor(resourceRepository: IResourceRepository) {
    this.createResourceUseCase = new CreateResourceUseCase(resourceRepository);
    this.updateResourceUseCase = new UpdateResourceUseCase(resourceRepository);
  }

  async createResource(name: string, description: string): Promise<IResourceData> {
    return this.createResourceUseCase.execute(name, description);
  }

  async updateResource(id: string, name: string, description: string): Promise<string> {
    return this.updateResourceUseCase.execute(id, name, description);
  }
}
