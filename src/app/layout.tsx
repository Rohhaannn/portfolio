"use client"
import "./globals.css";
import { motion, useScroll } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {scrollYProgress} = useScroll();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <motion.div
            style={{
              scaleX: scrollYProgress,
            }}
            className='bg-blue-600 origin-left w-full h-1.5 fixed top-0 left-0 z-[999]'
          />
          {children}
      </body>
    </html>
  );
}
