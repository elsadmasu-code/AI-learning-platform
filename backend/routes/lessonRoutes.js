import express from 'express';
import { getLessons, createLesson } from '../controllers/lessonController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:sectionId', getLessons);
router.post('/', protect, createLesson);

export default router;
