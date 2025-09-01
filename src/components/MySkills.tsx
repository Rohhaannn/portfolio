"use client"

import React from 'react';
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

interface SkillItem {
  id: number;
  name: string;
  imgLink: string;
}

interface MySkillsData {
  mySkills: {
    techIcons: SkillItem[];
  }
}

const MySkills = () => {

  const { darkMode } = useTheme();
  const { techIcons } = (portfolioData as MySkillsData).mySkills;

  return (
    <div id="skills" className={`px-4 ${darkMode ? "bg-[#222] text-white" : "bg-[#ebeeee]"}`}>
      <div className="max-w-[1280px] mx-auto p-4">
        <motion.h1
          className={`text-4xl mb-10 font-bold text-center text-[#001b5e] cursor-default ${darkMode ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"}`}
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('up', 0.2)}
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className='font-extralight'> My </span> Skills
        </motion.h1>

        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center gap-14 md:gap-36"
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('left', 0.2)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className='w-full'>
            <div className='grid lg:grid-cols-8 m grid-cols-3 gap-6'>
              {techIcons.map((skill) => (
                <span
                  key={skill.id}

                  className={` flex flex-col gap-2 justify-center items-center p-4 hover:border hover:border-blue-500 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg ${darkMode ? "bg-[#333] text-white" : "bg-gray-300 text-black"}`}
                >
                  <Image
                    src={skill.imgLink}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className='object-contain'
                  />
                  <p className='font-semibold text-sm text-center'> {skill.name} </p>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MySkills;