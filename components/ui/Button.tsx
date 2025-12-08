import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "flex items-center justify-center font-medium rounded-md transition-all duration-160 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary:
            "bg-accent text-white hover:bg-accent/90 active:scale-95 shadow-sm hover:shadow-md",
        secondary:
            "bg-card text-softText hover:bg-gray-100 active:scale-95 shadow-sm border border-border",
        outline:
            "bg-transparent text-accent border-2 border-accent hover:bg-accent/5 active:scale-95",
    };

    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-7 py-3.5 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
