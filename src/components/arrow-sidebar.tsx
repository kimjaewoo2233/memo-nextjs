"use client"
import { cn } from "@/lib/utils";
import { sidebarisOpenState } from "@/recoil";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";


const ArrowSidebar = () => {
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarisOpenState);
    return (
        <Image
            src="/icons/arrow_right.svg"
            alt="ARROW"
            width={50}
            height={50}
            className={cn("absolute -right-7 top-20 z-10 cursor-pointer bg-black-900 rounded-full transition-transform duration-300", {
                "rotate-180": isRotated
            })}
            onClick={() => {
                setIsRotated(rotated => !rotated)
                setSidebarIsOpen(sidebarIsOpen => !sidebarIsOpen);
            }}
        />
    )

}

export default ArrowSidebar;
