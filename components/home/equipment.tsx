import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import CustomPieChart from "../charts/pie-chart";
import Link from "next/link";
import ButtonLink from "../button-link";
import { useAppSelector } from "../hooks/rtk";
import { useMemo } from "react";

const data02 = [
  { name: "Active", value: 100 },
  { name: "Inactive", value: 300 },
];

const Equipment = () => {
  const devices = useAppSelector((state) => {
    const items = Object.values(state.devices.items);
    const onlineDevices = items.reduce(
      (previous, current) => previous + (current.status == "online" ? 1 : 0),
      0
    );
    return [
      { name: "Active", value: onlineDevices },
      { name: "Inactive", value: items.length - onlineDevices },
    ];
  });

  return (
    <Card className="bg-default-50 rounded-xl shadow-md md:px-4 py-6 w-full">
      <CardBody className="py-5 gap-6 min-h-[400px]">
        <CustomPieChart data={devices} />
      </CardBody>
      <CardFooter className="flex justify-center">
        <ButtonLink href="/equipment">Details</ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default Equipment;
