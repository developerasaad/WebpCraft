"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface DownloadPanelProps {
    onDownloadAll: () => void;
    onClear: () => void;
    fileCount: number;
}

export function DownloadPanel({
    onDownloadAll,
    onClear,
    fileCount,
}: DownloadPanelProps) {
    return (
        <Card>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-softText">
                    {fileCount} {fileCount === 1 ? "file" : "files"} converted successfully
                </p>
                <div className="flex gap-3">
                    <Button variant="secondary" onClick={onClear}>
                        Clear All
                    </Button>
                    <Button variant="primary" onClick={onDownloadAll}>
                        Download {fileCount > 1 ? "All" : ""}
                    </Button>
                </div>
            </div>
        </Card>
    );
}
