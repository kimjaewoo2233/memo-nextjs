"use client"
import Image from "next/image";
import {useRecoilState} from "recoil";
import {darkModeState} from "@/recoil";


export default function NotFoundBg() {
    const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
    const imagePath = isDarkMode ? "/img/dark/bg_1.png" : "/img/light/bg_1.png";

    return (
        <div className={"relative w-[250px] h-[250px] z-10"}>
            <Image
                className={"object-cover"}
                fill
                src={imagePath}
                alt={"bg"}
            />
        </div>


    )
}