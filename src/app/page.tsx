"use client";

// 🎯 Lesson 45: ⌘F
// Find — ⌘F を押して、このファイル内で "Dashboard" というテキストを検索してください
// 検索バーが開いたら "Dashboard" と入力して Enter で次の一致箇所にジャンプ

// 🎯 Lesson 46: ⌘⇧F
// Find in Project — ⌘⇧F を押して、プロジェクト全体から "formatCurrency" を検索してください
// src/lib/utils.ts で定義され、src/components/StatCard.tsx で使われていることを確認

// 🎯 Lesson 47: ⌘R
// Replace — ⌘R を押して、このファイル内の "Analytics" を "Metrics" に置換してください
// 置換バーで1つずつ確認しながら置換できます

// 🎯 Lesson 48: ⌘⇧R
// Replace in Folder — ⌘⇧R を押して、プロジェクト全体で "isLoading" を "isPending" に置換してください
// ※ 実行前に内容を確認してください。完了後は ⌘Z で戻せます

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { StatsGrid } from "@/components/StatsGrid";
import { Chart } from "@/components/Chart";
import { DataTable } from "@/components/DataTable";
import { Modal } from "@/components/Modal";
import { useDashboard } from "@/hooks/useDashboard";
import { useSearch } from "@/hooks/useSearch";
import { MOCK_TABLE_DATA, MOCK_TABLE_COLUMNS, MONTHLY_REVENUE_DATA, WEEKLY_VISITORS_DATA } from "@/lib/data";
import { useState } from "react";

// 🎯 Lesson 58: ⌃⌘M
// Go to Matching HTML/JSX Tag — 下の JSX の <main> タグにカーソルを置いて
// ⌃⌘M を押すと、対応する </main> にジャンプします（Cursor）

// 🎯 Lesson 59: ⌘[
// prev code jump history — コードジャンプの履歴を戻ります
// まず ⌘B でどこかの定義にジャンプしてから、⌘[ で元の位置に戻ってください

// 🎯 Lesson 60: ⌘]
// next code jump history — ⌘[ で戻った後、⌘] で再び進みます

// 🎯 Lesson 61: ⌘G
// Next HighLight Symbol — 下の "isLoading" をダブルクリックで選択してから
// ⌘G を押すと、次の同じシンボルにジャンプします

// 🎯 Lesson 62: ⇧⌘G
// Prev HighLight Symbol — ⇧⌘G で前の同じシンボルに戻ります

// 🎯 Lesson 63: ⇧⌘P
// Next Problem — ⇧⌘P でファイル内の次のエラー/警告にジャンプします
// （エラーがない場合は何も起きません）

export default function DashboardPage() {
  const { metrics, notifications, isLoading, error, refresh, unreadNotificationCount } = useDashboard();
  const { filter, setQuery } = useSearch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🎯 Lesson 65: ⌘1
  // Toggle Explorer — ⌘1 を押してファイルエクスプローラーの表示/非表示を切り替えてください

  // 🎯 Lesson 66: ⌘2
  // Toggle Outline — ⌘2 を押してアウトラインパネルを表示してください
  // このファイルの関数やコンポーネントの構造が見えます

  // 🎯 Lesson 67: Esc
  // Focus Editor — エクスプローラーやサイドパネルにフォーカスがある状態で
  // Esc を押すとエディタにフォーカスが戻ります

  // 🎯 Lesson 68: ⌘N
  // New File — ファイルエクスプローラーにフォーカスした状態で ⌘N を押して
  // 新しいファイルを作成してください（例: src/components/Footer.tsx）

  // 🎯 Lesson 69: ⌘D
  // New Folder — ファイルエクスプローラーで ⌘D を押して新しいフォルダを作成してください

  // 🎯 Lesson 70: ⌃R
  // Rename — ファイルエクスプローラーでファイルを選択し ⌃R でリネームしてください

  // 🎯 Lesson 71: Delete
  // Delete — ファイルエクスプローラーで Lesson 68 で作ったファイルを選択し Delete で削除

  // 🎯 Lesson 72: ⌘⇧C
  // Copy Relative File Path — このファイルを選択して ⌘⇧C で相対パスをコピーしてください
  // "src/app/page.tsx" がクリップボードにコピーされます

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <p className="text-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="mb-2 text-danger">Error: {error}</p>
          <button onClick={refresh} className="rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent-hover">
            Retry
          </button>
        </div>
      </div>
    );
  }

  // 🎯 Lesson 73: ⌘P
  // Command Palette — ⌘P を押してコマンドパレットを開いてください
  // ファイル名を入力して素早くファイルを開けます

  // 🎯 Lesson 74: ⌘O
  // Open filename Search — ⌘O を押してファイル名検索を開いてください

  // 🎯 Lesson 75: ⌘⇧O
  // Go to Symbol — ⌘⇧O を押してシンボル検索を開いてください
  // "DashboardPage" や "StatsGrid" などのシンボルに直接ジャンプできます

  // 🎯 Lesson 76: ⌃T
  // Refactor Menu — 下の関数名や変数を選択して ⌃T でリファクタリングメニューを開いてください

  // 🎯 Lesson 77: ⌘U
  // Show Reference/Usage — "useDashboard" にカーソルを置いて ⌘U を押してください
  // この関数がどこで使われているか一覧表示されます

  // 🎯 Lesson 78: ⌃C ⌃C
  // Show Context Menu — ⌃C ⌃C でコンテキストメニューを表示してください（chord shortcut）

  // 🎯 Lesson 79: ⌃\
  // Toggle Terminal — ⌃\ を押してターミナルパネルの表示/非表示を切り替えてください

  // 🎯 Lesson 80: ⇧⌘D
  // Toggle Panel Right/Bottom — ⇧⌘D でターミナルパネルを右と下で切り替えてください
  // 右にあるときは下へ、下にあるときは右へ戻ります

  // 🎯 Lesson 81: ⌃X ⌃R
  // Reload Window — ⌃X ⌃R でウィンドウをリロードしてください（chord shortcut）

  // 🎯 Lesson 82: ⌃⌘,
  // Open Settings — ⌃⌘, で設定画面を開いてください

  // 🎯 Lesson 83: ⌃X ⌃X
  // ESLint --fix — ⌃X ⌃X で ESLint の自動修正を実行してください（chord shortcut）

  // 🎯 Lesson 84: ⌃Space
  // Format with Prettier — ⌃Space でコードをフォーマットしてください

  // 🎯 Lesson 85: ⇧⌘,
  // Keyboard Shortcuts — ⇧⌘, でキーボードショートカット設定を開いてください

  // 🎯 Lesson 86: ⇧⌘J
  // Open Cursor Settings — ⇧⌘J で Cursor 固有の設定を開いてください

  // 🎯 Lesson 87: ⌘E
  // Show Markdown Preview — TUTORIAL.md を開いて ⌘E でマークダウンプレビューを表示してください

  // 🎯 Lesson 88: ⌃W
  // Switch Project — ⌃W でプロジェクト切り替えメニューを開いてください

  // 🎯 Lesson 89: ⌃X ⌃1
  // Toggle Primary Side Bar — ⌃X ⌃1 でプライマリサイドバーをトグルしてください（chord shortcut）

  // 🎯 Lesson 90: ⌘L
  // Toggle Chat Tab — ⌘L で AI チャットタブを開いてください

  // 🎯 Lesson 91: ⌘⇧L
  // New AI Chat — ⌘⇧L で新しい AI チャットを開始してください

  // 🎯 Lesson 92: ⌃X ⌃C
  // Toggle Cursor Tab — ⌃X ⌃C で Cursor Tab（AI補完）をトグルしてください（chord shortcut）

  // 🎯 Lesson 93: ⌃G ⌃B
  // Git Blame — ⌃G ⌃B で現在の行の Git Blame を表示してください（chord shortcut / WebStorm）

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Analytics Dashboard" notificationCount={unreadNotificationCount} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-1 text-sm text-muted">
              Welcome back! Here&apos;s what&apos;s happening with your analytics today.
            </p>
          </div>

          <StatsGrid metrics={metrics} />

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Chart data={MONTHLY_REVENUE_DATA} title="Monthly Revenue" height={240} />
            <Chart data={WEEKLY_VISITORS_DATA} title="Weekly Visitors" height={240} />
          </div>

          <div className="mt-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-lg bg-accent px-4 py-2 text-sm text-white transition-colors hover:bg-accent-hover"
              >
                View Details
              </button>
            </div>
            <DataTable data={MOCK_TABLE_DATA} columns={MOCK_TABLE_COLUMNS} />
          </div>
        </main>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Activity Details"
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-muted">Detailed activity view coming soon.</p>
          <p className="text-sm text-muted">
            This modal demonstrates the Modal component for tutorial purposes.
          </p>
        </div>
      </Modal>
    </div>
  );
}
