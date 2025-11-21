import { Router } from 'express';
import { createEventSlide, getEventSlides } from '../controllers/eventController.js';

const router = Router();

router.get('/', getEventSlides);
router.post('/', createEventSlide);

export default router;

