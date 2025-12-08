"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { calculateCompressionStats } from "@/lib/calculateCompressionStats";

interface ComparisonStatsProps {
    originalSize: number;
    compressedSize: number;
}

export function ComparisonStats({
    originalSize,
    compressedSize,
}: ComparisonStatsProps) {
    const stats = calculateCompressionStats(originalSize, compressedSize);

    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Compression Stats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Original Size */}
                <div className="text-center p-4 bg-background rounded-md">
                    <p className="text-sm text-softText mb-1">Original Size</p>
                    <p className="text-2xl font-bold text-gray-900">
                        {stats.originalSizeFormatted}
                    </p>
                </div>

                {/* Compressed Size */}
                <div className="text-center p-4 bg-background rounded-md">
                    <p className="text-sm text-softText mb-1">WebP Size</p>
                    <p className="text-2xl font-bold text-accent">
                        {stats.compressedSizeFormatted}
                    </p>
                </div>

                {/* Savings */}
                <div className="text-center p-4 bg-accent/10 rounded-md">
                    <p className="text-sm text-softText mb-1">Saved</p>
                    <p className="text-2xl font-bold text-accent">
                        {stats.percentageSavedFormatted}
                    </p>
                </div>
            </div>
        </Card>
    );
}
