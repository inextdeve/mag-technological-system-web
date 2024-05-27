"use client";
import { ArrowDown } from "lucide-react";
import { useAppSelector } from "../hooks/rtk";
import { countRate } from "@/helpers/utils";

const OverviewItem = ({ type }: { type?: "active" | "inactive" | "total" }) => {
  const devices = useAppSelector((state) => state.devices.items);

  switch (type) {
    case "active":
      return (
        <>
          {Object.values(devices).filter((d) => d.status === "online").length}
        </>
      );
    case "inactive":
      return (
        <>
          <h2 className="text-xl font-semibold text-yellow-600">
            {Object.values(devices).filter((d) => d.status !== "online").length}
          </h2>
          <span className="text-red-500 text-sm flex items-center">
            <ArrowDown className="w-4 h-4" />{" "}
            {countRate(
              Object.values(devices).length,
              Object.values(devices).filter((d) => d.status !== "online").length
            ).toFixed(0)}
            %
          </span>
        </>
      );
    default:
      return <>{Object.values(devices).length}</>;
  }
};

export default OverviewItem;
