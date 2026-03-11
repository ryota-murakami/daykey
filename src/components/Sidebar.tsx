"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

// =============================================================================
// DayKey Dashboard - Sidebar Navigation Component
// =============================================================================
//
// Fixed-width sidebar with vertical navigation links. Features active state
// highlighting and icon indicators for each menu item.
//
// This file is designed for practicing window focus movement between splits.
// =============================================================================

// 🎯 Lesson 52: ⌃X ⌃J
// フォーカスを右のウィンドウに移動してください（chord: ⌃X → ⌃J）

// 🎯 Lesson 53: ⌃X ⌃H
// フォーカスを左のウィンドウに移動してください（chord: ⌃X → ⌃H）

/** Maps icon identifiers from NAV_ITEMS to emoji representations. */
const iconMap: Record<string, string> = {
  LayoutDashboard: "\u{1F4CA}",
  BarChart3: "\u{1F4C8}",
  Users: "\u{1F465}",
  FileText: "\u{1F4C4}",
  Bell: "\u{1F514}",
  Settings: "\u2699\uFE0F",
};

/**
 * Sidebar navigation with icon-labeled links and active state highlighting.
 *
 * The sidebar has a fixed width of 224px (w-56) and a dark background that
 * visually separates it from the main content area. Clicking a nav item
 * updates the local active state.
 *
 * @example
 * <Sidebar />
 */
export function Sidebar() {
  const [activeHref, setActiveHref] = useState<string>(NAV_ITEMS[0].href);

  return (
    <aside className="flex h-screen w-56 flex-col bg-gray-950 px-3 py-6 ring-1 ring-gray-800">
      {/* Brand */}
      <div className="mb-8 px-3">
        <h2 className="text-lg font-bold tracking-tight text-white">
          DayKey
        </h2>
        <p className="mt-0.5 text-xs text-gray-500">Analytics Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === activeHref;
          const icon = iconMap[item.icon] ?? "\u{1F4CB}";

          return (
            <button
              key={item.href}
              onClick={() => setActiveHref(item.href)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-400"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="text-base" role="img" aria-hidden="true">
                {icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-800 px-3 pt-4">
        <p className="text-xs text-gray-600">v1.0.0</p>
      </div>
    </aside>
  );
}
