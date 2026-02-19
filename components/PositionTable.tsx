"use client";

import React from "react";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface Position {
  symbol: string;
  side: "long" | "short";
  size: number;
  entry_price: number;
  mark_price: number;
  liquidation_price: number;
  unrealized_pnl: number;
  unrealized_pnl_pct: number;
  leverage: number;
  strategy: string;
}

interface PositionTableProps {
  positions: Position[];
}

const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));
  return value >= 0 ? `+${formatted}` : `-${formatted}`;
};

export function PositionTable({ positions }: PositionTableProps) {
  const totalUnrealizedPnl = positions.reduce((acc, p) => acc + p.unrealized_pnl, 0);
  
  return (
    <div className="panel overflow-hidden">
      <div className="p-4 border-b border-terminal-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-terminal-text font-medium">Open Positions</h3>
          <span className="text-xs px-2 py-0.5 rounded bg-terminal-blue/20 text-terminal-blue">
            {positions.length} active
          </span>
        </div>
        <div className={`text-sm font-medium ${totalUnrealizedPnl >= 0 ? "text-terminal-green" : "text-terminal-red"}`}>
          Unrealized: {formatCurrency(totalUnrealizedPnl)}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr className="bg-terminal-panel/50">
              <th className="px-4">Symbol</th>
              <th className="px-4">Side</th>
              <th className="px-4">Size</th>
              <th className="px-4">Entry</th>
              <th className="px-4">Mark</th>
              <th className="px-4">Liq. Price</th>
              <th className="px-4">PnL</th>
              <th className="px-4">%</th>
              <th className="px-4">Leverage</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => {
              // Calculate distance to liquidation
              const distanceToLiq = position.side === "long"
                ? ((position.mark_price - position.liquidation_price) / position.mark_price) * 100
                : ((position.liquidation_price - position.mark_price) / position.mark_price) * 100;
              const isNearLiq = distanceToLiq < 15;

              return (
                <tr key={position.symbol}>
                  <td className="px-4 font-medium text-terminal-text">
                    {position.symbol.replace("USDTM", "")}
                  </td>
                  <td className="px-4">
                    <span className={`flex items-center gap-1 ${
                      position.side === "long" ? "text-terminal-green" : "text-terminal-red"
                    }`}>
                      {position.side === "long" 
                        ? <TrendingUp className="w-3 h-3" /> 
                        : <TrendingDown className="w-3 h-3" />
                      }
                      {position.side.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-4 text-terminal-muted">
                    {position.size.toLocaleString()}
                  </td>
                  <td className="px-4 text-terminal-text">
                    ${position.entry_price}
                  </td>
                  <td className="px-4 text-terminal-text">
                    ${position.mark_price}
                  </td>
                  <td className="px-4">
                    <span className={`flex items-center gap-1 ${isNearLiq ? "text-terminal-yellow" : "text-terminal-muted"}`}>
                      {isNearLiq && <AlertTriangle className="w-3 h-3" />}
                      ${position.liquidation_price}
                    </span>
                  </td>
                  <td className={`px-4 font-medium ${
                    position.unrealized_pnl >= 0 ? "text-terminal-green" : "text-terminal-red"
                  }`}>
                    {formatCurrency(position.unrealized_pnl)}
                  </td>
                  <td className={`px-4 ${
                    position.unrealized_pnl_pct >= 0 ? "text-terminal-green" : "text-terminal-red"
                  }`}>
                    {position.unrealized_pnl_pct >= 0 ? "+" : ""}{position.unrealized_pnl_pct.toFixed(2)}%
                  </td>
                  <td className="px-4 text-terminal-muted">
                    {position.leverage.toFixed(1)}x
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
