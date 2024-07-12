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
        <p style={{ width: 500, color: "pink" }}>
          For each user, we want name, and then the shifts they worked
          throughout the week. Then we want to be able to calculate that pay.
          Originally it's broken down into what type of shift they worked, but
          maybe just start with gathering shifts in general. Will have to sort
          out a weekly calendar. Can't just choose all shifts, it needs to be
          within a specific time.
        </p>

        <ul>
          {usersList.map((user: any) => (
            <li key={user._id}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
