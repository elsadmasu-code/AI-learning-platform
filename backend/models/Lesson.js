import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  videoUrl: String,
  duration: Number,
  resources: [String],
  section: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' },
  isPreview: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Lesson', lessonSchema);
