"use client";

import { timePunch } from "@/actions";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div>
        <h2>Clock in</h2>
        <div>
          <button onClick={async () => await timePunch()}>Record Punch</button>
        </div>
      </div>
    </main>
  );
}
