import { TreeNodeData } from "@/types";
import {param} from "ts-interface-checker";

export function findRootNodeId({startFindNode, treeData}: { startFindNode: TreeNodeData | undefined; treeData: TreeNodeData[]}) {
    const findNode = (nodes: TreeNodeData[], id: string): TreeNodeData | undefined => {
        for(const node of nodes){
            if(node.id === id) {
                return node;
            }

            if(node.children) {
                const childNode = findNode(node.children, id);

                if(childNode) {
                    return childNode;
                }
            }
        }
        return undefined;
    }

    let currentNode = startFindNode;
    while(currentNode && currentNode.parentId !== '0'){
        currentNode = findNode(treeData, currentNode.parentId);
    }

    return currentNode?.id;
}

export function addNode({
                            nodes,
                            newNode,
                            parentNodeId,
                        }: {
    nodes: TreeNodeData[];
    newNode: TreeNodeData;
    parentNodeId: string;
}): TreeNodeData[] {
    let updatedNodes: TreeNodeData[] = [];

    for (const node of nodes) {
        if (node.id === parentNodeId) {
            updatedNodes.push({
                ...node,
                children: node.children ? [...node.children, newNode] : [newNode],
            });
            continue;
        }

        if (node.children) {
            const updatedChildren = addNode({ nodes: node.children, newNode, parentNodeId });
            if (updatedChildren !== node.children) { //현 자식 중 parentNodeId 겹치는게 있다는거 (객체 참조비교 일부로한거임) 같은 걸 참조하는지
                updatedNodes.push({
                    ...node, //자식이 업데이트 됐으니 본인도 업데이트됨
                    children: updatedChildren,
                });
                continue;
            }
        }

        updatedNodes.push(node);
    }

    return updatedNodes;
}
export function updateNodeLabel({ nodes, nodeId, newLabel }: { nodes: TreeNodeData[]; nodeId: string; newLabel: string }): TreeNodeData[] {
    return nodes.map(node => {
        if(node.id === nodeId) {
            return {
                ...node,
                label: newLabel
            }
        }

        if(node.children){
            return {
                ...node,
                children: updateNodeLabel({ nodes: node.children, nodeId, newLabel })
            }
        }

        return node;
    })
}