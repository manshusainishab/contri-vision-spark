import { Card } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface LinesOfCodeChartProps {
  data: Array<{ commit: string; additions: number; deletions: number }>;
}

export function LinesOfCodeChart({ data }: LinesOfCodeChartProps) {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Lines of Code Changes</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
          <XAxis 
            dataKey="commit" 
            stroke="hsl(215 20% 65%)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(215 20% 65%)"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(222 47% 14%)',
              border: '1px solid hsl(217 33% 17%)',
              borderRadius: '8px',
              color: 'hsl(210 40% 98%)'
            }}
          />
          <Legend 
            wrapperStyle={{
              color: 'hsl(215 20% 65%)'
            }}
          />
          <Bar dataKey="additions" fill="hsl(142 71% 45%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="deletions" fill="hsl(0 63% 31%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
