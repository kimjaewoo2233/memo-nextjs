import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";

declare type SearchParamProps = {
    params: {[key: string]: string};
    searchParams: { [key: string]: string | string[] | undefined };
}

declare type TreeItemProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
}

declare type TreeNodeData = {
    id: string; //
    parentId: string; //
    label: string; //
    kind: string; //
    depth: number; //
    segment: string; //
    children?: TreeNodeData[]; // 재귀
}

declare type TreeViewProps = {
    data: TreeNodeData[];
}

declare type Kind = "D" | "F";


declare type DropdownProps = {
    kind: Kind;
    label: string;
    items: { label: string; onClick: () => void }[];
}

declare type PolymorphicComponentProps<C extends ElementType, Props>  =
    Props & Omit<ComponentPropsWithoutRef<C>, keyof Props>