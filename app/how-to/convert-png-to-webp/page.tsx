import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Convert PNG to WebP - Step by Step Guide",
    description:
        "Learn how to convert PNG images to WebP format while preserving transparency. Simple guide with 100% on-device processing for complete privacy.",
    alternates: {
        canonical: "https://webpcraft.vercel.app/how-to/convert-png-to-webp",
    },
    openGraph: {
        title: "How to Convert PNG to WebP - Step by Step Guide",
        description:
            "Learn how to convert PNG images to WebP format while preserving transparency with complete privacy.",
        images: ["/og.png"],
    },
};

export default function ConvertPngToWebpPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Convert PNG to WebP",
        "description": "Learn how to convert PNG images to WebP format while preserving transparency using WebpCraft.",
        "image": "https://webpcraft.vercel.app/og.png",
        "totalTime": "PT1M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "step": [
            {
                "@type": "HowToStep",
                "name": "Upload Your PNG Files",
                "text": "Click 'Choose Files' or drag and drop your PNG images onto the converter. Multiple files can be processed simultaneously.",
                "position": 1,
                "image": "https://webpcraft.vercel.app/og.png"
            },
            {
                "@type": "HowToStep",
                "name": "Configure Quality",
                "text": "Adjust the quality slider to your preference. For PNG images with transparency, we recommend 90-95% quality to preserve fine details and smooth edges.",
                "position": 2
            },
            {
                "@type": "HowToStep",
                "name": "Set Dimensions (Optional)",
                "text": "You can resize your PNG images during conversion. Use the width and height inputs or select a preset size.",
                "position": 3
            },
            {
                "@type": "HowToStep",
                "name": "Convert & Preview",
                "text": "Click 'Convert to WebP' to process your images. The converter preserves transparency automatically. Review the side-by-side comparison.",
                "position": 4
            },
            {
                "@type": "HowToStep",
                "name": "Download WebP Files",
                "text": "Save your converted WebP files by clicking the download button. The WebP format typically reduces PNG file sizes by 25-35%.",
                "position": 5
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Section className="pt-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            How to Convert PNG to WebP
                        </h1>
                        <p className="text-lg text-softText mb-8">
                            Convert your PNG images to WebP format with transparency
                            preservation. WebP provides better compression than PNG while
                            maintaining alpha channel support.
                        </p>

                        <Card padding="lg" className="mb-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Upload Your PNG Files
                                        </h2>
                                        <p className="text-softText">
                                            Click "Choose Files" or drag and drop your PNG images onto
                                            the converter. Multiple files can be processed
                                            simultaneously.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Configure Quality
                                        </h2>
                                        <p className="text-softText">
                                            Adjust the quality slider to your preference. For PNG
                                            images with transparency, we recommend 90-95% quality to
                                            preserve fine details and smooth edges.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Set Dimensions (Optional)
                                        </h2>
                                        <p className="text-softText">
                                            You can resize your PNG images during conversion. Use the
                                            width and height inputs or select a preset size. The
                                            aspect ratio lock prevents distortion.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        4
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Convert & Preview
                                        </h2>
                                        <p className="text-softText">
                                            Click "Convert to WebP" to process your images. The
                                            converter preserves transparency automatically. Review the
                                            side-by-side comparison to verify quality.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        5
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Download WebP Files
                                        </h2>
                                        <p className="text-softText">
                                            Save your converted WebP files by clicking the download
                                            button. The WebP format typically reduces PNG file sizes by
                                            25-35% while maintaining transparency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                💡 Transparency Handling
                            </h2>
                            <p className="text-softText mb-3">
                                WebP fully supports transparency (alpha channel) just like PNG.
                                Your transparent backgrounds and semi-transparent pixels are
                                preserved during conversion.
                            </p>
                            <p className="text-softText">
                                This makes WebP an excellent replacement for PNG images,
                                especially for web graphics, logos, and UI elements that require
                                transparency.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8 bg-accent/5 border-2 border-accent">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                🔒 Privacy Guaranteed
                            </h2>
                            <p className="text-softText">
                                All PNG to WebP conversion happens locally in your browser. Your
                                images are never uploaded to any server, ensuring complete
                                privacy and security.
                            </p>
                        </Card>

                        <div className="flex gap-4">
                            <Link
                                href="/"
                                className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-160"
                            >
                                Start Converting PNG to WebP
                            </Link>
                            <Link
                                href="/how-to/convert-gif-to-webp"
                                className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                            >
                                Convert GIF to WebP →
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
