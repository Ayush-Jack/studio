"use client";

import { ShieldCheck } from "lucide-react";

export function SafetyScoreIndicator() {
  const currentScore = "green";
  const statusText = "Safe Zone";

  return (
    <div className="flex flex-col items-center justify-center text-center py-4">
      <h2 className="text-lg font-semibold mb-3">Safety Score Indicator</h2>
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
            <ShieldCheck className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-xl font-bold text-green-700">{statusText}</p>
    </div>
  );
}
