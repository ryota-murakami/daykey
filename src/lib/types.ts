// =============================================================================
// DayKey Dashboard - Shared Type Definitions
// =============================================================================
//
// This file contains all shared TypeScript interfaces used across the
// analytics dashboard. Types are organized from foundational (User, Metric)
// to compositional (ApiResponse<T>, ModalConfig).
// =============================================================================

// 🎯 Lesson 01: ⌃F
// カーソルを右に1文字ずつ移動して、この行の末尾まで到達してください
// Practice: Place your cursor at the start of the `role` union type below and press ⌃F repeatedly to reach the semicolon.

/** Represents a registered user in the analytics platform. */
export interface User {
  /** Unique identifier (UUID v4 format) */
  id: string;
  /** Full display name shown in the dashboard header and comment threads */
  name: string;
  /** Primary email address used for authentication and notification delivery */
  email: string;
  /** Authorization role determining feature access: admin has full control, editor can modify dashboards, viewer is read-only */
  role: "admin" | "editor" | "viewer" | "guest";
  /** URL to the user's profile avatar image hosted on the CDN */
  avatar: string | null;
  /** ISO 8601 timestamp of the most recent successful authentication event */
  lastLogin: string;
  /** ISO 8601 timestamp of when the account was initially provisioned */
  createdAt: string;
}

// 🎯 Lesson 02: ⌃B
// カーソルを左に1文字ずつ移動して、この行の先頭まで戻ってください
// Practice: Place your cursor at the end of the `changePercent` line and press ⌃B repeatedly to reach the start.

/** A single KPI metric displayed as a card on the dashboard overview page. */
export interface DashboardMetric {
  /** Unique metric identifier used for API fetching and caching */
  id: string;
  /** Human-readable label displayed above the metric value in the card header */
  label: string;
  /** Current numeric value of the metric for the selected time period */
  value: number;
  /** Numeric value from the previous comparable time period for trend comparison */
  previousValue: number;
  /** Absolute difference between current value and previous value (value - previousValue) */
  change: number;
  /** Percentage change relative to the previous value, calculated as ((value - previousValue) / previousValue) * 100 */
  changePercent: number;
  /** Visual trend direction indicator determining the arrow icon and color scheme applied to the metric card */
  trend: "up" | "down" | "stable";
  /** Display unit appended after the formatted value string (e.g., "%", "ms", "req/s", "users") */
  unit: string;
  /** Grouping category used to organize metrics into collapsible sections on the overview page */
  category: "engagement" | "performance" | "revenue" | "growth";
}

// 🎯 Lesson 05: ⌥F
// 単語単位で右に移動してください（⌥F を使って次の単語へジャンプ）
// Practice: Start at the beginning of the comment below and use ⌥F to jump word-by-word through the long property names.
// Try navigating: timestamp → value → label → color → metadata fields quickly.

/** Individual data point rendered within a chart visualization component. */
export interface ChartDataPoint {
  /** Unix timestamp in milliseconds representing when this data point was recorded */
  timestamp: number;
  /** Numeric measurement value plotted on the Y-axis of the chart */
  value: number;
  /** Optional descriptive label shown in tooltips when hovering over this data point */
  label?: string;
  /** CSS color string (hex, rgb, or hsl) used to render this specific data point */
  color?: string;
  /** Additional key-value metadata attached to this data point for drill-down analysis */
  metadata?: Record<string, string | number | boolean>;
}

/** Configuration object controlling the appearance and behavior of chart components. */
export interface ChartConfig {
  /** Chart visualization type determining the rendering strategy and interaction model */
  type: "line" | "bar" | "area" | "pie" | "donut" | "scatter";
  /** Array of data points to be plotted within the chart visualization area */
  data: ChartDataPoint[];
  /** Configuration for the horizontal axis including label text and formatting rules */
  xAxis: {
    label: string;
    format: "date" | "number" | "category";
    tickCount?: number;
    min?: number;
    max?: number;
  };
  /** Configuration for the vertical axis including label text and scaling behavior */
  yAxis: {
    label: string;
    format: "number" | "percent" | "currency";
    tickCount?: number;
    min?: number;
    max?: number;
  };
  /** Whether to display the color-coded legend identifying each data series */
  showLegend: boolean;
  /** Whether to render subtle background grid lines for easier value reading */
  showGrid: boolean;
  /** Whether the chart should automatically resize to fill its container width */
  responsive: boolean;
}

// 🎯 Lesson 06: ⌥B
// 単語単位で左に移動してください
// Practice: Place your cursor at the end of the `render` property type annotation and use ⌥B to jump back word by word.
// The complex generic type `(value: string | number, row: TableRow) => React.ReactNode` is great practice.

/** Column definition for configurable data tables used throughout the dashboard. */
export interface TableColumn {
  /** Property key matching a field name in the TableRow record for data binding */
  key: string;
  /** Column header label displayed at the top of the table in the thead element */
  label: string;
  /** Whether this column supports click-to-sort ascending and descending functionality */
  sortable: boolean;
  /** Fixed pixel width for the column; undefined allows flex-based automatic sizing */
  width?: number;
  /** Horizontal text alignment applied to both the header cell and all body cells */
  align?: "left" | "center" | "right";
  /** Optional custom render function receiving the cell value and full row data, returning a React node for display */
  render?: (value: string | number, row: TableRow) => string;
}

/** A single row of data in a dashboard table, with string keys mapping to display values. */
export type TableRow = Record<string, string | number | boolean | null>;

/** Filter parameters for the global search and data filtering functionality. */
export interface SearchFilter {
  /** Free-text search query string matched against titles, descriptions, and content fields */
  query: string;
  /** Selected category identifier used to narrow results to a specific content grouping */
  category: string | null;
  /** Date range boundaries for temporal filtering of search results and table data */
  dateRange: {
    /** ISO 8601 start date string (inclusive) for the filter range */
    start: string | null;
    /** ISO 8601 end date string (inclusive) for the filter range */
    end: string | null;
  };
  /** Active status filter restricting results to items matching the selected lifecycle state */
  status: "all" | "active" | "inactive" | "archived" | "pending";
  /** Field name used as the primary sort key for ordering filtered results */
  sortBy: string;
  /** Sort direction applied to the sortBy field when ordering the result set */
  sortOrder: "asc" | "desc";
}

/** Generic wrapper for all API responses providing consistent structure for success and error cases. */
export interface ApiResponse<T> {
  /** Indicates whether the API request completed successfully without errors */
  success: boolean;
  /** The response payload data, present only when success is true */
  data: T;
  /** Human-readable error message describing what went wrong, present only when success is false */
  error: string | null;
  /** Additional metadata about the response including pagination and rate limiting information */
  meta: {
    /** Current page number in paginated result sets (1-indexed) */
    page: number;
    /** Maximum number of items returned per page in this response */
    perPage: number;
    /** Total count of items matching the query across all pages */
    total: number;
    /** ISO 8601 timestamp indicating when this response was generated by the server */
    timestamp: string;
  };
}

/** A notification item displayed in the notification dropdown panel in the top navigation bar. */
export interface NotificationItem {
  /** Unique notification identifier used for marking as read and dismissal tracking */
  id: string;
  /** Brief title summarizing the notification event shown in bold in the notification list */
  title: string;
  /** Detailed message body providing context about the notification event and any required actions */
  message: string;
  /** Notification severity type determining the icon, color accent, and default sort priority */
  type: "info" | "success" | "warning" | "error";
  /** Whether the user has viewed or acknowledged this notification */
  read: boolean;
  /** ISO 8601 timestamp of when the notification event was generated by the backend system */
  createdAt: string;
}

/** Configuration for modal dialog windows used for confirmations, forms, and detail views. */
export interface ModalConfig {
  /** Title text displayed in the modal header bar at the top of the dialog overlay */
  title: string;
  /** Predefined size preset controlling the modal width: sm=400px, md=600px, lg=800px, xl=1000px, full=100vw */
  size: "sm" | "md" | "lg" | "xl" | "full";
  /** Whether to show the X close button in the top-right corner of the modal header */
  closable: boolean;
  /** Callback function invoked when the modal is dismissed via close button, backdrop click, or Escape key */
  onClose: () => void;
  /** Optional callback function invoked when the primary confirm action button is clicked */
  onConfirm?: () => void;
}
