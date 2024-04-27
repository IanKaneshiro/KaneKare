"use client";
import { useState } from "react";

import { Shift, User } from "@/Types/types";
import { startShift } from "@/utils/recordTimePuch";

const testUser: User = {
  id: 1,
  name: "Ian",
  password: "test123",
  isAdmin: true,
  isClockedIn: false,
};

const Main = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [currentShift, setCurrentShift] = useState<null | number>(null);

  const createShift = () => {
    const shift = startShift(testUser);
    if (!currentShift) {
      setCurrentShift(shift.id);
      setShifts((prev) => [...prev, shift]);
    } else {
      const idx = shifts.findIndex((s) => s.id === currentShift);
      shifts[idx].timeOut = new Date().toUTCString();
      setCurrentShift(null);
    }
  };

  return (
    <div>
      <button onClick={createShift}>
        {testUser.isClockedIn ? "Clock out" : "Clock in"}
      </button>
      <div>
        {shifts.map((s) => (
          <div key={s.id}>
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
