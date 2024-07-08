import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";



export default function RootLayout({ children }: { children: ReactNode}) {

    return (
        <main className="">
            <Sidebar/>
            {children}
        </main>
    )
}