import Lesson from '../models/Lesson.js';

export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({ section: req.params.sectionId });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
