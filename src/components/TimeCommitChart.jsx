import { Card } from "@/components/ui/card";
import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export function TimeCommitChart({ data }) {
  
    const groupedData = data;

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Commits Per Day</h3>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={groupedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
          <XAxis
            dataKey="date"
            stroke="hsl(215 20% 65%)"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            stroke="hsl(271 81% 56%)"
            style={{ fontSize: "12px" }}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 47% 14%)",
              border: "1px solid hsl(217 33% 17%)",
              borderRadius: "8px",
              color: "hsl(210 40% 98%)",
            }}
          />
          <Legend wrapperStyle={{ color: "hsl(215 20% 65%)" }} />
          <Bar
            dataKey="commits"
            fill="hsl(271 81% 56%)"
            radius={[4, 4, 0, 0]}
            name="Commits"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
