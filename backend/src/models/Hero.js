import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true },
    subheading: { type: String },
    defaultLocation: { type: String, required: true },
    defaultDates: {
      checkIn: { type: Date, required: true },
      checkOut: { type: Date, required: true },
    },
    defaultTravellers: {
      rooms: { type: Number, default: 1 },
      adults: { type: Number, default: 2 },
      children: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Hero', heroSchema);

