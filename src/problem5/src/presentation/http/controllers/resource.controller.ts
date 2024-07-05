import { NextFunction, Request, Response } from 'express';
import { ResourceMapper, ResourceRepoImpl } from '../../../infrastructure';
import { IResourceRepository } from '../../../domain';
import { ResourceService } from '../../../application';

const resourceMapper = new ResourceMapper();
const resourceRepository: IResourceRepository = new ResourceRepoImpl(resourceMapper);
const resourceService = new ResourceService(resourceRepository);

export class ResourceController {
  static async createResource(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, description } = req.body;
      const response = await resourceService.createResource(name, description);
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async updateResource(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const response = await resourceService.updateResource(id, name, description);
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
