"use client";

import { Shift, User } from "@/Types/types";
import { startShift } from "@/utils/recordTimePuch";

const shifts: Shift[] = [];

const testUser: User = {
  id: 1,
  name: "Ian",
  password: "test123",
  isAdmin: true,
  isClockedIn: false,
};

const createShift = () => {
  const shift = startShift(testUser);
  shifts.push(shift);
  console.log(shifts);
};

const Main = () => {
  return (
    <div>
      <button onClick={createShift}>
        {testUser.isClockedIn ? "Clock out" : "Clock in"}
      </button>
      <div>
        {shifts.map((s) => (
          <div>
            <p>{s.id}</p>
            <p>{s.userId}</p>
            <p>{s.timeIn}</p>
            <p>{s.timeOut}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
