import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  score: Number,
  passed: Boolean,
}, { timestamps: true });

export default mongoose.model('Result', resultSchema);
