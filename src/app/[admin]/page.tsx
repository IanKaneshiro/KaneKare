import mongoose from "mongoose";
import { auth } from "@clerk/nextjs/server";
import { getUsers } from "@/actions";

const AdminPage = () => {
  const { userId, orgId, orgRole } = auth();

  const users = getUsers();

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
        <p>userId {userId}</p>
        <p>Query from Clerk {}</p>
      </div>
    </div>
  );
};

export default AdminPage;
