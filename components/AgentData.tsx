"use client";

import React from "react";

interface AgentDataProps {
  type: "overview" | "strategy" | "trade" | "position" | "full";
  data: object;
}

export function AgentData({ type, data }: AgentDataProps) {
  const jsonLd = {
    "@context": "https://cashtown.dev/schema",
    "@type": type.charAt(0).toUpperCase() + type.slice(1) + "Data",
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      data-agent-type={type}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
}

// Hidden div version for easier AI extraction
export function AgentDataBlock({ children }: { children: string }) {
  return (
    <div
      className="hidden"
      data-agent-context="true"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<!-- AI_CONTEXT_START -->${children}<!-- AI_CONTEXT_END -->` }}
    />
  );
}
