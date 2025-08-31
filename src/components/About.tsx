"use client"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { fadeIn } from '../variants';
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  FaDiscord,
} from "react-icons/fa";



const About: React.FC = () => {
  const { darkMode } = useTheme()
  const { roles, description, image } = portfolioData.about;
  const { socialLinks } = portfolioData.hero;

  return (
    <div id="about" className={`w-screen ${darkMode ? "bg-[#111] text-white" : ""}`}>
      <div className="max-w-[1280px] mx-auto text-center ">

        <motion.h1
          className={`text-4xl mb-10 pt-14 font-bold text-center text-[#001b5e] cursor-default ${darkMode ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"}`}
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('up', 0.2)}
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className="font-extralight"> About </span> Me
        </motion.h1>

        <div className="max-w-[1040px] mx-auto flex flex-col gap-5 justify-between md:gap-20 md:flex-row items-center p-4 py-10">
          <motion.div
            className="flex md:mb-0 "
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn('left', 0.2)}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Image
              className={`h-auto rounded-xl shadow-xl ${darkMode ? "shadow-[#000]" : ""} `}
              src={image}
              alt="Rohan"
              width={350}
              height={400}
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn('right', 0.2)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h6 className={`flex sm:text-3xl text-2xl mb-4 pt-4 font-semibold text-[#001b5e] justify-center md:justify-start  ${darkMode ? "font-bold bg-gradient-to-l from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-l from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"}  `}>
                <span className="font-extralight"> I&apos;m a </span>
                <TypeAnimation
                  sequence={roles.flatMap(role => [role, 1000])}
                  wrapper="span"
                  speed={30}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    paddingLeft: "5px",
                  }}
                  repeat={Infinity}
                />
              </h6>
            </div>

            <div className="px-4 lg:px-0">
              <p className="text-base text-justify [font-family:var(--font-ubuntu)]">{description}</p>
            </div>

            <div className="flex flex-row justify-between items-center mt-10 [font-family:var(--font-ubuntu)]">
              <div>
                <Link
                  href={socialLinks.discord}
                  target="_blank"
                >
                  <button className="flex flex-row items-center gap-2 bg-[#5865f2] text-white font-semibold cursor-pointer px-4 py-2 rounded-xl shadow-xl transition-colors transform duration-200 ">
                    <span className="mt-0.5 p-1 rounded-full">
                      <FaDiscord size={18}/>
                    </span>
                    Join Discord{' '}
                  </button>
                </Link>
              </div>
              <div className="flex justify-end ">
                <Link href="/about">

                  <button className="flex flex-row items-center gap-2 bg-blue-800 text-white cursor-pointer px-4 py-2 rounded-xl shadow-xl transition-colors transform duration-200 ">
                    More About Me{' '}
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [8, 0] }}
                      transition={{
                        duration: 0.7,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        x: 0,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      aria-label="Scroll down to About section"
                      className="mt-0.5 p-1 rounded-full border-1"
                    >
                      <LuArrowRight />
                    </motion.span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;