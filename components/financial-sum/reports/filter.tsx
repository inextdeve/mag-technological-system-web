import { DateRangePicker, Input } from "@nextui-org/react";

const Filter = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Search history" variant="bordered" />
      <DateRangePicker variant="bordered" className="text-yellow-m" />
    </div>
  );
};

export default Filter;
