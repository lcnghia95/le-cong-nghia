import { IResourceRepository, IResourceData, IGetResourcePagingOption, IResponsePaging } from '../../domain';
import {
  CreateResourceUseCase,
  UpdateResourceUseCase,
  DeleteResourceUseCase,
  GetResourceUseCase,
  GetResourcesUseCase,
} from '../usecases';

export class ResourceService {
  private readonly createResourceUseCase: CreateResourceUseCase;
  private readonly updateResourceUseCase: UpdateResourceUseCase;
  private readonly deleteResourceUseCase: DeleteResourceUseCase;
  private readonly getResourceUseCase: GetResourceUseCase;
  private readonly getResourcesUseCase: GetResourcesUseCase;

  constructor(resourceRepository: IResourceRepository) {
    //dependency injection
    this.createResourceUseCase = new CreateResourceUseCase(resourceRepository);
    this.updateResourceUseCase = new UpdateResourceUseCase(resourceRepository);
    this.deleteResourceUseCase = new DeleteResourceUseCase(resourceRepository);
    this.getResourceUseCase = new GetResourceUseCase(resourceRepository);
    this.getResourcesUseCase = new GetResourcesUseCase(resourceRepository);
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

  async getResource(id: string): Promise<IResourceData> {
    return this.getResourceUseCase.execute(id);
  }

  async getResources(
    page: number,
    limit: number,
    filters: Omit<IGetResourcePagingOption, 'status'>,
  ): Promise<IResponsePaging<IResourceData>> {
    return this.getResourcesUseCase.execute(page, limit, filters);
  }
}
