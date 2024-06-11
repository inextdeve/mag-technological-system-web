import { DateRangePicker, Input } from "@nextui-org/react";

const Filter = () => {
  return (
    <div className="md:flex items-center gap-2 md:mt-0 mt-3">
      <Input
        placeholder="Search history"
        variant="bordered"
        className="md:mb-0 mb-3"
      />
      <DateRangePicker variant="bordered" />
    </div>
  );
};

export default Filter;
