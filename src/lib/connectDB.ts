import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("Mongodb URI is invalid");

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI, {
      dbName: "kankare",
      bufferCommands: false,
    });
  } catch (e) {
    return e;
  }
};

export default connectDB;
