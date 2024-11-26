import { TreeNodeData } from "@/types";
import { atom } from "recoil";

export const sidebarisOpenState = atom<boolean>({
    key: "sidebarisOpenState",
    default: false
}) 

export const treeDataState = atom<TreeNodeData[] | null>({
    key: 'treeDataState',
    default: null,
  });