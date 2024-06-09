import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import CustomPieChart from "../charts/pie-chart";
import ButtonLink from "../button-link";

const data02 = [
  { name: "Active", value: 100 },
  { name: "Inactive", value: 20 },
  { name: "Exluded", value: 100 },
];

const Employment = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md md:px-4 py-6 w-full">
      <CardBody className="py-5 min-h-[400px]">
        <CustomPieChart data={data02} />
      </CardBody>
      <CardFooter className="flex justify-center">
        <ButtonLink href="/employment">Details</ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default Employment;
