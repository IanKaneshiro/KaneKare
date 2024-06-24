import mongoose from "mongoose";
import { auth } from "@clerk/nextjs/server";
import { getUsers } from "@/actions/shiftActions";

const AdminPage = () => {
  const { userId } = auth();

  return (
    <div>
      <div>
        <h4>Users</h4>
        <p>Ability to cancel people</p>
        <p>Ability to set payrate</p>
        <p>Ability to edit users</p>
        <h4>Payroll </h4>
        <p>choosing period of time && people</p>
        <p>caregivers</p>
      </div>
      <div>
        <h4>Actual page content. Need to move notes somewhere else maybe.</h4>

        <p>
          6.23
          {""}
          Now when I console.log whether the data is an array, it says it is.
          But when I try to create a variable for it, it says it's something
          else in the tsx
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
