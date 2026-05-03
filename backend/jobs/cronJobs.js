import cron from 'node-cron';
import User from '../models/User.js';

// Reset daily streaks at midnight
export const resetStreaks = cron.schedule('0 0 * * *', async () => {
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    await User.updateMany(
      { lastActive: { $lt: yesterday } },
      { $set: { streak: 0 } }
    );
    
    console.log('Daily streak reset completed');
  } catch (error) {
    console.error('Error resetting streaks:', error);
  }
});

// Send weekly progress reports
export const weeklyReports = cron.schedule('0 9 * * 1', async () => {
  console.log('Sending weekly progress reports...');
  // Add email sending logic here
});
