import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: String,
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  price: { type: Number, default: 0 },
  thumbnail: String,
  tags: [String],
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
