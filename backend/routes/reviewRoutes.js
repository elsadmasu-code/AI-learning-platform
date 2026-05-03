import express from 'express';
import { createReview, getReviews } from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createReview);
router.get('/:courseId', getReviews);

export default router;
