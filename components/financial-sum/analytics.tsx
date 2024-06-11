import { Dot } from "lucide-react";
import CustomBarChart from "../charts/bar-chart";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Filter from "./filter";

const Analytics = () => {
  return (
    <Card className="bg-[#0AB9BF3f] mt-4">
      <CardHeader className="flex items-center flex-wrap">
        <h4 className="w-[30%] text-xl font-semibold px-8 text-[#F29701]">
          Analytics
        </h4>
        <div className="flex items-center justify-center gap-2">
          <span className="flex items-center">
            <Dot className="w-12 h-12 text-[#0AB9BF]" /> Income
          </span>
          <span className="flex items-center">
            <Dot className="w-12 h-12 text-[#FDC3C3]" /> Outcome
          </span>
        </div>
        <div className="flex items-center gap-2 md:ml-10 ml-7">
          <Filter />
        </div>
      </CardHeader>
      <CardBody className="md:px-3 px-0">
        <div className="min-h-[400px] w-full">
          <CustomBarChart />
        </div>
      </CardBody>
    </Card>
  );
};

export default Analytics;
