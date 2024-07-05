/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: API to manage resources
 */

import { Router } from 'express';
import { validateBody } from '../middlewares';
import { createResourceRules } from '../validate-rule';
import { ResourceController } from '../controllers';

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
router.put('/resource/:id', validateBody(createResourceRules), ResourceController.updateResource);

export default router;
