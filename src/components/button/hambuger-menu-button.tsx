"use client";

import React, { MouseEvent } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { clsx } from "clsx";
import { useRecoilState, useRecoilValue } from "recoil";
import {darkModeState, sidebarisOpenState} from "@/recoil";

export default function HambugerMenuButton() {
    const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarisOpenState);
    const isDarkMode = useRecoilValue(darkModeState);

    return (
        <button
            className={clsx(
                "flex items-center justify-center w-12 h-12 rounded-[8px] shadow-lg transition-all duration-1000",
                "fixed top-6 left-6 z-50 transition-opacity duration-500 ease-in-out",
                {
                    // 다크 모드 스타일
                    "bg-gray-800 hover:bg-gray-700 text-white": isDarkMode,
                    // 라이트 모드 스타일
                    "bg-white hover:bg-gray-100 text-gray-700": !isDarkMode,
                    // 사이드바 상태에 따른 투명도 처리
                    "opacity-0 invisible": !sidebarIsOpen,
                    "opacity-100 visible": sidebarIsOpen,
                }
            )}
            onClick={(e: MouseEvent) => {
                setSidebarIsOpen((prev) => !prev);
            }}
        >
            <BiFoodMenu className="text-2xl" />
        </button>
    );
}