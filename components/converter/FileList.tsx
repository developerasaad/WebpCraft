"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { formatBytes } from "@/lib/calculateCompressionStats";

interface FileListProps {
    files: File[];
    onRemove: (index: number) => void;
}

export function FileList({ files, onRemove }: FileListProps) {
    return (
        <Card>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Selected Files ({files.length})
            </h3>
            <div className="space-y-2">
                {files.map((file, index) => (
                    <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between p-3 bg-background rounded-md group hover:bg-accent/5 transition-all duration-160"
                    >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                            {/* File Icon */}
                            <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                                <svg
                                    className="w-5 h-5 text-accent"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>

                            {/* File Info */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {file.name}
                                </p>
                                <p className="text-xs text-softText">
                                    {formatBytes(file.size)}
                                </p>
                            </div>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => onRemove(index)}
                            className="ml-4 p-2 text-softText hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-160 flex-shrink-0"
                            aria-label="Remove file"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </Card>
    );
}
