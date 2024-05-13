import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Chip,
} from "@nextui-org/react";
import { Anvil, Gauge, History, Weight } from "lucide-react";

const StatusCard = () => {
  const buttonClass =
    "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none px-4 min-w-20 h-10 text-small gap-2 rounded-medium shadow-lg shadow-yellow-600/20 bg-amber-100 text-yellow-600";

  return (
    <Card className="max-w-[400px] absolute z-30 top-10 right-56" shadow="md">
      <CardHeader className="flex items-start gap-8 justify-between">
        <div className="flex flex-col">
          <p className="text-md">CR 1357</p>
          <p className="text-small text-default-500">Trcuk Volvo FH16</p>
        </div>
        <div className={buttonClass}>On the way</div>
      </CardHeader>
      <Divider />
      <CardBody className="grid gap-2">
        <p className="flex gap-2 items-center justify-between">
          <p className="flex items-center gap-2">
            <Gauge className="w-4 h-4" />
            <span className="text-gray-400">Average speed</span>
          </p>
          <span className="text-yellow-500">80KM</span>
        </p>
        <p className="flex gap-2 items-center justify-between">
          <p className="flex items-center gap-2">
            <Weight className="w-4 h-4" />
            <span className="text-gray-400">Total weight</span>
          </p>
          <span className="text-yellow-500">32TON</span>
        </p>
        <p className="flex gap-2 items-center justify-between">
          <p className="flex items-center gap-2">
            <Anvil className="w-4 h-4" />
            <span className="text-gray-400">Load weight</span>
          </p>
          <span className="text-yellow-500">12TON</span>
        </p>
        <p className="flex gap-2 items-center justify-between">
          <p className="flex items-center gap-2">
            <History className="w-4 h-4" />
            <span className="text-gray-400">Engine hours</span>
          </p>
          <span className="text-yellow-500">6H</span>
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex items-center gap-2">
          <Chip size="sm" className="scale-75" color="warning">
            !
          </Chip>
          <p className="text-sm">
            <span className="font-semibold">Fault type: </span>
            Brake failure
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
export default StatusCard;
