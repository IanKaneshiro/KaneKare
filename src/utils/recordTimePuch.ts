import { User, Shift } from "@/Types/types";

let index = 1;
export const startShift = (user: User) => {
  const date = new Date().toUTCString();
  const shift: Shift = {
    id: index,
    userId: user.id,
    timeIn: date,
    timeOut: null,
  };
  index++;
  return shift;
};
