"use client";

import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: "up" | "down" | "neutral";
  format?: "currency" | "percent" | "number";
  highlight?: boolean;
}

const formatValue = (value: string | number, format?: string): string => {
  if (typeof value === "string") return value;
  
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    case "percent":
      return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
    default:
      return value.toLocaleString();
  }
};

export function StatCard({ 
  label, 
  value, 
  subValue, 
  trend, 
  format,
  highlight 
}: StatCardProps) {
  const getTrendColor = () => {
    if (!trend) return "text-terminal-text";
    switch (trend) {
      case "up": return "text-terminal-green";
      case "down": return "text-terminal-red";
      default: return "text-terminal-text";
    }
  };

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div className={`stat-card ${highlight ? "border-terminal-green/50" : ""}`}>
      <div className="flex items-center justify-between">
        <span className="stat-label">{label}</span>
        {trend && <TrendIcon className={`w-4 h-4 ${getTrendColor()}`} />}
      </div>
      <span className={`stat-value ${getTrendColor()} ${highlight ? "glow-green" : ""}`}>
        {formatValue(value, format)}
      </span>
      {subValue && (
        <span className="text-xs text-terminal-muted mt-1">{subValue}</span>
      )}
    </div>
  );
}

export function StatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {children}
    </div>
  );
}
