export interface IResourceData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  name: string;
  description: string | null;
  status: EResourceStatus;
}

export interface IUpdateResource {
  name?: string;
  description?: string;
}

export enum EResourceStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}
