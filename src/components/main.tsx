"use client";

import { useEffect, useState } from "react";

let isPunchedIn = false;
const Main = () => {
  const [timePunches, setTimePunches]: any = useState([]);

  function clockIn(userId: number) {
    const timePunch: any = {
      userId: 1,
      time: new Date().toISOString(),
      inPunch: isPunchedIn,
    };
    console.log(timePunch);
    isPunchedIn = !isPunchedIn;
    setTimePunches((prev: any) => [...prev, timePunch]);
  }

  return (
    <div>
      <button onClick={() => clockIn(1)}>
        {isPunchedIn ? "Clock out" : "Clock in"}
      </button>
      <div>
        {timePunches.map((timePunch: any) => (
          <div key={timePunch.id}>
            <p>{timePunch.userid}</p>
            <p>{timePunch.time}</p>
            <p>{timePunch.inPunch ? "In" : "Out"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
