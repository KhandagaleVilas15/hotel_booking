import EventSlide from '../models/EventSlide.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getEventSlides = asyncHandler(async (req, res) => {
  const slides = await EventSlide.find().sort({ order: 1, createdAt: 1 }).lean();
  res.json(slides);
});

export const createEventSlide = asyncHandler(async (req, res) => {
  const payload = req.body;
  if (!payload?.title || !payload?.headline || !payload?.imageUrl) {
    res.status(400);
    throw new Error('title, headline, and imageUrl are required');
  }

  const slide = await EventSlide.create(payload);
  res.status(201).json(slide);
});

