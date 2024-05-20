import Image from "next/image";
import YellowStar from "@/resources/images/png/yellow-star.png";
const StarIcon = ({
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
      alt="mag-logo"
      src={YellowStar}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default StarIcon;
