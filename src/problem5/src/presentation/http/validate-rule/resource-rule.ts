import { body, check } from 'express-validator';

export const createResourceRules = [
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
];

export const updateResourceRules = [
  check('name').optional().notEmpty().withMessage('Name not empty').isString().withMessage('Name must be a string'),
  check('description').optional().isString().withMessage('Description must be a string'),
];
