"use client"

import React from "react";
import { motion } from "framer-motion"; // Use framer-motion, not motion/react
import { fadeIn } from "../variants"; // Assuming this is a local variants file
import WorkItem from "./WorkItem";
import { portfolioData } from "../data/portfolioData"; // Corrected data import as requested

// 1. Corrected interface for the work experience data structure
// The 'id' property is now defined as a string to match the incoming data.
interface WorkExperience {
  id: string; // <-- This is the fix. It should be a string, not a number.
  company: string;
  role: string;
  location: string;
  year: {
    start: string;
    end?: string; // end is optional because it can be "Present"
  };
  description: string[]; // <-- This is also a correction based on the WorkItem component.
  techStack: string[];
}

// 2. Define an interface for the WorkItem component props
// This ensures that the props passed to WorkItem are of the correct type
interface IWorkItemProps {
  year: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string[]; // <-- This should be an array of strings.
  techStack: string[];
}

// Helper function to calculate the duration of a work period
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

// Helper function to format the date for display
const formatDisplayDate = (date: string): string => {
  if (date === "Present") return "Present";
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return d.toLocaleDateString("en-US", options);
};

// 3. The main Work component, now with TypeScript
const Work = () => {
  // 4. Cast the imported data to the WorkExperience interface array for type safety
  // This is now valid because the WorkExperience interface matches the data structure.
  const workExperience: WorkExperience[] = portfolioData.workExperience;

  return (
    <div className="w-screen bg-[#ebeeee] cursor-default ">
      <div id="work" className="max-w-[1280px] mx-auto px-4 ">
        <h1 className="text-4xl mb-10 font-bold text-center text-[#001b5e] hover:underline cursor-default">
          Work Experience
        </h1>

        {workExperience.map((item) => {
          const startDate = item.year.start;
          const endDate = item.year.end || "Present";
          const formattedStart = formatDisplayDate(startDate);
          const formattedEnd = formatDisplayDate(endDate);
          const duration = calculateDuration(startDate, endDate);

          // We now have strong typing for the props passed to WorkItem
          return (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              variants={fadeIn("up", 0.2)}
              viewport={{ once: true, amount: 0.0 }}
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