import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { DollarSign } from "lucide-react";

export const CardFinance4 = () => {
  return (
    <Card className="xl:max-w-sm bg-[#238A8E] rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5 items-center">
          <span className="bg-[#FFEBEA] p-2 rounded-full">
            <DollarSign className="text-[#0AB9BF] bg-[#0AB9BF6f] rounded-full p-1" />
          </span>

          <div className="flex flex-col">
            <span className="text-white">Remaining amount</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-xs">Mustakhlas 9</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white text-xl font-semibold">SR 1,054,000</span>
        </div>
      </CardBody>
    </Card>
  );
};
