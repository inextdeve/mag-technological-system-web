import TruckPng from "@/app/assets/png/truck.png";

import Image from "next/image";
const TruckIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  let width = 70.55,
    height = 70;

  switch (size) {
    case "sm":
      width = width / 1.5;
      height = height / 1.5;
      break;
    case "lg":
      width = width * 1.5;
      height = height * 1.5;
      break;

    default:
      break;
  }

  return (
    <Image alt="truck-icon" src={TruckPng} width={width} height={height} />
  );
};
export default TruckIcon;
