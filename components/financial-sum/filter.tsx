"use client";
import { DatePicker, Select, SelectItem } from "@nextui-org/react";

const Filter = () => {
  return (
    <>
      <DatePicker className="max-w-[200px]" variant="bordered" />

      <Select className="min-w-[150px]" variant="bordered" placeholder="Zones">
        <SelectItem key="zone-1" value="zone-1">
          "Zone 1"
        </SelectItem>
      </Select>
    </>
  );
};

export default Filter;
