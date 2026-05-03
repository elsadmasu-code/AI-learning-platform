import express from 'express';
import { enrollCourse, getEnrollments } from '../controllers/enrollmentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:courseId', protect, enrollCourse);
router.get('/', protect, getEnrollments);

export default router;
