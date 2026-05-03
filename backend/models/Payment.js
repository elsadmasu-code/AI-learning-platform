import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  amount: Number,
  paymentMethod: String,
  status: { type: String, enum: ['pending', 'completed', 'failed'] },
  transactionId: String,
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
