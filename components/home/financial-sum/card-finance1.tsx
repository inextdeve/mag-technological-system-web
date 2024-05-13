import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Wallet } from "lucide-react";

export const CardFinance1 = () => {
  return (
    <Card className="xl:max-w-sm bg-[#0D989C] rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5 items-center">
          <span className="bg-[#FFEBEA] p-2 rounded-full">
            <Wallet className="text-orange-400" />
          </span>
          <div className="flex flex-col">
            <span className="text-white">Total invoice value</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-xs">Mustakhlas 12</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white text-xl font-semibold">SR 1,827.000</span>
        </div>
      </CardBody>
    </Card>
  );
};
