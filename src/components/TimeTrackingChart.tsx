import { Card } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface TimeTrackingChartProps {
  data: Array<{ date: string; hours: number }>;
}

export function TimeTrackingChart({ data }: TimeTrackingChartProps) {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Time Tracking Over Period</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(188 95% 43%)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(188 95% 43%)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
          <XAxis 
            dataKey="date" 
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
          <Area 
            type="monotone" 
            dataKey="hours" 
            stroke="hsl(188 95% 43%)" 
            strokeWidth={2}
            fill="url(#colorHours)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
