import { cn } from "@/lib/utils";
import { TreeItemProps, TreeNodeData, TreeViewProps } from "@/types";
import { ComponentPropsWithoutRef, ElementType, ReactNode, useState } from "react";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaFile } from "react-icons/fa";

export const TreeItem = <T extends ElementType = "div">({
    as,
    children,
    className,
    ...props
} : TreeItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TreeItemProps<T>>) => {

    const Component = as || "div";

    return (
        <Component className={cn("p-2 cursor-pointer flex flex-row items-center gap-3", className)} {...props}>
            {children}
        </Component>
    )
}
