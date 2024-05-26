"use client";
import React, { useEffect } from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { Navigation, Truck } from "lucide-react";
import { devicesActions } from "@/store";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/components/hooks/rtk";

interface Props {
  handleSubmit: () => void;
}

const TripButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <span
      onClick={onClick}
      className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground data-[hover=true]:opacity-hover text-sm flex items-center max-h-7"
    >
      Trip <Navigation className="w-3 h-3" />
    </span>
  );
};

export default function DevicesList({ handleSubmit }: Props) {
  const devices = useAppSelector((state) => state.devices.items);

  return (
    <Accordion selectionMode="multiple">
      {Object.values(devices)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((device, index) => {
          return (
            <AccordionItem
              disableIndicatorAnimation
              indicator={<TripButton onClick={handleSubmit} />}
              key={index}
              aria-label={device.name}
              startContent={
                <Avatar
                  color="default"
                  radius="full"
                  icon={<Truck className="w-6 h-6" />}
                  size="lg"
                />
              }
              subtitle={
                device.status === "online"
                  ? "online"
                  : device.lastUpdate != null
                  ? moment(device.lastUpdate).fromNow()
                  : "offline"
              }
              title={device.name}
              classNames={{
                titleWrapper: "truncate",
                title: "truncate text-md dark:text-gray-300 font-medium",
                subtitle: `${
                  device.status == "online"
                    ? "text-green-400"
                    : device.lastUpdate != null
                    ? ""
                    : "text-danger-400"
                }`,
              }}
            >
              <div className="border-l pl-6 pt-[1.4px] border-gray-400 relative ml-2">
                <div className="w-3 h-3 bg-red-400 absolute top-0 -left-1.5 rounded-full border border-black"></div>
                <h1 className="text-[#0AB9BF] font-semibold leading-3 mb-2">
                  Work location
                </h1>
                <span className="text-gray-400 pb-3 block text-sm">
                  May 4, 10:44 PM
                </span>
              </div>
              <div className="border-l pl-6 pt-[1.4px] border-gray-400 relative ml-2">
                <div className="w-3 h-3 bg-[#0AB9BF] absolute top-0 -left-1.5 rounded-full border border-black"></div>
                <h1 className="text-[#0AB9BF] font-semibold leading-3 mb-2">
                  Dumpster
                </h1>
                <span className="text-gray-400 text-sm">May 4, 4:00 PM</span>
              </div>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
}
