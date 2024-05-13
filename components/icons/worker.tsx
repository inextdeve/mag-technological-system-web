import Image from "next/image";
import WorkerPng from "@/resources/images/png/worker.png";
const WorkerIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
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

  return <Image alt="mag-logo" src={WorkerPng} width={width} height={height} />;
};

export default WorkerIcon;
