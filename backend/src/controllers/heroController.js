import Hero from '../models/Hero.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const fallbackHero = {
  headline: 'Your next trip starts here',
  subheading: 'Discover stays that match your vibe.',
  defaultLocation: 'Bengaluru, India',
  defaultDates: {
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  defaultTravellers: {
    rooms: 1,
    adults: 2,
    children: 0,
  },
};

export const getHeroContent = asyncHandler(async (req, res) => {
  const heroDoc = await Hero.findOne().sort({ updatedAt: -1 }).lean();
  res.json(heroDoc ?? fallbackHero);
});

