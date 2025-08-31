"use client"

import React from 'react';
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';


interface SkillItem {
  name: string;
}

interface SkillCategory {
  Frontend: SkillItem[];
  Backend: SkillItem[];
  Languages: SkillItem[];
  Databases: SkillItem[];
  Tools: SkillItem[];
  DeploymentPlatforms: SkillItem[];
  image: string;
}

interface Data {
  skills: SkillCategory;
}

const typedData: Data = portfolioData;

const Skills: React.FC = () => {

  const { darkMode } = useTheme();

  const {
    Frontend,
    Backend,
    Languages,
    Databases,
    Tools,
    DeploymentPlatforms,
  } = typedData.skills;

  const categories = [
    { id: "1", title: "Frontend", items: Frontend },
    { id: "2", title: "Backend", items: Backend },
    { id: "3", title: "Languages", items: Languages },
    { id: "4", title: "Databases", items: Databases },
    { id: "5", title: "Tools", items: Tools },
    { id: "6", title: "Deployment Platforms", items: DeploymentPlatforms },
  ];

  return (
    <div id="skills" className={` px-4 ${darkMode ? "bg-[#222] text-white" : "bg-[#ebeeee]"}`}>
      <div className="max-w-[1280px] mx-auto p-4">
        <motion.h1
          className={`text-4xl mb-10 font-bold text-center text-[#001b5e] cursor-default ${darkMode ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"}`}
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('up', 0.2)}
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className='font-extralight'> My </span>Skills
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row md:justify-center items-center gap-12 md:gap-36"
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('left', 0.2)}
          viewport={{ once: true, amount: 0.2 }}
        >

          <div className="order-2 md:order-1 w-full md:w-auto text-center [font-family:var(--font-ubuntu)]">
            <div>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex flex-wrap justify-center md:justify-start gap-2 px-4 mb-5 rounded-md shadow-xl hover:scale-105 transition-transform duration-100 ${darkMode ? "border-b border-gray-700" : ""} `}
                >
                  <h3 className="font-bold py-2">{category.title}:</h3>
                  <p className="py-2">
                    {category.items.map((item) => item.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src={typedData.skills.image}
              alt="Skills Character"
              className={`max-w-80 lg:max-w-[22rem] rounded-xl shadow-xl ${darkMode ? "shadow-[#111] shadow-md" : ""} `}
              width={550}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;