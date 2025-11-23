import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/db.js';

dotenv.config({ path: process.env.ENV_PATH || '.env' });

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://root:root@mongodb-service:27017/hotelbooking?authSource=admin';

const start = async () => {
  await connectDB(MONGO_URI);

  app.listen(PORT, () => {
    console.log(`🚀 API ready at http://localhost:${PORT}`);
  });
};

start().catch((error) => {
  console.error('Server start error', error);
  process.exit(1);
});

