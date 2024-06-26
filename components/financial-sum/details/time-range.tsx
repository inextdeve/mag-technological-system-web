"use client";
import { Button, DateRangePicker, Select, SelectItem } from "@nextui-org/react";

import { parseZonedDateTime } from "@internationalized/date";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setFrom: Dispatch<SetStateAction<string>>;
  setTo: Dispatch<SetStateAction<string>>;
}

const decFormat = (number: number) => {
  return number < 10 ? "0" + number : number;
};

const TimeRange = ({ setFrom, setTo }: Props) => {
  return (
    <div>
      <h4 className="font-meduim mb-2">Select a range of time</h4>
      <div className="flex gap-3 items-center flex-wrap">
        <div className="md:max-w-fit w-full">
          <DateRangePicker
            classNames={{
              innerWrapper: "flex-wrap h-auto md:h-10",
              inputWrapper: "h-auto items-start",
              input: "w-fit",
            }}
            defaultValue={{
              start: parseZonedDateTime("2024-04-01T00:45[Asia/Riyadh]"),
              end: parseZonedDateTime("2024-04-14T11:15[Asia/Riyadh]"),
            }}
            hourCycle={24}
            labelPlacement="outside"
            onChange={({ start, end }) => {
              const from = new Date(
                `${start.year}-${decFormat(start.month)}-${decFormat(
                  start.day
                )}T${decFormat(start.hour)}:${decFormat(start.minute)}`
              ).toISOString();

              const to = new Date(
                `${end.year}-${decFormat(end.month)}-${decFormat(
                  end.day
                )}T${decFormat(end.hour)}:${decFormat(end.minute)}`
              ).toISOString();

              setFrom(from);
              setTo(to);
            }}
          />
        </div>
        <Select className="min-w-[150px] md:max-w-fit" placeholder="Zones">
          <SelectItem key="zone-1" value="zone-1">
            Zone 1
          </SelectItem>
        </Select>
        <div className="flex gap-3 md:grow-0 md:justify-normal grow justify-center">
          <Button className="rounded-md bg-white text-background">
            Cancel
          </Button>
          <Button className="rounded-md bg-yellow-500">Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default TimeRange;
