/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: API to manage resources
 */

import { Router } from 'express';
import { validateBody } from '../middlewares';
import { createResourceRules, updateResourceRules } from '../validate-rule';
import { ResourceController } from '../controllers';
import { param } from 'express-validator';

const router = Router();

/**
 * @swagger
 * /api/resource:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resource created successfully
 *       400:
 *         description: Bad request
 */
router.post('/resource', validateBody(createResourceRules), ResourceController.createResource);

/**
 * @swagger
 * /api/resource/{id}:
 *   put:
 *     summary: Update a resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the resource to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resource updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Resource not found
 */
router.put(
  '/resource/:id',
  [param('id').isUUID().withMessage('Invalid UUID format'), validateBody(updateResourceRules)],
  ResourceController.updateResource,
);

/**
 * @swagger
 * /api/resource/{id}:
 *   delete:
 *      summary: Delete a resource by ID
 *      tags:
 *        - Resources
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of the resource to delete
 *          required: true
 *          type: string
 *          format: uuid  # Assuming your ID is in UUID format
 *      responses:
 *        204:
 *          description: Resource deleted successfully
 *        404:
 *          description: Resource not found
 *        500:
 *          description: Internal server error
 */
router.delete(
  '/resource/:id',
  param('id').isUUID().withMessage('Invalid UUID format'),
  ResourceController.deleteResource,
);

/**
 * @swagger
 * /api/resource/{id}:
 *   get:
 *      summary: Get a resource by ID
 *      tags:
 *        - Resources
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of the resource to delete
 *          required: true
 *          type: string
 *          format: uuid  # Assuming your ID is in UUID format
 *      responses:
 *        204:
 *          description: Resource deleted successfully
 *        404:
 *          description: Resource not found
 *        500:
 *          description: Internal server error
 */
router.get('/resource/:id', param('id').isUUID().withMessage('Invalid UUID format'), ResourceController.getResource);

export default router;
