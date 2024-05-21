import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

const Toolbar = ({ children }: Props) => {
  return (
    <Card className="p-4 absolute dark:bg-black z-10 w-[310px] inset-x-2 inset-y-2 rounded-md">
      <CardHeader className="grid w-full p-1 justify-normal">
        <h2 className="font-bold">Active Vehicles</h2>
        <Input
          variant="bordered"
          placeholder="Enter value"
          className="my-2 min-w-full"
        />
      </CardHeader>
      <CardBody className="overflow-y-scroll max-h-[85%] p-1">
        {children}
      </CardBody>
    </Card>
  );
};

export default Toolbar;
