import { body, check, query } from 'express-validator';

export const createResourceRules = [
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
];

export const updateResourceRules = [
  check('name').optional().notEmpty().withMessage('Name not empty').isString().withMessage('Name must be a string'),
  check('description').optional().isString().withMessage('Description must be a string'),
];

export const getResourcesRules = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer'),
  query('name').optional().isString().withMessage('Name must be a string'),
  query('description').optional().isString().withMessage('Description must be a string'),
];
