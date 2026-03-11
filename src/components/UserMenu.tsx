"use client";

import { useState } from "react";

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

// 🎯 Lesson 37: ⌘↩
// この行の下に ⌘↩ で新しい行を挿入してください（Insert Line Below）

const menuItems = [
  { label: "Profile", icon: "👤" },
  { label: "Settings", icon: "⚙️" },
  { label: "Sign Out", icon: "🚪" },
] as const;

// 🎯 Lesson 38: ⌃X ⌃M
// 対応するブラケット/タグを削除してください（chord: ⌃X → ⌃M）

/**
 * User dropdown menu displayed in the navigation header.
 * Shows the user's avatar, name, and email with a toggleable dropdown
 * providing navigation to Profile, Settings, and Sign Out actions.
 *
 * @example
 * <UserMenu user={{ name: "Raphtalia", email: "raphtalia@example.com", avatar: "/avatar.png" }} />
 */
export function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10"
        />
        <div className="hidden text-left sm:block">
          <p className="text-sm font-medium text-gray-200">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-white/10 bg-gray-900 p-1 shadow-xl shadow-black/20">
            <div className="border-b border-white/5 px-3 py-2.5">
              <p className="text-sm font-medium text-gray-200">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <div className="py-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                    item.label === "Sign Out"
                      ? "text-red-400 hover:bg-red-500/10"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
