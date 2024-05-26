"use client";
import React from "react";
import dynamic from "next/dynamic";
import { CardFinance1 } from "./financial-sum/card-finance1";
import { CardFinance2 } from "./financial-sum/card-finance2";
import { CardFinance3 } from "./financial-sum/card-finance3";
import { CardFinance4 } from "./financial-sum/card-finance4";
import Equipment from "./equipment";
import ZonesMap from "./zones-map";
import Quality from "./quality";
import Safety from "./Safety";
import Employment from "./employment";
import ButtonLink from "../button-link";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-full lg:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 sm:pt-10 max-w-[90rem] w-full mx-auto">
      {/* Left Section */}
      <div className="gap-2 flex flex-col ">
        <h3 className="text-xl font-semibold text-[#F29701]">Equipment</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <Equipment />
        </div>
        <h3 className="text-xl font-semibold text-[#F29701]">Map</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <ZonesMap />
        </div>
      </div>
      {/* Left Section */}
      <div className="gap-2 flex flex-col ">
        <h3 className="text-xl font-semibold text-[#F29701]">Employment</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <Employment />
        </div>
        <h3 className="text-xl font-semibold text-[#F29701]">Quality</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <Quality />
        </div>
        <h3 className="text-xl font-semibold text-[#F29701]">Safety</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <Safety />
        </div>
      </div>

      {/* Financial Summaries */}
      <div className="flex flex-col gap-2 col-span-full lg:col-span-1">
        <h3 className="text-xl font-semibold text-[#F29701]">
          Financial Summaries
        </h3>
        <div className="grid lg:grid-cols-1 grid-cols-2 lg:gap-12 gap-4 w-full">
          <CardFinance1 />
          <CardFinance2 />
          <CardFinance3 />
          <CardFinance4 />
          <div className="w-full flex flex-row justify-center col-span-full">
            <ButtonLink href="/financial">Details</ButtonLink>
          </div>
        </div>
      </div>
    </div>

    {/* Table Latest Users */}
    {/* <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Latest Users</h3>
        <Link
          href="/accounts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          View All
        </Link>
      </div>
      <TableWrapper />
    </div> */}
  </div>
);
