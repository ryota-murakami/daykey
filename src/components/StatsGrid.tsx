"use client";

import type { DashboardMetric } from "@/lib/types";
import { StatCard } from "@/components/StatCard";

interface StatsGridProps {
  metrics: DashboardMetric[];
}

// =============================================================================
// DayKey Dashboard - Stats Grid Component
// =============================================================================
//
// Renders a responsive grid of StatCard components for the dashboard overview.
// Layout: 4 columns (lg) → 2 columns (md) → 1 column (sm).
//
// This file is designed for practicing Split Editor operations.
// =============================================================================

// 🎯 Lesson 49: ⌃X ⌃F
// 右にエディタを分割してください（chord: ⌃X → ⌃F）。分割した右側で src/lib/types.ts を開いて DashboardMetric 型を確認しましょう

// 🎯 Lesson 50: ⌃X ⌃N
// 下にエディタを分割してください（chord: ⌃X → ⌃N）

// 🎯 Lesson 51: ⌃X ⌃P
// 上にエディタを分割してください（chord: ⌃X → ⌃P）

/**
 * Displays dashboard metrics in a responsive grid of stat cards.
 *
 * Uses CSS Grid with breakpoint-based column counts:
 * - Large screens (lg): 4 columns for full overview
 * - Medium screens (md): 2 columns for tablet layout
 * - Small screens: 1 column stacked vertically
 *
 * @example
 * const metrics: DashboardMetric[] = [
 *   { id: "1", label: "Revenue", value: 52400, previousValue: 48200, change: 4200, changePercent: 8.7, trend: "up", unit: "$", category: "revenue" },
 *   { id: "2", label: "Users", value: 3280, previousValue: 3100, change: 180, changePercent: 5.8, trend: "up", unit: "", category: "growth" },
 * ];
 * <StatsGrid metrics={metrics} />
 */
export function StatsGrid({ metrics }: StatsGridProps) {
  if (metrics.length === 0) {
    return (
      <div className="rounded-2xl bg-gray-900 p-8 text-center ring-1 ring-gray-800">
        <p className="text-sm text-gray-400">No metrics available</p>
      </div>
    );
  }

  return (
    <section aria-label="Dashboard statistics">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <StatCard key={metric.id} metric={metric} />
        ))}
      </div>
    </section>
  );
}
