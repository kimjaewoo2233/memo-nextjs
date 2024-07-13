"use client"
import { DropdownProps, Kind, TreeNodeData, TreeViewProps } from "@/types";
import { TreeItem } from "./ui/tree-item";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile } from "react-icons/fa";
import { cn, formUrlQuery } from "@/lib/utils";
import { lazy, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Dropdown from "./drop-down";
import { addNode, findRootNodeId } from "@/lib/node.utils";
import { useRecoilState, useRecoilValue } from "recoil";
import { treeDataState } from "@/recoil";
import { v4 as uuidv4 } from 'uuid';
import { Input } from "./ui/input";
import FileLabel from "./file-label";

const TreeView = ({ data }: TreeViewProps) => {

    const router = useRouter();
    const searchParams= useSearchParams();
    const [treeMainData, setTreeMainData] = useRecoilState(treeDataState);

    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
    const [selectedRootNodeId, setSelectedRootNodeId] = useState<string | null>(null);
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

    const handleToggle = (nodeData: TreeNodeData) => {
        const { id, parentId, depth, segment, kind } = nodeData;

        setExpandedNodes((prev) => {
            const newExpandedNodes = new Set(prev);
            newExpandedNodes.add(id);
            return newExpandedNodes;
        });
        setSelectedNodeId(id);
        
        if(depth === 1 && parentId === "0"){ //최 상단 root
            setSelectedRootNodeId((prev) => (prev === id ? null : id));
        }else{ //아닐 경우 최상단을 찾음
            const rootParentId: string = findRootNodeId({
                startFindNode: nodeData,
                treeData: data
            }) || "0";

            setSelectedRootNodeId(rootParentId);
        }

        if(kind !== "D") {
            const newURL = formUrlQuery({
                params: searchParams.toString(),
                key: "id",
                value: nodeData.segment
            });
    
            router.push(newURL);
        }
    }

    function isItAFileOrfolder({ kind, parentNodeId, depth }: { kind: string; parentNodeId: string, depth: number}){
        if(kind === "D"){ //디렉토리일 경우 드랍다운메뉴
            return [
                    {
                        label: "파일추가",
                        onClick: () => { 
                            const updatedNodeList = addNode({
                                nodes: treeMainData,
                                newNode: {
                                    id: uuidv4(),
                                    parentId: parentNodeId,
                                    label: '',
                                    kind: 'F',
                                    depth: depth + 1,
                                    segment: uuidv4(),
                                },
                                parentNodeId: parentNodeId
                            });
                            setTreeMainData(updatedNodeList);
                        }
                    },
                    {
                        label: "폴더 이름 변경",
                        onClick: () => { console.log("폴더이름변경클릭")}
                    },
                ]
        }
        return [
                {
                    label: "파일 이름변경",
                    onClick: () => { console.log("파일추가버튼클릭")}
                },
                {
                    label: "파일삭제",
                    onClick: () => { console.log("폴더이름변경클릭")}
                },
            ]
    }

    const renderTreeNodes = (nodes: TreeNodeData[]) => {
        return (
            <>
            {
                nodes.map((node) => (
                    <div key={node.id}>
                        <TreeItem as="div" className={cn({
                            "bg-gray-300 rounded-sm" :(selectedRootNodeId === node.id && node.depth === 1) ||  searchParams.get("id") === node.segment,
                            "bg-gray-500": (selectedNodeId === node.id),
                        })} onClick={() => handleToggle(node)}>
                            <div className="flex flex-row items-center gap-3">
                                <span>
                                    {node.kind === "D" ? <GoFileDirectoryFill/> : <FaFile/>}
                                </span>
                                <span>
                                    {/* {node.label} */}
                                    <FileLabel kind={node.kind as Kind} label={node.label}/>
                                </span>
                            </div>
                            <Dropdown label={node.label} kind={node.kind as "D" | "F"} items={isItAFileOrfolder({
                                kind:node.kind as Kind,
                                parentNodeId: node.id,
                                depth: node.depth
                            })}/>
                        </TreeItem>
                        <div className={cn("overflow-hidden transition-all duration-1000 ease-in-out",{
                            "max-h-screen": expandedNodes.has(node.id),
                            "max-h-0": !expandedNodes.has(node.id)
                        })}>
                            {node.children && (
                                <div className="pl-4">
                                    {renderTreeNodes(node.children)}
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
            </>
        )
    }   

    return <div className="list-none">{renderTreeNodes(data)}</div>;
}

export default TreeView;
