import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  certificateUrl: String,
  issuedAt: Date,
}, { timestamps: true });

export default mongoose.model('Certificate', certificateSchema);
