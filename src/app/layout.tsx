import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
