import SwitchOffPng from "@/app/assets/png/switchOff.png";

import Image from "next/image";
const SwitchOffIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  let width = 65.51,
    height = 34;

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
    <Image alt="truck-icon" src={SwitchOffPng} width={width} height={height} />
  );
};
export { SwitchOffIcon };
