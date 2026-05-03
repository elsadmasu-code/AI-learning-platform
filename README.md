# AI Learning Platform

A full-stack MERN (MongoDB, Express, React, Node.js) AI-powered learning management system with gamification, progress tracking, and payment integration.

## Features

- User authentication (Student, Instructor, Admin roles)
- Course management with sections and lessons
- Video lessons with progress tracking
- Quiz system with automated grading
- Payment integration with Stripe
- Certificate generation
- Gamification (XP, levels, streaks)
- AI-powered features
- Real-time notifications
- Review and rating system

## Tech Stack

**Backend:**
- Node.js & Express
- MongoDB & Mongoose
- JWT Authentication
- Stripe for payments
- Cloudinary for media storage
- Socket.io for real-time features
- PDFKit for certificate generation

**Frontend:**
- React 18
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls
- Vite for build tooling

## Project Structure

\\\
ai-learning-platform/
├── backend/
│   ├── config/          # Database, Cloudinary, Stripe configs
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth, error, upload middleware
│   ├── utils/           # Helper functions
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── features/    # Redux slices
│   │   ├── services/    # API service
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx     # Entry point
│   ├── index.html
│   └── vite.config.js
└── README.md
\\\

## Installation

### Backend Setup

1. Navigate to backend directory:
\\\ash
cd backend
\\\

2. Install dependencies:
\\\ash
npm install
\\\

3. Configure environment variables in \.env\:
\\\
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-learning-platform
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
\\\

4. Start the server:
\\\ash
npm run dev
\\\

### Frontend Setup

1. Navigate to frontend directory:
\\\ash
cd frontend
\\\

2. Install dependencies:
\\\ash
npm install
\\\

3. Start the development server:
\\\ash
npm run dev
\\\

## API Endpoints

### Authentication
- POST \/api/auth/register\ - Register new user
- POST \/api/auth/login\ - Login user

### Users
- GET \/api/users/profile\ - Get user profile
- PUT \/api/users/profile\ - Update user profile

### Courses
- GET \/api/courses\ - Get all courses
- GET \/api/courses/:id\ - Get course by ID
- POST \/api/courses\ - Create course (Instructor/Admin)
- PUT \/api/courses/:id\ - Update course (Instructor/Admin)
- DELETE \/api/courses/:id\ - Delete course (Instructor/Admin)

### Enrollments
- POST \/api/enrollments/:courseId\ - Enroll in course
- GET \/api/enrollments\ - Get user enrollments

### Payments
- POST \/api/payments\ - Create payment

### Reviews
- POST \/api/reviews\ - Create review
- GET \/api/reviews/:courseId\ - Get course reviews

### Certificates
- POST \/api/certificates\ - Issue certificate

### AI
- POST \/api/ai/chat\ - AI chat endpoint

## Database Models

- User
- Course
- Section
- Lesson
- Enrollment
- Quiz
- Question
- Result
- Review
- Payment
- Certificate
- Notification
- AIRequest
- ActivityLog

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License
