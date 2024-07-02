import { getUsers } from "@/actions/shiftActions";

// const popUsers = async () => {
//   try {
//     const users = await getUsers();
//     if (users) {
//       return users;
//     }
//   } catch (e) {
//     console.error("Error retreiving users", e);
//   }
// };

const AdminPage = async () => {
  const usersList = await getUsers();
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
      </div>
    </div>
  );
};

export default AdminPage;
