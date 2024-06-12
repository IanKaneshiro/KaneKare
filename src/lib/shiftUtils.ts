import { clerkClient } from "@clerk/nextjs/server";

export const setShiftStatus = async (
  userId: string | null,
  status: boolean
) => {
  if (!userId) {
    return { message: "No Logged In User" };
  }

  try {
    const res = await clerkClient.users.updateUserMetadata(userId, {
      unsafeMetadata: {
        isClockedIn: status,
      },
    });
  } catch (err) {
    return { error: "There was an error updating the user metadata." };
  }
};

export const getShiftStatus = async (userId: string | null) => {
  if (!userId) {
    return { message: "No Logged In User" };
  }

  try {
    const {
      privateMetadata: { isClockedIn },
    } = await clerkClient.users.getUser(userId);

    return isClockedIn;
  } catch (e) {
    return { error: e };
  }
};
