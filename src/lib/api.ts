// 🎯 Lesson 54: ⌘B
// Go to Implementation — このファイルの関数がコンポーネントから呼ばれています
// ⌘B で呼び出し元からここにジャンプしてみてください

// 🎯 Lesson 55: ⌘B
// Go to Definition — 型定義にジャンプしてみてください
// ApiResponse の上で ⌘⌥B を押してください

import type {
  ApiResponse,
  User,
  DashboardMetric,
  NotificationItem,
} from "@/lib/types";

import {
  MOCK_USERS,
  MOCK_METRICS,
  MOCK_NOTIFICATIONS,
  MOCK_TABLE_DATA,
} from "@/lib/data";

/**
 * Simulate a network delay for fake API calls.
 * @example
 * await simulateDelay();
 */
async function simulateDelay(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 100));
}

/**
 * Create a successful ApiResponse wrapper.
 * @example
 * const response = createResponse(data, data.length);
 */
function createResponse<T>(data: T, total: number = 1, page: number = 1, perPage: number = 20): ApiResponse<T> {
  return {
    success: true,
    data,
    error: null,
    meta: { page, perPage, total, timestamp: new Date().toISOString() },
  };
}

/**
 * Fetch all dashboard metrics.
 * @returns A list of dashboard metrics wrapped in an ApiResponse.
 * @example
 * const { data, success } = await fetchDashboardMetrics();
 */
export async function fetchDashboardMetrics(): Promise<ApiResponse<DashboardMetric[]>> {
  await simulateDelay();
  return createResponse(MOCK_METRICS, MOCK_METRICS.length);
}

/**
 * Fetch users, optionally filtered by a search query.
 * @param query - Optional search string to filter by name or email.
 * @returns A filtered list of users wrapped in an ApiResponse.
 * @example
 * const { data } = await fetchUsers("admin");
 */
export async function fetchUsers(query?: string): Promise<ApiResponse<User[]>> {
  await simulateDelay();

  let users = [...MOCK_USERS];

  if (query) {
    const q = query.toLowerCase();
    users = users.filter(
      (user) =>
        user.name.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q),
    );
  }

  return createResponse(users, users.length);
}

/**
 * Fetch all notifications.
 * @returns A list of notification items wrapped in an ApiResponse.
 * @example
 * const { data } = await fetchNotifications();
 */
export async function fetchNotifications(): Promise<ApiResponse<NotificationItem[]>> {
  await simulateDelay();
  return createResponse(MOCK_NOTIFICATIONS, MOCK_NOTIFICATIONS.length);
}

/**
 * Fetch paginated table data.
 * @param page - The page number (1-indexed). Defaults to 1.
 * @param pageSize - The number of rows per page. Defaults to 10.
 * @returns A page of table rows and the total count, wrapped in an ApiResponse.
 * @example
 * const { data } = await fetchTableData(2, 20);
 */
export async function fetchTableData(
  page: number = 1,
  pageSize: number = 10,
): Promise<ApiResponse<{ rows: Record<string, string | number | boolean>[]; total: number }>> {
  await simulateDelay();

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const rows = MOCK_TABLE_DATA.slice(start, end);

  return createResponse({ rows, total: MOCK_TABLE_DATA.length }, MOCK_TABLE_DATA.length, page, pageSize);
}

/**
 * Update a single dashboard metric's value by ID.
 * @param id - The metric ID to update.
 * @param value - The new numeric value for the metric.
 * @returns The updated metric wrapped in an ApiResponse.
 * @example
 * const { data } = await updateMetric("metric-1", 42);
 */
export async function updateMetric(id: string, value: number): Promise<ApiResponse<DashboardMetric>> {
  await simulateDelay();

  const metric = MOCK_METRICS.find((m) => m.id === id);

  if (!metric) {
    return {
      success: false,
      data: {} as DashboardMetric,
      error: `Metric with id "${id}" not found`,
      meta: { page: 1, perPage: 1, total: 0, timestamp: new Date().toISOString() },
    };
  }

  const updated: DashboardMetric = { ...metric, value };
  return createResponse(updated);
}

/**
 * Search users by name or email.
 * @param query - The search string to match against user name and email.
 * @returns A list of matching users wrapped in an ApiResponse.
 * @example
 * const { data } = await searchUsers("john");
 */
export async function searchUsers(query: string): Promise<ApiResponse<User[]>> {
  await simulateDelay();

  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return createResponse(MOCK_USERS, MOCK_USERS.length);
  }

  const matched = MOCK_USERS.filter(
    (user) =>
      user.name.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery),
  );

  return createResponse(matched, matched.length);
}
