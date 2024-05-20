"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import CustomAreaChart from "@/components/charts/area-chart";
import { cn } from "@/helpers/utils";
import SpeedoMeter from "./speedometer";
import { Truck, UsersRound } from "lucide-react";
import CustomBarChart from "./bar-chart";
import ZoneCarousel from "./zone-carousel";

const QualityManagement = () => {
  return (
    <div className="grid xl:grid-cols-5 gap-3 grid-cols-1">
      <div className="col-span-2">
        <Card className="min-h-full bg-gradient-to-t from-white to-background rounded-xl shadow-md p-0 w-full">
          <CardHeader className="flex justify-between items-end">
            <div className="grid">
              <p className="px-1 text-md font-semibold">Average</p>
              <p className="flex gap-1 items-end">
                <span className="text-[#0AB9BF] text-4xl font-semibold">
                  1000
                </span>
                <span className="text-xs text-[#F29701] leading-6 font-semibold">
                  M3
                </span>
              </p>
            </div>
            <Select radius="full" className="max-w-[130px]" placeholder="Zones">
              <SelectItem key="zone-1" value="zone-1">
                Zone 1
              </SelectItem>
            </Select>
          </CardHeader>
          <CardBody>
            <CustomAreaChart />
          </CardBody>
          <CardFooter>
            <Switch
              color="success"
              classNames={{
                base: cn(
                  "inline-flex flex-row-reverse w-full max-w-md bg-transparent hover:bg-[#FFFFFF77] items-center",
                  "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                  "data-[selected=true]:border-success"
                ),
                wrapper: "p-0 h-4 overflow-visible",
                thumb: cn(
                  "w-6 h-6 border-2 shadow-lg",
                  "group-data-[hover=true]:border-success",
                  //selected
                  "group-data-[selected=true]:ml-6",
                  // pressed
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4"
                ),
              }}
            >
              <div className="flex flex-col gap-1">
                <p className="text-medium text-gray-500">Set Daily Alert</p>
                <p className="text-tiny text-default-400">
                  Alert if the standard drops.
                </p>
              </div>
            </Switch>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-3 flex gap-3 flex-wrap">
        <Card className="bg-white/15 max-h-fit grow justify-center">
          <CardHeader className="text-center font-bold flex flex-col justify-center items-center gap-4 pt-4">
            <span>
              <Truck className="w-16 h-16 text-[#0AB9BF]" />
            </span>
            <h4 className="text-2xl">Equipment</h4>
          </CardHeader>
          <CardBody className="flex flex-row justify-center">
            <SpeedoMeter value={2} textValue="Excelent" />
          </CardBody>
        </Card>
        <Card className="bg-white/15 grow justify-center">
          <CardHeader className="text-center font-bold flex flex-col justify-center items-center gap-4 pt-4">
            <span>
              <UsersRound className="w-16 h-16 text-[#0AB9BF]" />
            </span>
            <h4 className="text-2xl">Employment</h4>
          </CardHeader>
          <CardBody className="justify-center flex-row">
            <SpeedoMeter value={2} textValue="Excelent" />
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <p className="p-4">
              Current week:{" "}
              <span className="font-semibold text-[#0AB9BF]">Week 4</span>
            </p>
          </CardHeader>
          <CardBody className="flex flex-row">
            <ul className="min-w-fit flex flex-col justify-evenly pb-2 text-sm uppercase">
              <li>Week 5</li>
              <li className="text-[#0AB9BF]">Week 4</li>
              <li>Week 3</li>
              <li>Week 2</li>
              <li>Week 1</li>
            </ul>
            <CustomBarChart />
          </CardBody>
        </Card>
      </div>
      <div className="col-span-5 min-w-full relative">
        <ZoneCarousel />
      </div>
    </div>
  );
};

export default QualityManagement;
