"use server";

import ShiftModel from "@/models/Shift";
import { Shift } from "@/types/types";

export async function getShift(userId: string) {
  const data = await ShiftModel.findOne({ userId: userId });
  return JSON.stringify(data);
}

export async function addShift(shift: Shift) {
  const newShift = new ShiftModel(shift);
  try {
    await newShift.save();
    return "Success!";
  } catch (e) {
    return e;
  }
}
