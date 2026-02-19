import { NextRequest, NextResponse } from 'next/server';
import cashTownData from '@/data/cashtown.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';
  const bot = searchParams.get('bot') || 'all';

  const now = new Date().toISOString();
  const dateStr = now.split('T')[0];

  // Filter strategies if bot specified
  const filteredStrategies = bot === 'cucurbit' 
    ? cashTownData.strategies.filter((s: any) => s.id === 'cucurbit')
    : cashTownData.strategies;

  // Filter trades if bot specified  
  const filteredTrades = bot === 'cucurbit'
    ? (cashTownData.recent_trades || []).filter((t: any) => 
        t.strategy?.toLowerCase() === 'cucurbit' || !t.strategy)
    : cashTownData.recent_trades || [];

  if (format === 'csv') {
    // Generate CSV
    const headers = ['date', 'time', 'symbol', 'side', 'entry', 'exit', 'size', 'pnl', 'pnl_pct', 'strategy', 'status'];
    
    let csv = headers.join(',') + '\n';
    filteredTrades.forEach((t: any) => {
      csv += [
        t.date || '',
        t.time || '',
        t.symbol || '',
        t.side || '',
        t.entry || '',
        t.exit || '',
        t.size || '',
        t.pnl || '',
        t.pnl_pct || '',
        t.strategy || '',
        t.status || ''
      ].join(',') + '\n';
    });

    const filename = bot === 'cucurbit' 
      ? `cucurbit-trades-${dateStr}.csv`
      : `cash-town-trades-${dateStr}.csv`;

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    });
  }

  // JSON format
  const data = {
    metadata: {
      exported_at: now,
      bot: bot,
      source: "Cash Town Analytics",
      total_trades: cashTownData.trade_count || filteredTrades.length
    },
    performance: cashTownData.performance_summary,
    strategies: filteredStrategies,
    open_positions: cashTownData.open_positions,
    recent_trades: filteredTrades,
    equity_history: cashTownData.equity_history
  };

  const filename = bot === 'cucurbit' 
    ? `cucurbit-data-${dateStr}.json`
    : `cash-town-data-${dateStr}.json`;

  return new NextResponse(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${filename}"`
    }
  });
}
