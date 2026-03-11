"use client";

import { useState } from "react";
import type { TableColumn } from "@/lib/types";
import { Badge } from "@/components/Badge";

interface DataTableProps {
  data: Record<string, string | number | boolean>[];
  columns: TableColumn[];
}

// =============================================================================
// DayKey Dashboard - Data Table Component
// =============================================================================
//
// A sortable data table with repeated row/cell patterns ideal for practicing
// multiple cursor and rectangular selection techniques.
//
// The deliberately repetitive JSX structure in the table body is designed so
// that learners can place multiple cursors on similar `<td>` elements and
// edit them all at once.
// =============================================================================

// ---------------------------------------------------------------------------
// Selection Extension Lessons (⌃ + Direction + ⌘)
// ---------------------------------------------------------------------------

// 🎯 Lesson 11: ⌃F⌘
// 右方向に選択を拡張してください（⌃F + ⌘ で Selection Right）

// 🎯 Lesson 12: ⌃B⌘
// 左方向に選択を拡張してください

// 🎯 Lesson 13: ⌃P⌘
// 上方向に選択を拡張してください

// 🎯 Lesson 14: ⌃N⌘
// 下方向に選択を拡張してください

// 🎯 Lesson 15: ⌃E⌘
// カーソル位置から行末まで選択してください（cursorEndSelect）

// 🎯 Lesson 16: ⌃A⌘
// カーソル位置から行頭まで選択してください（cursorStartSelect）

// ---------------------------------------------------------------------------
// Multiple Cursor & Rectangular Selection Lessons
// ---------------------------------------------------------------------------

// 🎯 Lesson 93: ⌥Drag
// 矩形選択 — ⌥キーを押しながらドラッグで矩形範囲を選択（WebStorm）

// 🎯 Lesson 94: ⌥⇧Drag
// 矩形選択 — ⌥⇧を押しながらドラッグで矩形範囲を選択（Cursor）

// 🎯 Lesson 95: ⌘Click
// 複数の行の同じ位置を ⌘Click で追加カーソルを配置してください

// 🎯 Lesson 96: ⌥⌘↑
// カーソルを上にクローンしてください（Clone Cursor Above）

// 🎯 Lesson 97: ⌥⌘↓
// カーソルを下にクローンして、下の5行を同時に編集してください（Clone Cursor Below）

// 🎯 Lesson 98: ⌘⇧Mouse
// 垂直にカーソルを配置してください（Vertical cursor fill-in）

type SortDirection = "asc" | "desc" | null;

interface SortState {
  columnKey: string | null;
  direction: SortDirection;
}

/**
 * Renders the appropriate status badge for a row's status field.
 *
 * @example
 * renderStatusBadge("active")  // → <Badge status="active" label="Active" />
 */
function renderStatusBadge(status: string) {
  const statusMap: Record<string, { status: "active" | "inactive" | "pending" | "error"; label: string }> = {
    active: { status: "active", label: "Active" },
    inactive: { status: "inactive", label: "Inactive" },
    pending: { status: "pending", label: "Pending" },
    error: { status: "error", label: "Error" },
  };

  const config = statusMap[status] ?? { status: "inactive" as const, label: String(status) };
  return <Badge status={config.status} label={config.label} />;
}

/**
 * Formats a cell value for display, converting booleans to Yes/No strings.
 *
 * @example
 * formatCellValue(true)     // → "Yes"
 * formatCellValue(1234)     // → "1,234"
 * formatCellValue("hello")  // → "hello"
 */
function formatCellValue(value: string | number | boolean): string {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  if (typeof value === "number") {
    return value.toLocaleString();
  }
  return value;
}

/**
 * A sortable data table rendering rows from a generic record array.
 *
 * Features:
 * - Click column headers to toggle ascending/descending sort
 * - Status columns render colored Badge components
 * - Repeated `<td>` patterns for multiple cursor practice
 *
 * @example
 * const columns: TableColumn[] = [
 *   { key: "name", label: "Name", sortable: true, align: "left" },
 *   { key: "value", label: "Value", sortable: true, align: "right" },
 *   { key: "status", label: "Status", sortable: false, align: "center" },
 * ];
 * const data = [
 *   { name: "Item A", value: 100, status: "active" },
 *   { name: "Item B", value: 200, status: "pending" },
 * ];
 * <DataTable data={data} columns={columns} />
 */
export function DataTable({ data, columns }: DataTableProps) {
  const [sort, setSort] = useState<SortState>({ columnKey: null, direction: null });

  /** Cycles sort direction: null → asc → desc → null */
  function handleSort(columnKey: string) {
    setSort((prev) => {
      if (prev.columnKey !== columnKey) {
        return { columnKey, direction: "asc" };
      }
      if (prev.direction === "asc") {
        return { columnKey, direction: "desc" };
      }
      return { columnKey: null, direction: null };
    });
  }

  /** Returns the arrow indicator for a column's current sort state. */
  function sortIndicator(columnKey: string): string {
    if (sort.columnKey !== columnKey) return "";
    if (sort.direction === "asc") return " \u2191";
    if (sort.direction === "desc") return " \u2193";
    return "";
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sort.columnKey || !sort.direction) return 0;
    const aVal = a[sort.columnKey];
    const bVal = b[sort.columnKey];
    if (aVal == null || bVal == null) return 0;
    const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
    return sort.direction === "asc" ? cmp : -cmp;
  });

  // -------------------------------------------------------------------------
  // Multiple Cursor Practice Area
  // -------------------------------------------------------------------------
  // The <td> elements below follow an intentionally repetitive pattern.
  // Place your cursor on one <td> and use ⌥⌘↓ (Lesson 97) to clone
  // cursors downward, then edit all cells simultaneously.
  // -------------------------------------------------------------------------

  return (
    <div className="overflow-x-auto rounded-2xl bg-gray-900 ring-1 ring-gray-800">
      <table className="w-full border-collapse text-sm text-white">
        <thead>
          <tr className="border-b border-gray-800">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-3 font-medium text-gray-400 ${
                  column.align === "right" ? "text-right" : column.align === "center" ? "text-center" : "text-left"
                } ${column.sortable ? "cursor-pointer select-none hover:text-gray-200" : ""}`}
                style={column.width ? { width: `${column.width}px` } : undefined}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                {column.label}
                {column.sortable && sortIndicator(column.key)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-800/50 transition-colors hover:bg-gray-800/40"
            >
              {/* --- Repeated <td> pattern start (multi-cursor practice) --- */}
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`px-4 py-3 ${
                    column.align === "right" ? "text-right" : column.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {column.key === "status" && typeof row[column.key] === "string"
                    ? renderStatusBadge(row[column.key] as string)
                    : row[column.key] != null
                      ? formatCellValue(row[column.key] as string | number | boolean)
                      : "—"}
                </td>
              ))}
              {/* --- Repeated <td> pattern end --- */}
            </tr>
          ))}
        </tbody>
      </table>

      {sortedData.length === 0 && (
        <div className="px-4 py-12 text-center text-sm text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
}
