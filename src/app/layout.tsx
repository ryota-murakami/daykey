import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🎯 Lesson 56: ⌘T
// Go to Type declaration — 下の Metadata の上にカーソルを置いて ⌘T を押してください
// Metadata の型定義にジャンプします

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DayKey Dashboard",
  description: "Analytics dashboard for keybind practice tutorial",
};

// 🎯 Lesson 57: ⌃M
// Go to Matching Pair — 下の return 文の開き括弧 ( にカーソルを置いて
// ⌃M を押すと、対応する閉じ括弧 ) にジャンプします

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
