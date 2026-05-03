import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  timeLimit: Number,
  passingScore: Number,
}, { timestamps: true });

export default mongoose.model('Quiz', quizSchema);
