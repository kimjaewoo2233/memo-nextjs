"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const DarkModeToggle = ({ className }: { className?: string}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if(isDarkMode){
            root.classList.add('dark');
        }else {
            root.classList.remove("dark");
        }
    },[isDarkMode]);
    
    return (
        <button
          className={cn("p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded", className)}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;
