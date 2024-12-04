"use client";

import React, { MouseEvent } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { clsx } from "clsx";
import { useRecoilState } from "recoil";
import { sidebarisOpenState } from "@/recoil";

export default function HambugerMenuButton() {
    const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarisOpenState);

    return (
        <button
            className={clsx(
                "flex items-center justify-center w-12 h-12 bg-white rounded-[8px] shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-1000",
                "fixed top-6 left-6 z-50 transition-opacity duration-500 ease-in-out",
                {
                    "opacity-0 invisible": !sidebarIsOpen,
                    "opacity-100 visible": sidebarIsOpen,
                }
            )}
            onClick={(e: MouseEvent) => {
                setSidebarIsOpen((prev) => !prev);
            }}
        >
            <BiFoodMenu className="text-2xl text-gray-700" />
        </button>
    );
}