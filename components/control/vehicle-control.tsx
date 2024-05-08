import { Button, Switch } from "@nextui-org/react";
import { cn } from "@/helpers/utils";
import { Lock, ShieldAlert, Unlock } from "lucide-react";

const VehicleControl = () => {
  return (
    <div className="grid">
      <Switch
        color="danger"
        classNames={{
          base: cn(
            "inline-flex flex-row-reverse w-full max-w-md bg-content1 items-center",
            "justify-between cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent bg-[#0AB9BF26]",
            "data-[selected=true]:border-danger"
          ),
        }}
      >
        <div className="flex items-center gap-3">
          <div className="bg-[#2B2A2A] w-fit rounded-md p-2">
            <ShieldAlert className="text-danger" />
          </div>
          <div className="flex flex-col">
            <p className="text-medium">Emergency</p>
            <p className="text-tiny text-default-400">
              Switch On only in emergency cases.
            </p>
          </div>
        </div>
      </Switch>
      <div className="vehicle">
        <div className="elipsise-container pt-4 relative">
          <div className="w-[80%] h-20 bg-gradient-to-b to-[#87888C] from-[#373838] rounded-[50%] absolute top-[3px] p-[3px] z-20 shadow-md shadow-[#CFF80B]">
            <div className="w-[100%] h-[100%] bg-black rounded-[50%]"></div>
          </div>
          <div className="w-[80%] h-20 bg-gradient-to-b to-[#87888C] from-[#373838] rounded-[50%] absolute top-2 p-[3px] scale-y-[1.05]">
            <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#CFF80B] to-[#CFF80B] rounded-[50%]"></div>
          </div>
          {/* Lock/Unlock button */}
          <div className="absolute z-30 w-[80%] flex justify-around top-[50%]">
            <Button
              size="sm"
              isIconOnly={true}
              radius="full"
              className="bg-[#606060]"
            >
              <Lock className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              isIconOnly={true}
              radius="full"
              className="bg-[#606060]"
            >
              <Unlock className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleControl;
