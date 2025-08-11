import { Variants, Transition } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number
): Variants => {
  const transition: Transition = {
    type: "tween",
    duration: 1.2,
    delay: delay,
    ease: [0.25, 0.6, 0.3, 0.8],
  };

  let initial: { [key: string]: number } = {};
  switch (direction) {
    case "up":
      initial = { y: 60, opacity: 0 };
      break;
    case "down":
      initial = { y: -60, opacity: 0 };
      break;
    case "left":
      initial = { x: -60, opacity: 0 };
      break;
    case "right":
      initial = { x: 60, opacity: 0 };
      break;
  }

  return {
    hidden: initial,
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: transition,
    },
  };
};