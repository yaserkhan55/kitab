import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // must come before using process.env
console.log("DEBUG MONGO_URI =", process.env.MONGO_URI);


console.log("MONGO_URI from .env:", process.env.MONGO_URI); // debug line

const app = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*", // Allow all if not set, but recommended to set specific domain in production
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
  });

app.use("/book", bookRoute);
app.use("/user", userRoute);
