import {ElementType, ReactNode} from "react";
import {PolymorphicComponentProps} from "@/types";
import {clsx} from "clsx";


type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface ButtonProps<C extends ElementType> {
    as?: C;
    variant?: ButtonVariants;
    size?: "small" | "medium" | "large";
    children: ReactNode;
}
const defaultElement = 'button';

export default function Button<C extends ElementType = typeof defaultElement>({
    as,
    variant = "primary",
    size,
    children,
    className,
    ...props
  }: PolymorphicComponentProps<C, ButtonProps<C>>){
    const Component = as || defaultElement;
    const baseStyles = 'inline-flex items-center justify-center rounded transition';

    const sizeStyles = clsx({
        'px-4 py-2 text-sm': size === 'small',
        'px-6 py-3 text-base': size === 'medium',
        'px-8 py-4 text-lg': size === 'large',
        "": !size
    });

    const variantStyles = clsx({
        'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700': variant === 'primary',
        'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700': variant === 'secondary',
        'bg-green-500 text-white hover:bg-green-600 active:bg-green-700': variant === 'success',
        'bg-red-500 text-white hover:bg-red-600 active:bg-red-700': variant === 'danger',
        'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700': variant === 'warning',
        'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700': variant === 'info',
    });

    return (
        <Component
            className={clsx(baseStyles, sizeStyles, variantStyles, className)}
            {...props}
        >
            {children}
        </Component>
    )
}