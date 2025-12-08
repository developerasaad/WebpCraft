import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BulkConverter } from "@/components/converter/BulkConverter";
import Link from "next/link";
import type { Metadata } from "next";

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
    return (
        <>
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
