import Enrollment from '../models/Enrollment.js';

export const enrollCourse = async (req, res) => {
  try {
    const enrollment = await Enrollment.create({ user: req.user._id, course: req.params.courseId });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id }).populate('course');
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
