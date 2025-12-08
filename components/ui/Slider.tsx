import React from "react";

interface SliderProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    label?: string;
    className?: string;
}

export function Slider({
    min,
    max,
    value,
    onChange,
    label,
    className = "",
}: SliderProps) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-softText mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer slider-thumb"
                    style={{
                        background: `linear-gradient(to right, #6366F1 0%, #6366F1 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
                    }}
                />
            </div>
        </div>
    );
}
