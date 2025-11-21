import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    imageUrl: { type: String, required: true },
    images: [{ type: String }],
    perks: [{ type: String }],
    badge: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Deal', dealSchema);

