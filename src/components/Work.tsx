"use client"

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import WorkItem from "./WorkItem";
import { portfolioData } from "../data/portfolioData";


interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  year: {
    start: string;
    end?: string;
  };
  description: string[];
  techStack: string[];
}



const calculateDuration = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(" and ") : "Less than a month";
};

const formatDisplayDate = (date: string): string => {
  if (date === "Present") return "Present";
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return d.toLocaleDateString("en-US", options);
};


const Work = () => {

  const workExperience: WorkExperience[] = portfolioData.workExperience;

  return (
    <div className="w-screen bg-[#ebeeee] cursor-default ">
      <div id="work" className="max-w-[1280px] mx-auto px-4 ">
        <motion.h1
          className="text-4xl mb-10 font-bold text-center text-[#001b5e] cursor-default"
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('up', 0.2)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Work Experience
        </motion.h1>

        {workExperience.map((item) => {
          const startDate = item.year.start;
          const endDate = item.year.end || "Present";
          const formattedStart = formatDisplayDate(startDate);
          const formattedEnd = formatDisplayDate(endDate);
          const duration = calculateDuration(startDate, endDate);

          return (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.2)}
              viewport={{ once: true, amount: 0.2 }}
            >
              <WorkItem
                year={`${formattedStart} - ${formattedEnd}`}
                company={item.company}
                role={item.role}
                location={item.location}
                duration={duration}
                description={item.description}
                techStack={item.techStack}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;