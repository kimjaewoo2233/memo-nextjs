import { TreeNodeData } from "@/types";

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