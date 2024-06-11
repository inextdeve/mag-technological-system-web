import { Divider } from "@nextui-org/react";
import CheckTimeIcon from "../icons/equipment/checkTime";
import { ArrowDown } from "lucide-react";
import WorkerIcon from "../icons/worker";
import BanIcon from "../icons/banned";

const Overview = () => {
  return (
    <div className="md:flex items-center justify-around border border-yellow-600 p-4 rounded-lg md:gap-0 grid gap-3">
      <div className="flex items-start gap-3">
        <div className="bg-yellow-600 rounded-full p-3 aspect-square flex justify-center items-center">
          <WorkerIcon size="sm" />
        </div>
        <div className="info">
          <h5 className="text-sm font-bold pt-1">Total equipment</h5>
          <h2 className="text-xl font-semibold text-yellow-600">5423</h2>
        </div>
      </div>
      <Divider orientation="vertical" className="h-12 hidden md:block" />
      <div className="flex items-start gap-3">
        <div className="bg-yellow-600 rounded-full p-3 aspect-square flex justify-center items-center">
          <CheckTimeIcon size="sm" />
        </div>
        <div className="info">
          <h5 className="text-sm font-bold pt-1">Active Now</h5>
          <h2 className="text-xl font-semibold text-yellow-600">530</h2>
          <span className="text-red-500 text-sm flex items-center">
            <ArrowDown className="w-4 h-4" /> 10%
          </span>
        </div>
      </div>
      <Divider orientation="vertical" className="h-12 hidden md:block" />
      <div className="flex items-start gap-3">
        <div className="bg-yellow-600 rounded-full p-3 aspect-square flex justify-center items-center">
          <BanIcon size="sm" />
        </div>
        <div className="info">
          <h5 className="text-sm font-bold pt-1">Excluded</h5>
          <h2 className="text-xl font-semibold text-yellow-600">4893</h2>
        </div>
      </div>
    </div>
  );
};
export default Overview;
