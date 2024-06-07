"use client";

import { addShift } from "@/actions/actions";
import { Shift } from "@/types/types";

export default function Home() {
  const newShift: Shift = {
    userId: "nfsdjffjdksf",
    startTime: Date.now().toLocaleString(),
    createdAt: Date.now().toLocaleString(),
    endTime: null,
  };

  return (
    <main>
      <h1>Home</h1>
      <div>
        <h2>Clock in</h2>
        <div>
          <button onClick={() => addShift(newShift)}>Clock in</button>
          <button>Clock out</button>
        </div>
      </div>
    </main>
  );
}
