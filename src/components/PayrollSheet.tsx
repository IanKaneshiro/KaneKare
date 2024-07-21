import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PayrollSheet = ({ user }: { user: any }) => {
  return (
    <div style={{ marginLeft: 80 }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead>SUN</TableHead>
            <TableHead>MON</TableHead>
            <TableHead>TUE</TableHead>
            <TableHead>WED</TableHead>
            <TableHead>THU</TableHead>
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
            <TableHead></TableHead>
            <TableHead></TableHead>
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
            <TableCell>Total hours</TableCell>
            <TableCell>Total pay</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PayrollSheet;
