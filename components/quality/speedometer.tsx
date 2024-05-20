import ReactSpeedometer from "react-d3-speedometer";

interface SpeedoMeterProps {
  value: number;
  textValue: string;
}

const SpeedoMeter = ({ value, textValue }: SpeedoMeterProps) => {
  return (
    <ReactSpeedometer
      forceRender
      textColor="#0AB9BF"
      value={value}
      minValue={0}
      maxValue={10}
      startColor="#c8feff"
      segmentColors={["#c8feff", "#75e9ec", "#0AB9BF"]}
      segments={3}
      needleColor={"#FFF"}
      needleHeightRatio={0.8}
      currentValueText={textValue}
      ringWidth={20}
      //   width={220}
      height={220}
      labelFontSize="0"
      valueTextFontWeight="800"
      valueTextFontSize="1.3rem"
    />
  );
};

export default SpeedoMeter;
