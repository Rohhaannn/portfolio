"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { EducationSectionData, ImageItem } from "@/data/types";

const Education = () => {
  const { darkMode } = useTheme();
  const { schoolData, graduationData, pgData } = portfolioData.education;

  const [schoolIndex, setSchoolIndex] = useState<number>(0);
  const [graduationIndex, setGraduationIndex] = useState<number>(0);
  const [pgIndex, setPgIndex] = useState<number>(0);

  const renderSection = (
    data: EducationSectionData,
    sectionName: string,
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
    isReversed: boolean = false
  ) => {
    const mainImgArray: ImageItem[] =
      data.gradImgArray || data.schoolImgArray || data.pgImgArray || [];
    const siteLinkText =
      sectionName === "Graduation" || sectionName === "Post Graduation"
        ? "Visit College Site"
        : "Visit School Site";

    return (
      <div
        className={`flex flex-col md:flex-row items-start justify-between gap-8 py-10 px-4 ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left/Right Image Block */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full">
            {mainImgArray
              .filter((_, index: number) => index === currentIndex)
              .map((item: ImageItem) => (
                <Image
                  key={item.id}
                  src={item.imgLink}
                  alt={`${sectionName} Image`}
                  width={600}
                  height={550}
                  className="w-full h-auto rounded-lg"
                />
              ))}
          </div>
          <div className="flex justify-center gap-3 mt-5">
            {mainImgArray.map((item: ImageItem, index: number) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-12 rounded-md overflow-hidden border-2 ${
                  currentIndex === index ? "border-blue-500" : "border-transparent"
                }`}
              >
                <Image
                  src={item.imgLink}
                  alt={`Thumbnail ${item.id}`}
                  width={200}
                  height={150}
                  className="rounded-md object-cover"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-md"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right/Left Content Block */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold">{data.schoolName}</h3>
          <p className="text-base text-gray-400">{data.schoolDescription}</p>
          <Link
            href={data.siteLink}
            target="_blank"
            className="w-fit flex flex-row gap-2 justify-center items-center bg-white text-sm text-black px-4 py-2 rounded-xl mt-4"
          >
            {siteLinkText}
            <LuArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div id="education" className="overflow-hidden">
      <div className={`p-4 py-10 ${darkMode ? "rounded-lg" : ""}`}>
        <h1
          className={`text-4xl font-bold text-center ${
            darkMode
              ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text"
              : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"
          } `}
        >
          Education
        </h1>

        <h2
          className={`text-2xl py-2 mt-10 text-center ${
            darkMode ? "text-blue-500" : "text-blue-900"
          }`}
        >
          {schoolData.sectionTitle}
        </h2>
        {renderSection(
          schoolData,
          "Primary School",
          schoolIndex,
          setSchoolIndex,
          false
        )}

        <hr className="my-8 border-gray-700" />

        <h2
          className={`text-2xl py-2 mt-10 text-center ${
            darkMode ? "text-blue-500" : "text-blue-900"
          }`}
        >
          {graduationData.sectionTitle}
        </h2>
        {renderSection(
          graduationData,
          "Graduation",
          graduationIndex,
          setGraduationIndex,
          true
        )}

        <hr className="my-8 border-gray-700" />

        <h2
          className={`text-2xl py-2 mt-10 text-center ${
            darkMode ? "text-blue-500" : "text-blue-900"
          }`}
        >
          {pgData.sectionTitle}
        </h2>
        {renderSection(pgData, "Post Graduation", pgIndex, setPgIndex, false)}
      </div>
    </div>
  );
};

export default Education;