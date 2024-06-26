import { Button, Card, CardHeader, Switch, CardBody } from "@nextui-org/react";
import { cn } from "@/helpers/utils";
import {
  MessageSquareMore,
  PhoneCall,
  ShieldAlert,
  Voicemail,
} from "lucide-react";
import Image from "next/image";
import AudiBackPng from "@/resources/images/png/audi_back.png";
import AudiFrontPng from "@/resources/images/png/audi_front.png";
import SpeedoMeter from "./speedometer";
import Locker from "./locker";

const VehicleControl = () => {
  return (
    <Card className="grid dark:bg-transparent">
      <CardHeader className="justify-stretch">
        <Switch
          color="danger"
          classNames={{
            base: cn(
              "inline-flex flex-row-reverse min-w-full bg-content1 items-center",
              "justify-between cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent bg-[#0AB9BF26]",
              "data-[selected=true]:border-danger"
            ),
          }}
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#2B2A2A] w-fit rounded-md p-2">
              <ShieldAlert className="text-danger" />
            </div>
            <div className="flex flex-col">
              <p className="text-medium">Emergency</p>
              <p className="text-tiny text-default-400">
                Switch On only in emergency cases.
              </p>
            </div>
          </div>
        </Switch>
      </CardHeader>
      <CardBody className="max-w-[490px] mx-auto">
        <div className="vehicle">
          <div className="audi">
            <div className="relative w-full flex justify-center translate-y-11">
              <Image
                src={AudiFrontPng}
                // fill={true}
                alt="audi-front"
                width={312}
                height={408}
                className="w-[18%] vehicle-filter"
              />
            </div>
            <div className="relative w-full flex justify-center">
              <Image
                src={AudiBackPng}
                // fill={true}
                alt="audi-back"
                width={728}
                height={455}
                className="w-[50%]"
              />
              <div className="green-light absolute w-[20%] rounded-[100%] h-[20%] top-[40%] -translate-x-[50%] left-[50%] bg-[#CFF80B] spread-shadow -z-10"></div>
            </div>
          </div>
          <div className="elipsise-container pt-4 relative flex justify-center -translate-y-16">
            <div className="w-[80%] h-20 bg-gradient-to-b to-[#87888C] from-[#373838] rounded-[50%] absolute top-[3px] p-[3px] z-20 shadow-md shadow-[#CFF80B]">
              <div className="w-[100%] h-[100%] dark:bg-black bg-slate-900 rounded-[50%]"></div>
            </div>
            <div className="w-[80%] h-20 bg-gradient-to-b to-[#87888C] from-[#373838] rounded-[50%] absolute top-2 p-[3px] scale-y-[1.05]">
              <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#CFF80B] to-[#CFF80B] rounded-[50%]"></div>
            </div>
            {/* Lock/Unlock button */}
            <Locker />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <Button
            size="sm"
            isIconOnly={true}
            radius="full"
            className="dark:bg-[#606060] dark:text-black text-gray-700"
          >
            <PhoneCall className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            isIconOnly={true}
            radius="full"
            className="dark:bg-[#606060] dark:text-black text-gray-700"
          >
            <MessageSquareMore className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            isIconOnly={true}
            radius="full"
            className="dark:bg-[#606060] dark:text-black text-gray-700"
          >
            <Voicemail className="w-4 h-4" />
          </Button>
        </div>
        <SpeedoMeter />
      </CardBody>
    </Card>
  );
};

export default VehicleControl;
