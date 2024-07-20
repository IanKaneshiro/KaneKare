import { getUsers, getShifts } from "@/actions/shiftActions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      <div style={{ display: "flex" }}>
        <p>Admin Payroll Calendar</p>
        <Table style={{ width: "90%" }}>
          <TableCaption>A week's view of caregiver hours.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>SUN</TableHead>
              <TableHead>MON</TableHead>
              <TableHead>TUES</TableHead>
              <TableHead>WED</TableHead>
              <TableHead>THUR</TableHead>
              <TableHead>FRI</TableHead>
              <TableHead>SAT</TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">DAY</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">MID</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">NOC</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OTHER</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Hours</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Total pay</TableCell>
              <TableCell>Total hours</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPage;
