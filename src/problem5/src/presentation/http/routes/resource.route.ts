/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: API to manage resources
 */

import { Router } from 'express';
import { validateBody } from '../middlewares';
import { createResourceRules, getResourcesRules, updateResourceRules } from '../validate-rule';
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
 *       201:
 *         description: OK
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
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
 *       201:
 *         description: OK
 *       404:
 *         description: Resource not found
 *       500:
 *         description: Internal server error
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
 *        201:
 *          description: OK
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
 *        201:
 *         description: OK
 *        404:
 *          description: Resource not found
 *        500:
 *          description: Internal server error
 */
router.get('/resource/:id', param('id').isUUID().withMessage('Invalid UUID format'), ResourceController.getResource);

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Get paginated resources with optional filters
 *     tags: [Resources]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: The page number (default is 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: The number of items per page (default is 10)
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by resource name
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by resource description
 *     responses:
 *       201:
 *         description: OK
 *       500:
 *         description: Internal server error
 */
router.get('/resources', getResourcesRules, ResourceController.getResources);

export default router;
