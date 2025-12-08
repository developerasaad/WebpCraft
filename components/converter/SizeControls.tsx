"use client";

import React from "react";
import { Input } from "@/components/ui/Input";

interface SizeControlsProps {
    width: number;
    height: number;
    onWidthChange: (value: number) => void;
    onHeightChange: (value: number) => void;
}

export function SizeControls({
    width,
    height,
    onWidthChange,
    onHeightChange,
}: SizeControlsProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Input
                type="number"
                label="Width (px)"
                value={width || ""}
                onChange={(e) => onWidthChange(Number(e.target.value))}
                placeholder="Auto"
                min="1"
            />
            <Input
                type="number"
                label="Height (px)"
                value={height || ""}
                onChange={(e) => onHeightChange(Number(e.target.value))}
                placeholder="Auto"
                min="1"
            />
        </div>
    );
}
