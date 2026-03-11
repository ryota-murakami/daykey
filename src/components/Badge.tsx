"use client";

interface BadgeProps {
  status: "active" | "inactive" | "pending" | "error";
  label: string;
  size?: "sm" | "md";
}

const statusStyles: Record<BadgeProps["status"], string> = {
  active: "bg-green-500/15 text-green-400 ring-green-500/30",
  inactive: "bg-gray-500/15 text-gray-400 ring-gray-500/30",
  pending: "bg-yellow-500/15 text-yellow-400 ring-yellow-500/30",
  error: "bg-red-500/15 text-red-400 ring-red-500/30",
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

/**
 * Displays a colored pill badge indicating status.
 *
 * @example
 * <Badge status="active" label="Online" />
 * <Badge status="error" label="Failed" size="sm" />
 */
export function Badge({ status, label, size = "sm" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ring-1 ring-inset ${statusStyles[status]} ${sizeStyles[size]}`}
    >
      {label}
    </span>
  );
}
