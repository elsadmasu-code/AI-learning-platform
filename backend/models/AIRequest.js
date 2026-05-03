import mongoose from 'mongoose';

const aiRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  prompt: String,
  response: String,
  type: { type: String, enum: ['chat', 'summary', 'code', 'roadmap'] },
}, { timestamps: true });

export default mongoose.model('AIRequest', aiRequestSchema);
