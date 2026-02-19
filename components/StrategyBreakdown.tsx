"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface Strategy {
  id: string;
  name: string;
  total_pnl: number;
  trades: number;
  win_rate: number;
}

interface StrategyBreakdownProps {
  strategies: Strategy[];
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-terminal-panel border border-terminal-border rounded-lg p-3 shadow-lg">
        <p className="text-terminal-text font-medium mb-2">{data.name}</p>
        <div className="space-y-1 text-sm">
          <p className={data.total_pnl >= 0 ? "text-terminal-green" : "text-terminal-red"}>
            PnL: {formatCurrency(data.total_pnl)}
          </p>
          <p className="text-terminal-muted">Trades: {data.trades}</p>
          <p className="text-terminal-muted">
            Win Rate: {(data.win_rate * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function StrategyBreakdown({ strategies }: StrategyBreakdownProps) {
  // Sort by absolute PnL for chart
  const sortedData = [...strategies]
    .sort((a, b) => Math.abs(b.total_pnl) - Math.abs(a.total_pnl))
    .slice(0, 8); // Top 8 strategies

  return (
    <div className="panel p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-terminal-text font-medium">Strategy Performance</h3>
        <span className="text-xs text-terminal-muted">Top strategies by PnL</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 80, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={formatCurrency}
            stroke="#666666"
            tick={{ fill: "#666666", fontSize: 11 }}
            tickLine={{ stroke: "#1f1f1f" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#666666"
            tick={{ fill: "#666666", fontSize: 11 }}
            tickLine={{ stroke: "#1f1f1f" }}
            width={75}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="total_pnl" radius={[0, 4, 4, 0]}>
            {sortedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.total_pnl >= 0 ? "#00ff88" : "#ff4444"}
                fillOpacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
