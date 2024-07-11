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

export function addNode({ nodes, newNode, parentNodeId }: {nodes: TreeNodeData[]; newNode: TreeNodeData; parentNodeId: string}): TreeNodeData[] {
    return nodes.map(node => {
        if (node.id === parentNodeId) {
            const updatedNode = {
                ...node,
                children: node.children ? [...node.children, newNode] : [newNode]
            };
            return updatedNode;
        }

        if (node.children) {
            return {
                ...node,
                children: addNode({ nodes: node.children, newNode: newNode, parentNodeId: parentNodeId })
            };
        }

        return node;
    });
}
