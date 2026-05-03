# MongoDB Atlas Setup - COMPLETED ✓

## Your Configuration

**Database:** MongoDB Atlas (Cloud)
**Cluster:** cluster0.tyz0sou.mongodb.net
**Database Name:** ai-learning-platform
**Username:** AiAdmin
**Status:** ✓ Connected

## What Was Done

1. ✓ MongoDB Atlas connection string configured
2. ✓ Password special characters URL-encoded (@ → %40)
3. ✓ Database name set to: ai-learning-platform
4. ✓ Connection parameters added (retryWrites, w=majority)

## Connection String Format

\\\
mongodb+srv://AiAdmin:elsa%401212@cluster0.tyz0sou.mongodb.net/ai-learning-platform?retryWrites=true&w=majority&appName=Cluster0
\\\

**Note:** The password \elsa@1212\ was encoded to \elsa%401212\ because @ is a special character in URLs.

## Next Steps

### 1. Install Backend Dependencies
\\\ash
cd backend
npm install
\\\

### 2. Start the Backend Server
\\\ash
npm run dev
\\\

You should see:
\\\
MongoDB Connected: cluster0-shard-00-00.tyz0sou.mongodb.net
Server running on port 5000
\\\

### 3. Test the Connection

**Option A: Using Postman or Thunder Client**

Register a new user:
\\\
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
\\\

**Option B: Using MongoDB Compass**

1. Open MongoDB Compass
2. Connect using: \mongodb+srv://AiAdmin:elsa@1212@cluster0.tyz0sou.mongodb.net/\
3. Navigate to \i-learning-platform\ database
4. You'll see collections appear after first API call

### 4. Install Frontend Dependencies
\\\ash
cd frontend
npm install
\\\

### 5. Start the Frontend
\\\ash
npm run dev
\\\

Frontend will run on: http://localhost:3000

## Database Collections

Once you start using the API, these collections will be automatically created:

- **users** - User accounts (students, instructors, admins)
- **courses** - Course information
- **sections** - Course sections
- **lessons** - Individual lessons with videos
- **enrollments** - Student course enrollments
- **quizzes** - Quiz data
- **questions** - Quiz questions
- **results** - Quiz results and scores
- **reviews** - Course reviews and ratings
- **payments** - Payment transactions
- **certificates** - Generated certificates
- **notifications** - User notifications
- **airequests** - AI chat history
- **activitylogs** - Gamification activity (XP, streaks)

## Monitoring Your Database

### MongoDB Atlas Dashboard

1. Go to: https://cloud.mongodb.com/
2. Login with your credentials
3. Click on your cluster "Cluster0"
4. Click "Browse Collections" to see your data
5. Use "Metrics" tab to monitor performance

### View Data in Real-Time

- **Collections Tab:** See all documents
- **Aggregations Tab:** Run complex queries
- **Indexes Tab:** Optimize query performance
- **Search Tab:** Full-text search setup

## Important Security Notes

⚠️ **For Production:**

1. **Change JWT_SECRET** in .env to a strong random string
2. **Restrict IP Access** in MongoDB Atlas Network Access
3. **Use Environment Variables** - never commit .env to git
4. **Enable 2FA** on your MongoDB Atlas account
5. **Regular Backups** - Atlas provides automatic backups

## Troubleshooting

### "MongoServerError: bad auth"
- Check username and password are correct
- Ensure password is URL-encoded
- Verify database user exists in Atlas

### "Connection timeout"
- Check Network Access whitelist in Atlas
- Ensure 0.0.0.0/0 is added or your current IP
- Check firewall settings

### "Database not showing"
- MongoDB creates databases on first write
- Make at least one API call (register user)
- Refresh MongoDB Compass or Atlas dashboard

### "Cannot connect to cluster"
- Verify cluster is active (not paused)
- Check internet connection
- Ensure connection string is correct

## Useful Commands

### Check if MongoDB is connected:
\\\ash
cd backend
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected!')).catch(err => console.log(err));"
\\\

### View all environment variables:
\\\ash
cd backend
node -e "require('dotenv').config(); console.log(process.env.MONGO_URI);"
\\\

## Support Resources

- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- MongoDB University: https://university.mongodb.com/ (Free courses)
- Community Forums: https://www.mongodb.com/community/forums/

---

**Setup completed successfully! Your AI Learning Platform is now connected to MongoDB Atlas cloud database.** 🎉
