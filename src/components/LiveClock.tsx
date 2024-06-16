"use client";
import Clock from "react-live-clock";

export default function LiveClock() {
  return (
    <div>
      <Clock format={"h:mm:ssa"} style={{ fontSize: "1.5em" }} ticking={true} />
    </div>
  );
}
