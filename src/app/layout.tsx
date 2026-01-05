import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aural UI - Modern UI Component Library",
  description: "A collection of reusable, accessible UI components built with React, TypeScript, and Tailwind CSS.",
  keywords: ["UI", "components", "React", "TypeScript", "Tailwind CSS", "design system"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins), -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
