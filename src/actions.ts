"use server";

import { auth } from "@clerk/nextjs/server";
import ShiftModel from "@/models/Shift";
import UserModel from "@/models/User";

export async function clockIn(userId: string) {
  const shift = new ShiftModel({
    userId,
    startTime: new Date(),
    endTime: null,
    createdAt: new Date(),
  });
  try {
    await shift.save();
    return "Success!";
  } catch (e) {
    console.error("Error clocking in:", e);
    return "Error clocking in";
  }
}

export async function clockOut(shift: any) {
  shift.endTime = new Date();
  try {
    await shift.save();
    return "Success!";
  } catch (e) {
    console.error("Error clocking out:", e);
    return "Error clocking out";
  }
}

export async function timePunch() {
  const { userId } = auth();
  if (!userId) {
    return "No user logged in";
  }
  try {
    const data = await ShiftModel.findOne({ userId, endTime: null });
    if (data) {
      // clock out
      return await clockOut(data);
    } else {
      // clock in
      return await clockIn(userId);
    }
  } catch (e) {
    console.error("Error during time punch:", e);
    return "Error during time punch";
  }
}

//admin
export async function getUsers() {
  //todo  get list of users. need user model
}

export async function createUser() {
  //todo  create new user
}

export async function editUser() {
  //todo edit current user
}

export async function deleteUser() {
  //todo removes a user
}
