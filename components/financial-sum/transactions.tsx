"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  DateRangePicker,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const Transactions = () => {
  const active = true;

  return (
    <Card className="bg-[#0AB9BF3f]">
      <CardHeader className="flex items-center justify-between">
        <h4 className="text-xl font-semibold px-8 text-[#F29701]">
          Transactions
        </h4>
        <div className="flex gap-3">
          <Input type="search" variant="bordered" placeholder="Search" />
          <DateRangePicker variant="bordered" />
        </div>
      </CardHeader>
      <CardBody>
        <Table
          aria-label="Example static collection table"
          classNames={{
            wrapper: "bg-transparent shadow-none",
            th: "bg-gray-100",
          }}
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>DATE</TableColumn>
            <TableColumn>PRICE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell colSpan={2}>Mustakhlas 1</TableCell>
              <TableCell>Sat, 20 Apr 2024</TableCell>
              <TableCell className="text-[#0AB9BF]">SR 125,545</TableCell>
              <TableCell>
                {active ? (
                  <Chip color="success" className="text-white">
                    Completed
                  </Chip>
                ) : (
                  <Chip color="danger">Completed</Chip>
                )}
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Mustakhlas 2</TableCell>
              <TableCell>Sat, 20 Apr 2024</TableCell>
              <TableCell className="text-[#0AB9BF]">SR 125,545</TableCell>

              <TableCell>
                {active ? (
                  <Chip color="success" className="text-white">
                    Completed
                  </Chip>
                ) : (
                  <Chip color="danger">Completed</Chip>
                )}
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Mustakhlas 3</TableCell>
              <TableCell>Sat, 20 Apr 2024</TableCell>
              <TableCell className="text-[#0AB9BF]">SR 125,545</TableCell>

              <TableCell>
                {active ? (
                  <Chip color="success" className="text-white">
                    Completed
                  </Chip>
                ) : (
                  <Chip color="danger">Completed</Chip>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Transactions;
