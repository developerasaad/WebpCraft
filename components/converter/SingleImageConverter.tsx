"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";
import { Input } from "@/components/ui/Input";
import { convertToWebp } from "@/lib/convertToWebp";
import { resizeImage } from "@/lib/resizeImage";
import { formatBytes } from "@/lib/calculateCompressionStats";

export function SingleImageConverter() {
    const [file, setFile] = useState<File | null>(null);
    const [quality, setQuality] = useState(90);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [aspectLocked, setAspectLocked] = useState(true);
    const [originalAspect, setOriginalAspect] = useState(0);
    const [originalUrl, setOriginalUrl] = useState("");
    const [convertedUrl, setConvertedUrl] = useState("");
    const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
    const [filename, setFilename] = useState("");
    const [stats, setStats] = useState<{ original: number; converted: number }>({ original: 0, converted: 0 });
    const [isConverting, setIsConverting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        return () => {
            if (originalUrl) URL.revokeObjectURL(originalUrl);
            if (convertedUrl) URL.revokeObjectURL(convertedUrl);
        };
    }, [originalUrl, convertedUrl]);

    const loadImage = useCallback((file: File) => {
        setFile(file);
        setConvertedUrl("");
        setConvertedBlob(null);

        const url = URL.createObjectURL(file);
        setOriginalUrl(url);

        const img = new Image();
        const reader = new FileReader();
        reader.onload = (e) => {
            img.onload = () => {
                const ratio = img.width / img.height;
                setOriginalAspect(ratio);
                setWidth(img.width);
                setHeight(img.height);
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }, []);

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            loadImage(selectedFile);
        }
    }, [loadImage]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith("image/")) {
            loadImage(droppedFile);
        }
    }, [loadImage]);

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

    const handleConvert = useCallback(async () => {
        if (!file) return;

        setIsConverting(true);
        try {
            let processedFile = file;

            if (width > 0 || height > 0) {
                const resizedDataUrl = await resizeImage(file, width || 0, height || 0, aspectLocked);
                const response = await fetch(resizedDataUrl);
                const blob = await response.blob();
                processedFile = new File([blob], file.name, { type: file.type });
            }

            const { blob, filename: fname } = await convertToWebp(processedFile, quality);

            if (convertedUrl) URL.revokeObjectURL(convertedUrl);
            const url = URL.createObjectURL(blob);
            setConvertedUrl(url);
            setConvertedBlob(blob);
            setFilename(fname);
            setStats({ original: file.size, converted: blob.size });
        } catch (err) {
            console.error("Conversion failed:", err);
        } finally {
            setIsConverting(false);
        }
    }, [file, quality, width, height, aspectLocked, convertedUrl]);

    const handleDownload = useCallback(() => {
        if (!convertedBlob) return;
        const url = URL.createObjectURL(convertedBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, [convertedBlob, filename]);

    const percentageSaved = stats.original > 0 ? ((stats.original - stats.converted) / stats.original) * 100 : 0;

    return (
        <div className="space-y-6">
            {/* Dropzone */}
            <Card padding="lg">
                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-md p-8 text-center transition-all duration-220 ${isDragging ? "border-accent bg-accent/5 scale-[1.02]" : "border-border hover:border-accent/50"
                        }`}
                >
                    <div className="space-y-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-base font-semibold text-gray-900">Drop image here</p>
                        <p className="text-sm text-softText">or click to browse</p>
                        <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" id="file-input" />
                        <label htmlFor="file-input" className="inline-block px-5 py-2 bg-accent text-white font-medium rounded-md cursor-pointer hover:bg-accent/90 transition-all duration-160">
                            Choose Image
                        </label>
                    </div>
                </div>
            </Card>

            {/* Controls */}
            {file && (
                <Card padding="lg">
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

                        <Button onClick={handleConvert} disabled={isConverting} variant="primary" className="w-full">
                            {isConverting ? "Converting..." : "Convert to WebP"}
                        </Button>
                    </div>
                </Card>
            )}

            {/* Preview & Download */}
            {convertedUrl && (
                <>
                    <Card padding="lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs font-medium text-softText mb-2">Original</p>
                                <div className="bg-background rounded-md overflow-hidden aspect-video">
                                    <img src={originalUrl} alt="Original" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-softText mb-2">WebP</p>
                                <div className="bg-background rounded-md overflow-hidden aspect-video">
                                    <img src={convertedUrl} alt="Converted" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card padding="lg">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center p-3 bg-background rounded-md">
                                <p className="text-xs text-softText mb-1">Original</p>
                                <p className="text-lg font-bold text-gray-900">{formatBytes(stats.original)}</p>
                            </div>
                            <div className="text-center p-3 bg-background rounded-md">
                                <p className="text-xs text-softText mb-1">WebP</p>
                                <p className="text-lg font-bold text-accent">{formatBytes(stats.converted)}</p>
                            </div>
                            <div className="text-center p-3 bg-accent/10 rounded-md">
                                <p className="text-xs text-softText mb-1">Saved</p>
                                <p className="text-lg font-bold text-accent">{percentageSaved.toFixed(1)}%</p>
                            </div>
                        </div>
                        <Button onClick={handleDownload} variant="primary" className="w-full">Download WebP</Button>
                    </Card>
                </>
            )}
        </div>
    );
}
