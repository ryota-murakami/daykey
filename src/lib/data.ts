/**
 * Mock data for the DayKey analytics dashboard.
 *
 * This file is intentionally long to practice scrolling keybinds.
 * Follow the embedded lessons (25-29) as you scroll through!
 *
 * @module data
 */

import type {
  User,
  DashboardMetric,
  ChartDataPoint,
  NotificationItem,
  TableColumn,
} from "@/lib/types";

// =============================================================================
// 🎯 Lesson 25: ⌃V
// ページダウン — ⌃V を押してこのファイルの中盤までスクロールしてください
// =============================================================================

// =============================================================================
// 🎯 Lesson 27: ⌃X ⌃[
// ファイルの先頭にジャンプしてください（chord: ⌃X を押してから ⌃[）
// =============================================================================

// -----------------------------------------------------------------------------
// MOCK_USERS
// -----------------------------------------------------------------------------

/**
 * 8 sample users with realistic names, emails, and roles.
 *
 * @example
 * ```ts
 * import { MOCK_USERS } from "@/lib/data";
 * const admins = MOCK_USERS.filter(u => u.role === "admin");
 * ```
 */
export const MOCK_USERS: User[] = [
  {
    id: "usr_001",
    name: "Tanaka Yuki",
    email: "tanaka.yuki@example.com",
    role: "admin",
    avatar: "/avatars/tanaka.png",
    createdAt: "2024-01-15T09:00:00Z",
    lastLogin: "2026-03-10T14:32:00Z",
},
  {
    id: "usr_002",
    name: "Suzuki Hana",
    email: "suzuki.hana@example.com",
    role: "editor",
    avatar: "/avatars/suzuki.png",
    createdAt: "2024-02-20T11:30:00Z",
    lastLogin: "2026-03-09T08:15:00Z",
},
  {
    id: "usr_003",
    name: "Watanabe Ren",
    email: "watanabe.ren@example.com",
    role: "viewer",
    avatar: "/avatars/watanabe.png",
    createdAt: "2024-03-05T16:45:00Z",
    lastLogin: "2026-03-08T19:00:00Z",
},
  {
    id: "usr_004",
    name: "Ito Sakura",
    email: "ito.sakura@example.com",
    role: "editor",
    avatar: "/avatars/ito.png",
    createdAt: "2024-04-12T08:00:00Z",
    lastLogin: "2026-03-07T12:45:00Z",
},
  {
    id: "usr_005",
    name: "Nakamura Sora",
    email: "nakamura.sora@example.com",
    role: "admin",
    avatar: "/avatars/nakamura.png",
    createdAt: "2024-05-01T10:20:00Z",
    lastLogin: "2026-03-10T16:00:00Z",
},
  {
    id: "usr_006",
    name: "Yamamoto Aoi",
    email: "yamamoto.aoi@example.com",
    role: "viewer",
    avatar: "/avatars/yamamoto.png",
    createdAt: "2024-06-18T14:10:00Z",
    lastLogin: "2026-02-28T09:30:00Z",
},
  {
    id: "usr_007",
    name: "Kobayashi Mei",
    email: "kobayashi.mei@example.com",
    role: "editor",
    avatar: "/avatars/kobayashi.png",
    createdAt: "2024-07-22T07:55:00Z",
    lastLogin: "2026-03-10T11:20:00Z",
},
  {
    id: "usr_008",
    name: "Kato Haruto",
    email: "kato.haruto@example.com",
    role: "viewer",
    avatar: "/avatars/kato.png",
    createdAt: "2024-08-30T13:40:00Z",
    lastLogin: "2026-03-05T17:50:00Z",
},
];

// -----------------------------------------------------------------------------
// MOCK_METRICS
// -----------------------------------------------------------------------------

/**
 * 8 dashboard metrics representing key performance indicators.
 *
 * @example
 * ```ts
 * import { MOCK_METRICS } from "@/lib/data";
 * const revenue = MOCK_METRICS.find(m => m.id === "revenue");
 * ```
 */
export const MOCK_METRICS: DashboardMetric[] = [
  { id: "revenue", label: "Revenue", value: 1284500, previousValue: 1150200, change: 134300, changePercent: 11.7, trend: "up", unit: "JPY", category: "revenue" },
  { id: "users", label: "Users", value: 24831, previousValue: 22150, change: 2681, changePercent: 12.1, trend: "up", unit: "", category: "growth" },
  { id: "orders", label: "Orders", value: 3842, previousValue: 3590, change: 252, changePercent: 7.0, trend: "up", unit: "", category: "revenue" },
  { id: "conversion_rate", label: "Conversion Rate", value: 3.42, previousValue: 3.18, change: 0.24, changePercent: 7.5, trend: "up", unit: "%", category: "performance" },
  { id: "avg_order_value", label: "Avg Order Value", value: 33420, previousValue: 32050, change: 1370, changePercent: 4.3, trend: "up", unit: "JPY", category: "revenue" },
  { id: "page_views", label: "Page Views", value: 892400, previousValue: 945000, change: -52600, changePercent: -5.6, trend: "down", unit: "", category: "engagement" },
  { id: "bounce_rate", label: "Bounce Rate", value: 42.3, previousValue: 45.1, change: -2.8, changePercent: -6.2, trend: "down", unit: "%", category: "performance" },
  { id: "session_duration", label: "Session Duration", value: 245, previousValue: 230, change: 15, changePercent: 6.5, trend: "up", unit: "sec", category: "engagement" },
];

// =============================================================================
// 🎯 Lesson 26: ⌥V
// ページアップ — ⌥V を押して上に戻ってください
// =============================================================================

// =============================================================================
// 🎯 Lesson 29: ⌃X L
// 画面中央にスクロールしてください（WebStorm: ⌃X L）
// =============================================================================

// -----------------------------------------------------------------------------
// MOCK_CHART_DATA (30 days)
// -----------------------------------------------------------------------------

/**
 * 30 data points representing daily metrics for a full month (Feb 2026).
 *
 * @example
 * ```ts
 * import { MOCK_CHART_DATA } from "@/lib/data";
 * const maxValue = Math.max(...MOCK_CHART_DATA.map(d => d.value));
 * ```
 */
export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { timestamp: Date.parse("2026-02-01"), label: "Feb 1", value: 42800 },
  { timestamp: Date.parse("2026-02-02"), label: "Feb 2", value: 38500 },
  { timestamp: Date.parse("2026-02-03"), label: "Feb 3", value: 35200 },
  { timestamp: Date.parse("2026-02-04"), label: "Feb 4", value: 44100 },
  { timestamp: Date.parse("2026-02-05"), label: "Feb 5", value: 47300 },
  { timestamp: Date.parse("2026-02-06"), label: "Feb 6", value: 46800 },
  { timestamp: Date.parse("2026-02-07"), label: "Feb 7", value: 41200 },
  { timestamp: Date.parse("2026-02-08"), label: "Feb 8", value: 39700 },
  { timestamp: Date.parse("2026-02-09"), label: "Feb 9", value: 36400 },
  { timestamp: Date.parse("2026-02-10"), label: "Feb 10", value: 43500 },
  { timestamp: Date.parse("2026-02-11"), label: "Feb 11", value: 48200 },
  { timestamp: Date.parse("2026-02-12"), label: "Feb 12", value: 51300 },
  { timestamp: Date.parse("2026-02-13"), label: "Feb 13", value: 49800 },
  { timestamp: Date.parse("2026-02-14"), label: "Feb 14", value: 53200 },
  { timestamp: Date.parse("2026-02-15"), label: "Feb 15", value: 45600 },
  { timestamp: Date.parse("2026-02-16"), label: "Feb 16", value: 40100 },
  { timestamp: Date.parse("2026-02-17"), label: "Feb 17", value: 44800 },
  { timestamp: Date.parse("2026-02-18"), label: "Feb 18", value: 47500 },
  { timestamp: Date.parse("2026-02-19"), label: "Feb 19", value: 50200 },
  { timestamp: Date.parse("2026-02-20"), label: "Feb 20", value: 52800 },
  { timestamp: Date.parse("2026-02-21"), label: "Feb 21", value: 48900 },
  { timestamp: Date.parse("2026-02-22"), label: "Feb 22", value: 43200 },
  { timestamp: Date.parse("2026-02-23"), label: "Feb 23", value: 39800 },
  { timestamp: Date.parse("2026-02-24"), label: "Feb 24", value: 46300 },
  { timestamp: Date.parse("2026-02-25"), label: "Feb 25", value: 49100 },
  { timestamp: Date.parse("2026-02-26"), label: "Feb 26", value: 51700 },
  { timestamp: Date.parse("2026-02-27"), label: "Feb 27", value: 54200 },
  { timestamp: Date.parse("2026-02-28"), label: "Feb 28", value: 50500 },
  { timestamp: Date.parse("2026-03-01"), label: "Mar 1", value: 47800 },
  { timestamp: Date.parse("2026-03-02"), label: "Mar 2", value: 44600 },
];

// -----------------------------------------------------------------------------
// MOCK_NOTIFICATIONS
// -----------------------------------------------------------------------------

/**
 * 6 notification items representing various system events.
 *
 * @example
 * ```ts
 * import { MOCK_NOTIFICATIONS } from "@/lib/data";
 * const unread = MOCK_NOTIFICATIONS.filter(n => !n.isRead);
 * ```
 */
export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif_001",
    title: "New user registration",
    message: "Kobayashi Mei has joined as an editor.",
    type: "info",
    read: false,
    createdAt: "2026-03-10T14:00:00Z",
  },
  {
    id: "notif_002",
    title: "Revenue milestone reached",
    message: "Monthly revenue exceeded ¥1,200,000 for the first time.",
    type: "success",
    read: false,
    createdAt: "2026-03-09T10:30:00Z",
  },
  {
    id: "notif_003",
    title: "High bounce rate detected",
    message: "Landing page bounce rate spiked to 58% yesterday.",
    type: "warning",
    read: true,
    createdAt: "2026-03-08T16:45:00Z",
  },
  {
    id: "notif_004",
    title: "Server response time alert",
    message: "Average API response time exceeded 500ms threshold.",
    type: "error",
    read: true,
    createdAt: "2026-03-07T08:20:00Z",
  },
  {
    id: "notif_005",
    title: "Weekly report available",
    message: "Your weekly analytics summary is ready to view.",
    type: "info",
    read: false,
    createdAt: "2026-03-06T09:00:00Z",
  },
  {
    id: "notif_006",
    title: "Scheduled maintenance",
    message: "System maintenance planned for March 15, 02:00-04:00 JST.",
    type: "warning",
    read: true,
    createdAt: "2026-03-05T12:00:00Z",
  },
];

// -----------------------------------------------------------------------------
// MOCK_TABLE_COLUMNS
// -----------------------------------------------------------------------------

/**
 * Column definitions for the user activity table.
 *
 * @example
 * ```ts
 * import { MOCK_TABLE_COLUMNS } from "@/lib/data";
 * const sortableColumns = MOCK_TABLE_COLUMNS.filter(c => c.sortable);
 * ```
 */
export const MOCK_TABLE_COLUMNS: TableColumn[] = [
  { key: "id", label: "ID", sortable: true, width: 80 },
  { key: "name", label: "Name", sortable: true, width: 160 },
  { key: "email", label: "Email", sortable: true, width: 220 },
  { key: "action", label: "Action", sortable: true, width: 140 },
  { key: "status", label: "Status", sortable: true, width: 100 },
  { key: "date", label: "Date", sortable: true, width: 130 },
  { key: "amount", label: "Amount", sortable: true, width: 100 },
];

// -----------------------------------------------------------------------------
// MOCK_TABLE_DATA (20 rows)
// -----------------------------------------------------------------------------

/**
 * 20 rows of user activity data for the analytics table.
 *
 * @example
 * ```ts
 * import { MOCK_TABLE_DATA } from "@/lib/data";
 * const completedRows = MOCK_TABLE_DATA.filter(r => r.status === "completed");
 * ```
 */
export const MOCK_TABLE_DATA: Record<string, string | number | boolean>[] = [
  {
    id: 1,
    name: "Tanaka Yuki",
    email: "tanaka.yuki@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-10",
    amount: 15800,
  },
  {
    id: 2,
    name: "Suzuki Hana",
    email: "suzuki.hana@example.com",
    action: "Page View",
    status: "completed",
    date: "2026-03-10",
    amount: 0,
  },
  {
    id: 3,
    name: "Watanabe Ren",
    email: "watanabe.ren@example.com",
    action: "Sign Up",
    status: "completed",
    date: "2026-03-09",
    amount: 0,
  },
  {
    id: 4,
    name: "Ito Sakura",
    email: "ito.sakura@example.com",
    action: "Purchase",
    status: "pending",
    date: "2026-03-09",
    amount: 42300,
  },
  {
    id: 5,
    name: "Nakamura Sora",
    email: "nakamura.sora@example.com",
    action: "Refund",
    status: "processing",
    date: "2026-03-09",
    amount: 8900,
  },
  {
    id: 6,
    name: "Yamamoto Aoi",
    email: "yamamoto.aoi@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-08",
    amount: 27500,
  },
  {
    id: 7,
    name: "Kobayashi Mei",
    email: "kobayashi.mei@example.com",
    action: "Page View",
    status: "completed",
    date: "2026-03-08",
    amount: 0,
  },
  {
    id: 8,
    name: "Kato Haruto",
    email: "kato.haruto@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-08",
    amount: 19200,
  },
  {
    id: 9,
    name: "Tanaka Yuki",
    email: "tanaka.yuki@example.com",
    action: "Page View",
    status: "completed",
    date: "2026-03-07",
    amount: 0,
  },
  {
    id: 10,
    name: "Suzuki Hana",
    email: "suzuki.hana@example.com",
    action: "Purchase",
    status: "failed",
    date: "2026-03-07",
    amount: 33100,
  },
  {
    id: 11,
    name: "Watanabe Ren",
    email: "watanabe.ren@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-06",
    amount: 12400,
  },
  {
    id: 12,
    name: "Ito Sakura",
    email: "ito.sakura@example.com",
    action: "Page View",
    status: "completed",
    date: "2026-03-06",
    amount: 0,
  },
  {
    id: 13,
    name: "Nakamura Sora",
    email: "nakamura.sora@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-05",
    amount: 56700,
  },
  {
    id: 14,
    name: "Yamamoto Aoi",
    email: "yamamoto.aoi@example.com",
    action: "Sign Up",
    status: "completed",
    date: "2026-03-05",
    amount: 0,
  },
  {
    id: 15,
    name: "Kobayashi Mei",
    email: "kobayashi.mei@example.com",
    action: "Purchase",
    status: "pending",
    date: "2026-03-04",
    amount: 21800,
  },
  {
    id: 16,
    name: "Kato Haruto",
    email: "kato.haruto@example.com",
    action: "Refund",
    status: "completed",
    date: "2026-03-04",
    amount: 7600,
  },
  {
    id: 17,
    name: "Tanaka Yuki",
    email: "tanaka.yuki@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-03",
    amount: 38900,
  },
  {
    id: 18,
    name: "Suzuki Hana",
    email: "suzuki.hana@example.com",
    action: "Page View",
    status: "completed",
    date: "2026-03-03",
    amount: 0,
  },
  {
    id: 19,
    name: "Watanabe Ren",
    email: "watanabe.ren@example.com",
    action: "Purchase",
    status: "processing",
    date: "2026-03-02",
    amount: 14500,
  },
  {
    id: 20,
    name: "Ito Sakura",
    email: "ito.sakura@example.com",
    action: "Purchase",
    status: "completed",
    date: "2026-03-01",
    amount: 29300,
  },
];

// -----------------------------------------------------------------------------
// MONTHLY_REVENUE_DATA (12 months)
// -----------------------------------------------------------------------------

/**
 * 12 data points representing monthly revenue for FY2025.
 *
 * @example
 * ```ts
 * import { MONTHLY_REVENUE_DATA } from "@/lib/data";
 * const totalRevenue = MONTHLY_REVENUE_DATA.reduce((sum, d) => sum + d.value, 0);
 * ```
 */
export const MONTHLY_REVENUE_DATA: ChartDataPoint[] = [
  { timestamp: Date.parse("2025-04-01"), label: "Apr", value: 980000 },
  { timestamp: Date.parse("2025-05-01"), label: "May", value: 1050000 },
  { timestamp: Date.parse("2025-06-01"), label: "Jun", value: 1120000 },
  { timestamp: Date.parse("2025-07-01"), label: "Jul", value: 1080000 },
  { timestamp: Date.parse("2025-08-01"), label: "Aug", value: 950000 },
  { timestamp: Date.parse("2025-09-01"), label: "Sep", value: 1150000 },
  { timestamp: Date.parse("2025-10-01"), label: "Oct", value: 1230000 },
  { timestamp: Date.parse("2025-11-01"), label: "Nov", value: 1350000 },
  { timestamp: Date.parse("2025-12-01"), label: "Dec", value: 1580000 },
  { timestamp: Date.parse("2026-01-01"), label: "Jan", value: 1200000 },
  { timestamp: Date.parse("2026-02-01"), label: "Feb", value: 1150000 },
  { timestamp: Date.parse("2026-03-01"), label: "Mar", value: 1284500 },
];

// -----------------------------------------------------------------------------
// WEEKLY_VISITORS_DATA (7 days)
// -----------------------------------------------------------------------------

/**
 * 7 data points representing daily unique visitors for the current week.
 *
 * @example
 * ```ts
 * import { WEEKLY_VISITORS_DATA } from "@/lib/data";
 * const avgVisitors = WEEKLY_VISITORS_DATA.reduce((s, d) => s + d.value, 0) / 7;
 * ```
 */
export const WEEKLY_VISITORS_DATA: ChartDataPoint[] = [
  { timestamp: Date.parse("2026-03-04"), label: "Mon", value: 3420 },
  { timestamp: Date.parse("2026-03-05"), label: "Tue", value: 3850 },
  { timestamp: Date.parse("2026-03-06"), label: "Wed", value: 4100 },
  { timestamp: Date.parse("2026-03-07"), label: "Thu", value: 3780 },
  { timestamp: Date.parse("2026-03-08"), label: "Fri", value: 3950 },
  { timestamp: Date.parse("2026-03-09"), label: "Sat", value: 2810 },
  { timestamp: Date.parse("2026-03-10"), label: "Sun", value: 2540 },
];

// =============================================================================
// 🎯 Lesson 28: ⌃X ⌃]
// ファイルの末尾にジャンプしてください（chord: ⌃X を押してから ⌃]）
// =============================================================================
