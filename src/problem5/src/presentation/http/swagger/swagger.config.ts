import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import config from '../../../infrastructure/config';

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
    servers: [
      {
        url: config.backendDomain,
        description: 'Development server',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/**/*.route.ts')],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
