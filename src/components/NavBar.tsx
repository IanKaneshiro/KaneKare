import { Button } from "./ui/button";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
        <Link href="/payroll">
          <Button variant="outline">Payroll</Button>
        </Link>
      </li>
      <li>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </li>
    </ul>
  );
};

export default NavBar;
