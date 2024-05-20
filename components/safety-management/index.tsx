import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import WarningIcon from "../icons/warning";
import SpeedoMeter from "./speedometer";
import LoadoMeter from "./loadometer";
import Image from "next/image";
import DesignatedLandPng from "@/resources/images/png/designated-land.png";
import SafetyTable from "./table/table";
const SafetyManagement = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-between">
      <Card className="bg-[#0AB9BF]/15 max-h-fit grow justify-center">
        <CardHeader className="text-center font-bold flex flex-col justify-center items-center gap-4 pt-4">
          <span>
            <WarningIcon />
          </span>
          <h4 className="text-2xl">Maximum Speed</h4>
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <SpeedoMeter value={8} textValue="KM/H" />
          <p className="text-4xl font-bold translate-y-[-100%] bg-gradient-to-r from-green-400 to-red-700 text-transparent bg-clip-text">
            80
          </p>
        </CardBody>
        <CardFooter>
          <p className="text-center text-gray-400 text-sm py-2">
            Compliance with the maximum speed limit of the vehicle is essential
            for ensuring traffic safety.
          </p>
        </CardFooter>
      </Card>
      <Card className="bg-[#0AB9BF]/15 max-h-fit grow justify-center">
        <CardHeader className="text-center font-bold flex flex-col justify-center items-center gap-4 pt-4">
          <span>
            <WarningIcon />
          </span>
          <h4 className="text-2xl">Maximum Load</h4>
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center">
          <LoadoMeter value={2.4} textValue="M3" />
          <p className="text-4xl font-bold text-[#F29701] translate-y-[-100%]">
            24
          </p>
        </CardBody>
        <CardFooter>
          <p className="text-center text-gray-400 text-sm py-2">
            Adherence to the maximum load capacity of the vehicle is crucial for
            maintaining traffic safety.
          </p>
        </CardFooter>
      </Card>
      <Card className="bg-[#0AB9BF]/15 max-h-fit grow justify-center">
        <CardHeader className="text-center font-bold flex flex-col justify-center items-center gap-4 pt-4">
          <span>
            <WarningIcon />
          </span>
          <h4 className="text-2xl">Designated Lanes</h4>
        </CardHeader>
        <CardBody className="flex-row justify-center">
          <div className="relative w-[169px] h-[169px] square">
            <Image alt="designated-land-icon" src={DesignatedLandPng} fill />
          </div>
        </CardBody>
        <CardFooter>
          <p className="text-center text-gray-400 text-sm py-2">
            It is important to adhere to the designated lanes for the vehicle to
            ensure traffic safety.
          </p>
        </CardFooter>
      </Card>
      <div className="col-span-3">
        <SafetyTable />
      </div>
    </div>
  );
};

export default SafetyManagement;
