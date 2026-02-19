import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cash Town Analytics",
  description: "Multi-strategy crypto futures trading performance dashboard",
  openGraph: {
    title: "Cash Town Analytics",
    description: "Live performance data from a multi-strategy crypto futures trading bot",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-terminal-bg">
        <nav className="border-b border-terminal-border bg-terminal-panel/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-terminal-green">◉</span>
              <span className="font-semibold text-terminal-text">CASH TOWN</span>
              <span className="text-terminal-muted text-sm">ANALYTICS</span>
            </a>
            <div className="flex items-center gap-6 text-sm">
              <a href="/" className="text-terminal-muted hover:text-terminal-green transition-colors">Overview</a>
              <a href="/report" className="text-terminal-muted hover:text-terminal-green transition-colors">Full Report</a>
              <div className="flex items-center gap-2 text-terminal-green">
                <span className="w-2 h-2 bg-terminal-green rounded-full pulse-green"></span>
                <span className="text-xs">LIVE</span>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-terminal-border mt-16 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center text-terminal-muted text-xs">
            <p>Cash Town • Multi-Strategy Crypto Futures Trading Bot • KuCoin Futures</p>
            <p className="mt-2">Past performance does not guarantee future results. Trading crypto futures involves substantial risk.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
