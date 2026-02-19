"use client";

import React from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface StrategyCardProps {
  strategy: {
    id: string;
    name: string;
    description: string;
    trades: number;
    wins: number;
    losses: number;
    total_pnl: number;
    win_rate: number;
    avg_pnl: number;
    max_win: number;
    max_loss: number;
  };
  rank?: number;
}

const formatCurrency = (value: number, showSign = true) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));
  
  if (!showSign) return formatted;
  return value >= 0 ? `+${formatted}` : `-${formatted}`;
};

export function StrategyCard({ strategy, rank }: StrategyCardProps) {
  const isProfit = strategy.total_pnl >= 0;
  
  return (
    <div className={`panel p-4 hover:border-terminal-green/30 transition-colors ${
      rank === 1 ? "border-terminal-green/50" : ""
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            {rank && (
              <span className={`text-xs px-2 py-0.5 rounded ${
                rank === 1 ? "bg-terminal-green/20 text-terminal-green" : "bg-terminal-panel text-terminal-muted"
              }`}>
                #{rank}
              </span>
            )}
            <h4 className="font-medium text-terminal-text">{strategy.name}</h4>
          </div>
          <p className="text-xs text-terminal-muted mt-1">{strategy.description}</p>
        </div>
        <div className={`flex items-center gap-1 ${isProfit ? "text-terminal-green" : "text-terminal-red"}`}>
          {isProfit ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        </div>
      </div>
      
      <div className={`text-2xl font-bold mb-3 ${isProfit ? "text-terminal-green" : "text-terminal-red"}`}>
        {formatCurrency(strategy.total_pnl)}
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div>
          <span className="text-terminal-muted block">Trades</span>
          <span className="text-terminal-text font-medium">{strategy.trades}</span>
        </div>
        <div>
          <span className="text-terminal-muted block">Win Rate</span>
          <span className={`font-medium ${strategy.win_rate >= 0.5 ? "text-terminal-green" : "text-terminal-yellow"}`}>
            {(strategy.win_rate * 100).toFixed(1)}%
          </span>
        </div>
        <div>
          <span className="text-terminal-muted block">Avg PnL</span>
          <span className={`font-medium ${strategy.avg_pnl >= 0 ? "text-terminal-green" : "text-terminal-red"}`}>
            {formatCurrency(strategy.avg_pnl)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-terminal-border flex justify-between text-xs">
        <span className="text-terminal-muted">
          Best: <span className="text-terminal-green">{formatCurrency(strategy.max_win, false)}</span>
        </span>
        <span className="text-terminal-muted">
          Worst: <span className="text-terminal-red">-{formatCurrency(Math.abs(strategy.max_loss), false)}</span>
        </span>
      </div>
    </div>
  );
}

export function StrategyGrid({ strategies }: { strategies: StrategyCardProps["strategy"][] }) {
  // Sort by total PnL
  const sorted = [...strategies].sort((a, b) => b.total_pnl - a.total_pnl);
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sorted.map((strategy, index) => (
        <StrategyCard key={strategy.id} strategy={strategy} rank={index + 1} />
      ))}
    </div>
  );
}
