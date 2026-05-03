import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswer: Number,
}, { timestamps: true });

export default mongoose.model('Question', questionSchema);
