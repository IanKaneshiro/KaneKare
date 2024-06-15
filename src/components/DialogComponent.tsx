import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";

import { ToastMessage } from "@/types/types";

import { useToast } from "./ui/use-toast";

import { Button } from "./ui/button";

import { timePunch } from "@/actions/shiftActions";

import { useUser } from "@clerk/nextjs";

const DialogComponent = () => {
  const { toast } = useToast();

  const { user } = useUser();

  const [isClockedIn, setIsClockedIn] = useState<boolean | {} | null>(false);

  useEffect(() => {
    if (user?.unsafeMetadata.isClockedIn !== undefined) {
      setIsClockedIn(user.unsafeMetadata.isClockedIn);
    }
  }, [user]);

  const handleTimePunch = async () => {
    const timePunchMessage: ToastMessage = await timePunch();
    toast(timePunchMessage);
    if (isClockedIn !== undefined) {
      setIsClockedIn(!isClockedIn);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="destructive">
          {isClockedIn ? "Clock Out" : "Clock In"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
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
