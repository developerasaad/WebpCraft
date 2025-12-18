import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Convert GIF to WebP - Step by Step Guide",
    description:
        "Learn how to convert GIF images to WebP format. Extract the first frame and convert to optimized static WebP with 100% on-device processing.",
    alternates: {
        canonical: "https://webpcraft.vercel.app/how-to/convert-gif-to-webp",
    },
    openGraph: {
        title: "How to Convert GIF to WebP - Step by Step Guide",
        description:
            "Learn how to convert GIF images to WebP format with complete privacy and security.",
        images: ["/og.png"],
    },
};

export default function ConvertGifToWebpPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Convert GIF to WebP",
        "description": "Learn how to convert GIF images to WebP format. Extract the first frame and convert to optimized static WebP.",
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
                "name": "Select Your GIF Files",
                "text": "Upload your GIF files by clicking 'Choose Files' or dragging them onto the dropzone. Both animated and static GIFs are supported.",
                "position": 1,
                "image": "https://webpcraft.vercel.app/og.png"
            },
            {
                "@type": "HowToStep",
                "name": "Adjust Compression Quality",
                "text": "Use the quality slider to set your preferred compression level. Higher quality (85-95%) is recommended for GIF conversions.",
                "position": 2
            },
            {
                "@type": "HowToStep",
                "name": "Resize if Needed",
                "text": "Optionally resize your GIF during conversion. Enter custom dimensions or use preset sizes like 800px or 512px.",
                "position": 3
            },
            {
                "@type": "HowToStep",
                "name": "Convert to WebP",
                "text": "Click the conversion button. The first frame of your GIF will be extracted and converted to WebP format.",
                "position": 4
            },
            {
                "@type": "HowToStep",
                "name": "Download Static WebP",
                "text": "Download your converted WebP image. The file will be significantly smaller than the original GIF.",
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
                            How to Convert GIF to WebP
                        </h1>
                        <p className="text-lg text-softText mb-8">
                            Convert GIF images to static WebP format. This converter extracts
                            the first frame of the GIF and converts it to an optimized WebP
                            image.
                        </p>

                        <Card padding="lg" className="mb-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Select Your GIF Files
                                        </h2>
                                        <p className="text-softText">
                                            Upload your GIF files by clicking "Choose Files" or
                                            dragging them onto the dropzone. Both animated and static
                                            GIFs are supported.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Adjust Compression Quality
                                        </h2>
                                        <p className="text-softText">
                                            Use the quality slider to set your preferred compression
                                            level. Higher quality (85-95%) is recommended for GIF
                                            conversions to maintain visual fidelity.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Resize if Needed
                                        </h2>
                                        <p className="text-softText">
                                            Optionally resize your GIF during conversion. Enter custom
                                            dimensions or use preset sizes like 800px or 512px for web
                                            use.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        4
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Convert to WebP
                                        </h2>
                                        <p className="text-softText">
                                            Click the conversion button. The first frame of your GIF
                                            will be extracted and converted to WebP format. View the
                                            before/after comparison.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        5
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Download Static WebP
                                        </h2>
                                        <p className="text-softText">
                                            Download your converted WebP image. The file will be
                                            significantly smaller than the original GIF while
                                            maintaining high quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card padding="lg" className="mb-8 bg-yellow-50 border-2 border-yellow-300">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                ⚠️ Animation Note
                            </h2>
                            <p className="text-softText mb-3">
                                This converter extracts only the first frame of animated GIFs,
                                creating a static WebP image. The animation is not preserved.
                            </p>
                            <p className="text-softText">
                                If you need to convert animated GIFs to animated WebP files,
                                you'll need specialized software that supports WebP animation
                                encoding.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                💡 Why Convert GIF to WebP?
                            </h2>
                            <p className="text-softText mb-3">
                                WebP offers significantly better compression than GIF for static
                                images. A GIF converted to WebP can be 30-50% smaller while
                                maintaining the same visual quality.
                            </p>
                            <p className="text-softText">
                                This is especially useful for thumbnails, previews, or static
                                graphics that were originally saved as GIFs.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8 bg-accent/5 border-2 border-accent">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                🔒 Privacy First
                            </h2>
                            <p className="text-softText">
                                All GIF to WebP conversion happens in your browser. Your files
                                are never uploaded to any server, ensuring complete privacy and
                                security.
                            </p>
                        </Card>

                        <div className="flex gap-4">
                            <Link
                                href="/"
                                className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-160"
                            >
                                Start Converting GIF to WebP
                            </Link>
                            <Link
                                href="/how-to/convert-jpg-to-webp"
                                className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                            >
                                ← Convert JPG to WebP
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
