import Deal from '../models/Deal.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getLastMinuteDeals = asyncHandler(async (req, res) => {
  const today = new Date();
  const deals = await Deal.find({ endDate: { $gte: today } })
    .sort({ endDate: 1 })
    .lean();
  res.json(deals);
});

export const createDeal = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload?.title || !payload?.location || !payload?.pricePerNight) {
    res.status(400);
    throw new Error('title, location, and pricePerNight are required');
  }

  const deal = await Deal.create(payload);
  res.status(201).json(deal);
});

export const updateDeal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deal = await Deal.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!deal) {
    res.status(404);
    throw new Error('Deal not found');
  }

  res.json(deal);
});

export const getDealById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deal = await Deal.findById(id).lean();

  if (!deal) {
    res.status(404);
    throw new Error('Deal not found');
  }

  res.json(deal);
});

