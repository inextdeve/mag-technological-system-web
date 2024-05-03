import Image from "next/image";
import CheckTimePng from "@/app/assets/png/checkTime.png";

const CheckTimeIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  let width = 59.47,
    height = 59;

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
    <Image
      alt="check-time-icon"
      src={CheckTimePng}
      width={width}
      height={height}
    />
  );
};
export default CheckTimeIcon;
