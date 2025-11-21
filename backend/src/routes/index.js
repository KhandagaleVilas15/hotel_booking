import { Router } from 'express';
import heroRoutes from './heroRoutes.js';
import destinationRoutes from './destinationRoutes.js';
import dealRoutes from './dealRoutes.js';
import searchRoutes from './searchRoutes.js';
import eventRoutes from './eventRoutes.js';

const router = Router();

router.use('/hero', heroRoutes);
router.use('/destinations', destinationRoutes);
router.use('/deals', dealRoutes);
router.use('/search', searchRoutes);
router.use('/events', eventRoutes);

export default router;

