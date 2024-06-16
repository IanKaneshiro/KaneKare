import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  payRate: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
