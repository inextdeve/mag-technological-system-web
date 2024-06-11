import { cn } from "@/helpers/utils";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { X } from "lucide-react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const Toolbar = ({ children, className, onClose }: Props) => {
  return (
    <Card
      className={cn(
        "p-4 absolute dark:bg-black z-10 md:w-[310px] md:max-h-[300px] max-h-[80%] inset-x-2 inset-y-2 rounded-md",
        className
      )}
    >
      <CardHeader className="grid w-full p-1 justify-normal">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Active Vehicles</h2>
          <Button
            variant="flat"
            size="sm"
            onClick={onClose}
            className="md:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <Input
          variant="bordered"
          placeholder="Enter value"
          className="my-2 min-w-full"
        />
      </CardHeader>
      <CardBody className="overflow-y-scroll md:max-h-[85%] h-full p-1">
        {children}
      </CardBody>
    </Card>
  );
};

export default Toolbar;
