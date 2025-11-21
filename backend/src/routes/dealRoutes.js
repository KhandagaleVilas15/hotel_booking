import { Router } from 'express';
import {
  createDeal,
  getDealById,
  getLastMinuteDeals,
  updateDeal,
} from '../controllers/dealController.js';

const router = Router();

router.get('/last-minute', getLastMinuteDeals);
router.get('/:id', getDealById);
router.post('/', createDeal);
router.put('/:id', updateDeal);

export default router;

