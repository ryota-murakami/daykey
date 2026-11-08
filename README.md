# DayKey

Emacs/WebStorm/Cursor スタイルのキーバインドを、実際の Next.js プロジェクトのソースコード上で練習するチュートリアルです。vimtutor や Emacs Tutorial と同じアプローチ — **ソースコード自体が教材**です。

> Practice Emacs/WebStorm/Cursor-style keybindings directly on real Next.js source code. Like vimtutor, the source code IS the tutorial.

## Prerequisites

- **エディタ**: [Cursor](https://cursor.sh/) または [WebStorm](https://www.jetbrains.com/webstorm/) (Emacs キーマップ設定済み)
- **Node.js** 18+
- **pnpm**
- (推奨) [Key](https://github.com/laststance/key) — macOS メニューバーのキーバインド一覧アプリ

## Quick Start

```bash
# 1. 依存パッケージをインストール
cd ~/repository/daykey
pnpm install

# 2. エディタで開く
cursor .   # or: webstorm .

# 3. TUTORIAL.md を開いて Lesson 01 から始める
```

## How It Works

各ソースファイルに `// 🎯 Lesson NN: <ショートカット>` 形式のコメントが埋め込まれています。コメントの指示に従ってキーバインドを実行してください。

```tsx
// 🎯 Lesson 01: ⌃F
// カーソルを右に1文字ずつ移動して、この行の末尾まで到達してください
export interface User {
```

全 100 レッスンの一覧は **[TUTORIAL.md](./TUTORIAL.md)** を参照してください。

## Lesson Categories

| Category | Lessons | Practice Focus |
|----------|---------|----------------|
| Move Cursor | 01–10 | ⌃F/⌃B/⌃A/⌃E, 単語・ブロック移動 |
| Selection | 11–24 | 選択拡張, カーソル追加, ブラケット内選択 |
| Scroll | 25–29 | ⌃V/⌥V ページスクロール |
| Code Edit | 30–44, 100 | Delete/Copy/Paste, リネーム, タグ操作 |
| Find | 45–48 | ⌘F/⌘⇧F 検索・置換 |
| Split Editor | 49–53 | エディタ分割とフォーカス移動 |
| Code Jump | 54–63 | 定義/実装ジャンプ, 履歴移動 |
| IntelliSense | 64 | ⌃I 型補完 |
| File Explorer | 65–72 | エクスプローラー切替, ターミナル, ファイル操作 |
| IDE Feature | 73–88 | コマンドパレット, ターミナル配置, 設定, Agents Window |
| AI | 89–91 | AI チャット操作 |
| Git | 92 | Git Blame |
| Multiple Cursor | 93–99 | 矩形選択, カーソルクローン, multiCursorModifier |

## Modifier Key Legend

| Symbol | Key |
|--------|-----|
| `⌃` | Control |
| `⌥` | Option / Alt |
| `⌘` | Command |
| `⇧` | Shift |
| `↩` | Return / Enter |

Chord (例: `⌃X ⌃F`) = 最初のキーを押して離してから、次のキーを押す。

## Reset & Replay

```bash
# 練習をやり直す
git checkout .

# 完全リセット（新規作成したファイルも削除）
git checkout . && git clean -fd
```

## Tech Stack

| Technology | Version |
|------------|---------|
| [Next.js](https://nextjs.org/) | 16.1.6 |
| [React](https://react.dev/) | 19.2.3 |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.2.1 |
| pnpm | latest |

## Project Structure

```
daykey/
  TUTORIAL.md              # Master lesson guide (全100レッスン一覧)
  src/
    app/
      layout.tsx            # Root layout (Lessons 56–57)
      page.tsx              # Dashboard page (Lessons 45–48, 58–92)
      globals.css           # Tailwind v4 + dark theme variables
    components/
      Header.tsx            # Nav bar (Lessons 17–24)
      Sidebar.tsx           # Side navigation (Lessons 52–53)
      StatCard.tsx          # Metric card (Lessons 30–34)
      StatsGrid.tsx         # Stats grid (Lessons 49–51)
      Chart.tsx             # Bar chart (Lessons 42–44, 100)
      DataTable.tsx         # Data table (Lessons 11–16, 93–99)
      SearchBar.tsx         # Search input (Lessons 35–36)
      UserMenu.tsx          # User dropdown (Lessons 37–38)
      Modal.tsx             # Modal dialog (Lessons 39–41)
      Badge.tsx             # Status badge
    lib/
      types.ts              # Shared TypeScript interfaces (Lessons 01–02, 05–06)
      utils.ts              # Utility functions (Lessons 03–04, 07–10)
      data.ts               # Mock data — intentionally long (Lessons 25–29)
      api.ts                # Fake API functions (Lessons 54–55)
      constants.ts          # App constants
    hooks/
      useDashboard.ts       # Dashboard data hook (Lesson 64)
      useSearch.ts          # Search/filter hook
```

## Related

- **[Key](https://github.com/laststance/key)** — macOS メニューバーに常駐するキーバインド一覧アプリ。このチュートリアルで練習するキーバインドの元データです。
