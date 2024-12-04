
import Image from "next/image";
import NotFoundBg from "@/components/image/not-found-bg";

export default function NotFound(){
    return (
        <main className="w-full h-full text-[100px] flex flex-col justify-center items-center gap-10">
            <div className="text-h1 font-bold">
                404
            </div>
            <NotFoundBg/>
        </main>
    )
}