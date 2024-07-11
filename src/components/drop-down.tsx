import { HiDotsVertical } from "react-icons/hi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

interface Props {
    label: string;
}

const Dropdown = ({ label }: Props) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger><HiDotsVertical /></DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>파일추가</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown;
