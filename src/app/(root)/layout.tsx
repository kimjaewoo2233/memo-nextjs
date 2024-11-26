import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export const dynamic = 'force-dynamic'

interface Props {
    children: ReactNode;
    sidebar: ReactNode;
}

export default function RootLayout({ children, sidebar }: Props) {

    return (
        <main className="flex">
            {sidebar}
            <div className="flex-1">
                {children}
            </div>
        </main>
    )
}