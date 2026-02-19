"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";

interface Trade {
  id: string;
  symbol: string;
  side: "long" | "short";
  entry: number;
  exit: number;
  pnl: number;
  pnl_pct: number;
  strategy: string;
  time: string;
  status: "open" | "closed";
}

interface TradeTableProps {
  trades: Trade[];
  title?: string;
  showStatus?: boolean;
}

type SortKey = "symbol" | "pnl" | "pnl_pct" | "strategy" | "time";
type SortDir = "asc" | "desc";

const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));
  return value >= 0 ? `+${formatted}` : `-${formatted}`;
};

export function TradeTable({ trades, title = "Recent Trades", showStatus = true }: TradeTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("time");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const sortedTrades = [...trades].sort((a, b) => {
    let comparison = 0;
    switch (sortKey) {
      case "symbol":
        comparison = a.symbol.localeCompare(b.symbol);
        break;
      case "pnl":
        comparison = a.pnl - b.pnl;
        break;
      case "pnl_pct":
        comparison = a.pnl_pct - b.pnl_pct;
        break;
      case "strategy":
        comparison = a.strategy.localeCompare(b.strategy);
        break;
      case "time":
        comparison = new Date(a.time).getTime() - new Date(b.time).getTime();
        break;
    }
    return sortDir === "asc" ? comparison : -comparison;
  });

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <ArrowUpDown className="w-3 h-3 opacity-50" />;
    return sortDir === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
  };

  return (
    <div className="panel overflow-hidden">
      <div className="p-4 border-b border-terminal-border">
        <h3 className="text-terminal-text font-medium">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr className="bg-terminal-panel/50">
              <th className="px-4 cursor-pointer hover:text-terminal-green" onClick={() => handleSort("symbol")}>
                <div className="flex items-center gap-1">
                  Symbol <SortIcon column="symbol" />
                </div>
              </th>
              <th className="px-4">Side</th>
              <th className="px-4">Entry</th>
              <th className="px-4">Exit</th>
              <th className="px-4 cursor-pointer hover:text-terminal-green" onClick={() => handleSort("pnl")}>
                <div className="flex items-center gap-1">
                  PnL <SortIcon column="pnl" />
                </div>
              </th>
              <th className="px-4 cursor-pointer hover:text-terminal-green" onClick={() => handleSort("pnl_pct")}>
                <div className="flex items-center gap-1">
                  % <SortIcon column="pnl_pct" />
                </div>
              </th>
              <th className="px-4 cursor-pointer hover:text-terminal-green" onClick={() => handleSort("strategy")}>
                <div className="flex items-center gap-1">
                  Strategy <SortIcon column="strategy" />
                </div>
              </th>
              <th className="px-4 cursor-pointer hover:text-terminal-green" onClick={() => handleSort("time")}>
                <div className="flex items-center gap-1">
                  Time <SortIcon column="time" />
                </div>
              </th>
              {showStatus && <th className="px-4">Status</th>}
            </tr>
          </thead>
          <tbody>
            {sortedTrades.map((trade) => (
              <tr key={trade.id}>
                <td className="px-4 font-medium text-terminal-text">{trade.symbol}</td>
                <td className="px-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    trade.side === "long" 
                      ? "bg-terminal-green/20 text-terminal-green" 
                      : "bg-terminal-red/20 text-terminal-red"
                  }`}>
                    {trade.side.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 text-terminal-muted">{trade.entry.toLocaleString()}</td>
                <td className="px-4 text-terminal-muted">{trade.exit.toLocaleString()}</td>
                <td className={`px-4 font-medium ${trade.pnl >= 0 ? "text-terminal-green" : "text-terminal-red"}`}>
                  {formatCurrency(trade.pnl)}
                </td>
                <td className={`px-4 ${trade.pnl_pct >= 0 ? "text-terminal-green" : "text-terminal-red"}`}>
                  {trade.pnl_pct >= 0 ? "+" : ""}{trade.pnl_pct.toFixed(2)}%
                </td>
                <td className="px-4 text-terminal-muted">{trade.strategy}</td>
                <td className="px-4 text-terminal-muted text-xs">{trade.time}</td>
                {showStatus && (
                  <td className="px-4">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      trade.status === "open" 
                        ? "bg-terminal-blue/20 text-terminal-blue" 
                        : "bg-terminal-muted/20 text-terminal-muted"
                    }`}>
                      {trade.status}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
