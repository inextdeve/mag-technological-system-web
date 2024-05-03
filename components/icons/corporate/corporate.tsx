import Logopng from "@/app/assets/png/logo.png";
import NECPng from "@/app/assets/png/NEC.png";
import MAGPng from "@/app/assets/png/mag-logo.png";

import Image from "next/image";
const MagIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  let width = 139,
    height = 58;

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

  return <Image alt="mag-logo" src={MAGPng} width={width} height={height} />;
};

const NECIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  let width = 197,
    height = 59;

  switch (size) {
    case "sm":
      width = width / 1.8;
      height = height / 1.8;
      break;
    case "lg":
      width = width * 1.5;
      height = height * 1.5;
      break;

    default:
      break;
  }

  return <Image alt="nec-logo" src={NECPng} width={width} height={height} />;
};

const LogoIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  let width = 52,
    height = 55;

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

  return <Image alt="mag-logo" src={Logopng} width={width} height={height} />;
};

export { MagIcon, NECIcon, LogoIcon };
