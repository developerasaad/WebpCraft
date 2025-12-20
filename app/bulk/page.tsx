import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BulkConverter } from "@/components/converter/BulkConverter";
import Link from "next/link";
import type { Metadata } from "next";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Bulk WebP Converter - Convert Unlimited Images | WebpCraft Batch Tool",
    description:
        "Batch convert multiple images to WebP format with WebpCraft. Queue-based processing for unlimited files, ZIP download, quality control, and 100% privacy protection.",
    keywords: [
        "bulk webp converter",
        "batch image converter",
        "multiple image conversion",
        "unlimited image converter",
        "queue based conversion",
        "bulk webp optimization",
        "batch image processing",
        "mass image converter",
        "webp batch tool",
        "multiple file converter",
        "bulk image compression",
        "batch webp conversion"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app/bulk",
    },
    openGraph: {
        title: "Bulk WebP Converter - Convert Unlimited Images | WebpCraft Batch Tool",
        description:
            "Batch convert multiple images to WebP format. Queue-based processing, ZIP download, and 100% privacy.",
        url: "https://webpcraft.vercel.app/bulk",
        images: ["/og.png"],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Bulk WebP Converter - Convert Unlimited Images",
        description:
            "Batch convert multiple images to WebP with queue-based processing and complete privacy.",
        images: ["/og.png"]
    }
};

export default function BulkPage() {
    // Schema for bulk converter page
    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            getArticleSchema({
                headline: "Bulk WebP Converter - Convert Multiple Images at Once",
                description: "Learn how to batch convert multiple images to WebP format using WebpCraft's bulk converter with queue-based processing.",
                url: "https://webpcraft.vercel.app/bulk",
                datePublished: "2024-01-01",
                dateModified: new Date().toISOString().split('T')[0],
                keywords: [
                    "bulk webp conversion",
                    "batch image processing",
                    "multiple image converter",
                    "queue based conversion"
                ]
            }),
            getBreadcrumbSchema([
                { name: "Home", url: "https://webpcraft.vercel.app" },
                { name: "Bulk Converter", url: "https://webpcraft.vercel.app/bulk" }
            ]),
            {
                "@type": "HowTo",
                "name": "How to Bulk Convert Images to WebP",
                "description": "Step-by-step guide to batch convert multiple images to WebP format",
                "totalTime": "PT5M",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Select Multiple Images",
                        "text": "Drag and drop multiple JPG, PNG, or GIF files into the bulk converter area, or click to select files from your device."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Configure Settings",
                        "text": "Set quality and resize options that will apply to all images. Each image will be processed with these settings."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Monitor Progress",
                        "text": "Watch individual progress bars for each image as they are converted in queue-based processing."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Results",
                        "text": "Download all converted images as a single ZIP file or download individual images as needed."
                    }
                ]
            }
        ]
    };

    return (
        <>
            {/* Schema for Bulk Converter Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaGraph),
                }}
            />
            <Section className="pt-12 pb-8">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                                Bulk Image Converter
                            </h1>
                            <p className="text-base md:text-lg text-softText mb-3">
                                Convert unlimited images with individual progress tracking
                            </p>

                            {/* Mode Switcher */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Link
                                    href="/"
                                    className="px-4 py-2 bg-card text-softText border border-border font-medium rounded-md hover:bg-gray-50 transition-all"
                                >
                                    ← Single Image
                                </Link>
                                <Link
                                    href="/bulk"
                                    className="px-4 py-2 bg-accent text-white font-medium rounded-md"
                                >
                                    Bulk Converter
                                </Link>
                            </div>

                            <p className="text-sm text-accent font-medium">
                                🔒 All images processed locally • No uploads • Complete privacy
                            </p>
                        </div>

                        {/* Bulk Converter */}
                        <BulkConverter />
                    </div>
                </Container>
            </Section>
        </>
    );
}
