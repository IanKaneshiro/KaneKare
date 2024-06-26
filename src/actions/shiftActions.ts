"use server";

import { auth } from "@clerk/nextjs/server";
import ShiftModel from "@/models/Shift";
import UserModel from "@/models/User";
import { clerkClient } from "@clerk/nextjs/server";

export async function clockIn(userId: string) {
  const shift = new ShiftModel({
    userId,
    startTime: new Date(),
    endTime: null,
    createdAt: new Date(),
  });
  try {
    await shift.save();
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { isClockedIn: true },
    });

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
    await clerkClient.users.updateUserMetadata(shift.userId, {
      publicMetadata: { isClockedIn: false },
    });

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
      return {
        timePunchMessage: {
          title: "Successfuly Ended Shift",
          description: `Time in: ${data.startTime}. Time out: ${data.endTime}`,
        },
        shiftStatus: false,
      };
    } else {
      // clock in
      await clockIn(userId);
      return {
        timePunchMessage: {
          title: "Success Started Shift",
          description: `Time In: ${new Date()}`,
        },
        shiftStatus: true,
      };
    }
  } catch (e) {
    console.error("Error during time punch:", e);
    return {
      title: "Error",
      description: "An error occured while trying to record punch",
    };
  }
}

//admin
export async function getUsers() {
  //todo  get list of users. need user model
  try {
    const data = await UserModel.find();
    if (data) {
      //now when I console.log it says this is an array
      console.log("data", data);
      console.log("is Array?", Array.isArray(data));
      return data;
    }
  } catch (e) {
    console.error("Error retreiving users:", e);
    return "Error retreiving users";
  }
}
