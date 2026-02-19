"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  data: object;
  label?: string;
}

export function CopyButton({ data, label = "Copy for AI" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = JSON.stringify(data, null, 2);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
        transition-all duration-200
        ${copied 
          ? "bg-terminal-green/20 text-terminal-green border border-terminal-green" 
          : "bg-terminal-panel border border-terminal-border hover:border-terminal-green hover:text-terminal-green"
        }
      `}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

// Large prominent copy button for landing page
export function CopyButtonLarge({ data }: { data: object }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = JSON.stringify(data, null, 2);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const size = JSON.stringify(data).length;
  const sizeKB = (size / 1024).toFixed(1);

  return (
    <button
      onClick={handleCopy}
      className={`
        group relative w-full max-w-md mx-auto flex flex-col items-center gap-3 px-8 py-6 rounded-xl
        font-medium transition-all duration-300
        ${copied 
          ? "bg-terminal-green text-terminal-bg scale-[1.02]" 
          : "bg-terminal-panel border-2 border-terminal-border hover:border-terminal-green hover:scale-[1.02]"
        }
      `}
    >
      {copied ? (
        <>
          <Check className="w-8 h-8" />
          <span className="text-lg">Copied to clipboard!</span>
          <span className="text-sm opacity-80">Paste into any AI assistant</span>
        </>
      ) : (
        <>
          <Copy className="w-8 h-8 text-terminal-green group-hover:scale-110 transition-transform" />
          <span className="text-lg text-terminal-text">Copy Full Report for AI</span>
          <span className="text-sm text-terminal-muted">~{sizeKB}KB of data, metrics, and context</span>
        </>
      )}
    </button>
  );
}
