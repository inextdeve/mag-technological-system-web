"use client";
import ReactSpeedometer from "react-d3-speedometer";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface SpeedoMeterProps {
  value: number;
  textValue: string;
}

const LoadoMeter = ({ value, textValue }: SpeedoMeterProps) => {
  return (
    <ReactSpeedometer
      forceRender
      textColor="white"
      value={value}
      minValue={0}
      maxValue={10}
      startColor="#F29701"
      endColor="#F29701"
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

export default LoadoMeter;

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const LoadoMeter = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart>
//         <Pie
//           data={data}
//           cx={"50%"}
//           cy={"50%"}
//           startAngle={180}
//           endAngle={0}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#F29701"
//           //   paddingAngle={5}
//           dataKey="value"
//         ></Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };
// export default LoadoMeter;
