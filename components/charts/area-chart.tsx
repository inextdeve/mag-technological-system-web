import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "10",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "11",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "12",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "13",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "14",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "15",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "16",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  console.log({ active, payload });
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label font-bold">
          {`${payload[0]?.value}`}
          <span className="text-xs">m3</span>
        </p>
      </div>
    );
  }

  return null;
};

export default function CustomAreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 30,
        }}
      >
        <defs>
          <linearGradient id={`colorUv`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#0AB9BF" stopOpacity={1} />
            <stop offset="95%" stopColor="#B1B9F8" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" axisLine={false} />
        <Tooltip cursor={{ strokeWidth: 70 }} content={<CustomTooltip />} />
        <Area
          type="bumpX"
          dataKey="uv"
          stroke="#010C20"
          fill={`url(#colorUv)`}
          strokeWidth={1.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
