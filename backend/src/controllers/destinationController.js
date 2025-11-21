import Destination from '../models/Destination.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const allowedCategories = ['beach', 'culture', 'ski', 'family', 'wellness'];

export const getDestinations = asyncHandler(async (req, res) => {
  const category = req.query.category?.toLowerCase();

  const filter = allowedCategories.includes(category)
    ? { category }
    : {};

  const destinations = await Destination.find(filter).lean();
  res.json(destinations);
});

