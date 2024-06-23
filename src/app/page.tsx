import DialogComponent from "@/components/DialogComponent";
import LiveClock from "@/components/LiveClock";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <main>
      <div className="flex flex-col gap-4 justify-center items-center w-full h-screen ">
        <h1>Welcome {user?.firstName}</h1>
        <LiveClock />
        <div>
          <DialogComponent />
        </div>
      </div>
    </main>
  );
}
