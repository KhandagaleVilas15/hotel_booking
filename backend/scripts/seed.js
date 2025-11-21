import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../src/config/db.js';
import Destination from '../src/models/Destination.js';
import Deal from '../src/models/Deal.js';
import Hero from '../src/models/Hero.js';
import EventSlide from '../src/models/EventSlide.js';
import { destinationSeed, dealSeed, heroSeed, eventSlidesSeed } from '../src/data/seedData.js';

dotenv.config({ path: process.env.ENV_PATH || '.env' });

const run = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
  await connectDB(uri);

  await Promise.all([
    Destination.deleteMany({}),
    Deal.deleteMany({}),
    Hero.deleteMany({}),
    EventSlide.deleteMany({}),
  ]);

  await Destination.insertMany(destinationSeed);
  await Deal.insertMany(dealSeed);
  await Hero.insertMany(heroSeed);
  await EventSlide.insertMany(eventSlidesSeed);

  console.log('✅ Seeded Mongo with sample content');
};

run()
  .catch((err) => {
    console.error('Seed error', err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await disconnectDB();
    await mongoose.disconnect();
    process.exit();
  });

