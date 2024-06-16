import NavBar from "@/components/NavBar";
import DialogComponent from "@/components/DialogComponent";
import LiveClock from "@/components/LiveClock";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col gap-4 justify-center items-center w-full h-screen ">
        <LiveClock />
        <div>
          <DialogComponent />
        </div>
      </div>
    </main>
  );
}
