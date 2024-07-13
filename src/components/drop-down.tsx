import { HiDotsVertical } from "react-icons/hi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { TiPlusOutline } from "react-icons/ti";
import { DropdownProps, Kind } from "@/types";


const Dropdown = ({ kind, label,items }: DropdownProps) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{kind === "D" ? <TiPlusOutline /> : <HiDotsVertical/>}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {items.map((item, index) => {
                    return (
                        <DropdownMenuItem onClick={item.onClick} key={index}>{item.label}</DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown;
