"use client"
import { cn } from "@/lib/utils";
import ArrowSidebar from "./\barrow-sidebar";
import DarkModeToggle from "./darkmode-toggle";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { sidebarisOpenState } from "@/recoil";
import FileTree from "./tree";
import Link from "next/link";

const Sidebar = () => {
    const sidebarIsOpen = useRecoilValue(sidebarisOpenState);

    return (
        <aside className={cn("sticky left-0 top-0 flex h-screen flex-col justify-between border-r border-gray-400 pt-8 max-md:hidden sm:p-4 xl:p-6  transition-all  duration-300", {
            "w-[50px]": sidebarIsOpen,
            "w-[355px]": !sidebarIsOpen
        })}>
            <ArrowSidebar/>
            <div className="w-full relative">
                <DarkModeToggle className={`absolute right-0 ${sidebarIsOpen && 'hidden'}`}/>
                <div className={cn("pt-[50px] transition-opacity  ease-in-out", {
                    "opacity-0 invisible": sidebarIsOpen,
                    "opacity-100 visible": !sidebarIsOpen
                })}>
                    <FileTree/>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;