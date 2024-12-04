"use client"
import { cn } from "@/lib/utils";
import {darkModeState, sidebarisOpenState} from "@/recoil";
import Image from "next/image";
import { useState } from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import { IoArrowBackCircleSharp, IoArrowBackCircleOutline } from "react-icons/io5";
import {clsx} from "clsx";

const ArrowSidebar = () => {
    const isDarkMode = useRecoilValue(darkModeState);
    const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarisOpenState);
    return (
        <div
            className={clsx("absolute -right-4 top-20 cursor-pointer",{
                "hidden":sidebarIsOpen
            })}
            onClick={() => {
                setSidebarIsOpen(sidebarIsOpen => !sidebarIsOpen);
            }}
        >
            {
                isDarkMode ?
                    <IoArrowBackCircleSharp  size={30} style={{ background: "black"}}/>
                    :
                    <IoArrowBackCircleOutline size={30} style={{ background: "white"}}/>

            }
        </div>
    )

}

export default ArrowSidebar;
