export const aiGuideMDX = `Create an interactive React artifact for the Cash Town trading bot. Show a welcome screen first with "What's your background?" and 4 buttons. On click, show the full dashboard.

\`\`\`jsx
import { useState } from 'react';

const P = {"start": 6378, "equity": 12636, "return": 98.1, "trades": 367, "wins": 167, "losses": 200, "winRate": 45.7, "pf": 5.42, "sharpe": 2.1, "dd": 6.8, "days": 30};
const S = [{"name": "Cucurbit", "trades": 203, "winRate": 47.8, "pnl": 4240.6, "desc": "Primary ML-driven momentum strategy"}, {"name": "Trend Following", "trades": 48, "winRate": 45.8, "pnl": 205.94, "desc": "Classic trend-following with ATR st"}, {"name": "Synced", "trades": 23, "winRate": 56.5, "pnl": 87.75, "desc": "Cross-asset correlation strategy"}, {"name": "Weinstein", "trades": 21, "winRate": 33.3, "pnl": 29.7, "desc": "Stage analysis breakout strategy"}, {"name": "Turtle", "trades": 1, "winRate": 100.0, "pnl": 29.59, "desc": "Classic turtle trading system"}, {"name": "Livermore", "trades": 3, "winRate": 66.7, "pnl": 19.65, "desc": "Jesse Livermore pivot points"}, {"name": "Mean Reversion", "trades": 4, "winRate": 50.0, "pnl": 7.86, "desc": "RSI-based mean reversion"}, {"name": "Stat Arb", "trades": 14, "winRate": 35.7, "pnl": 1.4, "desc": "Statistical arbitrage pairs trading"}, {"name": "Zweig", "trades": 6, "winRate": 16.7, "pnl": -13.04, "desc": "Martin Zweig momentum model"}, {"name": "BTS Lynch", "trades": 44, "winRate": 36.4, "pnl": -33.49, "desc": "Peter Lynch style fundamentals + te"}];
const POS = [{"symbol": "DOT", "side": "SHORT", "entry": 1.278, "current": 1.261, "pnl": 208.02}, {"symbol": "ARB", "side": "SHORT", "entry": 0.0981, "current": 0.0977, "pnl": 88.81}, {"symbol": "APT", "side": "SHORT", "entry": 0.915, "current": 0.838, "pnl": 49.26}, {"symbol": "LTC", "side": "SHORT", "entry": 52.58, "current": 51.43, "pnl": 32.52}, {"symbol": "LINK", "side": "SHORT", "entry": 8.5, "current": 8.349, "pnl": 27.1}, {"symbol": "SOL", "side": "SHORT", "entry": 84.627, "current": 79.954, "pnl": 25.7}, {"symbol": "RENDER", "side": "SHORT", "entry": 1.373, "current": 1.359, "pnl": 14.63}, {"symbol": "ATOM", "side": "SHORT", "entry": 2.322, "current": 2.298, "pnl": 14.05}, {"symbol": "ETH", "side": "SHORT", "entry": 1960.5, "current": 1907.27, "pnl": 6.92}, {"symbol": "ICP", "side": "SHORT", "entry": 2.348, "current": 2.136, "pnl": 4.37}, {"symbol": "BCH", "side": "SHORT", "entry": 547.66, "current": 546.35, "pnl": 0.66}, {"symbol": "AVAX", "side": "LONG", "entry": 8.83, "current": 8.75, "pnl": -16.81}];

const INTROS = {
  trader: "5.42 profit factor with 46.5% win rate — winners are 5x bigger than losers.",
  investor: "$6,378 → $12,636 in 30 days. +98% return, 2.1 Sharpe, 6.8% max drawdown.",
  developer: "13-strategy system on KuCoin Futures. Each strategy is a separate agent.",
  curious: "We let AI trade real money for 30 days. Here's what happened."
};

export default function App() {
  const [mode, setMode] = useState(null);
  const [tab, setTab] = useState('overview');

  if (!mode) return (
    <div style={{fontFamily:'system-ui',maxWidth:500,margin:'40px auto',textAlign:'center',padding:20}}>
      <div style={{fontSize:56}}>💰</div>
      <h1 style={{margin:'12px 0 4px'}}>Cash Town</h1>
      <p style={{color:'#666'}}>Multi-Strategy Crypto Futures Bot</p>
      <div style={{background:'linear-gradient(135deg,#10b981,#059669)',color:'white',padding:'14px 28px',borderRadius:20,fontSize:22,fontWeight:700,margin:'24px 0 32px',display:'inline-block'}}>
        $6,378 → $12,636
      </div>
      <h3 style={{marginBottom:20}}>What's your background?</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        <button onClick={()=>setMode('trader')} style={{padding:16,border:'2px solid #e5e7eb',borderRadius:10,background:'#fff',cursor:'pointer'}}>
          <div style={{fontSize:28}}>📈</div><div style={{fontWeight:600,marginTop:4}}>Trader</div>
        </button>
        <button onClick={()=>setMode('investor')} style={{padding:16,border:'2px solid #e5e7eb',borderRadius:10,background:'#fff',cursor:'pointer'}}>
          <div style={{fontSize:28}}>💼</div><div style={{fontWeight:600,marginTop:4}}>Investor</div>
        </button>
        <button onClick={()=>setMode('developer')} style={{padding:16,border:'2px solid #e5e7eb',borderRadius:10,background:'#fff',cursor:'pointer'}}>
          <div style={{fontSize:28}}>⚙️</div><div style={{fontWeight:600,marginTop:4}}>Developer</div>
        </button>
        <button onClick={()=>setMode('curious')} style={{padding:16,border:'2px solid #e5e7eb',borderRadius:10,background:'#fff',cursor:'pointer'}}>
          <div style={{fontSize:28}}>🔍</div><div style={{fontWeight:600,marginTop:4}}>Curious</div>
        </button>
      </div>
    </div>
  );

  return (
    <div style={{fontFamily:'system-ui',maxWidth:800,margin:'0 auto',padding:20}}>
      <div style={{textAlign:'center',marginBottom:20}}>
        <span style={{fontSize:36}}>💰</span>
        <h2 style={{margin:'8px 0'}}>Cash Town</h2>
        <div style={{background:'linear-gradient(135deg,#10b981,#059669)',color:'white',padding:'8px 20px',borderRadius:16,display:'inline-block',fontWeight:600}}>+{P.return}% in {P.days} days</div>
      </div>
      <div style={{background:'#f0f9ff',padding:14,borderRadius:8,marginBottom:20,textAlign:'center'}}>{INTROS[mode]}</div>
      <div style={{display:'flex',gap:8,justifyContent:'center',marginBottom:20}}>
        {['overview','strategies','positions','deploy'].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{padding:'8px 16px',border:'none',borderRadius:6,cursor:'pointer',background:tab===t?'#3b82f6':'#f3f4f6',color:tab===t?'#fff':'#333',fontWeight:tab===t?600:400}}>{t[0].toUpperCase()+t.slice(1)}</button>
        ))}
      </div>
      {tab==='overview'&&<div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:16}}>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Start</div><div style={{fontSize:18,fontWeight:700}}>${P.start.toLocaleString()}</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Now</div><div style={{fontSize:18,fontWeight:700,color:'#10b981'}}>${P.equity.toLocaleString()}</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Return</div><div style={{fontSize:18,fontWeight:700,color:'#10b981'}}>+{P.return}%</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Trades</div><div style={{fontSize:18,fontWeight:700}}>{P.trades}</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Wins</div><div style={{fontSize:18,fontWeight:700}}>{P.wins}</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Losses</div><div style={{fontSize:18,fontWeight:700}}>{P.losses}</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>PF</div><div style={{fontSize:18,fontWeight:700,color:'#10b981'}}>{P.pf}</div></div>
          <div style={{background:'#f9fafb',padding:12,borderRadius:8,textAlign:'center'}}><div style={{fontSize:11,color:'#666'}}>Sharpe</div><div style={{fontSize:18,fontWeight:700,color:'#3b82f6'}}>{P.sharpe}</div></div>
        </div>
      </div>}
      {tab==='strategies'&&<table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
        <thead><tr style={{background:'#f3f4f6'}}>
          <th style={{padding:10,textAlign:'left'}}>Strategy</th>
          <th style={{padding:10,textAlign:'right'}}>Trades</th>
          <th style={{padding:10,textAlign:'right'}}>Win%</th>
          <th style={{padding:10,textAlign:'right'}}>PnL</th>
        </tr></thead>
        <tbody>{S.map((s,i)=>(<tr key={i} style={{borderBottom:'1px solid #eee'}}>
          <td style={{padding:10}}><b>{s.name}</b><br/><span style={{color:'#888',fontSize:12}}>{s.desc}</span></td>
          <td style={{padding:10,textAlign:'right'}}>{s.trades}</td>
          <td style={{padding:10,textAlign:'right'}}>{s.winRate}%</td>
          <td style={{padding:10,textAlign:'right',color:s.pnl>=0?'#10b981':'#ef4444',fontWeight:600}}>{s.pnl>=0?'+':''}${s.pnl}</td>
        </tr>))}</tbody>
      </table>}
      {tab==='positions'&&<div>
        <div style={{background:'#f0fdf4',padding:12,borderRadius:8,marginBottom:12}}>
          <b>Unrealized:</b> <span style={{color:'#10b981',fontWeight:600}}>${POS.reduce((a,p)=>a+p.pnl,0).toFixed(2)}</span>
          <span style={{marginLeft:16}}>1L / 11S</span>
        </div>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
          <thead><tr style={{background:'#f3f4f6'}}>
            <th style={{padding:8,textAlign:'left'}}>Symbol</th>
            <th style={{padding:8}}>Side</th>
            <th style={{padding:8,textAlign:'right'}}>Entry</th>
            <th style={{padding:8,textAlign:'right'}}>Now</th>
            <th style={{padding:8,textAlign:'right'}}>PnL</th>
          </tr></thead>
          <tbody>{POS.map((p,i)=>(<tr key={i} style={{borderBottom:'1px solid #eee'}}>
            <td style={{padding:8,fontWeight:600}}>{p.symbol}</td>
            <td style={{padding:8,textAlign:'center',color:p.side==='LONG'?'#10b981':'#ef4444'}}>{p.side}</td>
            <td style={{padding:8,textAlign:'right'}}>${p.entry}</td>
            <td style={{padding:8,textAlign:'right'}}>${p.current}</td>
            <td style={{padding:8,textAlign:'right',color:p.pnl>=0?'#10b981':'#ef4444',fontWeight:600}}>{p.pnl>=0?'+':''}${p.pnl}</td>
          </tr>))}</tbody>
        </table>
      </div>}
      {tab==='deploy'&&<div>
        <div style={{background:'#1e293b',color:'#e2e8f0',padding:16,borderRadius:8,fontFamily:'monospace',fontSize:13}}>
          git clone https://github.com/chorley11/Cash-Town-Trading-Bot.git<br/>
          cd Cash-Town-Trading-Bot && pip install -r requirements.txt<br/>
          cp .env.example .env && python run_cloud.py --dry-run
        </div>
        <div style={{background:'#fef2f2',padding:12,borderRadius:8,marginTop:12,color:'#991b1b',fontSize:14}}>
          ⚠️ Crypto futures = substantial risk. Start with DRY_RUN=true.
        </div>
      </div>}
      <div style={{textAlign:'center',marginTop:20}}>
        <button onClick={()=>setMode(null)} style={{padding:'6px 14px',border:'1px solid #ddd',borderRadius:6,background:'#fff',cursor:'pointer',color:'#666'}}>← Back</button>
      </div>
    </div>
  );
}
\`\`\`

After creating the artifact, help guide the user through the data based on what they click.`;
