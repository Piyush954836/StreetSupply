import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import vendorRoutes from './routes/vendorRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';

dotenv.config();

const app = express();
// Middlewares
app.use(express.json());
// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'sessions'
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    sameSite: 'lax', // or 'none' if using HTTPS
    secure: false // set to true in production with HTTPS
  }
}));

// CORS setup with credentials enabled
app.use(cors({
  origin: 'http://localhost:8080', // your frontend URL
  credentials: true
}));


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB Error:', err));

app.use('/api/vendor', vendorRoutes);
app.use('/api/supplier', supplierRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
