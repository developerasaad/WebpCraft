"use client";

import React from "react";
import { Slider } from "@/components/ui/Slider";

interface QualitySliderProps {
    value: number;
    onChange: (value: number) => void;
}

export function QualitySlider({ value, onChange }: QualitySliderProps) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-900">Quality</label>
                <span className="text-sm font-medium text-accent">{value}%</span>
            </div>
            <Slider min={1} max={100} value={value} onChange={onChange} />
            <div className="flex justify-between mt-2 text-xs text-softText">
                <span>Smaller file</span>
                <span>Better quality</span>
            </div>
        </div>
    );
}
