"use client";

import { useState, useEffect, useCallback } from "react";
import type { DashboardMetric, User, NotificationItem } from "@/lib/types";
import { fetchDashboardMetrics, fetchUsers, fetchNotifications } from "@/lib/api";

// 🎯 Lesson 64: ⌃I
// 型ベースの補完を試してください — 下の関数内で「metrics.」と入力し ⌃I を押すと
// DashboardMetric[] のメソッド候補が表示されます

interface DashboardState {
  metrics: DashboardMetric[];
  users: User[];
  notifications: NotificationItem[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Dashboard data management hook
 * Fetches and manages all dashboard-related data
 * @example
 * const { metrics, users, isLoading, refresh } = useDashboard();
 */
export function useDashboard() {
  const [state, setState] = useState<DashboardState>({
    metrics: [],
    users: [],
    notifications: [],
    isLoading: true,
    error: null,
  });

  const loadData = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const [metricsRes, usersRes, notificationsRes] = await Promise.all([
        fetchDashboardMetrics(),
        fetchUsers(),
        fetchNotifications(),
      ]);

      if (metricsRes.success && usersRes.success && notificationsRes.success) {
        setState({
          metrics: metricsRes.data,
          users: usersRes.data,
          notifications: notificationsRes.data,
          isLoading: false,
          error: null,
        });
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : "Failed to load dashboard data",
      }));
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refresh = useCallback(() => {
    loadData();
  }, [loadData]);

  const unreadNotificationCount = state.notifications.filter((n) => !n.read).length;

  return {
    ...state,
    refresh,
    unreadNotificationCount,
  };
}
