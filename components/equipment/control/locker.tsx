"use client";
import { cn } from "@/helpers/utils";
import { Button } from "@nextui-org/react";
import { Lock, Unlock } from "lucide-react";
import { useState } from "react";

const Locker = () => {
  const [lockStatus, setLockStatus] = useState("locked");

  return (
    <div className="absolute z-30 w-[80%] flex justify-around top-[50%]">
      <Button
        size="sm"
        isIconOnly={true}
        radius="full"
        className={cn("bg-[#606060]", {
          "bg-[#CFF80B]": lockStatus == "locked",
        })}
        onClick={() => setLockStatus("locked")}
      >
        <Lock
          className={cn("w-4 h-4", {
            "text-background": lockStatus == "locked",
          })}
        />
      </Button>
      <Button
        size="sm"
        isIconOnly={true}
        radius="full"
        className={cn({ "bg-[#CFF80B]": lockStatus == "unlocked" })}
        onClick={() => setLockStatus("unlocked")}
      >
        <Unlock
          className={cn("w-4 h-4", {
            "text-background": lockStatus == "unlocked",
          })}
        />
      </Button>
    </div>
  );
};

export default Locker;
