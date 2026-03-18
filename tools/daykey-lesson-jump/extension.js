const path = require("node:path")
const { TextDecoder } = require("node:util")
const vscode = require("vscode")

const DAYKEY_PACKAGE_NAME = "daykey"
const DAYKEY_CONTEXT_KEY = "daykey.lessonNavigationEnabled"
const LESSON_FILE_GLOB = "**/*.{ts,tsx,js,jsx,mjs,cjs}"
const LESSON_FILE_EXCLUDE_GLOB = "**/{node_modules,.git,.next,dist,build,out}/**/*"
const LESSON_COMMENT_PATTERN_SOURCE = String.raw`\/\/\s*🎯\s*Lesson\s+(\d{2}):\s*(.+)$`
const FIRST_CHARACTER = 0
const NEXT_DIRECTION = "next"
const PREVIOUS_DIRECTION = "previous"

/**
 * Activates the DayKey lesson navigation extension.
 * This enables workspace-specific keybindings and registers cross-file commands.
 *
 * @param {vscode.ExtensionContext} context - The VS Code extension context.
 * @returns {Promise<void>}
 */
async function activate(context) {
  await updateLessonNavigationContext()

  const nextLessonCommand = vscode.commands.registerCommand("daykey.nextLesson", async () => {
    await jumpToLesson(NEXT_DIRECTION)
  })

  const previousLessonCommand = vscode.commands.registerCommand("daykey.previousLesson", async () => {
    await jumpToLesson(PREVIOUS_DIRECTION)
  })

  const workspaceFolderListener = vscode.workspace.onDidChangeWorkspaceFolders(async () => {
    await updateLessonNavigationContext()
  })

  context.subscriptions.push(nextLessonCommand, previousLessonCommand, workspaceFolderListener)
}

/**
 * Disposes the extension.
 */
function deactivate() {}

/**
 * Sets a context key so the keybindings only activate inside the DayKey workspace.
 *
 * @returns {Promise<void>}
 */
async function updateLessonNavigationContext() {
  const isDayKey = await isDayKeyWorkspace()
  await vscode.commands.executeCommand("setContext", DAYKEY_CONTEXT_KEY, isDayKey)
}

/**
 * Detects whether the current workspace is the DayKey repository.
 *
 * @returns {Promise<boolean>}
 */
async function isDayKeyWorkspace() {
  const folders = vscode.workspace.workspaceFolders ?? []

  for (const folder of folders) {
    const packageJsonUri = vscode.Uri.joinPath(folder.uri, "package.json")

    try {
      const packageJsonContent = await vscode.workspace.fs.readFile(packageJsonUri)
      const packageJsonText = new TextDecoder("utf-8").decode(packageJsonContent)
      const packageJson = JSON.parse(packageJsonText)

      if (packageJson.name === DAYKEY_PACKAGE_NAME) {
        return true
      }
    } catch {
      if (path.basename(folder.uri.fsPath) === DAYKEY_PACKAGE_NAME) {
        return true
      }
    }
  }

  return false
}

/**
 * Moves to the next or previous lesson across the entire workspace.
 *
 * @param {"next" | "previous"} direction - The navigation direction.
 * @returns {Promise<void>}
 */
async function jumpToLesson(direction) {
  const lessons = await collectLessons()

  if (lessons.length === 0) {
    void vscode.window.showInformationMessage("No DayKey lessons were found in this workspace.")
    return
  }

  const targetLesson = findTargetLesson(lessons, direction)

  if (!targetLesson) {
    void vscode.window.showInformationMessage("Could not determine which lesson to open next.")
    return
  }

  await openLesson(targetLesson)
}

/**
 * Scans the workspace and returns all discovered lesson comments.
 *
 * @returns {Promise<LessonEntry[]>}
 */
async function collectLessons() {
  const lessonFiles = await vscode.workspace.findFiles(LESSON_FILE_GLOB, LESSON_FILE_EXCLUDE_GLOB)
  const decoder = new TextDecoder("utf-8")
  const lessons = []

  for (const lessonFile of lessonFiles) {
    const fileContent = await vscode.workspace.fs.readFile(lessonFile)
    const fileText = decoder.decode(fileContent)
    lessons.push(...extractLessonsFromText(fileText, lessonFile))
  }

  return lessons.sort(compareLessons)
}

/**
 * Extracts lesson entries from a single file's text content.
 *
 * @param {string} fileText - The file contents to scan.
 * @param {vscode.Uri} fileUri - The URI of the scanned file.
 * @returns {LessonEntry[]}
 */
function extractLessonsFromText(fileText, fileUri) {
  const lessons = []
  const lessonCommentPattern = new RegExp(LESSON_COMMENT_PATTERN_SOURCE, "gm")

  for (const match of fileText.matchAll(lessonCommentPattern)) {
    const lessonNumber = Number.parseInt(match[1], 10)
    const lessonShortcut = match[2].trim()
    const matchOffset = match.index ?? FIRST_CHARACTER
    const lessonLine = getLineNumberAtOffset(fileText, matchOffset)

    lessons.push({
      number: lessonNumber,
      shortcut: lessonShortcut,
      uri: fileUri,
      line: lessonLine,
    })
  }

  return lessons
}

/**
 * Counts which zero-based line contains the given character offset.
 *
 * @param {string} text - The full file text.
 * @param {number} targetOffset - The character offset of the match.
 * @returns {number}
 */
function getLineNumberAtOffset(text, targetOffset) {
  let lineNumber = 0

  for (let index = 0; index < targetOffset; index += 1) {
    if (text[index] === "\n") {
      lineNumber += 1
    }
  }

  return lineNumber
}

/**
 * Sorts lessons by lesson number and then by file location for deterministic results.
 *
 * @param {LessonEntry} leftLesson - The first lesson.
 * @param {LessonEntry} rightLesson - The second lesson.
 * @returns {number}
 */
function compareLessons(leftLesson, rightLesson) {
  if (leftLesson.number !== rightLesson.number) {
    return leftLesson.number - rightLesson.number
  }

  const pathComparison = leftLesson.uri.fsPath.localeCompare(rightLesson.uri.fsPath)

  if (pathComparison !== 0) {
    return pathComparison
  }

  return leftLesson.line - rightLesson.line
}

/**
 * Finds the next lesson target relative to the current cursor position.
 * Navigation wraps around when reaching the first or last lesson.
 *
 * @param {LessonEntry[]} lessons - All indexed lessons.
 * @param {"next" | "previous"} direction - The navigation direction.
 * @returns {LessonEntry | undefined}
 */
function findTargetLesson(lessons, direction) {
  const activeEditor = vscode.window.activeTextEditor

  if (!activeEditor) {
    return direction === NEXT_DIRECTION ? lessons[0] : lessons.at(-1)
  }

  const activeFilePath = activeEditor.document.uri.fsPath
  const activeLine = activeEditor.selection.active.line
  const lessonsInActiveFile = lessons.filter((lesson) => lesson.uri.fsPath === activeFilePath)
  const lessonsInActiveFileByLine = [...lessonsInActiveFile].sort((leftLesson, rightLesson) => {
    return leftLesson.line - rightLesson.line
  })

  if (lessonsInActiveFile.length === 0) {
    return direction === NEXT_DIRECTION ? lessons[0] : lessons.at(-1)
  }

  const currentLesson = findCurrentLessonInFile(lessonsInActiveFileByLine, activeLine)

  if (currentLesson) {
    const lessonByNumber = findAdjacentLessonByNumber(lessons, currentLesson.number, direction)

    if (lessonByNumber) {
      return lessonByNumber
    }

    const currentIndex = lessons.findIndex((lesson) => isSameLesson(lesson, currentLesson))
    return getWrappedLessonByOffset(lessons, currentIndex, direction === NEXT_DIRECTION ? 1 : -1)
  }

  const firstLessonAfterCursor = lessonsInActiveFileByLine.find((lesson) => lesson.line > activeLine)

  if (!firstLessonAfterCursor) {
    return direction === NEXT_DIRECTION ? lessons[0] : lessons.at(-1)
  }

  if (direction === NEXT_DIRECTION) {
    return firstLessonAfterCursor
  }

  const firstFutureLessonIndex = lessons.findIndex((lesson) => isSameLesson(lesson, firstLessonAfterCursor))
  return getWrappedLessonByOffset(lessons, firstFutureLessonIndex, -1)
}

/**
 * Finds the lesson at or above the cursor line inside the active file.
 *
 * @param {LessonEntry[]} lessonsInFile - Lessons that belong to the active file.
 * @param {number} activeLine - The cursor line.
 * @returns {LessonEntry | undefined}
 */
function findCurrentLessonInFile(lessonsInFile, activeLine) {
  let currentLesson
  let currentLessonLine = -1

  for (const lesson of lessonsInFile) {
    if (lesson.line <= activeLine && lesson.line >= currentLessonLine) {
      currentLesson = lesson
      currentLessonLine = lesson.line
    }
  }

  return currentLesson
}

/**
 * Returns a lesson by moving forward or backward, wrapping around the list length.
 *
 * @param {LessonEntry[]} lessons - The indexed lessons.
 * @param {number} startIndex - The current lesson index.
 * @param {number} offset - The step offset, usually 1 or -1.
 * @returns {LessonEntry}
 */
function getWrappedLessonByOffset(lessons, startIndex, offset) {
  const nextIndex = (startIndex + offset + lessons.length) % lessons.length
  return lessons[nextIndex]
}

/**
 * Finds the adjacent lesson using the fixed DayKey lesson number sequence.
 * This is more reliable than relying on file order because DayKey lessons are intentionally numbered.
 *
 * @param {LessonEntry[]} lessons - The indexed lessons.
 * @param {number} currentLessonNumber - The current lesson number.
 * @param {"next" | "previous"} direction - The navigation direction.
 * @returns {LessonEntry | undefined}
 */
function findAdjacentLessonByNumber(lessons, currentLessonNumber, direction) {
  const orderedLessonNumbers = [...new Set(lessons.map((lesson) => lesson.number))]
  const currentLessonIndex = orderedLessonNumbers.indexOf(currentLessonNumber)

  if (currentLessonIndex === -1) {
    return undefined
  }

  const targetLessonIndex =
    (currentLessonIndex + (direction === NEXT_DIRECTION ? 1 : -1) + orderedLessonNumbers.length) %
    orderedLessonNumbers.length
  const targetLessonNumber = orderedLessonNumbers[targetLessonIndex]

  return lessons.find((lesson) => lesson.number === targetLessonNumber)
}

/**
 * Checks whether two lesson entries point to the same comment.
 *
 * @param {LessonEntry} leftLesson - The first lesson.
 * @param {LessonEntry} rightLesson - The second lesson.
 * @returns {boolean}
 */
function isSameLesson(leftLesson, rightLesson) {
  return (
    leftLesson.number === rightLesson.number &&
    leftLesson.line === rightLesson.line &&
    leftLesson.uri.fsPath === rightLesson.uri.fsPath
  )
}

/**
 * Opens a lesson file and reveals the target line in the editor.
 *
 * @param {LessonEntry} lesson - The lesson to reveal.
 * @returns {Promise<void>}
 */
async function openLesson(lesson) {
  const document = await vscode.workspace.openTextDocument(lesson.uri)
  const editor = await vscode.window.showTextDocument(document, { preview: false })
  const position = new vscode.Position(lesson.line, FIRST_CHARACTER)
  const selection = new vscode.Selection(position, position)
  const revealRange = new vscode.Range(position, position)

  editor.selection = selection
  editor.revealRange(revealRange, vscode.TextEditorRevealType.InCenter)
  void vscode.window.setStatusBarMessage(`Lesson ${String(lesson.number).padStart(2, "0")}: ${lesson.shortcut}`, 2000)
}

module.exports = {
  activate,
  deactivate,
}

/**
 * @typedef {object} LessonEntry
 * @property {number} number - The fixed DayKey lesson number.
 * @property {string} shortcut - The shortcut label shown in the lesson comment.
 * @property {vscode.Uri} uri - The file containing the lesson comment.
 * @property {number} line - The zero-based line of the lesson comment.
 */
