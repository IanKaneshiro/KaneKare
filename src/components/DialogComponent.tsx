"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { timePunch } from "@/actions/shiftActions";
import { useUser } from "@clerk/nextjs";

const DialogComponent = () => {
  const { toast } = useToast();

  const { user } = useUser();

  const [isClockedIn, setIsClockedIn] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const savedState = sessionStorage.getItem("isClockedIn");
    if (savedState !== null) {
      console.log(isClockedIn);
      setIsClockedIn(savedState === "true");
    } else if (user?.publicMetadata.isClockedIn !== undefined) {
      setIsClockedIn(user.publicMetadata.isClockedIn);
    }
  }, [user]);

  const handleTimePunch = async () => {
    const { timePunchMessage, shiftStatus } = await timePunch();
    toast(timePunchMessage);
    setIsClockedIn(shiftStatus);
    sessionStorage.setItem("isClockedIn", `${shiftStatus}`);
  };

  if (user === undefined) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="destructive">
          {isClockedIn ? "End" : "Start"} Shift
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to {isClockedIn ? "end" : "start"} your shift?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger>
            <Button variant="destructive" onClick={handleTimePunch}>
              Yes
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
