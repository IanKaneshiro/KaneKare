"use server";

import { auth } from "@clerk/nextjs/server";
import ShiftModel from "@/models/Shift";

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
    return { title: "Error", description: "No user logged in" };
  }
  try {
    const data = await ShiftModel.findOne({ userId, endTime: null });

    if (data) {
      // clock out
      await clockOut(data);
    } else {
      // clock in

      await clockIn(userId);
      return { title: "Success", description: "Successfully recorded punch" };
    }
  } catch (e) {
    console.error("Error during time punch:", e);
    return {
      title: "Error",
      description: "An error occured while trying to record punch",
    };
  }
}
