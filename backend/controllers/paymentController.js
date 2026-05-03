import stripe from '../config/stripe.js';
import Payment from '../models/Payment.js';

export const createPayment = async (req, res) => {
  try {
    const { amount, courseId } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({ amount: amount * 100, currency: 'usd' });
    const payment = await Payment.create({ user: req.user._id, course: courseId, amount, transactionId: paymentIntent.id, status: 'pending' });
    res.json({ clientSecret: paymentIntent.client_secret, payment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
