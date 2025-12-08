"use client";

import React, { useState, useCallback, useEffect } from "react";
import JSZip from "jszip";
import toast, { Toaster } from "react-hot-toast";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";
import { Input } from "@/components/ui/Input";
import { BulkImageCard } from "./BulkImageCard";
import { convertToWebp } from "@/lib/convertToWebp";
import { resizeImage } from "@/lib/resizeImage";

interface ImageItem {
    id: string;
    file: File;
    status: "pending" | "converting" | "completed" | "error";
    progress: number;
    convertedBlob?: Blob;
    filename?: string;
    originalSize: number;
    convertedSize?: number;
}

export function BulkConverter() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [quality, setQuality] = useState(90);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [aspectLocked, setAspectLocked] = useState(true);
    const [originalAspect, setOriginalAspect] = useState(0);
    const [isConverting, setIsConverting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (images.length > 0 && aspectLocked && originalAspect === 0) {
            const img = new Image();
            const reader = new FileReader();
            reader.onload = (e) => {
                img.onload = () => {
                    const ratio = img.width / img.height;
                    setOriginalAspect(ratio);
                    if (width === 0 && height === 0) {
                        setWidth(img.width);
                        setHeight(img.height);
                    }
                };
                img.src = e.target?.result as string;
            };
            reader.readAsDataURL(images[0].file);
        }
    }, [images, aspectLocked, originalAspect, width, height]);

    const handleFilesAdded = useCallback((files: FileList | null) => {
        if (!files) return;
        const newImages: ImageItem[] = Array.from(files)
            .filter(f => f.type.startsWith("image/"))
            .map(file => ({
                id: Math.random().toString(36).substring(7),
                file,
                status: "pending" as const,
                progress: 0,
                originalSize: file.size,
            }));
        setImages(prev => [...prev, ...newImages]);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFilesAdded(e.dataTransfer.files);
    }, [handleFilesAdded]);

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleFilesAdded(e.target.files);
    }, [handleFilesAdded]);

    const handleWidthChange = useCallback((newWidth: number) => {
        setWidth(newWidth);
        if (aspectLocked && originalAspect > 0 && newWidth > 0) {
            setHeight(Math.round(newWidth / originalAspect));
        }
    }, [aspectLocked, originalAspect]);

    const handleHeightChange = useCallback((newHeight: number) => {
        setHeight(newHeight);
        if (aspectLocked && originalAspect > 0 && newHeight > 0) {
            setWidth(Math.round(newHeight * originalAspect));
        }
    }, [aspectLocked, originalAspect]);

    const handleConvertAll = useCallback(async () => {
        if (images.length === 0) return;

        setIsConverting(true);
        let successCount = 0;
        let errorCount = 0;

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            if (image.status === "completed") {
                successCount++;
                continue;
            }

            try {
                setImages(prev => prev.map((img, idx) =>
                    idx === i ? { ...img, status: "converting" as const, progress: 0 } : img
                ));

                let processedFile = image.file;

                if (width > 0 || height > 0) {
                    const resizedDataUrl = await resizeImage(image.file, width || 0, height || 0, aspectLocked);
                    const response = await fetch(resizedDataUrl);
                    const blob = await response.blob();
                    processedFile = new File([blob], image.file.name, { type: image.file.type });
                }

                setImages(prev => prev.map((img, idx) =>
                    idx === i ? { ...img, progress: 50 } : img
                ));

                const { blob, filename } = await convertToWebp(processedFile, quality);

                setImages(prev => prev.map((img, idx) =>
                    idx === i ? {
                        ...img,
                        status: "completed" as const,
                        progress: 100,
                        convertedBlob: blob,
                        filename,
                        convertedSize: blob.size
                    } : img
                ));

                successCount++;
            } catch (err) {
                setImages(prev => prev.map((img, idx) =>
                    idx === i ? { ...img, status: "error" as const } : img
                ));
                errorCount++;
                toast.error(`Failed to convert ${image.file.name}`);
            }
        }

        setIsConverting(false);

        // Show success toast
        if (successCount > 0 && errorCount === 0) {
            toast.success(`🎉 Successfully converted ${successCount} ${successCount === 1 ? 'image' : 'images'}!`);
        } else if (successCount > 0 && errorCount > 0) {
            toast.success(`Converted ${successCount} images (${errorCount} failed)`);
        } else if (errorCount > 0) {
            toast.error(`Failed to convert ${errorCount} ${errorCount === 1 ? 'image' : 'images'}`);
        }
    }, [images, quality, width, height, aspectLocked]);

    const handleDownload = useCallback((id: string) => {
        const image = images.find(img => img.id === id);
        if (!image?.convertedBlob || !image.filename) return;

        const url = URL.createObjectURL(image.convertedBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = image.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, [images]);

    const handleDownloadAll = useCallback(async () => {
        const completedImages = images.filter(img => img.status === "completed");
        if (completedImages.length === 0) return;

        try {
            // Create a new ZIP file
            const zip = new JSZip();

            // Add all converted images to the ZIP
            completedImages.forEach((img) => {
                if (img.convertedBlob && img.filename) {
                    zip.file(img.filename, img.convertedBlob);
                }
            });

            // Generate the ZIP file
            const zipBlob = await zip.generateAsync({ type: "blob" });

            // Download the ZIP file
            const url = URL.createObjectURL(zipBlob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `webp-images-${Date.now()}.zip`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            toast.success(`📦 Downloaded ${completedImages.length} images as ZIP`);
        } catch (err) {
            console.error("Failed to create ZIP:", err);
            toast.error("Failed to create ZIP file");
        }
    }, [images]);

    const handleRemove = useCallback((id: string) => {
        setImages(prev => prev.filter(img => img.id !== id));
    }, []);

    const handleClear = useCallback(() => {
        setImages([]);
        setWidth(0);
        setHeight(0);
        setOriginalAspect(0);
    }, []);


    const completedCount = images.filter(img => img.status === "completed").length;
    const pendingCount = images.filter(img => img.status === "pending").length;
    const allConverted = images.length > 0 && pendingCount === 0 && completedCount === images.length;
    const totalSize = images.reduce((acc, img) => acc + (img.convertedSize || 0), 0);

    return (
        <div className="space-y-6">
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#fff',
                        color: '#333',
                        borderRadius: '8px',
                        padding: '12px 16px',
                    },
                    success: {
                        iconTheme: {
                            primary: '#6366F1',
                            secondary: '#fff',
                        },
                    },
                }}
            />
            {/* Dropzone */}
            <Card padding="lg">
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-md p-8 text-center transition-all duration-220 ${isDragging ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                        }`}
                >
                    <div className="space-y-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <p className="text-base font-semibold text-gray-900">Drop multiple images here</p>
                        <p className="text-sm text-softText">or click to browse (supports unlimited images)</p>
                        <input type="file" accept="image/*" multiple onChange={handleFileSelect} className="hidden" id="bulk-file-input" />
                        <label htmlFor="bulk-file-input" className="inline-block px-5 py-2 bg-accent text-white font-medium rounded-md cursor-pointer hover:bg-accent/90 transition-all duration-160">
                            Choose Images
                        </label>
                    </div>
                </div>
            </Card>

            {/* Controls */}
            {images.length > 0 && (
                <Card padding="lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Settings</h3>
                    <div className="space-y-5">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-semibold text-gray-900">Quality</label>
                                <span className="text-sm font-medium text-accent">{quality}%</span>
                            </div>
                            <Slider min={1} max={100} value={quality} onChange={setQuality} />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <label className="text-sm font-semibold text-gray-900">Resize (Optional)</label>
                                <button onClick={() => setAspectLocked(!aspectLocked)} className={`p-2 rounded-md transition-all ${aspectLocked ? "bg-accent text-white" : "bg-gray-100 text-softText"}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={aspectLocked ? "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" : "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"} />
                                    </svg>
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <Input type="number" label="Width" value={width || ""} onChange={(e) => handleWidthChange(Number(e.target.value))} placeholder="Auto" />
                                <Input type="number" label="Height" value={height || ""} onChange={(e) => handleHeightChange(Number(e.target.value))} placeholder="Auto" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                onClick={handleConvertAll}
                                disabled={isConverting || allConverted}
                                variant="primary"
                                className="flex-1"
                            >
                                {isConverting
                                    ? "Converting..."
                                    : allConverted
                                        ? "✓ All Converted"
                                        : `Convert ${images.length} ${images.length === 1 ? 'Image' : 'Images'}`
                                }
                            </Button>
                            {completedCount > 0 && (
                                <Button onClick={handleDownloadAll} variant="secondary">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download ZIP ({completedCount})
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>
            )}

            {/* Image Grid */}
            {images.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Images ({images.length})
                        </h3>
                        <button onClick={handleClear} className="text-sm text-softText hover:text-red-500 transition-colors">
                            Clear All
                        </button>
                    </div>
                    <div className="space-y-3">
                        {images.map(image => (
                            <BulkImageCard
                                key={image.id}
                                file={image.file}
                                status={image.status}
                                progress={image.progress}
                                convertedBlob={image.convertedBlob}
                                filename={image.filename}
                                originalSize={image.originalSize}
                                convertedSize={image.convertedSize}
                                onDownload={() => handleDownload(image.id)}
                                onRemove={() => handleRemove(image.id)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
