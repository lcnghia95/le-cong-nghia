import { IResourceRepository, IResourceData } from '../../domain';
import { CreateResourceUseCase, UpdateResourceUseCase,DeleteResourceUseCase } from '../usecases';

export class ResourceService {
  private readonly createResourceUseCase: CreateResourceUseCase;
  private readonly updateResourceUseCase: UpdateResourceUseCase;
  private readonly deleteResourceUseCase: DeleteResourceUseCase;
  
  constructor(resourceRepository: IResourceRepository) {
    //dependency injection
    this.createResourceUseCase = new CreateResourceUseCase(resourceRepository);
    this.updateResourceUseCase = new UpdateResourceUseCase(resourceRepository);
    this.deleteResourceUseCase = new DeleteResourceUseCase(resourceRepository);
  }

  async createResource(name: string, description: string): Promise<IResourceData> {
    return this.createResourceUseCase.execute(name, description);
  }

  async updateResource(id: string, name: string, description: string): Promise<string> {
    return this.updateResourceUseCase.execute(id, name, description);
  }

  async deleteResource(id: string): Promise<string> {
    return this.deleteResourceUseCase.execute(id);
  }
}
