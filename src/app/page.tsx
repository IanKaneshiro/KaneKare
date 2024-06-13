"use client";

import LiveClock from "@/components/LiveClock";
import NavBar from "@/components/NavBar";
import DialogComponent from "@/components/DialogComponent";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col gap-4 justify-center items-center w-full h-screen ">
        <LiveClock />
        <div>
          <DialogComponent />
        </div>
      </div>
    </main>
  );
}
