import mongoose from 'mongoose';
import config from '../../../config';

export async function connectMongo() {
  try {
    await mongoose.connect(config.db.url, {
      user: config.db.user,
      pass: config.db.pass,
      dbName: config.db.name,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}
