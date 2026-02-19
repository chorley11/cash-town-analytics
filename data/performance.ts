import cashTownData from './cashtown.json';

export const performanceData = cashTownData;

// Re-export for backward compatibility
export const {
  metadata,
  performance_summary: performanceSummary,
  strategies,
  open_positions: openPositions,
  equity_history: equityHistory,
  recent_trades: recentTrades,
  risk_metrics: riskMetrics,
  ai_behavior_instructions: aiBehaviorInstructions
} = cashTownData;
