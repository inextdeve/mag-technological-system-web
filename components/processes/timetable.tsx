import { cn } from "@/helpers/utils";

const monthsShort = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = [
  {
    name: "Z 01",
    start: 10,
    end: 20,
  },
  {
    name: "Z 02",
    start: 30,
    end: 40,
  },
  {
    name: "Z 03",
    start: 36,
    end: 70,
  },
  {
    name: "Z 04",
    start: 80,
    end: 100,
  },
  {
    name: "Z 05",
    start: 10,
    end: 87,
  },
];

const TimeTable = () => {
  return (
    <div className="grid grid-cols-13 p-1 text-sm">
      {monthsShort.map((value) => (
        <div key={value}>{value}</div>
      ))}
      {data.map(({ name, start, end }, index) => (
        <div
          key={`${name}-${index}`}
          className="col-span-full grid grid-cols-13 "
        >
          <div className="py-1 md:py-3 text-center text-[#0AB9BF]">{name}</div>
          <div className="col-span-12 py-1 md:py-3 border-b-1 border-gray-400">
            <div className="md:min-h-6 min-h-2 dark:bg-[#0AB9BF]/30 bg-[#0AB9BF]/50 w-full rounded-r-full relative">
              <div
                className={cn(
                  `absolute top-0 bottom-0 bg-gradient-to-r dark:from-[#FFFFFF] from-blue-700  dark:to-[#0AB9BF] to-[#0AB9BF] rounded-full md:min-h-4 min-h-1`,
                  {
                    "rounded-l-none": start === 0,
                  }
                )}
                style={{ left: `${start}%`, right: `${100 - end}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
