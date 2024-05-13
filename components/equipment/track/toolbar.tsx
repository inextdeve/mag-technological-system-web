import { Input } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

const Toolbar = ({ children }: Props) => {
  return (
    <div className="p-4 absolute bg-black z-10 w-[310px] inset-x-2 inset-y-2 rounded-md">
      <h2 className="font-bold">Active Vehicles</h2>
      <Input variant="bordered" placeholder="Enter value" className="my-2" />
      <div className="overflow-y-scroll max-h-[85%]">{children}</div>
    </div>
  );
};

export default Toolbar;
