import { getUsers, getShifts } from "@/actions/shiftActions";
import PayrollSheet from "@/components/PayrollSheet";

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
          {shiftsList.map((shift: any) => (
            <li key={shift._id}>
              {shift.userId} --- {shift.startTime} --- {shift.endTime}
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <br></br>
      <PayrollSheet />
    </div>
  );
};

export default AdminPage;
