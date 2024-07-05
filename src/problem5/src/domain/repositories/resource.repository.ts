import { BaseRepo } from '../base';
import { ResourceModel } from '../models';
export interface IResourceGetOption {
  id?: string;
}
export interface IResourceGetListOption {
  id?: string;
}

export interface IResourceGetPagingOption {
  id?: string;
}

export interface IResourceRepository
  extends BaseRepo<ResourceModel, IResourceGetOption, IResourceGetListOption, IResourceGetPagingOption> {}
