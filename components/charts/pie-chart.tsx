import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0AB9BF", "#CAFDFF", "#7ABABC"];

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

interface CustomPieChartProps {
  data: { name: string; value: string | number }[];
}

const Info = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit text-center">
      <h2 className="font-bold text-2xl text-white z-[100]">4,547</h2>
      <p className="text-xs font-semibold text-gray-400">Total</p>
    </div>
  );
};
const CustomPieChart = ({ data }: CustomPieChartProps) => {
  return (
    <>
      <Info />
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={custom_label}
            outerRadius={120}
            innerRadius={75}
            fill="#8884d8"
            dataKey="value"
            legendType="none"
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomPieChart;
