// config/dbConfig.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const dbConfig = async () => {
  try {
    // Replace this with your MongoDB connection string
    const uri = process.env.MONGODB_URI;

    console.log(uri)
    
    // Connect to MongoDB
    await mongoose.connect(uri);
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default dbConfig;
