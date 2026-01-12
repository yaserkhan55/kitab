import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

let razorpayInstance = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  try {
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    console.log("✅ Razorpay initialized");
  } catch (error) {
    console.error("❌ Razorpay init failed:", error.message);
  }
} else {
  console.warn("⚠️  Razorpay keys missing. Payment features will be disabled.");
}

export default razorpayInstance;
