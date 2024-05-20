import React from "react";
import { Slider } from "@nextui-org/react";
import { cn } from "@/helpers/utils";
import { Star } from "lucide-react";
import StarIcon from "@/components/icons/star";
interface CustomSliderProps {
  variant?: "approval" | "exchange";
}

const EndStart = () => {
  return (
    <StarIcon size="sm" className="-translate-x-[96%] translate-y-[1px]" />
  );
};

const MarksLabel = (variant: "approval" | "exchange", i: number) => {
  return variant === "approval"
    ? { label: `Approval ${i}`, value: i }
    : { label: `Exchange ${i}`, value: i };
};

export default function CustomSlider({
  variant = "approval",
}: CustomSliderProps) {
  return (
    <Slider
      marks={[1, 2, 3, 4].map((i) => MarksLabel(variant, i))}
      label={variant}
      step={1}
      maxValue={4}
      minValue={0}
      value={3}
      showSteps={true}
      disableThumbScale={true}
      endContent={<EndStart />}
      size="sm"
      classNames={{
        mark: cn(
          "translate-x-[-108%] text-xs w-[10ch] data-[in-range=true]:text-green-m",
          { "data-[in-range=true]:text-yellow-m": variant === "exchange" }
        ),
        base: "min-w-fit",
        filler: cn({
          "bg-[#32BA7C]": variant === "approval",
          "bg-yellow-m": variant === "exchange",
        }),
        labelWrapper: "mb-2",
        label: "pl-1 capitalize",
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
          "ring-0",
          "w-4 h-4",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
        ],
        step: [
          cn({
            "data-[in-range=false]:bg-[#E0FFF1] data-[in-range=false]:border-1 data-[in-range=false]:border-[#32BA7C]":
              variant === "approval",
            "data-[in-range=false]:bg-x-light-yellow-m  data-[in-range=false]:border-yellow-m":
              variant === "exchange",
          }),
          "data-[in-range=false]:border-1 data-[in-range=false]:ml-[2px] dark:data-[in-range=true]:bg-[#32BA7C] border-1 border-white w-4 h-4",
        ],
      }}
    />
  );
}
