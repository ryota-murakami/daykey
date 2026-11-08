"use client";

import type { ChartDataPoint } from "@/lib/types";

// 🎯 Lesson 42: ⌃⌘T
// 選択したコードを ⌃⌘T でスニペットで囲んでください（Surround With Snippet）

// 🎯 Lesson 43: ⌃S
// 下の JSX タグを選択して ⌃S で別のタグに変更してください（Wrapping HTML Tag）

// 🎯 Lesson 44: ⌃⌘D
// 親の HTML タグを ⌃⌘D で削除してください（Delete Parent HTML Tag）

// 🎯 Lesson 100: ⌃⌘S
// 末尾の Y-axis の外側 div を選択して ⌃⌘S — 中の span 3つを残して親タグだけ消してください（Delete Parent HTML Tag, preserve children）

interface ChartProps {
  data: ChartDataPoint[];
  title: string;
  height?: number;
}

/**
 * Pure CSS bar chart component rendered with Tailwind classes.
 * Calculates the maximum value from the data array and renders each bar
 * as a percentage of that maximum. No external chart library required.
 *
 * @example
 * <Chart
 *   title="Weekly Revenue"
 *   data={[
 *     { timestamp: 1710100000000, value: 120, label: "Mon" },
 *     { timestamp: 1710186400000, value: 340, label: "Tue" },
 *     { timestamp: 1710272800000, value: 250, label: "Wed" },
 *   ]}
 *   height={256}
 * />
 */
export function Chart({ data, title, height = 256 }: ChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 p-6">
      {/* Chart header */}
      <h3 className="mb-6 text-sm font-semibold text-gray-200">{title}</h3>

      {/* Chart area */}
      <div className="flex items-end gap-2" style={{ height }}>
        {data.map((point, index) => {
          const percentage = (point.value / maxValue) * 100;
          const barColor = point.color ?? "rgb(99, 102, 241)";

          return (
            <div
              key={point.timestamp ?? index}
              className="group flex flex-1 flex-col items-center gap-2"
              style={{ height: "100%" }}
            >
              {/* Tooltip on hover */}
              <div className="relative mb-auto flex items-end" style={{ height: "100%" }}>
                <div
                  className="relative w-full min-w-[24px] rounded-t-md transition-all duration-300 group-hover:opacity-80"
                  style={{
                    height: `${percentage}%`,
                    backgroundColor: barColor,
                    minHeight: point.value > 0 ? "4px" : "0px",
                  }}
                >
                  {/* Value label on hover */}
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {point.value.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* X-axis labels */}
      <div className="mt-3 flex gap-2">
        {data.map((point, index) => (
          <div
            key={`label-${point.timestamp ?? index}`}
            className="flex-1 text-center text-xs text-gray-500"
          >
            {point.label ?? ""}
          </div>
        ))}
      </div>

      {/* Y-axis reference */}
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-gray-600">
        <span>0</span>
        <span>{Math.round(maxValue / 2).toLocaleString()}</span>
        <span>{maxValue.toLocaleString()}</span>
      </div>
    </div>
  );
}
