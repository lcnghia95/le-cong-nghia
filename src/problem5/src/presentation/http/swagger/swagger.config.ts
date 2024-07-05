import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

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
        url: 'http://localhost:3001', // Địa chỉ của server của bạn
        description: 'Development server',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/**/*.route.ts')], // Đường dẫn đến các file route của bạn
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
