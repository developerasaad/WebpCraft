"use client";

import React, { useCallback } from "react";
import { Card } from "@/components/ui/Card";

interface DropzoneProps {
    onFilesAdded: (files: File[]) => void;
}

export function Dropzone({ onFilesAdded }: DropzoneProps) {
    const [isDragging, setIsDragging] = React.useState(false);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);

            const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
                file.type.startsWith("image/")
            );

            if (droppedFiles.length > 0) {
                onFilesAdded(droppedFiles);
            }
        },
        [onFilesAdded]
    );

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFiles = e.target.files
                ? Array.from(e.target.files).filter((file) =>
                    file.type.startsWith("image/")
                )
                : [];

            if (selectedFiles.length > 0) {
                onFilesAdded(selectedFiles);
            }
        },
        [onFilesAdded]
    );

    return (
        <Card padding="lg">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-md p-12 text-center transition-all duration-220 ${isDragging
                        ? "border-accent bg-accent/5 scale-[1.02]"
                        : "border-border hover:border-accent/50 hover:bg-accent/5"
                    }`}
            >
                <div className="space-y-4">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <p className="text-lg font-semibold text-gray-900 mb-2">
                            Drop images here
                        </p>
                        <p className="text-sm text-softText mb-4">
                            or click to browse (JPG, PNG, GIF, WebP)
                        </p>
                    </div>

                    {/* File Input */}
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileInput}
                            className="hidden"
                            id="file-input"
                        />
                        <label
                            htmlFor="file-input"
                            className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-md cursor-pointer hover:bg-accent/90 active:scale-95 transition-all duration-160"
                        >
                            Choose Files
                        </label>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-xs text-softText mt-4">
                        🔒 All processing happens on your device. Nothing is uploaded.
                    </p>
                </div>
            </div>
        </Card>
    );
}
