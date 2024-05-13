import { Card, CardBody } from "@nextui-org/react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data02 = [
  { name: "Active", value: 100 },
  { name: "Inactive", value: 300 },
];

const COLORS = ["#0AB9BF", "#CAFDFF"];

const custom_label = ({
  x,
  y,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  x: number;
  y: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  return (
    <>
      <circle
        cx={midAngle < 180 ? x - 12 : x + 12}
        cy={midAngle < 180 ? y + 12 : y - 12}
        r="17"
        fill="#ECEAF8"
      />
      <text
        x={midAngle < 180 ? x - 22.5 : x + 1.5}
        y={midAngle < 180 ? y + 12 : y - 12}
        fill="black"
        //   textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

const Equipment = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-4 py-6 w-full">
      <CardBody className="py-5 gap-6 min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data02}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={custom_label}
              outerRadius={80}
              innerRadius={45}
              fill="#8884d8"
              dataKey="value"
              legendType="none"
              paddingAngle={0}
            >
              {data02.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default Equipment;
