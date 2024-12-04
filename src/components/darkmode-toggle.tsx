"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import {useRecoilState} from "recoil";
import {darkModeState} from "@/recoil";

const DarkModeToggle = ({ className }: { className?: string}) => {
    const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

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
          {isDarkMode ? <BsMoonStars /> : <BsMoonStarsFill />}
        </button>
    );
}

export default DarkModeToggle;
