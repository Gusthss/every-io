import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import logger from "../utils/logger";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tasks');
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export function inMemoryDB() {
  let mongod: MongoMemoryServer;
  return {
    async create() {
      // This will create an new instance of "MongoMemoryServer" and automatically start it
      mongod = await MongoMemoryServer.create();

      const uri = mongod.getUri();

      await mongoose.connect(uri + 'tasks');
      logger.info('MongoDB connected');
    },
    async stop() {
      await mongod.stop();
      logger.info('MongoDB stopped');
    }
  }
}
