import React from 'react';
import { motion } from "framer-motion"; // 'motion/react' is not a valid import path. 'framer-motion' is the correct package name.
import { fadeIn } from "../variants"; // Assuming this is a custom file with animation variants.

// Define the type for the year prop, which can be a string or an object with start/end strings.
type YearType = string | { start: string; end: string };

// Define the props interface for the WorkItem component.
interface WorkItemProps {
  year?: YearType;
  company: string;
  role: string;
  location: string;
  duration?: string;
  description?: string[];
  techStack?: string[];
}

const WorkItem: React.FC<WorkItemProps> = ({
  year,
  company,
  role,
  location,
  duration,
  description,
  techStack
}) => {

  const descriptionArray = description || [];
  const techStackArray = techStack || [];

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row relative ">
      <div className="mb-10 w-full border border-gray-600 shadow-xl p-6 rounded-xl">
        <div className="flex justify-start items-center gap-4 flex-wrap mb-2">
          {year && (
            <span className="px-2 py-1 border border-gray-500 rounded-lg font-semibold text-white bg-[#001b5e] text-sm whitespace-nowrap cursor-default">
              {typeof year === 'object' ? `${year.start} - ${year.end}` : year}
            </span>
          )}

          <span className="font-bold text-[#001b5e]">{company}</span>
          <span className="text-[#001b5e] font-medium">{role}</span>
          <span className="text-[#001b5e] font-medium">{location}</span>
          <span className="text-[#001b5e] text-sm">{duration}</span>
        </div>

        <div className="mt-4 space-y-2 text-sm text-black-600 pl-2 md:pl-6">
          {descriptionArray.map((point) => (
            <li key={point} className="leading-tight ">{point.trim()}</li>
          ))}
        </div>

        <div>
          {techStackArray.length > 0 && (
            <div className="mt-4 pl-2 md:pl-6">
              <span className="text-sm font-bold text-black-600">Tech Stack:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {techStackArray.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-gray-300 border border-gray-500 shadow-lg text-sm px-4 py-1 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white cursor-default"
                    initial="hidden"
                    whileInView={"show"}
                    variants={fadeIn('right', 0.2)}
                    viewport={{once: true, amount: 0.5}}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;