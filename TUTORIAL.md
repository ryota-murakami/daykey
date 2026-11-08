# DayKey — キーバインド練習チュートリアル

Emacs/WebStorm/Cursor スタイルのキーバインドを実際のコードで練習するチュートリアルです。

## 使い方

1. このプロジェクトをエディタ（Cursor / WebStorm）で開く
2. 下のレッスン順に進める — 各レッスンの対象ファイルを開き、コメントの指示に従う
3. 完了後: `git checkout .` で元に戻す（何度でもやり直せます）
4. 完全リセット: `git checkout . && git clean -fd`

## 凡例

- `⌃` = Control
- `⌥` = Option/Alt
- `⌘` = Command
- `⇧` = Shift
- `↩` = Return/Enter
- chord（例: `⌃X ⌃F`）= ⌃X を押して離してから ⌃F を押す

---

## Move Cursor（カーソル移動）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 01 | ⌃F | Cursor Right（右に1文字移動） | `src/lib/types.ts` |
| 02 | ⌃B | Cursor Left（左に1文字移動） | `src/lib/types.ts` |
| 03 | ⌃P | Cursor Up（1行上に移動） | `src/lib/utils.ts` |
| 04 | ⌃N | Cursor Down（1行下に移動） | `src/lib/utils.ts` |
| 05 | ⌥F | Cursor Right Word（単語単位で右） | `src/lib/types.ts` |
| 06 | ⌥B | Cursor Left Word（単語単位で左） | `src/lib/types.ts` |
| 07 | ⌥P | Cursor Up Block（ブロック単位で上） | `src/lib/utils.ts` |
| 08 | ⌥N | Cursor Down Block（ブロック単位で下） | `src/lib/utils.ts` |
| 09 | ⌃A | Move to Line Start（行頭へ移動） | `src/lib/utils.ts` |
| 10 | ⌃E | Move to Line End（行末へ移動） | `src/lib/utils.ts` |

## Selection（選択）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 11 | ⌃F⌘ | Right with Selection（右に選択拡張） | `src/components/DataTable.tsx` |
| 12 | ⌃B⌘ | Left with Selection（左に選択拡張） | `src/components/DataTable.tsx` |
| 13 | ⌃P⌘ | Up with Selection（上に選択拡張） | `src/components/DataTable.tsx` |
| 14 | ⌃N⌘ | Down with Selection（下に選択拡張） | `src/components/DataTable.tsx` |
| 15 | ⌃E⌘ | cursorEndSelect（行末まで選択） | `src/components/DataTable.tsx` |
| 16 | ⌃A⌘ | cursorStartSelect（行頭まで選択） | `src/components/DataTable.tsx` |
| 17 | ⌃F⌥ | cursorRightWordSelect（単語右選択） | `src/components/Header.tsx` |
| 18 | ⌃B⌥ | cursorLeftWordSelect（単語左選択） | `src/components/Header.tsx` |
| 19 | ⌃P⌥ | cursorTopBlockSelect（ブロック上選択） | `src/components/Header.tsx` |
| 20 | ⌃N⌥ | cursorBottomBlockSelect（ブロック下選択） | `src/components/Header.tsx` |
| 21 | ⌥Click | Add Cursor（カーソル追加 / createCursor） | `src/components/Header.tsx` |
| 22 | ⌃⌘M | Select Inner Bracket（ブラケット内選択） | `src/components/Header.tsx` |
| 23 | ⌥A | Toggle Sticky Selection（WebStorm） | `src/components/Header.tsx` |
| 24 | ⌥A | Select bracket（Cursor） | `src/components/Header.tsx` |

## Scroll（スクロール）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 25 | ⌃V | Page Down（ページダウン） | `src/lib/data.ts` |
| 26 | ⌥V | Page Up（ページアップ） | `src/lib/data.ts` |
| 27 | ⌃X ⌃[ | Cursor Top（ファイル先頭へ） | `src/lib/data.ts` |
| 28 | ⌃X ⌃] | Cursor Bottom（ファイル末尾へ） | `src/lib/data.ts` |
| 29 | ⌃X L | Scroll to Center（画面中央へ） | `src/lib/data.ts` |

## Code Edit（コード編集）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 30 | Delete | Delete character（1文字削除） | `src/components/StatCard.tsx` |
| 31 | ⌘C | Copy（コピー） | `src/components/StatCard.tsx` |
| 32 | ⌘V | Paste（ペースト） | `src/components/StatCard.tsx` |
| 33 | ⌘Z | Undo（取り消し） | `src/components/StatCard.tsx` |
| 34 | ⌘⇧Z | Redo（やり直し） | `src/components/StatCard.tsx` |
| 35 | ⌘D | Duplicate Line（行の複製） | `src/components/SearchBar.tsx` |
| 36 | ⌃⌘↩ | Insert Line Above（上に行挿入） | `src/components/SearchBar.tsx` |
| 37 | ⌘↩ | Insert Line Below（下に行挿入） | `src/components/UserMenu.tsx` |
| 38 | ⌃X ⌃M | Delete matched bracket/tag | `src/components/UserMenu.tsx` |
| 39 | ⌃K | Cut All Right（右端まで切り取り） | `src/components/Modal.tsx` |
| 40 | ⌃R | Rename symbol（シンボルリネーム） | `src/components/Modal.tsx` |
| 41 | ⇧⌘T | Surround With（タグで囲む） | `src/components/Modal.tsx` |
| 42 | ⌃⌘T | Surround With Snippet（スニペットで囲む） | `src/components/Chart.tsx` |
| 43 | ⌃S | Wrapping HTML Tag（タグ変更） | `src/components/Chart.tsx` |
| 44 | ⌃⌘D | Delete Parent HTML Tag（親タグ削除） | `src/components/Chart.tsx` |
| 101 | ⌃⌘S | Delete Parent HTML Tag（子を残して親タグ削除） | `src/components/Chart.tsx` |

## Find（検索・置換）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 45 | ⌘F | Find in file（ファイル内検索） | `src/app/page.tsx` |
| 46 | ⌘⇧F | Find in Project（プロジェクト検索） | `src/app/page.tsx` |
| 47 | ⌘R | Replace in file（ファイル内置換） | `src/app/page.tsx` |
| 48 | ⌘⇧R | Replace in Folder（フォルダ内置換） | `src/app/page.tsx` |

## Split Editor Window（エディタ分割）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 49 | ⌃X ⌃F | Split Right（右に分割） | `src/components/StatsGrid.tsx` |
| 50 | ⌃X ⌃N | Split Down（下に分割） | `src/components/StatsGrid.tsx` |
| 51 | ⌃X ⌃P | Split Up（上に分割） | `src/components/StatsGrid.tsx` |
| 52 | ⌃X ⌃J | Move Focus Right（右ウィンドウにフォーカス） | `src/components/Sidebar.tsx` |
| 53 | ⌃X ⌃H | Move Focus Left（左ウィンドウにフォーカス） | `src/components/Sidebar.tsx` |

## Code Jump（コードジャンプ）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 54 | ⌘B | Go to Implementation（実装へジャンプ） | `src/lib/api.ts` |
| 55 | ⌘⌥B | Go to Definition（定義へジャンプ） | `src/lib/api.ts` |
| 56 | ⌘T | Go to Type declaration（型宣言へ） | `src/app/layout.tsx` |
| 57 | ⌃M | Go to Matching Brace（対応括弧へ） | `src/app/layout.tsx` |
| 58 | ⌃⌘M | Go to Matching Tag（対応タグへ） | `src/app/page.tsx` |
| 59 | ⌘[ | Prev code jump history（戻る） | `src/app/page.tsx` |
| 60 | ⌘] | Next code jump history（進む） | `src/app/page.tsx` |
| 61 | ⌘G | Next HighLight Symbol（次の同一シンボル） | `src/app/page.tsx` |
| 62 | ⇧⌘G | Prev HighLight Symbol（前の同一シンボル） | `src/app/page.tsx` |
| 63 | ⇧⌘P | Next Problem（次のエラーへ） | `src/app/page.tsx` |

## IntelliSense（補完）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 64 | ⌃I | Show type completion（型補完表示） | `src/hooks/useDashboard.ts` |

## File Explorer（エクスプローラー操作）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 65 | ⌘1 | Toggle Explorer（エクスプローラー切替） | `src/app/page.tsx` |
| 66 | ⌘2 | Toggle Terminal（ターミナル切替） | `src/app/page.tsx` |
| 67 | Esc | Focus Editor（エディタにフォーカス） | `src/app/page.tsx` |
| 68 | ⌘N | New File（新規ファイル） | `src/app/page.tsx` |
| 69 | ⌘D | New Folder（新規フォルダ） | `src/app/page.tsx` |
| 70 | ⌃R | Rename（リネーム） | `src/app/page.tsx` |
| 71 | Delete | Delete（削除） | `src/app/page.tsx` |
| 72 | ⌘⇧C | Copy Relative File Path（相対パスコピー） | `src/app/page.tsx` |

## IDE Feature（IDE機能）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 73 | ⌘P | Command Palette | `src/app/page.tsx` |
| 74 | ⌘O | Open filename Search | `src/app/page.tsx` |
| 75 | ⌘⇧O | Go to Symbol Search | `src/app/page.tsx` |
| 76 | ⌃T | Refactor menu | `src/app/page.tsx` |
| 77 | ⌘U | Show Reference/Usage | `src/app/page.tsx` |
| 78 | ⌃C ⌃C | Show Context Menu | `src/app/page.tsx` |
| 79 | ⇧⌘D | Toggle Panel Right/Bottom（右⇔下） | `src/app/page.tsx` |
| 80 | ⌃X ⌃R | Reload Window | `src/app/page.tsx` |
| 81 | ⌃⌘, | Open Settings | `src/app/page.tsx` |
| 82 | ⌃X ⌃X | ESLint --fix | `src/app/page.tsx` |
| 83 | ⌃Space | Format with Prettier | `src/app/page.tsx` |
| 84 | ⇧⌘, | Keyboard Shortcuts | `src/app/page.tsx` |
| 85 | ⇧⌘J | Open Cursor Settings | `src/app/page.tsx` |
| 86 | ⌘E | Show Markdown Preview | `src/app/page.tsx` |
| 87 | ⌃W | Switch Project | `src/app/page.tsx` |
| 88 | ⌃X ⌃1 | Toggle Primary Side Bar | `src/app/page.tsx` |

## AI

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 89 | ⌘L | Toggle Chat Tab | `src/app/page.tsx` |
| 90 | ⌘⇧L | New AI Chat | `src/app/page.tsx` |
| 91 | ⌃X ⌃C | Toggle Cursor Tab | `src/app/page.tsx` |
| 99 | ⌘⇧J | Toggle Cursor/Zed Agents Window | `src/app/page.tsx` |

## Git

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 92 | ⌃G ⌃B | Git Blame（WebStorm） | `src/app/page.tsx` |

## Multiple Cursor（マルチカーソル）

| # | Shortcut | Action | File |
|---|----------|--------|------|
| 93 | ⌥Drag | Rectangular Select（矩形選択 / WebStorm） | `src/components/DataTable.tsx` |
| 94 | ⌥⇧Drag | Rectangular Select（矩形選択 / Cursor） | `src/components/DataTable.tsx` |
| 95 | ⌘Click | Add/Remove caret（カーソル追加） | `src/components/DataTable.tsx` |
| 96 | ⌥⌘↑ | Clone Cursor Above（上にカーソルクローン） | `src/components/DataTable.tsx` |
| 97 | ⌥⌘↓ | Clone Cursor Below（下にカーソルクローン） | `src/components/DataTable.tsx` |
| 98 | ⌘⇧Mouse | Vertical cursor fill-in（垂直カーソル） | `src/components/DataTable.tsx` |
| 100 | ctrlCmd | `editor.multiCursorModifier` を `ctrlCmd` に設定（⌘クリックでキャレット追加、⌥ドラッグで矩形選択） | `src/components/DataTable.tsx` |

---

## 完了おめでとうございます！ 🎉

全101レッスンを完了しました。これらのキーバインドを日常のコーディングで使い続けることで、自然と身についていきます。

リセットして再挑戦するには:
```bash
git checkout .
```
