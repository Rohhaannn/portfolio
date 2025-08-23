"use client"

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { fadeIn } from '../variants';
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";



const About: React.FC = () => {

  const { roles, description, image } = portfolioData.about;

  return (
    <div id="about" className="w-screen">
      <div className="max-w-[1280px] mx-auto text-center">

        <motion.h1
          className="text-4xl font-bold text-center text-[#001b5e] pt-14 cursor-default"
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('up', 0.2)}
          viewport={{ once: true, amount: 0.1 }}
        >
          About Me
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
              className="mt-5 lg:mt-0 h-auto rounded-xl shadow-xl"
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
              <h6 className="flex sm:text-3xl text-2xl mb-4 pt-4 font-semibold text-[#001b5e] justify-center md:justify-start">
                I&apos;m a
                <TypeAnimation
                  sequence={roles.flatMap(role => [role, 1000])}
                  wrapper="span"
                  speed={50}
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
              <p className="text-base text-justify ">{description}</p>
            </div>

            <div className="flex justify-end mt-5">
              <Link href="/about">

                <button className="flex flex-row items-center gap-4 bg-blue-800 text-white border border-black hover:bg-transparent hover:text-black px-4 py-2 rounded-xl shadow-xl transition-colors transform duration-200 ">
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
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;