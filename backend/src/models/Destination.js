import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['beach', 'culture', 'ski', 'family', 'wellness'],
    },
    averagePrice: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    imageUrl: { type: String, required: true },
    description: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model('Destination', destinationSchema);

