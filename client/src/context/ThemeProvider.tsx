import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({ children } : {children: ReactNode}) => {
    const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    );
}