import Quiz from '../models/Quiz.js';

export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('questions');
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
