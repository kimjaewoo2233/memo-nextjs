import DarkModeToggle from "@/components/darkmode-toggle";
import { SearchParamProps } from "@/types";
import { notFound } from "next/navigation";

export default function RootPage({ searchParams: { id }}: SearchParamProps) {
    if(!id) notFound();
    return (
        <div>
            
        </div>
    )
}