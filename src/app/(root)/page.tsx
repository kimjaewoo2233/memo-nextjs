import DarkModeToggle from "@/components/darkmode-toggle";
import MainFile from "@/components/main-file";
import { SearchParamProps } from "@/types";
import { notFound } from "next/navigation";

export default function RootPage({ searchParams: { id }}: SearchParamProps) {
    if(!id) notFound();
    return (
        <div>
            <MainFile id={id as string}/>
        </div>
    )
}