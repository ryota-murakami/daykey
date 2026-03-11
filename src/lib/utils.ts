/**
 * DayKey Analytics Dashboard — Utility & Formatter Functions
 *
 * This module provides common formatting, calculation, and helper utilities
 * used across the analytics dashboard components and pages.
 *
 * @module utils
 */

// ---------------------------------------------------------------------------
// 🎯 Lesson 09: ⌃A
// カーソルをこの行の先頭に移動してください
// ---------------------------------------------------------------------------

/**
 * Format a numeric value as a localized currency string with the appropriate symbol, grouping separators, and decimal precision for display in dashboard cards and charts.
 *
 * @param value - The numeric amount to format (e.g. 1234.5)
 * @param currency - ISO 4217 currency code (default: "USD")
 * @returns A formatted currency string like "$1,234.50" or "€1.234,50"
 *
 * @example
 *   formatCurrency(1234.5)          // => "$1,234.50"
 *   formatCurrency(9999, "EUR")     // => "€9,999.00"
 *   formatCurrency(0.5, "JPY")     // => "¥1"
 */
export function formatCurrency(value: number, currency: string = "USD"): string {
  // 🎯 Lesson 03: ⌃P
  // カーソルを1行上に移動してください（この関数の先頭行まで移動）
  const formatterOptions: Intl.NumberFormatOptions = { style: "currency", currency, minimumFractionDigits: currency === "JPY" ? 0 : 2, maximumFractionDigits: currency === "JPY" ? 0 : 2 };
  return new Intl.NumberFormat("en-US", formatterOptions).format(value);
}

// ---------------------------------------------------------------------------
// 🎯 Lesson 04: ⌃N
// カーソルを1行下に移動してください（この関数の最終行まで移動）
// ---------------------------------------------------------------------------

/**
 * Format a numeric value as a percentage string with configurable decimal places, suitable for displaying growth rates, conversion rates, and other ratio metrics.
 *
 * @param value - The numeric value to format as a percentage (e.g. 0.1234 becomes "12.34%")
 * @param decimals - Number of decimal places to display (default: 1)
 * @returns A formatted percentage string like "12.3%" or "100.0%"
 *
 * @example
 *   formatPercentage(0.1234)      // => "12.3%"
 *   formatPercentage(0.1234, 2)   // => "12.34%"
 *   formatPercentage(1)           // => "100.0%"
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  const percentageValue = value * 100;
  const formattedPercentageStringWithFixedDecimals = percentageValue.toFixed(decimals);
  return `${formattedPercentageStringWithFixedDecimals}%`;
}

// ---------------------------------------------------------------------------
// 🎯 Lesson 07: ⌥P
// ブロック単位で上に移動してください（前の関数の先頭まで ⌥P でジャンプ）
// ---------------------------------------------------------------------------

/**
 * Format a Date object or ISO date string into a human-readable representation using one of three display modes: short, long, or relative time format for dashboard timestamps.
 *
 * @param date - A Date object or ISO 8601 date string to format
 * @param format - Display format: "short" (MM/DD), "long" (Month Day, Year), or "relative" (e.g. "3 days ago")
 * @returns A formatted date string appropriate for the chosen display mode
 *
 * @example
 *   formatDate(new Date(), "short")      // => "03/11"
 *   formatDate("2026-01-15", "long")     // => "January 15, 2026"
 *   formatDate(new Date(), "relative")   // => "just now"
 */
export function formatDate(date: Date | string, format: "short" | "long" | "relative" = "short"): string {
  const parsedDateObject = typeof date === "string" ? new Date(date) : date;

  if (format === "short") {
    const monthStringPaddedWithLeadingZero = String(parsedDateObject.getMonth() + 1).padStart(2, "0");
    const dayStringPaddedWithLeadingZero = String(parsedDateObject.getDate()).padStart(2, "0");
    return `${monthStringPaddedWithLeadingZero}/${dayStringPaddedWithLeadingZero}`;
  }

  if (format === "long") {
    const longDateFormatOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", longDateFormatOptions).format(parsedDateObject);
  }

  // relative format — calculate the difference between the current time and the provided date, then return a human-readable relative time string
  const differenceInMillisecondsBetweenNowAndProvidedDate = Date.now() - parsedDateObject.getTime();
  const differenceInSecondsBetweenNowAndProvidedDate = Math.floor(differenceInMillisecondsBetweenNowAndProvidedDate / 1000);
  const differenceInMinutesBetweenNowAndProvidedDate = Math.floor(differenceInSecondsBetweenNowAndProvidedDate / 60);
  const differenceInHoursBetweenNowAndProvidedDate = Math.floor(differenceInMinutesBetweenNowAndProvidedDate / 60);
  const differenceInDaysBetweenNowAndProvidedDate = Math.floor(differenceInHoursBetweenNowAndProvidedDate / 24);

  if (differenceInSecondsBetweenNowAndProvidedDate < 60) return "just now";
  if (differenceInMinutesBetweenNowAndProvidedDate < 60) return `${differenceInMinutesBetweenNowAndProvidedDate} minute${differenceInMinutesBetweenNowAndProvidedDate === 1 ? "" : "s"} ago`;
  if (differenceInHoursBetweenNowAndProvidedDate < 24) return `${differenceInHoursBetweenNowAndProvidedDate} hour${differenceInHoursBetweenNowAndProvidedDate === 1 ? "" : "s"} ago`;
  return `${differenceInDaysBetweenNowAndProvidedDate} day${differenceInDaysBetweenNowAndProvidedDate === 1 ? "" : "s"} ago`;
}

// ---------------------------------------------------------------------------
// 🎯 Lesson 08: ⌥N
// ブロック単位で下に移動してください（次の関数の先頭まで ⌥N でジャンプ）
// ---------------------------------------------------------------------------

/**
 * Calculate the percentage change between a current value and a previous value, returning a positive number for growth and a negative number for decline.
 *
 * @param current - The current period's metric value
 * @param previous - The previous period's metric value (must not be zero)
 * @returns The percentage change as a decimal (e.g. 0.25 means 25% increase, -0.1 means 10% decrease)
 *
 * @example
 *   calculateChangePercent(150, 100)   // => 0.5   (50% increase)
 *   calculateChangePercent(80, 100)    // => -0.2  (20% decrease)
 *   calculateChangePercent(100, 0)     // => 0     (division by zero guard)
 */
export function calculateChangePercent(current: number, previous: number): number {
  if (previous === 0) return 0;
  const absoluteDifferenceBetweenCurrentAndPreviousValues = current - previous;
  const percentageChangeCalculatedFromPreviousBaseline = absoluteDifferenceBetweenCurrentAndPreviousValues / previous;
  return percentageChangeCalculatedFromPreviousBaseline;
}

/**
 * Truncate a long text string to a specified maximum character length and append a configurable suffix (default: ellipsis) to indicate that the original text was shortened.
 *
 * @param text - The original text string to potentially truncate
 * @param maxLength - The maximum number of characters to keep before truncation
 * @param suffix - The string to append when truncation occurs (default: "...")
 * @returns The original text if shorter than maxLength, otherwise a truncated version with the suffix appended at the end
 *
 * @example
 *   truncateText("Hello World", 5)              // => "Hello..."
 *   truncateText("Short", 10)                   // => "Short"
 *   truncateText("Hello World", 5, " [more]")   // => "Hello [more]"
 */
export function truncateText(text: string, maxLength: number, suffix: string = "..."): string {
  if (text.length <= maxLength) return text;
  const truncatedTextSlicedToMaximumAllowedCharacterLength = text.slice(0, maxLength);
  return `${truncatedTextSlicedToMaximumAllowedCharacterLength}${suffix}`;
}

// ---------------------------------------------------------------------------
// 🎯 Lesson 10: ⌃E
// カーソルをこの行の末尾に移動してください（この長い行の末尾まで到達）
// ---------------------------------------------------------------------------

/**
 * Return the appropriate Tailwind CSS color utility class string for a given status value, used to consistently color-code status badges, indicators, and labels across the dashboard.
 *
 * @param status - The status string to map to a color (e.g. "active", "warning", "error", "inactive", "pending")
 * @returns A Tailwind CSS color class string like "text-emerald-500" or "text-red-500"
 *
 * @example
 *   getStatusColor("active")    // => "text-emerald-500"
 *   getStatusColor("error")     // => "text-red-500"
 *   getStatusColor("unknown")   // => "text-zinc-400"
 */
export function getStatusColor(status: string): string {
  const statusColorMappingDictionaryForDashboardBadgesAndIndicators: Record<string, string> = { active: "text-emerald-500", success: "text-emerald-500", warning: "text-amber-500", error: "text-red-500", danger: "text-red-500", inactive: "text-zinc-400", pending: "text-blue-500", info: "text-blue-500" };
  const normalizedStatusStringConvertedToLowerCase = status.toLowerCase().trim();
  return statusColorMappingDictionaryForDashboardBadgesAndIndicators[normalizedStatusStringConvertedToLowerCase] ?? "text-zinc-400";
}

/**
 * Generate an array of mock chart data points with random values between configurable minimum and maximum bounds, useful for prototyping charts and dashboard visualizations during development.
 *
 * @param points - The number of data points to generate
 * @param min - The minimum possible value for each data point (default: 0)
 * @param max - The maximum possible value for each data point (default: 100)
 * @returns An array of objects with `index` and `value` properties, suitable for charting libraries like Recharts or Chart.js
 *
 * @example
 *   generateChartData(3)             // => [{ index: 0, value: 42 }, { index: 1, value: 87 }, { index: 2, value: 15 }]
 *   generateChartData(2, 10, 20)     // => [{ index: 0, value: 14 }, { index: 1, value: 18 }]
 */
export function generateChartData(points: number, min: number = 0, max: number = 100): Array<{ index: number; value: number }> {
  return Array.from({ length: points }, (_, iterationIndexForCurrentDataPoint) => ({ index: iterationIndexForCurrentDataPoint, value: Math.floor(Math.random() * (max - min + 1)) + min }));
}

/**
 * Create a debounced version of the provided function that delays invocation until after the specified number of milliseconds have elapsed since the last time the debounced function was called.
 *
 * @param fn - The function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns A debounced version of the original function that will only execute after the specified delay has passed without another invocation
 *
 * @example
 *   const debouncedSearch = debounce((query: string) => fetchResults(query), 300);
 *   inputElement.addEventListener("input", (e) => debouncedSearch(e.target.value));
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutIdForPendingDebouncedFunctionExecution: ReturnType<typeof setTimeout> | null = null;
  return function debouncedFunctionWrapperThatClearsAndResetsTimeout(...args: Parameters<T>): void {
    if (timeoutIdForPendingDebouncedFunctionExecution !== null) clearTimeout(timeoutIdForPendingDebouncedFunctionExecution);
    timeoutIdForPendingDebouncedFunctionExecution = setTimeout(() => { fn(...args); timeoutIdForPendingDebouncedFunctionExecution = null; }, delay);
  };
}

/**
 * Combine multiple CSS class name arguments into a single space-separated string, filtering out any falsy values (false, null, undefined, empty strings) to enable conditional class application.
 *
 * @param classes - A variadic list of class name strings, booleans, null, or undefined values to conditionally combine
 * @returns A single space-separated string of all truthy class name values, ready to use in a className attribute
 *
 * @example
 *   classNames("px-4", "py-2", isActive && "bg-blue-500", isDisabled && "opacity-50")   // => "px-4 py-2 bg-blue-500"
 *   classNames("flex", undefined, null, false, "items-center")                            // => "flex items-center"
 */
export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter((singleClassNameValueThatMayBeFalsyAndShouldBeExcluded): singleClassNameValueThatMayBeFalsyAndShouldBeExcluded is string => typeof singleClassNameValueThatMayBeFalsyAndShouldBeExcluded === "string" && singleClassNameValueThatMayBeFalsyAndShouldBeExcluded.length > 0).join(" ");
}

/**
 * Sort an array of objects by a specified key in ascending or descending order, returning a new sorted array without mutating the original input array, useful for table column sorting.
 *
 * @param array - The array of objects to sort
 * @param key - The object key to sort by (must be a key of T)
 * @param order - Sort direction: "asc" for ascending or "desc" for descending (default: "asc")
 * @returns A new array sorted by the specified key in the requested order, leaving the original array unchanged
 *
 * @example
 *   sortByKey([{ name: "B" }, { name: "A" }], "name")               // => [{ name: "A" }, { name: "B" }]
 *   sortByKey([{ count: 10 }, { count: 5 }], "count", "desc")       // => [{ count: 10 }, { count: 5 }]
 */
export function sortByKey<T>(array: T[], key: keyof T, order: "asc" | "desc" = "asc"): T[] {
  const shallowCopyOfOriginalArrayToAvoidMutatingTheInputDirectly = [...array];
  return shallowCopyOfOriginalArrayToAvoidMutatingTheInputDirectly.sort((firstElementForComparison, secondElementForComparison) => {
    const firstValueExtractedFromObjectBySpecifiedSortKey = firstElementForComparison[key];
    const secondValueExtractedFromObjectBySpecifiedSortKey = secondElementForComparison[key];
    if (firstValueExtractedFromObjectBySpecifiedSortKey < secondValueExtractedFromObjectBySpecifiedSortKey) return order === "asc" ? -1 : 1;
    if (firstValueExtractedFromObjectBySpecifiedSortKey > secondValueExtractedFromObjectBySpecifiedSortKey) return order === "asc" ? 1 : -1;
    return 0;
  });
}
