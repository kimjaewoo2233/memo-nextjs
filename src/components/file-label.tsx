import { Kind } from "@/types";
import { Input } from "./ui/input";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { handleClientScriptLoad } from "next/script";
import { useRecoilState } from "recoil";
import { treeDataState } from "@/recoil";
import { updateNodeLabel } from "@/lib/node.utils";


interface Props {
    nodeId: string;
    kind: Kind;
    label: string;
}

const FileLabel = ({ kind, label, nodeId }: Props ) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(label);
    const inputRef = useRef<HTMLInputElement>(null);
    const [treeMainData, setTreeMainData] = useRecoilState(treeDataState);

    const handleDoubleClick = () => {
        setIsEditing(true);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            // 해당 노드 이름 변경 시키는 함수 실행
            setIsEditing(false);

            const updatedNodes = updateNodeLabel({
                nodes: treeMainData,
                nodeId:nodeId,
                newLabel: inputValue
            });

            setTreeMainData(updatedNodes);
        }
    }
    
    const handleClickOutside = (event: MouseEvent) => {
        if(inputRef.current && !inputRef.current.contains(event.target as Node)){
            setIsEditing(false);
        }
    }

    useEffect(() => {
        if(isEditing) {
            document.addEventListener("mousedown", handleClickOutside);
        }else{
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[isEditing]);

    
    return (
        <div onDoubleClick={handleDoubleClick} className="w-full">
            {
                isEditing 
                ? 
                (
                    <Input 
                        className="h-[30px] px-3"
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        ref={inputRef}
                    /> 
                ) 
                : 
                (
                    label
                )  
            }
        </div>
    )
}

export default FileLabel;