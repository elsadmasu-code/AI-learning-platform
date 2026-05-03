import express from 'express';
import { getCourses, getCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/', protect, authorize('instructor', 'admin'), createCourse);
router.put('/:id', protect, authorize('instructor', 'admin'), updateCourse);
router.delete('/:id', protect, authorize('instructor', 'admin'), deleteCourse);

export default router;
