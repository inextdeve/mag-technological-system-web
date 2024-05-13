import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { DollarSign } from "lucide-react";

export const CardFinance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-[#0AB9BF] rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5 items-center">
          <span className="bg-[#FFEBEA] p-2 rounded-full">
            <DollarSign className="text-[#D64BC2] bg-[#D64BC26f] rounded-full p-1" />
          </span>
          <div className="flex flex-col">
            <span className="text-white">Total invoice value</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-xs">Mustakhlas 3</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white text-xl font-semibold">SR 327.000</span>
        </div>
      </CardBody>
    </Card>
  );
};
