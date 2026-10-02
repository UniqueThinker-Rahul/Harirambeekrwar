import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: "" },
  city: { type: String, default: "" },
  service: { type: String, default: "General Guidance" },
  preferredTime: { type: String, default: "Any Time (ASAP)" },
  message: { type: String, default: "" },
  status: { type: String, default: "new" }
}, { timestamps: true });

export const Lead = mongoose.model("Lead", LeadSchema);
