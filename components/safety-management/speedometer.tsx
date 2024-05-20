"use client";
import ReactSpeedometer from "react-d3-speedometer";

interface SpeedoMeterProps {
  value: number;
  textValue: string;
}

const SpeedoMeter = ({ value, textValue }: SpeedoMeterProps) => {
  return (
    <ReactSpeedometer
      forceRender
      textColor="white"
      value={value}
      minValue={0}
      maxValue={10}
      maxSegmentLabels={0}
      startColor="#00FF0055"
      endColor="#FF0000"
      segments={3200}
      needleColor={"#FFF"}
      needleHeightRatio={0.8}
      currentValueText={textValue}
      ringWidth={40}
      //   width={220}
      height={220}
      labelFontSize="0"
      valueTextFontWeight="100"
      valueTextFontSize="0.8rem"
    />
  );
};

export default SpeedoMeter;
