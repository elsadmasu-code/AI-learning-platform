import express from 'express';
import { getQuiz, createQuiz } from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', getQuiz);
router.post('/', protect, createQuiz);

export default router;
