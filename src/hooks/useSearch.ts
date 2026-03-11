"use client";

import { useState, useMemo, useCallback } from "react";
import type { SearchFilter } from "@/lib/types";
import { DEFAULT_SEARCH_FILTER } from "@/lib/constants";

/**
 * Search and filter state management hook
 * Provides controlled search input with debounced filtering
 * @example
 * const { filter, setQuery, setCategory, resetFilter } = useSearch();
 */
export function useSearch() {
  const [filter, setFilter] = useState<SearchFilter>(DEFAULT_SEARCH_FILTER);

  const setQuery = useCallback((query: string) => {
    setFilter((prev) => ({ ...prev, query }));
  }, []);

  const setCategory = useCallback((category: string) => {
    setFilter((prev) => ({ ...prev, category }));
  }, []);

  const setStatus = useCallback((status: SearchFilter["status"]) => {
    setFilter((prev) => ({ ...prev, status }));
  }, []);

  const setSortBy = useCallback((sortBy: string) => {
    setFilter((prev) => ({ ...prev, sortBy }));
  }, []);

  const toggleSortOrder = useCallback(() => {
    setFilter((prev) => ({
      ...prev,
      sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
    }));
  }, []);

  const resetFilter = useCallback(() => {
    setFilter(DEFAULT_SEARCH_FILTER);
  }, []);

  const hasActiveFilters = useMemo(() => {
    return (
      filter.query !== "" ||
      filter.category !== "all" ||
      filter.status !== "all" ||
      filter.sortBy !== "date"
    );
  }, [filter]);

  return {
    filter,
    setQuery,
    setCategory,
    setStatus,
    setSortBy,
    toggleSortOrder,
    resetFilter,
    hasActiveFilters,
  };
}
