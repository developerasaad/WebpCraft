"use client";

import React from "react";

interface PresetsBarProps {
    onPresetClick: (size: number) => void;
}

export function PresetsBar({ onPresetClick }: PresetsBarProps) {
    const presets = [
        { label: "1920px", value: 1920 },
        { label: "1080px", value: 1080 },
        { label: "800px", value: 800 },
        { label: "512px", value: 512 },
    ];

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quick Presets
            </label>
            <div className="grid grid-cols-4 gap-2">
                {presets.map((preset) => (
                    <button
                        key={preset.value}
                        onClick={() => onPresetClick(preset.value)}
                        className="py-2 px-3 text-sm font-medium text-softText bg-background hover:bg-accent hover:text-white rounded-md transition-all duration-160 active:scale-95"
                    >
                        {preset.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
