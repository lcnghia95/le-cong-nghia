import express from 'express';
import bodyParser from 'body-parser';
import config from '../../infrastructure/config';
import { connectMongo } from '../../infrastructure';
import ResourceRoutes from './routes/resource.route';
import { errorHandler, morganCustom, transformResponse } from './middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.config';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(morganCustom);
app.use(transformResponse);
app.use(helmet());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectMongo()
  .then(() => {
    console.log('Connected to MongoDB');
    app.use('/api', ResourceRoutes);
    app.use(errorHandler);

    const PORT = config.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Document link: ${config.backendDomain}/docs`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
