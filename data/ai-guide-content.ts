export const aiGuideMDX = `Please create a React artifact with this interactive Cash Town trading dashboard:

\`\`\`tsx
import { useState } from 'react';

const PERF = {"start": 6378, "equity": 12636, "return": 98.1, "trades": 367, "wins": 167, "losses": 200, "winRate": 45.7, "pf": 5.42, "sharpe": 2.1, "dd": 6.8, "days": 30, "upnl": 455.23};

const STRATEGIES = [{"name": "Cucurbit", "trades": 203, "winRate": 47.8, "pnl": 4240.6, "avgPnl": 20.89, "desc": "Primary ML-driven momentum strategy"}, {"name": "Trend Following", "trades": 48, "winRate": 45.8, "pnl": 205.94, "avgPnl": 4.29, "desc": "Classic trend-following with ATR stops"}, {"name": "Synced", "trades": 23, "winRate": 56.5, "pnl": 87.75, "avgPnl": 3.82, "desc": "Cross-asset correlation strategy"}, {"name": "Weinstein", "trades": 21, "winRate": 33.3, "pnl": 29.7, "avgPnl": 1.41, "desc": "Stage analysis breakout strategy"}, {"name": "Turtle", "trades": 1, "winRate": 100.0, "pnl": 29.59, "avgPnl": 29.59, "desc": "Classic turtle trading system"}, {"name": "Livermore", "trades": 3, "winRate": 66.7, "pnl": 19.65, "avgPnl": 6.55, "desc": "Jesse Livermore pivot points"}, {"name": "Mean Reversion", "trades": 4, "winRate": 50.0, "pnl": 7.86, "avgPnl": 1.97, "desc": "RSI-based mean reversion"}, {"name": "Stat Arb", "trades": 14, "winRate": 35.7, "pnl": 1.4, "avgPnl": 0.1, "desc": "Statistical arbitrage pairs trading"}, {"name": "Zweig", "trades": 6, "winRate": 16.7, "pnl": -13.04, "avgPnl": -2.17, "desc": "Martin Zweig momentum model"}, {"name": "BTS Lynch", "trades": 44, "winRate": 36.4, "pnl": -33.49, "avgPnl": -0.76, "desc": "Peter Lynch style fundamentals + technic"}];
const POSITIONS = [{"symbol": "DOT", "side": "SHORT", "entry": 1.278, "current": 1.261, "pnl": 208.02, "leverage": 4.6}, {"symbol": "ARB", "side": "SHORT", "entry": 0.0981, "current": 0.0977, "pnl": 88.81, "leverage": 4.9}, {"symbol": "APT", "side": "SHORT", "entry": 0.915, "current": 0.838, "pnl": 49.26, "leverage": 3.2}, {"symbol": "LTC", "side": "SHORT", "entry": 52.58, "current": 51.43, "pnl": 32.52, "leverage": 4.4}, {"symbol": "LINK", "side": "SHORT", "entry": 8.5, "current": 8.349, "pnl": 27.1, "leverage": 4.5}, {"symbol": "SOL", "side": "SHORT", "entry": 84.627, "current": 79.954, "pnl": 25.7, "leverage": 3.7}, {"symbol": "RENDER", "side": "SHORT", "entry": 1.373, "current": 1.359, "pnl": 14.63, "leverage": 4.7}, {"symbol": "ATOM", "side": "SHORT", "entry": 2.322, "current": 2.298, "pnl": 14.05, "leverage": 4.7}, {"symbol": "ETH", "side": "SHORT", "entry": 1960.5, "current": 1907.27, "pnl": 6.92, "leverage": 2.7}, {"symbol": "ICP", "side": "SHORT", "entry": 2.348, "current": 2.136, "pnl": 4.37, "leverage": 3.1}, {"symbol": "BCH", "side": "SHORT", "entry": 547.66, "current": 546.35, "pnl": 0.66, "leverage": 9.7}, {"symbol": "AVAX", "side": "LONG", "entry": 8.83, "current": 8.75, "pnl": -16.81, "leverage": 5.2}];

const INTROS = {
  trader: "Let me show you how we achieved a 5.42 profit factor with only 46.5% win rate. Winners are 5x bigger than losers.",
  investor: "We turned $6,378 into $12,635 in 30 days — +98.1% with a 2.1 Sharpe ratio and 6.8% max drawdown.",
  developer: "This is a 13-strategy orchestrated system on KuCoin Futures. Each strategy is a separate agent.",
  curious: "We built an AI trading bot and let it trade real money for 30 days. Here's what happened."
};

export default function CashTownStudy() {
  const [userType, setUserType] = useState(null);
  const [tab, setTab] = useState('overview');

  if (!userType) {
    return (
      <div style={{fontFamily:'system-ui',maxWidth:600,margin:'0 auto',padding:40,textAlign:'center'}}>
        <div style={{fontSize:64,marginBottom:16}}>💰</div>
        <h1 style={{fontSize:32,margin:'0 0 8px'}}>Cash Town</h1>
        <p style={{color:'#666',marginBottom:32}}>Multi-Strategy Crypto Futures Bot</p>
        
        <div style={{
          background:'linear-gradient(135deg,#10b981,#059669)',
          color:'white',
          padding:'16px 32px',
          borderRadius:16,
          fontSize:24,
          fontWeight:700,
          marginBottom:40
        }}>
          $6,378 → $12,635 <span style={{fontSize:16,opacity:0.9}}>in 30 days</span>
        </div>

        <h2 style={{fontSize:20,marginBottom:24,color:'#374151'}}>What's your background?</h2>
        <p style={{color:'#666',marginBottom:24}}>This helps me tailor the walkthrough for you.</p>
        
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          {[
            {id:'trader', icon:'📈', label:'Trader', sub:'Win rates, risk/reward'},
            {id:'investor', icon:'💼', label:'Investor', sub:'Returns, Sharpe, scale'},
            {id:'developer', icon:'⚙️', label:'Developer', sub:'Architecture, code'},
            {id:'curious', icon:'🔍', label:'Just Curious', sub:'The simple version'}
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setUserType(opt.id)}
              style={{
                padding:20,
                border:'2px solid #e5e7eb',
                borderRadius:12,
                background:'white',
                cursor:'pointer',
                textAlign:'center'
              }}
            >
              <div style={{fontSize:32,marginBottom:8}}>{opt.icon}</div>
              <div style={{fontWeight:600,marginBottom:4}}>{opt.label}</div>
              <div style={{fontSize:12,color:'#666'}}>{opt.sub}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{fontFamily:'system-ui',maxWidth:900,margin:'0 auto',padding:20}}>
      <div style={{textAlign:'center',marginBottom:24}}>
        <div style={{fontSize:40}}>💰</div>
        <h1 style={{margin:'8px 0',fontSize:28}}>Cash Town</h1>
        <div style={{
          display:'inline-block',
          background:'linear-gradient(135deg,#10b981,#059669)',
          color:'white',
          padding:'8px 20px',
          borderRadius:20,
          fontSize:18,
          fontWeight:600
        }}>
          +{PERF.return}% in {PERF.days} days
        </div>
      </div>

      <div style={{background:'#f0f9ff',border:'1px solid #bae6fd',padding:16,borderRadius:8,marginBottom:24}}>
        <p style={{margin:0}}>{INTROS[userType]}</p>
      </div>

      <div style={{display:'flex',gap:8,justifyContent:'center',marginBottom:24,flexWrap:'wrap'}}>
        {['overview','strategies','positions','deploy'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding:'10px 20px',
            border:'none',
            borderRadius:8,
            cursor:'pointer',
            background:tab===t?'#3b82f6':'#f3f4f6',
            color:tab===t?'white':'#374151',
            fontWeight:tab===t?600:400
          }}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>
        ))}
      </div>

      {tab==='overview' && (
        <div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))',gap:12,marginBottom:24}}>
            {[
              ['Start', '$'+PERF.start.toLocaleString(), '#374151'],
              ['Now', '$'+PERF.equity.toLocaleString(), '#10b981'],
              ['Return', '+'+PERF.return+'%', '#10b981'],
              ['Trades', PERF.trades, '#374151'],
              ['Win%', PERF.winRate+'%', '#374151'],
              ['PF', PERF.pf, '#10b981'],
              ['Sharpe', PERF.sharpe, '#3b82f6'],
              ['MaxDD', PERF.dd+'%', '#ef4444']
            ].map(([l,v,c],i) => (
              <div key={i} style={{background:'#f9fafb',padding:14,borderRadius:8,textAlign:'center'}}>
                <div style={{color:'#6b7280',fontSize:11}}>{l}</div>
                <div style={{color:c,fontSize:20,fontWeight:700}}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{background:'#f0fdf4',padding:16,borderRadius:8,textAlign:'center'}}>
            <strong>\${PERF.start.toLocaleString()}</strong> → <strong>\${PERF.equity.toLocaleString()}</strong>
            <br/><span style={{color:'#666',fontSize:14}}>{PERF.wins} wins, {PERF.losses} losses</span>
          </div>
        </div>
      )}

      {tab==='strategies' && (
        <div>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
            <thead><tr style={{background:'#f3f4f6'}}>
              <th style={{padding:12,textAlign:'left'}}>Strategy</th>
              <th style={{padding:12,textAlign:'right'}}>Trades</th>
              <th style={{padding:12,textAlign:'right'}}>Win%</th>
              <th style={{padding:12,textAlign:'right'}}>PnL</th>
            </tr></thead>
            <tbody>
              {STRATEGIES.map((s,i) => (
                <tr key={i} style={{borderBottom:'1px solid #e5e7eb'}}>
                  <td style={{padding:12}}><b>{s.name}</b><br/><span style={{color:'#666',fontSize:12}}>{s.desc}</span></td>
                  <td style={{padding:12,textAlign:'right'}}>{s.trades}</td>
                  <td style={{padding:12,textAlign:'right'}}>{s.winRate}%</td>
                  <td style={{padding:12,textAlign:'right',color:s.pnl>=0?'#10b981':'#ef4444',fontWeight:600}}>
                    {s.pnl>=0?'+':''}\${s.pnl.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{background:'#fef3c7',padding:16,borderRadius:8,marginTop:16}}>
            💡 Cucurbit = 93% of PnL despite 48% win rate. Profit factor matters more.
          </div>
        </div>
      )}

      {tab==='positions' && (
        <div>
          <div style={{background:'#f0fdf4',padding:16,borderRadius:8,marginBottom:16,display:'flex',justifyContent:'space-between'}}>
            <span><b>Unrealized:</b> <span style={{color:'#10b981',fontWeight:600}}>+\${POSITIONS.reduce((a,p)=>a+p.pnl,0).toFixed(2)}</span></span>
            <span>1 Long / 11 Short</span>
          </div>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
            <thead><tr style={{background:'#f3f4f6'}}>
              <th style={{padding:10,textAlign:'left'}}>Symbol</th>
              <th style={{padding:10}}>Side</th>
              <th style={{padding:10,textAlign:'right'}}>Entry</th>
              <th style={{padding:10,textAlign:'right'}}>Now</th>
              <th style={{padding:10,textAlign:'right'}}>PnL</th>
            </tr></thead>
            <tbody>
              {POSITIONS.map((p,i) => (
                <tr key={i} style={{borderBottom:'1px solid #e5e7eb'}}>
                  <td style={{padding:10,fontWeight:600}}>{p.symbol}</td>
                  <td style={{padding:10,textAlign:'center',color:p.side==='LONG'?'#10b981':'#ef4444'}}>{p.side}</td>
                  <td style={{padding:10,textAlign:'right'}}>\${p.entry}</td>
                  <td style={{padding:10,textAlign:'right'}}>\${p.current}</td>
                  <td style={{padding:10,textAlign:'right',color:p.pnl>=0?'#10b981':'#ef4444',fontWeight:600}}>
                    {p.pnl>=0?'+':''}\${p.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab==='deploy' && (
        <div>
          <h3 style={{marginTop:0}}>🚀 Deploy Your Own</h3>
          <div style={{background:'#1e293b',color:'#e2e8f0',padding:20,borderRadius:8,fontFamily:'monospace',fontSize:13,lineHeight:1.8}}>
            git clone https://github.com/chorley11/Cash-Town-Trading-Bot.git<br/>
            cd Cash-Town-Trading-Bot && pip install -r requirements.txt<br/>
            cp .env.example .env  <span style={{color:'#94a3b8'}}># Add KuCoin API keys</span><br/>
            python run_cloud.py --dry-run
          </div>
          <div style={{background:'#fef2f2',padding:16,borderRadius:8,marginTop:16,color:'#991b1b'}}>
            ⚠️ Crypto futures = substantial risk. Start with DRY_RUN=true.
          </div>
        </div>
      )}

      <div style={{textAlign:'center',marginTop:24}}>
        <button onClick={() => setUserType(null)} style={{
          padding:'8px 16px',border:'1px solid #e5e7eb',borderRadius:6,background:'white',cursor:'pointer',color:'#666'
        }}>← Start Over</button>
      </div>
    </div>
  );
}
\`\`\`

After creating the artifact, guide me through the data based on what I select.`;
