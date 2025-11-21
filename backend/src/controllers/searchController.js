import { asyncHandler } from '../utils/asyncHandler.js';

export const handleSearch = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload?.location) {
    res.status(400);
    throw new Error('Location is required');
  }

  res.json({
    message: 'Search captured successfully. Connect real supplier APIs here.',
    criteria: payload,
  });
});

