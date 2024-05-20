import Image from "next/image";
import WarningPng from "@/resources/images/png/warning.png";
const WarningIcon = ({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  let width = 52,
    height = 55;

  switch (size) {
    case "sm":
      width = width / 1.3;
      height = height / 1.3;
      break;
    case "lg":
      width = width * 1.5;
      height = height * 1.5;
      break;

    default:
      break;
  }

  return (
    <Image
      alt="warning-icon"
      src={WarningPng}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default WarningIcon;
