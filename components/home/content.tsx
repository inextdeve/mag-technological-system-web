"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { CardFinance1 } from "./financial-sum/card-finance1";
import { CardFinance2 } from "./financial-sum/card-finance2";
import { CardFinance3 } from "./financial-sum/card-finance3";
import { CardFinance4 } from "./financial-sum/card-finance4";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import Equipment from "./equipment";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-full lg:px-6">
    <div className="grid grid-cols-3 justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      {/* Left Section */}
      <div className="gap-2 flex flex-col ">
        <h3 className="text-xl font-semibold text-[#F29701]">Equipment</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <Equipment />
          {/* <CardTransactions /> */}
        </div>
      </div>
      {/* Left Section */}
      <div className="gap-2 flex flex-col ">
        <h3 className="text-xl font-semibold text-[#F29701]">Employment</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <Equipment />
          <CardTransactions />
        </div>
      </div>
      {/* Financial Summaries */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#F29701]">
          Financial Summaries
        </h3>
        <div className="grid gap-4 w-full">
          <CardFinance1 />
          <CardFinance2 />
          <CardFinance3 />
          <CardFinance4 />
        </div>
      </div>
      {/* Chart */}
      <div className="h-full flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Statistics</h3>
        <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
          <Chart />
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
