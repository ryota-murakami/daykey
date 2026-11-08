# AGENTS.md

## Project

DayKey — vimtutor-style keybind practice tutorial. A Next.js analytics dashboard where the source code IS the tutorial material. Users practice 98 lessons by following lesson comments embedded in source files.

**This is NOT a running web app for end users.** The code exists as practice material for editor keybind training.

## Tech Stack

- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5.9.3 (strict mode)
- Tailwind CSS 4.2.1 (CSS-first config, no tailwind.config.js)
- ESLint 9 (flat config, next/core-web-vitals + next/typescript)
- pnpm (required — do not use npm or yarn)

## Commands

```bash
pnpm install          # install dependencies
pnpm dev              # start dev server (localhost:3000)
pnpm build            # production build
pnpm lint             # run ESLint
```

No test suite exists.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout
    page.tsx            # Main dashboard page (imports all components)
    globals.css         # Tailwind v4 imports + dark theme CSS variables
  components/           # 10 React components (dashboard UI)
  hooks/                # 2 custom hooks (useDashboard, useSearch)
  lib/
    types.ts            # Shared TypeScript interfaces
    utils.ts            # Utility functions with intentionally long lines
    data.ts             # Mock data (600+ lines, intentionally long for scroll practice)
    api.ts              # Fake async API functions
    constants.ts        # App constants
TUTORIAL.md             # Master lesson guide listing all 98 lessons
```

## Architecture

- Path alias: `@/*` → `./src/*`
- CSS: Tailwind v4 with `@import "tailwindcss"` in globals.css, `@theme inline` for custom design tokens
- PostCSS: `@tailwindcss/postcss` plugin (postcss.config.mjs)
- No tailwind.config.js — Tailwind v4 CSS-first configuration
- Dark theme only (CSS custom properties in `:root`)

## Conventions

### Lesson Comments (CRITICAL)

98 tutorial lessons are embedded as comments across source files:

```tsx
// 🎯 Lesson NN: <shortcut>
// <Japanese instruction>
```

Format: `// 🎯 Lesson` + lesson number + `: ` + shortcut symbol(s). Lessons 01–99 are zero-padded to 2 digits; 100 and above use the full number.

### Docstrings

Functions include JSDoc with `@example` blocks:

```tsx
/**
 * Formats a cell value for display.
 * @example
 * formatCellValue(true)  // → "Yes"
 */
```

### Modifier Symbols

Shortcuts use Unicode modifier symbols: `⌃` (Control), `⌥` (Option), `⌘` (Command), `⇧` (Shift), `↩` (Return).

Chord shortcuts (e.g., `⌃X ⌃F`): press first key, release, press second key.

## Rules

1. **NEVER remove or modify `// 🎯 Lesson` comments.** These are the core tutorial content. Every source file change must preserve all lesson comments exactly.
2. **NEVER modify TUTORIAL.md lesson numbering or shortcut assignments.** The 98-lesson sequence is fixed.
3. **Preserve intentionally long lines in `utils.ts` and `data.ts`.** These exist for cursor movement and scroll practice.
4. **Preserve repetitive patterns in `DataTable.tsx`.** The repeated `<td>` structure exists for multiple cursor practice.
5. **Use pnpm only.** Do not use npm, yarn, or bun.
6. **Maintain dark theme.** All UI uses CSS custom properties defined in `globals.css :root`.
7. **Keep `data.ts` long.** The 600+ line file length is intentional for scroll lessons (25–29).
8. **Do not add custom keybind commands to this repo.** Commands that have no built-in editor equivalent belong in `~/dotfiles/local.extend-keybinds`. Add the command there, then run `install_extend_keybinds` to install it into VS Code, Cursor, and Devin Desktop.

## File Purposes

| File | Purpose | Lesson Range |
|------|---------|--------------|
| `src/lib/types.ts` | TypeScript interfaces for cursor practice | 01–02, 05–06 |
| `src/lib/utils.ts` | Long-line utility functions | 03–04, 07–10 |
| `src/lib/data.ts` | 600+ line mock data for scroll practice | 25–29 |
| `src/lib/api.ts` | Async API functions for code jump practice | 54–55 |
| `src/components/DataTable.tsx` | Repetitive JSX for multi-cursor practice | 11–16, 92–97 |
| `src/components/Header.tsx` | JSX with brackets for selection practice | 17–24 |
| `src/components/StatCard.tsx` | Simple component for edit operations | 30–34 |
| `src/components/Chart.tsx` | HTML tag structure for tag operations | 42–44, 98 |
| `src/app/page.tsx` | Main page with many imports and lessons | 45–48, 58–91 |
| `TUTORIAL.md` | Master lesson guide (human reference) | all |
