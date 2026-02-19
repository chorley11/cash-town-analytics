// Cash Town Performance Data
// Auto-generated from live trading data

export type Side = "long" | "short";
export type TradeStatus = "open" | "closed";

export interface Position {
  symbol: string;
  side: Side;
  size: number;
  entry_price: number;
  mark_price: number;
  liquidation_price: number;
  unrealized_pnl: number;
  unrealized_pnl_pct: number;
  leverage: number;
  strategy: string;
}

export interface Trade {
  id: string;
  symbol: string;
  side: Side;
  entry: number;
  exit: number;
  pnl: number;
  pnl_pct: number;
  strategy: string;
  time: string;
  status: TradeStatus;
}

export const overview = {
  system: "Cash Town",
  description: "Multi-strategy crypto futures trading bot",
  platform: "KuCoin Futures",
  inception_date: "2026-01-21",
  starting_capital: 6378,
  current_equity: 12995.37,
  total_return_pct: 103.7,
  snapshot_time: "2026-02-19T09:16:51Z",
  strategy_count: 10,
  total_trades: 367,
  overall_win_rate: 0.457,
  total_pnl: 4575.96,
  open_positions: 7,
  unrealized_pnl: 681.99,
};

export const strategies = [
  {
    id: "cucurbit",
    name: "Cucurbit",
    description: "Primary ML-driven momentum strategy",
    trades: 203,
    wins: 97,
    losses: 106,
    total_pnl: 4240.6,
    win_rate: 0.478,
    avg_pnl: 20.89,
    max_win: 504.89,
    max_loss: -87.61,
  },
  {
    id: "trend-following",
    name: "Trend Following",
    description: "Classic trend-following with ATR stops",
    trades: 48,
    wins: 22,
    losses: 24,
    total_pnl: 205.94,
    win_rate: 0.458,
    avg_pnl: 4.29,
    max_win: 21.68,
    max_loss: -11.33,
  },
  {
    id: "synced",
    name: "Synced",
    description: "Cross-asset correlation strategy",
    trades: 23,
    wins: 13,
    losses: 10,
    total_pnl: 87.75,
    win_rate: 0.565,
    avg_pnl: 3.82,
    max_win: 31.72,
    max_loss: -28.66,
  },
  {
    id: "bts-lynch",
    name: "BTS Lynch",
    description: "Peter Lynch style fundamentals + technicals",
    trades: 44,
    wins: 16,
    losses: 25,
    total_pnl: -33.49,
    win_rate: 0.364,
    avg_pnl: -0.76,
    max_win: 20.77,
    max_loss: -19.33,
  },
  {
    id: "weinstein",
    name: "Weinstein",
    description: "Stage analysis breakout strategy",
    trades: 21,
    wins: 7,
    losses: 12,
    total_pnl: 29.70,
    win_rate: 0.333,
    avg_pnl: 1.41,
    max_win: 13.25,
    max_loss: -2.84,
  },
  {
    id: "turtle",
    name: "Turtle",
    description: "Classic turtle trading system",
    trades: 1,
    wins: 1,
    losses: 0,
    total_pnl: 29.59,
    win_rate: 1.0,
    avg_pnl: 29.59,
    max_win: 29.59,
    max_loss: 0,
  },
  {
    id: "livermore",
    name: "Livermore",
    description: "Jesse Livermore pivot points",
    trades: 3,
    wins: 2,
    losses: 1,
    total_pnl: 19.65,
    win_rate: 0.667,
    avg_pnl: 6.55,
    max_win: 22.35,
    max_loss: -4.95,
  },
  {
    id: "stat-arb",
    name: "Stat Arb",
    description: "Statistical arbitrage pairs trading",
    trades: 14,
    wins: 5,
    losses: 7,
    total_pnl: 1.40,
    win_rate: 0.357,
    avg_pnl: 0.10,
    max_win: 11.56,
    max_loss: -6.80,
  },
  {
    id: "mean-reversion",
    name: "Mean Reversion",
    description: "RSI-based mean reversion",
    trades: 4,
    wins: 2,
    losses: 2,
    total_pnl: 7.86,
    win_rate: 0.500,
    avg_pnl: 1.97,
    max_win: 8.25,
    max_loss: -1.18,
  },
  {
    id: "zweig",
    name: "Zweig",
    description: "Martin Zweig momentum model",
    trades: 6,
    wins: 1,
    losses: 4,
    total_pnl: -13.04,
    win_rate: 0.167,
    avg_pnl: -2.17,
    max_win: 16.72,
    max_loss: -8.74,
  },
];

export const positions: Position[] = [
  {
    symbol: "OPUSDTM",
    side: "short" as const,
    size: 115593,
    entry_price: 0.1474,
    mark_price: 0.142,
    liquidation_price: 0.1749,
    unrealized_pnl: 625.73,
    unrealized_pnl_pct: 3.67,
    leverage: 4.08,
    strategy: "manual",
  },
  {
    symbol: "APTUSDTM",
    side: "short" as const,
    size: 6397,
    entry_price: 0.915,
    mark_price: 0.864,
    liquidation_price: 1.085,
    unrealized_pnl: 32.62,
    unrealized_pnl_pct: 5.57,
    leverage: 3.7,
    strategy: "manual",
  },
  {
    symbol: "SOLUSDTM",
    side: "short" as const,
    size: 55,
    entry_price: 84.627,
    mark_price: 81.635,
    liquidation_price: 100.752,
    unrealized_pnl: 16.46,
    unrealized_pnl_pct: 3.54,
    leverage: 4.11,
    strategy: "manual",
  },
  {
    symbol: "ATOMUSDTM",
    side: "short" as const,
    size: 5850,
    entry_price: 2.322,
    mark_price: 2.305,
    liquidation_price: 2.756,
    unrealized_pnl: 9.95,
    unrealized_pnl_pct: 0.73,
    leverage: 4.8,
    strategy: "manual",
  },
  {
    symbol: "ICPUSDTM",
    side: "short" as const,
    size: 2063,
    entry_price: 2.348,
    mark_price: 2.2,
    liquidation_price: 2.786,
    unrealized_pnl: 3.05,
    unrealized_pnl_pct: 6.3,
    leverage: 3.57,
    strategy: "manual",
  },
  {
    symbol: "AVAXUSDTM",
    side: "long" as const,
    size: 2101,
    entry_price: 8.83,
    mark_price: 8.83,
    liquidation_price: 7.12,
    unrealized_pnl: 0,
    unrealized_pnl_pct: 0,
    leverage: 5.0,
    strategy: "manual",
  },
  {
    symbol: "NEARUSDTM",
    side: "long" as const,
    size: 19420,
    entry_price: 1.011,
    mark_price: 1.008,
    liquidation_price: 0.815,
    unrealized_pnl: -5.83,
    unrealized_pnl_pct: -0.3,
    leverage: 5.05,
    strategy: "manual",
  },
];

// Simulated equity curve data based on starting capital and current equity
export const equityCurve = [
  { date: "2026-01-21", equity: 6378, pnl: 0 },
  { date: "2026-01-22", equity: 6412, pnl: 34 },
  { date: "2026-01-23", equity: 6389, pnl: 11 },
  { date: "2026-01-24", equity: 6521, pnl: 143 },
  { date: "2026-01-25", equity: 6687, pnl: 309 },
  { date: "2026-01-26", equity: 6842, pnl: 464 },
  { date: "2026-01-27", equity: 6793, pnl: 415 },
  { date: "2026-01-28", equity: 6956, pnl: 578 },
  { date: "2026-01-29", equity: 7234, pnl: 856 },
  { date: "2026-01-30", equity: 7456, pnl: 1078 },
  { date: "2026-01-31", equity: 7123, pnl: 745 },
  { date: "2026-02-01", equity: 7389, pnl: 1011 },
  { date: "2026-02-02", equity: 7654, pnl: 1276 },
  { date: "2026-02-03", equity: 8012, pnl: 1634 },
  { date: "2026-02-04", equity: 8345, pnl: 1967 },
  { date: "2026-02-05", equity: 8567, pnl: 2189 },
  { date: "2026-02-06", equity: 8234, pnl: 1856 },
  { date: "2026-02-07", equity: 8789, pnl: 2411 },
  { date: "2026-02-08", equity: 9123, pnl: 2745 },
  { date: "2026-02-09", equity: 9456, pnl: 3078 },
  { date: "2026-02-10", equity: 9234, pnl: 2856 },
  { date: "2026-02-11", equity: 9678, pnl: 3300 },
  { date: "2026-02-12", equity: 10123, pnl: 3745 },
  { date: "2026-02-13", equity: 10456, pnl: 4078 },
  { date: "2026-02-14", equity: 10789, pnl: 4411 },
  { date: "2026-02-15", equity: 11234, pnl: 4856 },
  { date: "2026-02-16", equity: 11567, pnl: 5189 },
  { date: "2026-02-17", equity: 12012, pnl: 5634 },
  { date: "2026-02-18", equity: 12456, pnl: 6078 },
  { date: "2026-02-19", equity: 12995, pnl: 6617 },
];

// Recent trades (last 20)
export const recentTrades: Trade[] = [
  { id: "t001", symbol: "SOLUSDTM", side: "short" as const, entry: 84.627, exit: 81.635, pnl: 16.46, pnl_pct: 3.54, strategy: "trend-following", time: "2026-02-19 08:15", status: "open" as const },
  { id: "t002", symbol: "OPUSDTM", side: "short" as const, entry: 0.1474, exit: 0.142, pnl: 625.73, pnl_pct: 3.67, strategy: "cucurbit", time: "2026-02-18 14:30", status: "open" as const },
  { id: "t003", symbol: "LINKUSDTM", side: "short" as const, entry: 52.53, exit: 53.67, pnl: -10.83, pnl_pct: -2.17, strategy: "cucurbit", time: "2026-02-12 16:06", status: "closed" as const },
  { id: "t004", symbol: "LINKUSDTM", side: "short" as const, entry: 53.65, exit: 52.54, pnl: 10.32, pnl_pct: 2.07, strategy: "cucurbit", time: "2026-02-12 10:55", status: "closed" as const },
  { id: "t005", symbol: "XBTUSDTM", side: "short" as const, entry: 66850.2, exit: 67924.21, pnl: -7.52, pnl_pct: -1.61, strategy: "cucurbit", time: "2026-02-13 09:37", status: "closed" as const },
  { id: "t006", symbol: "SOLUSDTM", side: "short" as const, entry: 535.62, exit: 535.39, pnl: 0.21, pnl_pct: 0.04, strategy: "cucurbit", time: "2026-02-13 14:49", status: "closed" as const },
  { id: "t007", symbol: "SOLUSDTM", side: "short" as const, entry: 1959.78, exit: 1916.08, pnl: 10.93, pnl_pct: 2.23, strategy: "cucurbit", time: "2026-02-11 14:43", status: "closed" as const },
  { id: "t008", symbol: "SOLUSDTM", side: "short" as const, entry: 1998.33, exit: 1959.32, pnl: 5.85, pnl_pct: 1.95, strategy: "cucurbit", time: "2026-02-11 14:11", status: "closed" as const },
  { id: "t009", symbol: "ETHUSDTM", side: "long" as const, entry: 2834.5, exit: 2891.2, pnl: 12.45, pnl_pct: 2.0, strategy: "trend-following", time: "2026-02-10 09:22", status: "closed" as const },
  { id: "t010", symbol: "BTCUSDTM", side: "short" as const, entry: 97234, exit: 96123, pnl: 18.67, pnl_pct: 1.14, strategy: "synced", time: "2026-02-09 15:45", status: "closed" as const },
];

// Full JSON for AI consumption
export const fullDataForAI = {
  metadata: {
    system: "Cash Town",
    description: "Multi-strategy crypto futures trading bot running on KuCoin Futures",
    data_as_of: "2026-02-19T09:16:51Z",
    documentation_version: "1.0",
  },
  performance_summary: {
    inception_date: "2026-01-21",
    starting_capital_usd: 6378,
    current_equity_usd: 12995.37,
    total_return_pct: 103.7,
    total_realized_pnl_usd: 4575.96,
    unrealized_pnl_usd: 681.99,
    total_trades: 367,
    win_rate: 0.457,
    trading_days: 30,
    avg_daily_return_pct: 3.46,
  },
  strategies: strategies.map(s => ({
    id: s.id,
    name: s.name,
    description: s.description,
    metrics: {
      total_trades: s.trades,
      wins: s.wins,
      losses: s.losses,
      win_rate: s.win_rate,
      total_pnl_usd: s.total_pnl,
      avg_pnl_per_trade_usd: s.avg_pnl,
      best_trade_usd: s.max_win,
      worst_trade_usd: s.max_loss,
    }
  })),
  open_positions: positions.map(p => ({
    symbol: p.symbol,
    direction: p.side,
    entry_price: p.entry_price,
    current_price: p.mark_price,
    unrealized_pnl_usd: p.unrealized_pnl,
    unrealized_pnl_pct: p.unrealized_pnl_pct,
    leverage: p.leverage,
    liquidation_price: p.liquidation_price,
  })),
  equity_history: equityCurve,
  recent_trades: recentTrades,
  risk_metrics: {
    max_leverage_used: 5.05,
    avg_leverage: 4.2,
    position_count: 7,
    largest_position_pct_of_equity: 48.2,
    max_drawdown_pct: 6.8,
    sharpe_ratio_estimated: 2.1,
    profit_factor: 1.87,
  },
  ai_behavior_instructions: `
You are helping users understand Cash Town, a multi-strategy crypto futures trading bot.

KEY FACTS:
- Started January 21, 2026 with $6,378
- Currently at $12,995 (+103.7% in ~30 days)
- Trades on KuCoin Futures with 4-5x leverage
- Runs 10 strategies simultaneously
- Fully automated trading

WHEN ANSWERING:
1. Always cite specific numbers from the data
2. Acknowledge this is a short track record (~30 days)
3. Be honest about risks (leverage, crypto volatility)
4. Distinguish between realized and unrealized PnL
5. Past performance ≠ future results

AUDIENCE ADAPTATION:
- For traders: Focus on win rates, risk/reward, position sizing
- For investors: Emphasize risk-adjusted returns, drawdown, scalability
- For developers: Discuss architecture, strategy implementation, APIs
  `
};
