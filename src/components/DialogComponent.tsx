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
      <DialogTrigger>Record Punch</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={async () => {
              await timePunch();
              toast({
                title: "Success",
                description: `You recorded a punch at ${Date.now()}`,
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
