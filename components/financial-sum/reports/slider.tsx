import React from "react";
import { Slider } from "@nextui-org/react";
import { cn } from "@/helpers/utils";
interface CustomSliderProps {
  variant?: "approval" | "exchange";
}

export default function CustomSlider({
  variant = "approval",
}: CustomSliderProps) {
  return (
    <Slider
      label="Approval"
      step={1}
      maxValue={4}
      minValue={0}
      defaultValue={3}
      showSteps={true}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      classNames={{
        base: "max-w-full",
        filler: cn({
          "bg-[#32BA7C]": variant === "approval",
          "bg-yellow-m": variant === "exchange",
        }),
        labelWrapper: "mb-2",
        label: "pl-1",
        value: "hidden",
        track: cn({
          "bg-[#E0FFF1]": variant === "approval",
          "bg-x-light-yellow-m": variant === "exchange",
        }),
        thumb: [
          "transition-size",
          cn({
            "bg-[#32BA7C] after:bg-[#E0FFF1]": variant === "approval",
            "bg-yellow-m after:bg-x-light-yellow-m": variant === "exchange",
          }),

          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20 ",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
        ],
        step: [
          cn({
            "data-[in-range=false]:bg-[#E0FFF1] data-[in-range=false]:border-1 data-[in-range=false]:border-[#32BA7C]":
              variant === "approval",
            "data-[in-range=false]:bg-x-light-yellow-m  data-[in-range=false]:border-yellow-m":
              variant === "exchange",
          }),
          "data-[in-range=false]:border-1 data-[in-range=false]:ml-[2px] dark:data-[in-range=true]:bg-[#32BA7C] border-1 border-white w-5 h-5",
        ],
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
          ],
        },
      }}
    />
  );
}
