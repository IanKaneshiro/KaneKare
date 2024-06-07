import mongoose from "mongoose";

const ShiftSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    require: true,
  },
  endTime: {
    type: String,
    default: null,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

export default mongoose.models.Shift || mongoose.model("Shift", ShiftSchema);
