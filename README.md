# Cash Town Analytics

A live data dashboard and AI-accessible documentation system for Cash Town, a multi-strategy crypto futures trading bot.

![Cash Town Analytics](https://img.shields.io/badge/Platform-KuCoin%20Futures-blue)
![Performance](https://img.shields.io/badge/Return-+103.7%25-brightgreen)
![Trades](https://img.shields.io/badge/Trades-367-orange)

## Features

- **📊 Live Performance Dashboard** - Real-time equity curve, strategy breakdown, and position monitoring
- **🤖 AI-Accessible Data** - Copy-paste the full dataset into any AI for interactive analysis
- **📈 Strategy Analysis** - Detailed performance metrics for all 10 trading strategies
- **📋 Trade History** - Sortable trade tables with filtering
- **🛡️ Risk Metrics** - Sharpe ratio, max drawdown, leverage analysis

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Bloomberg terminal aesthetic)
- **Charts:** Recharts
- **AI Layer:** JSON-LD structured data for AI consumption

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
cash-town-analytics/
├── app/
│   ├── page.tsx           # Landing page with key stats
│   ├── report/page.tsx    # Full interactive report
│   ├── layout.tsx         # Root layout with nav
│   └── globals.css        # Terminal styling
├── components/
│   ├── EquityCurve.tsx    # Interactive equity chart
│   ├── StrategyCard.tsx   # Strategy performance cards
│   ├── TradeTable.tsx     # Sortable trade history
│   ├── PositionTable.tsx  # Live position display
│   ├── CopyButton.tsx     # AI clipboard export
│   └── AgentData.tsx      # Hidden JSON for AI
├── data/
│   └── performance.ts     # All trading data
└── package.json
```

## Data Sources

Data is sourced from the live Cash Town trading bot:
- **Trades:** `~/.openclaw/workspace/projects/cash-town/data/trades_history.jsonl`
- **Positions:** `~/.openclaw/workspace/projects/cash-town/data/positions_snapshot.json`
- **Strategy Performance:** `~/.openclaw/workspace/projects/cash-town/data/strategy_performance.json`

## AI Integration

The dashboard includes a "Copy for AI" button that exports the complete dataset in JSON format. This includes:
- Performance summary
- All strategy metrics
- Open positions
- Equity history
- Risk metrics
- AI behavioral instructions

Paste into Claude, ChatGPT, or any AI assistant for interactive exploration.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables

None required for basic deployment. The data is bundled at build time.

## Performance Context

- **Started:** January 21, 2026
- **Starting Capital:** $6,378
- **Current Equity:** ~$12,995
- **Total Return:** +103.7%
- **Total Trades:** 367
- **Active Strategies:** 10
- **Platform:** KuCoin Futures

## License

Private - Internal use only.

---

Built with ♠️ by Cash Town
