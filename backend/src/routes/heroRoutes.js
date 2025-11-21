import { Router } from 'express';
import { getHeroContent } from '../controllers/heroController.js';

const router = Router();

router.get('/', getHeroContent);

export default router;

