import { Card, CardBody, CardHeader } from "@nextui-org/react";
import CustomAreaChart from "../charts/area-chart";

const Quality = () => {
  return (
    <Card className="bg-gradient-to-t from-white to-background rounded-xl shadow-md p-0 w-full">
      <CardHeader className="grid">
        <p className="px-1 text-md font-semibold">Average</p>
        <p className="flex gap-1 items-end">
          <span className="text-[#0AB9BF] text-4xl font-semibold">1000</span>
          <span className="text-xs text-[#F29701] leading-6 font-semibold">
            M3
          </span>
        </p>
      </CardHeader>
      <CardBody className="gap-6 min-h-[250px]">
        <CustomAreaChart />
      </CardBody>
    </Card>
  );
};

export default Quality;
