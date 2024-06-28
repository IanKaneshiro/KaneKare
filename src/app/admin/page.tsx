import mongoose from "mongoose";
import { auth } from "@clerk/nextjs/server";
import { getUsers } from "@/actions/shiftActions";

const popUsers = async () => {
  try {
    const users = await getUsers();
    if (users) {
      return users;
    }
  } catch (e) {
    console.error("Error retreiving users", e);
  }
};

const usersList = popUsers();

const AdminPage = () => {
  return (
    <div>
      <div>
        <h4>Users</h4>
      </div>
      <div>
        <ul>
          {usersList.map((user) => (
            <li key={user._id}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
