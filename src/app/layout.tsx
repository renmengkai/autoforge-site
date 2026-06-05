import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoForge — 软件工业化的践行者",
  description:
    "人类轻在环的软件工厂。AutoForge 致力于改变软件行业，将软件开发从手工作坊推向工业化生产。",
  keywords: [
    "AutoForge",
    "软件工业化",
    "软件工厂",
    "AI编程",
    "自动化开发",
    "human-in-the-loop",
  ],
  openGraph: {
    title: "AutoForge — 软件工业化的践行者",
    description: "人类轻在环的软件工厂。改变软件行业的下一代产品。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary">
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
