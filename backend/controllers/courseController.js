import Course from '../models/Course.js';

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true }).populate('instructor', 'name email');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor sections');
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, instructor: req.user._id });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
