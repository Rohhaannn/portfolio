
"use client"

import React, {createContext, useState, useContext, ReactNode } from 'react'

interface ThemeContextType {
  darkMode: boolean;
  toggleDark: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext <ThemeContextType | undefined> (undefined);


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDark = () => {
    setDarkMode (prevMode => {
      const newMode = !prevMode;

      if (newMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return newMode;
    });
  };

  const contextValue = React.useMemo(() => ({ darkMode, toggleDark }), [darkMode, toggleDark]);

  return (
    <ThemeContext.Provider value={contextValue}>
      { children }
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


