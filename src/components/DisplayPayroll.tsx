import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DisplayPayroll = ({ shifts, users }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">CareTaker</TableHead>
            <TableHead>Shift Start</TableHead>
            <TableHead>Shift End</TableHead>
            <TableHead className="text-right">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shifts.map((shift: any) => (
            <TableRow>
              <TableCell className="font-medium">
                {users.find((user) => user.id === shift.userId).firstName +
                  " " +
                  users.find((user) => user.id === shift.userId).lastName}
              </TableCell>
              <TableCell>{shift.startTime}</TableCell>
              <TableCell>{shift.endTime}</TableCell>
              <TableCell className="text-right">{shift?.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DisplayPayroll;
