import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
  title: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
}, { timestamps: true });

export default mongoose.model('Section', sectionSchema);
