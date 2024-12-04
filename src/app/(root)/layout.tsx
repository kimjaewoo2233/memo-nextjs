import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";
import HambugerMenuButton from "@/components/button/hambuger-menu-button";

export const dynamic = 'force-dynamic'

interface Props {
    children: ReactNode;
    sidebar: ReactNode;
}

export default function RootLayout({ children, sidebar }: Props) {

    return (
        <main className="flex w-screen h-screen relative overflow-hidden">
            <HambugerMenuButton/>
            {sidebar}
            <div className="flex-1">
                {children}
            </div>
        </main>
    )
}