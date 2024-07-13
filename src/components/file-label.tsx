import { Kind } from "@/types";
import { Input } from "./ui/input";


interface Props {
    kind: Kind;
    label: string;
}

const FileLabel = ({ kind, label }: Props ) => {

    return (
        <div>
            {kind === "F"  ? <Input/> : label}
        </div>
    )
}

export default FileLabel;