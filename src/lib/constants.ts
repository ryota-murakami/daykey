// =============================================================================
// DayKey Dashboard - Application Constants
// =============================================================================

import type { SearchFilter } from "./types";

/** Application title displayed in the browser tab and dashboard header */
export const DASHBOARD_TITLE = "DayKey Analytics Dashboard";

/** Current semantic version of the application */
export const APP_VERSION = "1.0.0";

/** Maximum number of rows rendered in a single table page before pagination */
export const MAX_TABLE_ROWS = 50;

/** Default page size options available in the table pagination selector */
export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;

/** Debounce delay in milliseconds applied to search input to reduce API calls */
export const SEARCH_DEBOUNCE_MS = 300;

/** Color palette used for chart data series, ordered for maximum visual distinction */
export const CHART_COLORS = [
  "#6366F1", // indigo
  "#EC4899", // pink
  "#14B8A6", // teal
  "#F59E0B", // amber
  "#8B5CF6", // violet
  "#10B981", // emerald
  "#F97316", // orange
  "#3B82F6", // blue
  "#EF4444", // red
  "#84CC16", // lime
] as const;

/** Primary navigation items rendered in the sidebar menu */
export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Analytics", href: "/analytics", icon: "BarChart3" },
  { label: "Users", href: "/users", icon: "Users" },
  { label: "Reports", href: "/reports", icon: "FileText" },
  { label: "Notifications", href: "/notifications", icon: "Bell" },
  { label: "Settings", href: "/settings", icon: "Settings" },
] as const;

/** Mapping of item lifecycle statuses to display labels and theme colors */
export const STATUS_MAP: Record<
  string,
  { label: string; color: string; bgColor: string }
> = {
  active: {
    label: "Active",
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
  inactive: {
    label: "Inactive",
    color: "#6B7280",
    bgColor: "rgba(107, 114, 128, 0.1)",
  },
  archived: {
    label: "Archived",
    color: "#F59E0B",
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
  pending: {
    label: "Pending",
    color: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  error: {
    label: "Error",
    color: "#EF4444",
    bgColor: "rgba(239, 68, 68, 0.1)",
  },
};

/** Available metric grouping categories with display metadata */
export const METRIC_CATEGORIES = [
  { id: "engagement", label: "Engagement", icon: "MousePointerClick" },
  { id: "performance", label: "Performance", icon: "Zap" },
  { id: "revenue", label: "Revenue", icon: "DollarSign" },
  { id: "growth", label: "Growth", icon: "TrendingUp" },
] as const;

/** Default values for the search filter, applied on initial page load and filter reset */
export const DEFAULT_SEARCH_FILTER: SearchFilter = {
  query: "",
  category: null,
  dateRange: {
    start: null,
    end: null,
  },
  status: "all",
  sortBy: "createdAt",
  sortOrder: "desc",
};

/** Backend API endpoint paths, relative to the API base URL */
export const API_ENDPOINTS = {
  metrics: "/api/metrics",
  metricById: "/api/metrics/:id",
  users: "/api/users",
  userById: "/api/users/:id",
  charts: "/api/charts",
  chartData: "/api/charts/:id/data",
  notifications: "/api/notifications",
  notificationRead: "/api/notifications/:id/read",
  search: "/api/search",
  settings: "/api/settings",
  auth: "/api/auth",
  authLogin: "/api/auth/login",
  authLogout: "/api/auth/logout",
} as const;
