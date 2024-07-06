import {
  IGetResourcePagingOption,
  IResourceData,
  IResourceRepository,
  IResponsePaging,
  NotFoundException,
} from '../../domain';

export class GetResourcesUseCase {
  constructor(private readonly resourceRepository: IResourceRepository) {}

  async execute(
    page: number,
    limit: number,
    filters: IGetResourcePagingOption,
  ): Promise<IResponsePaging<IResourceData>> {
    const [resources, total] = await this.resourceRepository.getListPaging({
      page,
      limit,
      filters: {
        ...filters,
        status: 1,
      },
    });

    return {
      result: resources.map((o) => o.getData()),
      total,
    };
  }
}
