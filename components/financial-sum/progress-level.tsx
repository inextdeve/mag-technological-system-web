import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@nextui-org/react";

const ProgressLevel = () => {
  return (
    <Card className="bg-[#0AB9BF3f] h-full">
      <CardHeader className="flex justify-between items-center">
        <h4 className="text-xl font-semibold px-1 pt-1 text-[#F29701]">
          Level of progress
        </h4>
        <Link href="#" className="text-sm font-light underline">
          See all
        </Link>
      </CardHeader>
      <CardBody className="flex justify-center">
        <p className="text-[#0AB9BF] my-2 font-light">Payment of dues</p>
        <Progress
          aria-label="Loading..."
          value={60}
          className="max-w-md"
          classNames={{ indicator: "bg-[#0AB9BF]" }}
          size="lg"
          radius="none"
        />
      </CardBody>
      <CardFooter className="grid grid-cols-2 gap-3">
        <p>Collected</p>
        <p>SR 250,000 / SR13,200,00 </p>
        <p>Zone</p>
        <p>Zone 1 / Zone 23 </p>
      </CardFooter>
    </Card>
  );
};

export default ProgressLevel;
