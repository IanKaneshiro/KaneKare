import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ToastMessage } from "@/types/types";

import { useToast } from "./ui/use-toast";

import { Button } from "./ui/button";

import { timePunch } from "@/actions/shiftActions";

import ClockInButton from "./ClockInButton";

const DialogComponent = () => {
  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger>
        <ClockInButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={async () => {
              let timePunchMessage: ToastMessage = await timePunch();
              toast(timePunchMessage);
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