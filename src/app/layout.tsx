import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Ubuntu} from "next/font/google";
import "./globals.css";
import GoToTopBtn from "@/components/GoToTopBtn";
import ViewResumeBtn from "@/components/ViewResumeBtn";
import ScrollProgressBar from "./ScrollProgressBar";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import  Providers  from '@/components/Providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${ubuntu.variable} antialiased min-h-screen w-full overflow-x-hidden`}>
        <Providers>
          <ScrollProgressBar />
          <Navbar />
          {children}
          <GoToTopBtn />
          <ViewResumeBtn />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}