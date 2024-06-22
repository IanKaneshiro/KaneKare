import mongoose from "mongoose";

const ShiftSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    default: null,
  },
});

ShiftSchema.set("timestamps", true);

export default mongoose.models.Shift || mongoose.model("Shift", ShiftSchema);
