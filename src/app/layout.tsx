import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoToTopBtn from "@/components/GoToTopBtn";
import ViewResumeBtn from "@/components/ViewResumeBtn";
import ScrollProgressBar from "./ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan - Frontend Developer",
  description: "NEXT Js Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgressBar /> {/* Use the new component */}
        {children}
        <GoToTopBtn />
        <ViewResumeBtn />
      </body>
    </html>
  );
}