import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: { children: ReactNode}) {

    return (
        <main className="flex">
            <Sidebar/>
            <div className="flex-1">
                {children}
            </div>
        </main>
    )
}