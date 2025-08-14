"use client"
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";
import { motion } from "framer-motion";

import { portfolioData } from '../data/portfolioData';
import { fadeIn } from '../variants';

const Hero: React.FC = () => {
  const { name, roles, backgroundImage, socialLinks } = portfolioData.hero;
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {

    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);


  const fontSize = isLargeScreen ? "2em" : "1em";
  const stagger = 0.03;

  return (
    <div id="main" className="relative">
      <div
        className="h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", 0.2)}
          viewport={{ once: true, amount: 0.7 }}
          className="flex h-full w-full flex-col items-center justify-center gap-y-8 "
        >

          <span className="text-2xl font-bold text-white lg:text-4xl items-center mt-24">
            Hi, I&apos;m
          </span>

          <motion.a
            className="relative block whitespace-nowrap overflow-hidden text-4xl font-black uppercase text-white lg:text-8xl"
            initial="initial"
            whileHover="hovered"
          >
            <div className="relative">
              <div className="flex">
                {name.split("").map((letter, index) => (
                  <motion.span
                    className="inline-block"
                    key={`top-${letter}-${index}`}
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={{
                      delay: stagger * index,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
              <div className="absolute inset-0 flex">
                {name.split("").map((letter, index) => (
                  <motion.span
                    className="inline-block"
                    key={`top-${letter}-${index}`}
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={{
                      delay: stagger * index,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.a>


          <h2 className="flex text-2xl font-semibold text-white lg:text-4xl">
            I&apos;M A {" "}
            <TypeAnimation
              sequence={roles.flatMap((role) => [role, 1000])}
              wrapper="span"
              speed={50}
              style={{
                fontSize: fontSize,
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>

          <div className="mb-6 mt-6 flex justify-center gap-10 text-center text-white">
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              aria-label="Twitter"
            >
              <FaTwitter
                className="cursor-pointer hover:scale-110 hover:text-[#01D293]"
                size={30}
              />
            </motion.a>

            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              aria-label="GitHub"
            >
              <FaGithub
                className="cursor-pointer hover:scale-110 hover:text-[#01D293]"
                size={30}
              />
            </motion.a>

            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin
                className="cursor-pointer hover:scale-110 hover:text-[#01D293]"
                size={30}
              />
            </motion.a>

            <motion.a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              aria-label="Discord"
            >
              <FaDiscord
                className="cursor-pointer hover:scale-110 hover:text-[#01D293]"
                size={30}
              />
            </motion.a>

            <motion.a
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              aria-label="Behance"
            >
              <FaBehance
                className="cursor-pointer hover:scale-110 hover:text-[#01D293]"
                size={30}
              />
            </motion.a>
          </div>

          <div className="flex justify-center">
            <motion.a
              href="#about"
              className="scroll-smooth rounded-xl p-2 text-white hover:bg-white hover:text-black"
              initial={{ y: 0 }}
              animate={{ y: [0, 20] }}
              transition={{
                duration: 0.7,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{
                y: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              aria-label="Scroll down to About section"
            >
              <LuArrowDown className="size-6 lg:size-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;