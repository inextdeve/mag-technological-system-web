import { Progress, Tooltip } from "@nextui-org/react";

const CustomValueLabel = ({ value }) => {
  return (
    <Tooltip
      showArrow={true}
      content={value}
      isOpen={true}
      classNames={{ base: "bottom-[-35px] " }}
      className="bottom-[-485px] text-white"
      color="success"
    >
      <span></span>
    </Tooltip>
  );
};

const Safety = () => {
  return (
    <div>
      <Progress
        size="lg"
        radius="sm"
        classNames={{
          base: "w-full relative",
          track:
            "drop-shadow-md border border-default bg-gradient-to-r from-red-800 to-green-500",
          indicator: "bg-transparent",
          label: "tracking-wider font-medium text-default-600 opacity-0",
          value: "text-foreground/60 absolute left-[65%] w-fit ",
        }}
        label="-"
        valueLabel={<CustomValueLabel value={65} />}
        value={65}
        showValueLabel={true}
      />
      <div className="flex justify-between text-gray-400 font-semibold mt-2">
        <span>Compliance</span>
        <span>Elevation</span>
      </div>
    </div>
  );
};

export default Safety;
