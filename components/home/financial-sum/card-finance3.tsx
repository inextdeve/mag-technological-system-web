import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { DollarSign } from "lucide-react";

export const CardFinance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-[#E24E4E] rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5 items-center">
          <span className="bg-[#FFEBEA] p-2 rounded-full">
            <DollarSign className="text-[#FF4437] bg-[#FF44376f] rounded-full p-1" />
          </span>

          <div className="flex flex-col">
            <span className="text-white">Penalties</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-xs opacity-0">-</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white text-xl font-semibold">SR 54.000</span>
        </div>
      </CardBody>
    </Card>
  );
};
