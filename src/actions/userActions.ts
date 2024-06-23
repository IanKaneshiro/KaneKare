"use server";

import UserModel from "@/models/User";

export async function getAllUsers() {
  try {
    const allUsers = await UserModel.find().lean();
    return JSON.parse(JSON.stringify(allUsers));
  } catch (error) {
    return {
      title: "Error",
      description: "An error occured while trying to retrieve users",
    };
  }
}
