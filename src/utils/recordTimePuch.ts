import { User, Shift } from "@/Types/types";

export const startShift = (user: User) => {
  const date = new Date().toUTCString();
  const shift: Shift = {
    id: Math.floor(Math.random() * 100),
    userId: user.id,
    timeIn: date,
    timeOut: null,
  };
  return shift;
};
