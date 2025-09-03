import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTheme } from "@/context/ThemeContext";
import { LuArrowUpRight } from "react-icons/lu";
import { portfolioData } from "../data/portfolioData";



type Project = {
  id: string | number;
  videoUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  liveLink: string;
  techStack: string[];
};

const ProjectsNew = () => {
  const { darkMode } = useTheme();
  const myProjects: Project[] = portfolioData.projectsNew.myProjects;

  return (
    <div id="projects">
      <div className="max-w-[1280px] mx-auto my-20">
        <motion.h1
          className={`text-4xl h-12  font-bold text-center text-[#001b5e] cursor-default ${
            darkMode
              ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text"
              : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"
          } `}
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up", 0.2)}
          viewport={{ once: true, amount: 0.1 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="relative flex justify-center items-center mb-2 [font-family:var(--font-ubuntu)]"
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("left", 0.2)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-5">
            <div className="p-4 py-6 ">
              <div className="flex flex-col gap-8 justify-between items-center p-2 ">
                {myProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`w-96 lg:w-full px-6 py-6 border border-gray-600 rounded-xl shadow-lg ${darkMode ? "bg-[#222] text-white" : "bg-gray-300 text-black"}`}
                  >
                    <div className="flex flex-col gap-6 justify-center">

                      <div className={`flex flex-col lg:flex-row gap-8 justify-center items-center ${index % 2 !== 0 ? "lg:flex-row-reverse":""}`}>
                        <div className='w-80 lg:w-[550px] h-80 mt-10 rounded-xl p-1 '>
                            <video
                              src={project.videoUrl}
                              controls
                              autoPlay
                              loop
                              className="w-full h-full object-cover rounded-xl"
                            >
                              <track
                                kind="captions"
                                src=""
                                srcLang="en"
                                label="English captions"
                                default
                              />
                            </video>
                        </div>
                        <div className='flex flex-col gap-3 justify-between items-center'>
                          <h1 className='w-96 lg:w-[670px] text-2xl lg:text-3xl px-6'>
                            {project.title}
                          </h1>
                          <div className='w-96 lg:w-[650px] text-base lg:text-lg text-justify p-4'>
                            {project.description}
                          </div>

                          <div className="w-full px-6 flex flex-row gap-5 justify-between items-center">
                            <a href={project.githubUrl} target="_blank" className='w-full flex items-center gap-2 justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline-offset-2 focus-visible:outline-black border'>
                              GitHub <LuArrowUpRight size={18} />
                            </a>

                            <a href={project.liveLink} target="_blank" className='w-full flex items-center gap-2 justify-center rounded-lg bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline-offset-2 focus-visible:outline-black border'>
                              Live Link <LuArrowUpRight size={18} />
                            </a>
                          </div>

                        </div>
                      </div>

                      {/* tech stack */}
                      <div>
                        {project.techStack.length > 0 && (
                          <div className="pl-2 md:pl-6">
                            <span className="text-sm font-bold text-black-600">Tech Stack:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {project.techStack.map((tech) => (
                                <motion.span
                                  key={tech}
                                  className={`bg-gray-300 border border-gray-500 shadow-xl text-sm font-semibold px-4 py-1 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white cursor-default ${darkMode ? "shadow-[#111] shadow-xl" : ""}`}
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
                ))}
              </div>
            </div>

            <div className="px-6">
              <div className="flex flex-row gap-2 justify-center items-center rounded-lg py-2">
                <a
                  href="/projects/moreProjects"
                  className='w-80 lg:w-full flex items-center gap-2 justify-center rounded-lg bg-black px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline-offset-2 focus-visible:outline-black border border-gray-600'
                >
                  View More Project
                  <LuArrowUpRight size={18} />
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsNew;
