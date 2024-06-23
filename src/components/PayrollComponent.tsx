"use client";

import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { allShifts } from "@/actions/shiftActions";
import { Calendar } from "./ui/calendar";
import DisplayPayroll from "./DisplayPayroll";
import { getAllUsers } from "@/actions/userActions";

const PayrollComponent = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [shifts, setShifts] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  async function getAllShift() {
    try {
      if (startDate && endDate) {
        const newShifts = await allShifts(startDate, endDate);
        setShifts(newShifts);
      }
    } catch (error) {
      console.error("failed to retrieve shifts");
      return error;
    }
  }

  useEffect(() => {
    async function getUsers() {
      const allUsers = await getAllUsers();
      setUsers(allUsers);
    }
    getUsers();
  }, []);

  return (
    <main>
      <div className="flex w-dvw justify-center items-center gap-2">
        <div>
          <p>Start Date</p>
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            className="rounded-md border"
          />
        </div>
        <div>
          <p>End Date</p>
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            className="rounded-md border"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <Button variant="destructive" onClick={getAllShift}>
          Get Shifts
        </Button>
        {shifts && <DisplayPayroll shifts={shifts} users={users} />}
      </div>
    </main>
  );
};

export default PayrollComponent;
