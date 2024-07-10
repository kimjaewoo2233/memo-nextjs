"use client"
import { findRootNodeId } from "@/lib/find-root-id";
import { TreeNodeData, TreeViewProps } from "@/types";
import { TreeItem } from "./ui/tree-item";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile } from "react-icons/fa";
import { cn, formUrlQuery } from "@/lib/utils";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const TreeView = ({ data }: TreeViewProps) => {

    const router = useRouter();
    const searchParams= useSearchParams();

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
                            {node.kind === "D" ? <GoFileDirectoryFill/> : <FaFile/>}
                            {node.label}
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
