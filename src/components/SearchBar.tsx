"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// 🎯 Lesson 35: ⌘D
// この行を ⌘D で複製してください（Duplicate Line）

// 🎯 Lesson 36: ⌃⌘↩
// この行の上に ⌃⌘↩ で新しい空行を挿入してください（Insert Line Above）

/**
 * Search input with an icon and clear button for filtering dashboard data.
 *
 * @example
 * <SearchBar value={query} onChange={setQuery} placeholder="Search metrics..." />
 */
export function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative flex items-center">
      {/* Search icon */}
      <svg
        className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-gray-900 py-2 pl-10 pr-9 text-sm text-white placeholder-gray-500 ring-1 ring-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Clear button */}
      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2.5 flex h-5 w-5 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          aria-label="Clear search"
        >
          <svg
            className="h-3.5 w-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
