import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <ul className="bg-red-300 h-11 flex justify-around items-center">
      <li>
        <Button variant="outline">Home</Button>
      </li>
      <li>
        <Button variant="outline">About</Button>
      </li>
      <li>
        <Button variant="outline">Schedule</Button>
      </li>
    </ul>
  );
};

export default NavBar;
