"use client";

import type { DashboardMetric } from "@/lib/types";

interface StatCardProps {
  metric: DashboardMetric;
}

// 🎯 Lesson 30: Delete
// この行の末尾にカーソルを置いて Delete キーで1文字ずつ不要な文字を削除してください

// 🎯 Lesson 31: ⌘C
// この関数名 "StatCard" をダブルクリックで選択し ⌘C でコピーしてください

// 🎯 Lesson 32: ⌘V
// 下の空行にカーソルを置いて ⌘V でペーストしてください

// 🎯 Lesson 33: ⌘Z
// 直前の操作を ⌘Z で取り消してください

// 🎯 Lesson 34: ⌘⇧Z
// 取り消した操作を ⌘⇧Z でやり直してください

/**
 * Renders a single dashboard metric as a dark-themed card with trend indicator.
 *
 * @example
 * <StatCard metric={{ id: "1", label: "Revenue", value: 12500, previousValue: 11000, change: 1500, changePercent: 13.6, trend: "up", unit: "$", category: "revenue" }} />
 */
export function StatCard({ metric }: StatCardProps) {
  const { label, value, changePercent, trend, unit } = metric;

  const trendColor =
    trend === "up"
      ? "text-green-400"
      : trend === "down"
        ? "text-red-400"
        : "text-gray-400";

  const trendArrow = trend === "up" ? "\u2191" : trend === "down" ? "\u2193" : "\u2192";

  const formattedValue =
    value >= 1_000_000
      ? `${(value / 1_000_000).toFixed(1)}M`
      : value >= 1_000
        ? `${(value / 1_000).toFixed(1)}K`
        : value.toLocaleString();

  return (
    <div className="rounded-2xl bg-gray-900 p-5 ring-1 ring-gray-800">
      <p className="text-sm font-medium text-gray-400">{label}</p>

      <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
        {unit === "$" || unit === "\u00a5" ? `${unit}${formattedValue}` : `${formattedValue}${unit}`}
      </p>

      <div className={`mt-3 flex items-center gap-1.5 text-sm font-medium ${trendColor}`}>
        <span>{trendArrow}</span>
        <span>{Math.abs(changePercent).toFixed(1)}%</span>
        <span className="text-gray-500">vs prev</span>
      </div>
    </div>
  );
}
