"use client";
import { BatteryMedium, Fuel } from "lucide-react";
import ReactSpeedometer from "react-d3-speedometer";
import Speedometer, {
  Background,
  Arc,
  Progress,
  Marks,
  Indicator,
} from "react-speedometer";

const SpeedoMeter = () => {
  return (
    <>
      <div className="flex justify-between mt-6">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <ReactSpeedometer
              forceRender
              textColor="#ffffff"
              value={2}
              minValue={0}
              maxValue={10}
              startColor="#CFF80B"
              segmentColors={["#CFF80B", "#CFF80B", "#FFFFFF00"]}
              segments={3}
              needleColor={"#ffffff00"}
              needleHeightRatio={0.5}
              currentValueText="Petrol"
              ringWidth={6}
              width={110}
              height={90}
              labelFontSize="0"
              valueTextFontSize="12px"
              valueTextFontWeight="400"
            />
            <Fuel className="w-6 h-6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[25%]" />
          </div>
          <span className="text-xs translate-y-[-10px]">60%</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <ReactSpeedometer
              forceRender
              textColor="#ffffff"
              value={2}
              minValue={0}
              maxValue={10}
              startColor="#CFF80B"
              segmentColors={["#CFF80B", "#CFF80B", "#FFFFFF00"]}
              segments={3}
              needleColor={"#ffffff00"}
              needleHeightRatio={0.5}
              currentValueText="Battery"
              ringWidth={6}
              width={110}
              height={90}
              labelFontSize="0"
              valueTextFontSize="12px"
              valueTextFontWeight="400"
            />
            <BatteryMedium className="w-6 h-6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[25%]" />
          </div>
          <span className="text-xs translate-y-[-10px]">50%</span>
        </div>
      </div>
      <div className="flex justify-center mt-4 -translate-y-16">
        <Speedometer value={57} fontFamily="system-ui">
          <Background opacity={0} />
          <Arc color="#87888C" opacity={0.6} />
          <Progress color="#CFF80B" />
          <Marks
            fontSize={14}
            lineSize={28}
            lineColor="#87888C"
            lineOpacity={0.17}
          />
          <Indicator y={140} fontWeight={"600"}></Indicator>
        </Speedometer>
      </div>
    </>
  );
};

export default SpeedoMeter;
