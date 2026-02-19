"use client";

import React from 'react';
import { Download, FileJson, FileSpreadsheet } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

function DownloadButton({ href, label, icon, description }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      className="flex items-center gap-4 p-4 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-blue hover:bg-terminal-surface/80 transition-all group"
    >
      <div className="p-3 bg-terminal-bg rounded-lg text-terminal-blue group-hover:text-terminal-green transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-terminal-text">{label}</div>
        <div className="text-sm text-terminal-muted">{description}</div>
      </div>
      <Download className="w-5 h-5 text-terminal-muted group-hover:text-terminal-green transition-colors" />
    </a>
  );
}

export function DownloadSection() {
  return (
    <section className="py-8">
      <h2 className="text-lg font-medium text-terminal-text mb-4 flex items-center gap-2">
        <Download className="w-5 h-5 text-terminal-blue" />
        Download Data
      </h2>
      <p className="text-terminal-muted mb-6">
        Export the complete trading history for your own analysis or backtesting.
      </p>
      
      <div className="grid gap-4 md:grid-cols-2">
        <DownloadButton
          href="/api/download?format=json&bot=all"
          label="Cash Town (Full)"
          icon={<FileJson className="w-6 h-6" />}
          description="All strategies, positions & trades (JSON)"
        />
        
        <DownloadButton
          href="/api/download?format=csv&bot=all"
          label="Trade History (CSV)"
          icon={<FileSpreadsheet className="w-6 h-6" />}
          description="Spreadsheet format for Excel/Sheets"
        />
        
        <DownloadButton
          href="/api/download?format=json&bot=cucurbit"
          label="Cucurbit Strategy Only"
          icon={<FileJson className="w-6 h-6" />}
          description="Primary ML strategy data (JSON)"
        />
        
        <DownloadButton
          href="/data/cashtown.json"
          label="Raw Dashboard Data"
          icon={<FileJson className="w-6 h-6" />}
          description="Current snapshot as displayed"
        />
      </div>
      
      <p className="text-xs text-terminal-muted mt-4">
        Data includes: 369 trades from Jan 21 - Feb 19, 2026. Updated live from KuCoin.
      </p>
    </section>
  );
}
