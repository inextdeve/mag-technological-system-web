"use client";
import ReactSpeedometer from "react-d3-speedometer";

const SpeedoMeter = () => {
  return (
    <div>
      <ReactSpeedometer
        forceRender
        // textColor="#ffffff00"
        value={2}
        minValue={0}
        maxValue={10}
        startColor="#CFF80B"
        segmentColors={["#CFF80B", "#CFF80B", "#CFF80B", "#FFFFFF00"]}
        segments={4}
        needleColor={"white"}
        needleHeightRatio={0.6}
        currentValueText="Petrol"
        ringWidth={8}
        width={130}
      />
    </div>
  );
};

export default SpeedoMeter;
