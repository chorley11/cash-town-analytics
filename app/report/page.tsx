"use client";

import React from "react";
import { Bot, Copy, TrendingUp, Activity, Shield, Zap } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { StatCard, StatGrid } from "@/components/StatCard";
import { EquityCurve } from "@/components/EquityCurve";
import { StrategyGrid } from "@/components/StrategyCard";
import { TradeTable } from "@/components/TradeTable";
import { PositionTable } from "@/components/PositionTable";
import { StrategyBreakdown } from "@/components/StrategyBreakdown";
import { AgentData } from "@/components/AgentData";
import { 
  overview, 
  strategies, 
  positions, 
  equityCurve, 
  recentTrades,
  fullDataForAI 
} from "@/data/performance";

export default function ReportPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-terminal-border">
        <div>
          <h1 className="text-3xl font-bold text-terminal-text mb-2">
            Cash Town Analytics Report
          </h1>
          <p className="text-terminal-muted">
            Complete performance analysis • Updated {new Date(overview.snapshot_time).toLocaleString()}
          </p>
        </div>
        <CopyButton data={fullDataForAI} label="Copy Full Report for AI" />
      </header>

      {/* Executive Summary */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-terminal-green" />
          <h2 className="text-xl font-semibold text-terminal-text">Executive Summary</h2>
        </div>
        
        <div className="panel p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-terminal-muted leading-relaxed mb-4">
                Cash Town is a fully automated multi-strategy crypto futures trading system operating 
                on KuCoin Futures. The system employs {strategies.length} distinct trading strategies, 
                ranging from ML-driven momentum to classic technical analysis approaches.
              </p>
              <p className="text-terminal-muted leading-relaxed">
                Since inception on <strong className="text-terminal-text">{overview.inception_date}</strong> with 
                ${overview.starting_capital.toLocaleString()}, the system has generated a 
                <strong className="text-terminal-green"> +{overview.total_return_pct}% return</strong> over 
                approximately 30 days of live trading.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <span className="text-terminal-muted">Starting Capital</span>
                <span className="text-terminal-text font-medium">${overview.starting_capital.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <span className="text-terminal-muted">Current Equity</span>
                <span className="text-terminal-green font-bold text-lg">${overview.current_equity.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <span className="text-terminal-muted">Total Return</span>
                <span className="text-terminal-green font-medium">+{overview.total_return_pct}%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <span className="text-terminal-muted">Total Trades</span>
                <span className="text-terminal-text font-medium">{overview.total_trades}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-terminal-muted">Win Rate</span>
                <span className="text-terminal-text font-medium">{(overview.overall_win_rate * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
        
        <StatGrid>
          <StatCard label="Trading Days" value={30} />
          <StatCard label="Avg Daily Return" value={3.46} format="percent" trend="up" />
          <StatCard label="Active Strategies" value={overview.strategy_count} />
          <StatCard label="Open Positions" value={overview.open_positions} />
        </StatGrid>
      </section>

      {/* Equity Curve */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-terminal-blue" />
          <h2 className="text-xl font-semibold text-terminal-text">Equity Curve</h2>
        </div>
        <EquityCurve data={equityCurve} height={400} />
        <p className="text-xs text-terminal-muted mt-2">
          Account equity over time. The curve shows steady growth with occasional drawdowns during market volatility.
        </p>
      </section>

      {/* Strategy Analysis */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-terminal-yellow" />
          <h2 className="text-xl font-semibold text-terminal-text">Strategy Analysis</h2>
        </div>
        
        <div className="mb-6">
          <StrategyBreakdown strategies={strategies} />
        </div>
        
        <StrategyGrid strategies={strategies} />
        
        <div className="panel p-4 mt-6">
          <h3 className="text-terminal-text font-medium mb-3">Strategy Notes</h3>
          <ul className="space-y-2 text-sm text-terminal-muted">
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span><strong>Cucurbit</strong> accounts for 92% of total PnL despite a sub-50% win rate, demonstrating strong risk/reward management.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green">•</span>
              <span><strong>Trend Following</strong> and <strong>Synced</strong> provide consistent secondary returns with lower volatility.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-yellow">•</span>
              <span><strong>BTS Lynch</strong> and <strong>Zweig</strong> are underperforming strategies currently under review for parameter tuning.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Open Positions */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-terminal-blue" />
          <h2 className="text-xl font-semibold text-terminal-text">Current Exposure</h2>
        </div>
        <PositionTable positions={positions} />
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="panel p-4">
            <h4 className="text-terminal-muted text-xs uppercase tracking-wider mb-3">Position Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-terminal-muted">Long Positions</span>
                <span className="text-terminal-green">2 (28.6%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-terminal-muted">Short Positions</span>
                <span className="text-terminal-red">5 (71.4%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-terminal-muted">Net Exposure</span>
                <span className="text-terminal-red">Short-biased</span>
              </div>
            </div>
          </div>
          <div className="panel p-4">
            <h4 className="text-terminal-muted text-xs uppercase tracking-wider mb-3">Risk Assessment</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-terminal-muted">Avg Leverage</span>
                <span className="text-terminal-text">4.2x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-terminal-muted">Margin Utilization</span>
                <span className="text-terminal-text">41%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-terminal-muted">Liquidation Risk</span>
                <span className="text-terminal-green">Low</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Trades */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-terminal-text">Recent Trade History</h2>
          <span className="text-xs text-terminal-muted">Last 10 trades</span>
        </div>
        <TradeTable trades={recentTrades} />
      </section>

      {/* Risk Management */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-terminal-yellow" />
          <h2 className="text-xl font-semibold text-terminal-text">Risk Management</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="panel p-6">
            <h3 className="text-terminal-text font-medium mb-4">Risk Controls</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2"></span>
                <div>
                  <strong className="text-terminal-text">Position Sizing</strong>
                  <p className="text-terminal-muted">Max 5% of equity per position, ATR-based sizing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2"></span>
                <div>
                  <strong className="text-terminal-text">Stop Losses</strong>
                  <p className="text-terminal-muted">All trades have stops, typically 1-2% risk per trade</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2"></span>
                <div>
                  <strong className="text-terminal-text">Correlation Filter</strong>
                  <p className="text-terminal-muted">Limits exposure to correlated assets</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2"></span>
                <div>
                  <strong className="text-terminal-text">Max Drawdown Circuit Breaker</strong>
                  <p className="text-terminal-muted">Reduces exposure after significant losses</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="panel p-6">
            <h3 className="text-terminal-text font-medium mb-4">Risk Metrics</h3>
            <dl className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <dt className="text-terminal-muted">Max Drawdown</dt>
                <dd className="text-terminal-yellow font-medium">-6.8%</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <dt className="text-terminal-muted">Sharpe Ratio</dt>
                <dd className="text-terminal-green font-medium">2.1</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <dt className="text-terminal-muted">Profit Factor</dt>
                <dd className="text-terminal-green font-medium">1.87</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-terminal-border/50">
                <dt className="text-terminal-muted">Average Leverage</dt>
                <dd className="text-terminal-text font-medium">4.2x</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-terminal-muted">Max Leverage</dt>
                <dd className="text-terminal-text font-medium">5.05x</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="panel p-6 bg-terminal-yellow/5 border-terminal-yellow/30">
        <h3 className="text-terminal-yellow font-medium mb-2">⚠️ Important Disclaimer</h3>
        <p className="text-sm text-terminal-muted leading-relaxed">
          This report represents approximately 30 days of live trading data. Past performance does not 
          guarantee future results. Crypto futures trading involves substantial risk of loss and is not 
          suitable for all investors. The high degree of leverage can work against you as well as for you. 
          Before deciding to trade, you should carefully consider your investment objectives, level of 
          experience, and risk appetite.
        </p>
      </section>

      {/* AI Section */}
      <section className="panel p-6 text-center">
        <Bot className="w-8 h-8 text-terminal-blue mx-auto mb-4" />
        <h3 className="text-lg font-medium text-terminal-text mb-2">Explore with AI</h3>
        <p className="text-terminal-muted mb-4 max-w-lg mx-auto">
          Copy this entire report and paste it into your favorite AI assistant for an interactive 
          exploration of the trading performance, strategy analysis, and risk metrics.
        </p>
        <CopyButton data={fullDataForAI} label="Copy Full Data (~25KB)" />
      </section>

      {/* Hidden Agent Data */}
      <AgentData type="full" data={fullDataForAI} />
    </div>
  );
}
