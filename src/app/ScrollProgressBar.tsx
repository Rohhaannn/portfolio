"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className='bg-blue-600 origin-left w-full h-1.5 fixed top-0 left-0 z-[999]'
    />
  );
}