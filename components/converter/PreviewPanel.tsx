"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";

interface PreviewPanelProps {
    originalFile: File;
    convertedBlob: Blob;
}

export function PreviewPanel({ originalFile, convertedBlob }: PreviewPanelProps) {
    const [originalUrl, setOriginalUrl] = useState<string>("");
    const [convertedUrl, setConvertedUrl] = useState<string>("");

    useEffect(() => {
        const origUrl = URL.createObjectURL(originalFile);
        const convUrl = URL.createObjectURL(convertedBlob);

        setOriginalUrl(origUrl);
        setConvertedUrl(convUrl);

        return () => {
            URL.revokeObjectURL(origUrl);
            URL.revokeObjectURL(convUrl);
        };
    }, [originalFile, convertedBlob]);

    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Preview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Original */}
                <div>
                    <p className="text-sm font-medium text-softText mb-3">Original</p>
                    <div className="relative bg-background rounded-md overflow-hidden aspect-video">
                        {originalUrl && (
                            <img
                                src={originalUrl}
                                alt="Original"
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>
                </div>

                {/* Converted */}
                <div>
                    <p className="text-sm font-medium text-softText mb-3">
                        WebP (Converted)
                    </p>
                    <div className="relative bg-background rounded-md overflow-hidden aspect-video">
                        {convertedUrl && (
                            <img
                                src={convertedUrl}
                                alt="Converted"
                                className="w-full h-full object-contain animate-fadeIn"
                            />
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
