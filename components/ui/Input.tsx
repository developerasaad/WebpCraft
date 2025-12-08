import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-softText mb-2">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-2.5 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-160 ${className}`}
                {...props}
            />
        </div>
    );
}
