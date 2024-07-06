import { BaseRepo } from '../base';
import { ResourceModel } from '../models';
export interface IGetResourceOption {
  id?: string;
}

export interface IGetResourcePagingOption {
  name?: string;
  description?: string;
  status?: number;
}

export interface IResourceRepository extends BaseRepo<ResourceModel, IGetResourceOption, IGetResourcePagingOption> {}
