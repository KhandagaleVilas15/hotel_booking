import mongoose from 'mongoose';

const eventSlideSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    headline: { type: String, required: true },
    description: { type: String, required: true },
    ctaLabel: { type: String, default: 'Celebrate with us' },
    ctaLink: { type: String, default: '#' },
    buttonLabel: { type: String, default: 'Book now' },
    imageUrl: { type: String, required: true },
    accentGraphic: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('EventSlide', eventSlideSchema);

