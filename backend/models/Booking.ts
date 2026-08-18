import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: String, required: true },
  tob: { type: String, required: true },
  pob: { type: String, required: true },
  problemDesc: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "pending", enum: ["pending", "confirmed", "completed", "cancelled"] },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
  },
  isPaid: { type: Boolean, default: false },
}, { timestamps: true });

export const Booking = mongoose.model("Booking", BookingSchema);
