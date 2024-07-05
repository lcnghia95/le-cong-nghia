import { body } from 'express-validator';

export const createResourceRules = [
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
];

export const updateResourceRules = [
  body('name').optional().isString().withMessage('Name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
];
