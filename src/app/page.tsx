"use client";

import LiveClock from "@/components/LiveClock";
import NavBar from "@/components/NavBar";
import DialogComponent from "@/components/DialogComponent";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div>
        <LiveClock />
        <div>
          <DialogComponent />
        </div>
      </div>
    </main>
  );
}
