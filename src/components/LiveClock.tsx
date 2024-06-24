"use client";
import Clock from "react-live-clock";
import { useState, useEffect } from "react";

export default function LiveClock() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      {isClient ? (
        <Clock
          format={"h:mm:ssa"}
          style={{ fontSize: "1.5em" }}
          ticking={true}
        />
      ) : null}
    </div>
  );
}
