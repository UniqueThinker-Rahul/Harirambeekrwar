import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  interest: { type: String },
  status: { type: String, default: "new" }
}, { timestamps: true });

export const Lead = mongoose.model("Lead", LeadSchema);
