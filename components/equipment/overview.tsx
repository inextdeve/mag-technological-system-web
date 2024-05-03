import { Divider } from "@nextui-org/react";
import TruckIcon from "../icons/equipment/truck";
import { SwitchOffIcon } from "../icons/equipment/switch";
import CheckTimeIcon from "../icons/equipment/checkTime";
import { ArrowDown } from "lucide-react";

const Overview = () => {
  return (
    <div className="flex items-center justify-around border border-yellow-600 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="bg-yellow-600 rounded-full p-3 aspect-square flex justify-center items-center">
          <TruckIcon size="sm" />
        </div>
        <div className="info">
          <h5 className="text-sm font-bold pt-1">Total equipment</h5>
          <h2 className="text-xl font-semibold text-yellow-600">5423</h2>
        </div>
      </div>
      <Divider orientation="vertical" className="h-12" />
      <div className="flex items-start gap-3">
        <div className="bg-yellow-600 rounded-full p-3 aspect-square flex justify-center items-center">
          <SwitchOffIcon size="sm" />
        </div>
        <div className="info">
          <h5 className="text-sm font-bold pt-1">Inactive Now</h5>
          <h2 className="text-xl font-semibold text-yellow-600">530</h2>
          <span className="text-red-500 text-sm flex items-center">
            <ArrowDown className="w-4 h-4" /> 10%
          </span>
        </div>
      </div>
      <Divider orientation="vertical" className="h-12" />
      <div className="flex items-start gap-3">
        <div className="bg-yellow-600 rounded-full p-3 aspect-square flex justify-center items-center">
          <CheckTimeIcon size="sm" />
        </div>
        <div className="info">
          <h5 className="text-sm font-bold pt-1">Active Now</h5>
          <h2 className="text-xl font-semibold text-yellow-600">4893</h2>
        </div>
      </div>
    </div>
  );
};
export default Overview;
