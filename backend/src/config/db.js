import mongoose from 'mongoose';

const DEFAULT_DB_NAME = process.env.MONGO_DB_NAME || 'hotelx';

export const connectDB = async (uri) => {
  if (!uri) {
    throw new Error('Missing Mongo connection string (MONGO_URI)');
  }

  try {
    const connection = await mongoose.connect(uri, {
      dbName: DEFAULT_DB_NAME,
    });
    console.log(`✅ MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error', error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
};

