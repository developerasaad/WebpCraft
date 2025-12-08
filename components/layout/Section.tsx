import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "gray";
}

export function Section({
    children,
    className = "",
    variant = "default",
}: SectionProps) {
    const variantStyles = {
        default: "bg-background",
        gray: "bg-gray-50",
    };

    return (
        <section className={`py-16 md:py-24 ${variantStyles[variant]} ${className}`}>
            {children}
        </section>
    );
}
