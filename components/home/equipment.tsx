import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import CustomPieChart from "../charts/pie-chart";
import Link from "next/link";
import ButtonLink from "../button-link";

const data02 = [
  { name: "Active", value: 100 },
  { name: "Inactive", value: 300 },
];

const Equipment = () => {
  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-4 py-6 w-full">
      <CardBody className="py-5 gap-6 min-h-[400px]">
        <CustomPieChart data={data02} />
      </CardBody>
      <CardFooter className="flex justify-center">
        <ButtonLink href="/equipment">Details</ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default Equipment;
