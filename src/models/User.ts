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
  email: {
    type: String,
  },
  salary: {
    type: Number,
    default: null,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
