import React from "react";
import { useTheme } from "@/context/ThemeContext";

const SvgDivider4 = () => {

  const { darkMode } = useTheme();

  const bgColor = darkMode ? "#222" : "#ebeeee" ;
  const pathColor = darkMode ? "#111" : "#FFFFFF";


  return (
    <div className="w-full" style={{backgroundColor: bgColor}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
        <path
          d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"
          fill={pathColor}
        ></path>
      </svg>
    </div>
  );
};

export default SvgDivider4;
