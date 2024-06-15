import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ClockInButton = () => {
  const { user } = useUser();
  const [isClockedIn, setIsClockedIn] = useState<any>(
    user?.unsafeMetadata.isClockedIn || false
  );
  useEffect(() => {
    setIsClockedIn(user?.unsafeMetadata.isClockedIn);
  }, [isClockedIn]);

  return (
    <Button variant="destructive">
      {isClockedIn ? "Clock Out" : "Clock In"}
    </Button>
  );
};

export default ClockInButton;
