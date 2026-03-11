"use client";

// 🎯 Lesson 39: ⌃K
// カーソル位置から行末までを ⌃K で切り取ってください（Cut All Right）

// 🎯 Lesson 40: ⌃R
// "modalTitle" シンボルを "dialogTitle" にリネームしてください（⌃R でリネーム）

// 🎯 Lesson 41: ⇧⌘T
// 下のテキストを選択して ⇧⌘T で HTML タグで囲んでください（Surround With）

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeStyles: Record<NonNullable<ModalProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

/**
 * Modal dialog component with backdrop overlay.
 * Renders a centered card with a header (title + close button) and a body
 * area that accepts arbitrary children. Supports sm, md, and lg sizes.
 *
 * @example
 * <Modal isOpen={true} onClose={() => {}} title="Confirm Action">
 *   <p>Are you sure you want to proceed?</p>
 * </Modal>
 *
 * @example
 * <Modal isOpen={showModal} onClose={handleClose} title="Settings" size="lg">
 *   <SettingsForm />
 * </Modal>
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative z-10 w-full ${sizeStyles[size]} rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <h2
            id="modal-title"
            className="text-lg font-semibold text-gray-100"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-white/5 hover:text-gray-300"
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-sm text-gray-300">{children}</div>
      </div>
    </div>
  );
}
