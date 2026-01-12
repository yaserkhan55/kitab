// backend/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
<<<<<<< HEAD
    const URI = process.env.MONGO_URI;
    if (!URI) {
      console.error("❌ Error: MONGO_URI environment variable is not defined.");
      process.exit(1);
    }

    const conn = await mongoose.connect(URI);
<<<<<<< HEAD
=======
    const conn = await mongoose.connect(process.env.MONGO_URI);
>>>>>>> fde82cc (Fix backend deployment: env vars, DB connection, port binding)
=======
>>>>>>> fix/linux-compatibility
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
