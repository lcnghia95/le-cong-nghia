import express from 'express';
import bodyParser from 'body-parser';

import config from '../../infrastructure/config';
import { connect } from '../database';

const app = express();
app.use(bodyParser.json());

connect().then(() => {
  console.log('Connected to MongoDB');

  const PORT = config.port;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}).catch((error) => {
  console.error('Database connection error:', error);
});