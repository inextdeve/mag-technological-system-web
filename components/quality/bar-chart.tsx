import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Z01",
    uv: 400,
    pv: 500,
    amt: 2400,
  },
  {
    name: "Z02",
    uv: 3000,
    pv: 300,
    amt: 2210,
  },
  {
    name: "Z03",
    uv: 2000,
    pv: 354,
    amt: 2290,
  },
  {
    name: "Z04",
    uv: 2780,
    pv: 400,
    amt: 2000,
  },
  {
    name: "Z05",
    uv: 1890,
    pv: 255,
    amt: 2181,
  },
  {
    name: "Z06",
    uv: 2390,
    pv: 666,
    amt: 2500,
  },
  {
    name: "Z07",
    uv: 550,
    pv: 700,
    amt: 1000,
  },
  {
    name: "Z08",
    uv: 2390,
    pv: 666,
    amt: 2500,
  },
  {
    name: "Z09",
    uv: 550,
    pv: 700,
    amt: 1000,
  },
  {
    name: "Z10",
    uv: 2390,
    pv: 666,
    amt: 2500,
  },
  {
    name: "Z11",
    uv: 550,
    pv: 700,
    amt: 1000,
  },
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          axisLine={false}
          tickLine={false}
        />
        {/* <YAxis axisLine={false} tickLine={false} /> */}
        <Tooltip />
        <Bar
          dataKey="pv"
          fill="#F29701"
          background={{ fill: "#E9ECF112", radius: 4 }}
          radius={4}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
