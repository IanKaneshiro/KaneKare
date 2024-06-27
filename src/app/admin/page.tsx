import mongoose from "mongoose";
import { auth } from "@clerk/nextjs/server";
import { getUsers } from "@/actions/shiftActions";

const AdminPage = () => {
  const { userId } = auth();

  const users = getUsers();

  return (
    <div>
      <div>
        <h4>Users</h4>
      </div>
      <div>
        <h4>Actual page content. Need to move notes somewhere else maybe.</h4>
        <p>
          {users.map((user) => (
            <li key={user._id}>{user.firstName}</li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
