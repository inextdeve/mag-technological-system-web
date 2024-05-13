"use client";
import { useState } from "react";
import TimeRange from "./time-range";
import Toolbar from "./DownloadFile";
import ReportsTable from "./table";

const Reports = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <>
      <TimeRange setFrom={setFrom} setTo={setTo} />
      <ReportsTable />
    </>
  );
};

export default Reports;
