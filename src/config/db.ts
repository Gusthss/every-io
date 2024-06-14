import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tasks');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export function inMemoryDB() {
  let mongod: any;
  return {
    async create() {
      // This will create an new instance of "MongoMemoryServer" and automatically start it
      mongod = await MongoMemoryServer.create();

      const uri = mongod.getUri();

      await mongoose.connect(uri + 'tasks');
      console.log('MongoDB connected');
    },
    async stop() {
      await mongod.stop();
      console.log('MongoDB stopped');
    }
  }
}
