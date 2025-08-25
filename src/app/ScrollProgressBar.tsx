"use client";

import { motion, useScroll } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ScrollProgressBar() {

  const {darkMode} = useTheme()
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className={`origin-left w-full h-1 fixed top-0 left-0 z-[999] ${darkMode ? "bg-[#a603f8]" : "bg-blue-600"}`}
    />
  );
}