import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import RouteWidget from "@/components/route-widget";
import NavbarTabs from "@/components/navbar-tabs";
import { appTabs } from "@/constants/app-tabs";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Haiq Portfolio",
  description: "Tomer Haik Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={`flex flex-col p-5 h-screen items-center justify-between transition-colors duration-300`}
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            {/* <NavbarTabs
              tabs={appTabs}
              className="sm:hidden sticky bottom-10 "
            /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
