"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatBytes } from "@/lib/calculateCompressionStats";

interface BulkImageCardProps {
    file: File;
    status: "pending" | "converting" | "completed" | "error";
    progress: number;
    convertedBlob?: Blob;
    filename?: string;
    originalSize: number;
    convertedSize?: number;
    onDownload: () => void;
    onRemove: () => void;
}

export function BulkImageCard({
    file,
    status,
    progress,
    convertedBlob,
    filename,
    originalSize,
    convertedSize,
    onDownload,
    onRemove,
}: BulkImageCardProps) {
    const [preview, setPreview] = React.useState("");

    React.useEffect(() => {
        const url = URL.createObjectURL(file);
        setPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [file]);

    const percentageSaved = convertedSize && originalSize > 0
        ? ((originalSize - convertedSize) / originalSize) * 100
        : 0;

    return (
        <Card padding="md" className="relative">
            <div className="flex gap-4">
                {/* Preview */}
                <div className="w-24 h-24 bg-background rounded-md overflow-hidden flex-shrink-0">
                    <img src={preview} alt={file.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 truncate mb-1">{file.name}</h4>
                    <p className="text-xs text-softText mb-2">{formatBytes(originalSize)}</p>

                    {/* Status */}
                    {status === "pending" && (
                        <div className="flex items-center gap-2 text-xs text-softText">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span>Waiting...</span>
                        </div>
                    )}

                    {status === "converting" && (
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-accent">
                                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                <span>Converting... {progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                    className="bg-accent h-full rounded-full transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {status === "completed" && convertedSize && (
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Completed</span>
                            </div>
                            <p className="text-xs text-softText">
                                {formatBytes(convertedSize)} • <span className="text-accent font-medium">{percentageSaved.toFixed(1)}% saved</span>
                            </p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="flex items-center gap-2 text-xs text-red-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span>Failed</span>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                    {status === "completed" && convertedBlob && (
                        <Button size="sm" variant="primary" onClick={onDownload}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </Button>
                    )}
                    {(status === "pending" || status === "error") && (
                        <button
                            onClick={onRemove}
                            className="p-2 text-softText hover:text-red-500 hover:bg-red-50 rounded-md transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </Card>
    );
}
