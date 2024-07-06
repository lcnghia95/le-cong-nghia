import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  BACKEND_DOMAIN: Joi.string().uri().required(),
}).unknown(true);

const { error, value: validatedEnvVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: validatedEnvVars.NODE_ENV,
  port: validatedEnvVars.PORT,
  db: {
    url: validatedEnvVars.DATABASE_URL,
    user: validatedEnvVars.DATABASE_USERNAME,
    pass: validatedEnvVars.DATABASE_PASSWORD,
    name: validatedEnvVars.DATABASE_NAME,
  },
  backendDomain: validatedEnvVars.BACKEND_DOMAIN,
};
