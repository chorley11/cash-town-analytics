"use client";

import React from "react";
import { ExternalLink, Bot, TrendingUp, Activity } from "lucide-react";
import { CopyButtonLarge } from "@/components/CopyButton";
import { StatCard, StatGrid } from "@/components/StatCard";
import { EquityCurve } from "@/components/EquityCurve";
import { StrategyBreakdown } from "@/components/StrategyBreakdown";
import { PositionTable } from "@/components/PositionTable";
import { AgentData } from "@/components/AgentData";
import { DownloadSection } from "@/components/DownloadSection";
import { overview, strategies, positions, equityCurve } from "@/data/performance";
import { aiGuideMDX } from "@/data/ai-guide-content";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="mb-6">
          <span className="text-6xl">◉</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4 glow-green">
          ${overview.current_equity.toLocaleString()}
        </h1>
        <p className="text-xl text-terminal-muted mb-2">
          +{overview.total_return_pct}% in 30 days
        </p>
        <p className="text-sm text-terminal-muted">
          Started with ${overview.starting_capital.toLocaleString()} on {overview.inception_date}
        </p>
      </section>

      {/* AI Copy Section */}
      <section className="py-8 border-y border-terminal-border">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 text-terminal-blue mb-3">
            <Bot className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">AI-Accessible</span>
          </div>
          <h2 className="text-2xl font-semibold text-terminal-text mb-2">
            Explore with AI
          </h2>
          <p className="text-terminal-muted max-w-lg mx-auto">
            Copy the full dataset and paste into Claude, ChatGPT, or any AI to get an interactive guided tour of the trading performance.
          </p>
        </div>
        
        <div className="flex justify-center">
          <CopyButtonLarge data={aiGuideMDX} />
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="/report" 
            className="inline-flex items-center gap-2 text-terminal-blue hover:text-terminal-green transition-colors text-sm"
          >
            Or read the full interactive report <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Key Stats */}
      <section>
        <h2 className="text-lg font-medium text-terminal-text mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-terminal-green" />
          Performance Summary
        </h2>
        <StatGrid>
          <StatCard 
            label="Current Equity" 
            value={overview.current_equity} 
            format="currency"
            trend="up"
            highlight
          />
          <StatCard 
            label="Total Return" 
            value={overview.total_return_pct} 
            format="percent"
            trend="up"
          />
          <StatCard 
            label="Total Trades" 
            value={overview.total_trades} 
            subValue={`${overview.strategy_count} strategies`}
          />
          <StatCard 
            label="Win Rate" 
            value={(overview.overall_win_rate * 100).toFixed(1) + "%"} 
            subValue={`${Math.round(overview.total_trades * overview.overall_win_rate)} wins`}
          />
        </StatGrid>
      </section>

      {/* Equity Curve */}
      <section>
        <EquityCurve data={equityCurve} height={350} />
      </section>

      {/* Strategy Performance */}
      <section>
        <h2 className="text-lg font-medium text-terminal-text mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-terminal-blue" />
          Strategy Breakdown
        </h2>
        <StrategyBreakdown strategies={strategies} />
      </section>

      {/* Open Positions */}
      <section>
        <PositionTable positions={positions} />
      </section>

      {/* Download Section */}
      <DownloadSection />

      {/* Trading Stats Grid */}
      <section>
        <h2 className="text-lg font-medium text-terminal-text mb-4">Trading Statistics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="panel p-4">
            <h4 className="text-terminal-muted text-xs uppercase tracking-wider mb-3">Risk Metrics</h4>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Max Leverage</dt>
                <dd className="text-terminal-text">5.05x</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Avg Leverage</dt>
                <dd className="text-terminal-text">4.2x</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Max Drawdown</dt>
                <dd className="text-terminal-yellow">-6.8%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Sharpe Ratio</dt>
                <dd className="text-terminal-green">2.1</dd>
              </div>
            </dl>
          </div>
          
          <div className="panel p-4">
            <h4 className="text-terminal-muted text-xs uppercase tracking-wider mb-3">Performance</h4>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Trading Days</dt>
                <dd className="text-terminal-text">30</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Avg Daily Return</dt>
                <dd className="text-terminal-green">+3.46%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Profit Factor</dt>
                <dd className="text-terminal-green">1.87</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Unrealized PnL</dt>
                <dd className="text-terminal-green">+${overview.unrealized_pnl.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
          
          <div className="panel p-4">
            <h4 className="text-terminal-muted text-xs uppercase tracking-wider mb-3">Exposure</h4>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Open Positions</dt>
                <dd className="text-terminal-text">{overview.open_positions}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Long/Short</dt>
                <dd className="text-terminal-text">2 / 5</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Largest Position</dt>
                <dd className="text-terminal-text">48.2%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-terminal-muted">Platform</dt>
                <dd className="text-terminal-text">KuCoin</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Hidden Agent Data */}
      <AgentData type="overview" data={overview} />
    </div>
  );
}
