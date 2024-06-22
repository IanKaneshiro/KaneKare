import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  salary: {
    type: Number,
    default: null,
  },
});

UserSchema.set("timestamps", true);

export default mongoose.models.User || mongoose.model("User", UserSchema);
