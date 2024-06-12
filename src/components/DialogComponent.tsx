import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useToast } from "./ui/use-toast";

import { Button } from "./ui/button";

import { timePunch } from "@/actions/shiftActions";

const DialogComponent = () => {
  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger>{true ? "Clock Out" : "Clock In"}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={async () => {
              let isClockedIn = await timePunch();
              toast({
                title: "Success",
                description: isClockedIn
                  ? "Successfully clocked out"
                  : "Succesfully clocked in",
              });
            }}
          >
            <DialogTrigger>Yes</DialogTrigger>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
