import Review from '../models/Review.js';

export const createReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body, user: req.user._id });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ course: req.params.courseId }).populate('user', 'name avatar');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
