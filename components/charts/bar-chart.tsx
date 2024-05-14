"use client";
import { useId } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { BarRectangleItem } from "recharts/types/cartesian/Bar";

const data = [
  {
    name: "Jan",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Feb",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Mar",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Apr",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "May",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Jun",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Jul",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Aug",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Sep",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Oct",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Nov",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
  {
    name: "Dec",
    income: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    outcome: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
    amt: 100,
  },
];

function BarGradient(props: BarRectangleItem) {
  const id = useId();
  const gradientId = `gradient-${id}`;
  const clipPathId = `clipPath-${id}`;

  let color = "#0AB9BF";

  if (props.type == "1") {
    color = "#FFC5C5";
  }

  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="100%">
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#022638" stopOpacity={0.5} />
        </linearGradient>

        <clipPath id={clipPathId}>
          <Rectangle {...props} />
        </clipPath>
      </defs>

      <rect
        x={props.x}
        width={props.width}
        height={props.background?.height}
        fill={`url(#${gradientId})`}
        y={props.background?.y}
        clipPath={`url(#${clipPathId})`}
      />
    </>
  );
}

export default function App() {
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <BarChart
        // width={500}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#FFFFFFCF"
        />
        <YAxis axisLine={false} tickLine={false} unit="k" stroke="#F29701" />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="income" barSize={20} shape={<BarGradient type="1" />} />
        <Bar dataKey="outcome" barSize={20} shape={<BarGradient />} />
      </BarChart>
    </ResponsiveContainer>
  );
}
