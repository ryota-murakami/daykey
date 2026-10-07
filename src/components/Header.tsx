"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { UserMenu } from "@/components/UserMenu";

interface HeaderProps {
  title: string;
  notificationCount: number;
  user?: { name: string; email: string; avatar: string };
}

// =============================================================================
// DayKey Dashboard - Header Component
// =============================================================================
//
// Top navigation bar containing the logo/title, search bar, notification bell,
// and user menu. The deeply nested JSX structure with brackets is intentionally
// designed for practicing selection expansion and bracket selection shortcuts.
// =============================================================================

// ---------------------------------------------------------------------------
// Word-Level & Block-Level Selection Lessons
// ---------------------------------------------------------------------------

// 🎯 Lesson 17: ⌃F⌥
// 単語単位で右に選択を拡張してください（cursorRightWordSelect）

// 🎯 Lesson 18: ⌃B⌥
// 単語単位で左に選択を拡張してください（cursorLeftWordSelect）

// 🎯 Lesson 19: ⌃P⌥
// ブロック単位で上に選択を拡張してください（cursorTopBlockSelect）

// 🎯 Lesson 20: ⌃N⌥
// ブロック単位で下に選択を拡張してください（cursorBottomBlockSelect）

// ---------------------------------------------------------------------------
// Multi-Cursor & Bracket Selection Lessons
// ---------------------------------------------------------------------------

// 🎯 Lesson 21: ⌥Click
// ⌥キーを押しながらクリックでカーソルを追加してください（createCursor）

// 🎯 Lesson 22: ⌃⌘M
// 内側のブラケットの内容を選択してください（Select Inner Bracket）。下のJSXタグの中にカーソルを置いて ⌃⌘M

// 🎯 Lesson 23: ⌥A
// Sticky Selection をトグルしてください（WebStorm）/ ブラケット選択（Cursor）

// 🎯 Lesson 24: ⌥A
// ブラケット範囲を選択してください（Cursor: Select bracket）

/**
 * Top header bar with search, notifications, and user menu.
 *
 * The component is divided into three sections:
 * 1. Logo and title (left)
 * 2. SearchBar (center, flex-1)
 * 3. Notification bell with count badge + UserMenu (right)
 *
 * The JSX uses deeply nested brackets to create practice opportunities
 * for ⌃⌘M (Select Inner Bracket) and ⌥A (Select Bracket) shortcuts.
 *
 * @example
 * <Header title="DayKey Analytics" notificationCount={5} />
 */
const DEFAULT_USER = { name: "Guest", email: "guest@daykey.app", avatar: "/avatar.png" };

export function Header({ title, notificationCount, user = DEFAULT_USER }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-gray-950 px-6">
      {/* Left: Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600">
          <span className="text-sm font-bold text-white">DK</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold tracking-tight text-white">
            {title}
          </h1>
          <span className="text-xs text-gray-500">
            Keyboard-first analytics
          </span>
        </div>
      </div>

      {/* Center: Search — Practice ⌃⌘M here to select inner bracket content */}
      <div className="mx-8 flex flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <SearchBar value={searchValue} onChange={setSearchValue} placeholder="Search dashboard..." />
        </div>
      </div>

      {/* Right: Notifications & User Menu */}
      <div className="flex items-center gap-4">
        {/* Notification Bell — deeply nested for bracket selection practice */}
        <button
          type="button"
          className="relative rounded-xl p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-200"
          aria-label={`Notifications${notificationCount > 0 ? ` (${notificationCount} unread)` : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {notificationCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              {notificationCount > 99 ? "99+" : notificationCount}
            </span>
          )}
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-800" />

        {/* User Menu */}
        <UserMenu user={user} />
      </div>
    </header>
  );
}
