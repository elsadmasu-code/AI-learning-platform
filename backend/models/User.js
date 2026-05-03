import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  avatar: { type: String, default: '' },
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' },
  bio: String,
  skills: [String],
  socialLinks: { linkedin: String, github: String, website: String },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  streak: { type: Number, default: 0 },
  lastActive: Date,
}, { timestamps: true });

export default mongoose.model('User', userSchema);
