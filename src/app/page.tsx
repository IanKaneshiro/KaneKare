"use client";

import { timePunch } from "@//actions";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div>
        <h2>Clock in</h2>
        <div>
          <button onClick={timePunch}>Clock in</button>
          <button>Clock out</button>
        </div>
      </div>
    </main>
  );
}
