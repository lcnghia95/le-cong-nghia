import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(3000),
  DB_URL: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
}).unknown(true);

const { error, value: validatedEnvVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: validatedEnvVars.NODE_ENV,
  port: validatedEnvVars.PORT,
  db: {
    url: validatedEnvVars.DB_URL,
    user: validatedEnvVars.DB_USERNAME,
    pass: validatedEnvVars.DB_PASSWORD,
    name: validatedEnvVars.DB_NAME,
  },
};
