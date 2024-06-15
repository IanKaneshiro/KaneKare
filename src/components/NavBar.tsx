import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="bg-red-300 h-11 flex justify-around items-center">
      <li>
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <Button variant="outline">About</Button>
        </Link>
      </li>
      <li>
        <Link href="/schedule">
          <Button variant="outline">Schedule</Button>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
