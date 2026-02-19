"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface EquityCurveProps {
  data: Array<{
    date: string;
    equity: number;
    pnl: number;
  }>;
  height?: number;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const equity = payload[0].value;
    const pnl = payload[0].payload.pnl;
    return (
      <div className="bg-terminal-panel border border-terminal-border rounded-lg p-3 shadow-lg">
        <p className="text-terminal-muted text-xs mb-1">{formatDate(label)}</p>
        <p className="text-terminal-green font-bold text-lg">
          {formatCurrency(equity)}
        </p>
        <p className={`text-sm ${pnl >= 0 ? "text-terminal-green" : "text-terminal-red"}`}>
          {pnl >= 0 ? "+" : ""}{formatCurrency(pnl)} PnL
        </p>
      </div>
    );
  }
  return null;
};

export function EquityCurve({ data, height = 300 }: EquityCurveProps) {
  const minEquity = Math.min(...data.map(d => d.equity));
  const maxEquity = Math.max(...data.map(d => d.equity));
  const padding = (maxEquity - minEquity) * 0.1;

  return (
    <div className="panel p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-terminal-text font-medium">Equity Curve</h3>
        <div className="flex items-center gap-2 text-xs text-terminal-muted">
          <span className="w-3 h-0.5 bg-terminal-green rounded"></span>
          <span>Account Value</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            stroke="#666666"
            tick={{ fill: "#666666", fontSize: 11 }}
            tickLine={{ stroke: "#1f1f1f" }}
            interval="preserveStartEnd"
          />
          <YAxis
            tickFormatter={formatCurrency}
            stroke="#666666"
            tick={{ fill: "#666666", fontSize: 11 }}
            tickLine={{ stroke: "#1f1f1f" }}
            domain={[minEquity - padding, maxEquity + padding]}
            width={70}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="equity"
            stroke="#00ff88"
            strokeWidth={2}
            fill="url(#equityGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
