import { Input } from "@nextui-org/react";
import Image from "next/image";
import NavigationCamera from "./nav-cam";
import VehicleControl from "./vehicle-control";

const Control = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="col-span-5 flex gap-10 items-center">
        <Input
          placeholder="Equipment code"
          classNames={{ inputWrapper: "bg-[#0AB9BF26]" }}
        />
        <div className="flex items-center gap-2 min-w-fit">
          <Image
            alt="nextui logo"
            height={40}
            // radius="sm"
            className="rounded-sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Muhammed abdullah</p>
            <p className="text-yellow-500">CR 1398</p>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <NavigationCamera />
      </div>
      <div className="col-span-2">
        <VehicleControl />
      </div>
    </div>
  );
};

export default Control;
