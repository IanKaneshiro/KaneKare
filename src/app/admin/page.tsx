import { getUsers, getShifts } from "@/actions/shiftActions";

const AdminPage = async () => {
  const usersList = await getUsers();
  const shiftsList = await getShifts();
  return (
    <div>
      <div>
        <h4>Users</h4>
      </div>
      <div>
        <ul>
          {usersList.map((user: any) => (
            <li key={user._id}>
              {user.firstName}
              <div>{JSON.stringify(user)}</div>
            </li>
          ))}
        </ul>
        <ul>
          {usersList.map((shift: any) => (
            <li key={shift._id}>bloop</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
