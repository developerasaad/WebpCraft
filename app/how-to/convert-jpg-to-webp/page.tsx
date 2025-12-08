import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Convert JPG to WebP - Step by Step Guide",
    description:
        "Learn how to convert JPG images to WebP format online. Simple step-by-step guide with 100% on-device processing for complete privacy and security.",
    openGraph: {
        title: "How to Convert JPG to WebP - Step by Step Guide",
        description:
            "Learn how to convert JPG images to WebP format online with complete privacy.",
        images: ["/og.png"],
    },
};

export default function ConvertJpgToWebpPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Convert JPG to WebP",
        "description": "Follow these simple steps to convert your JPG images to WebP format using WebpCraft's privacy-first on-device converter.",
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
                "name": "Select Your JPG Images",
                "text": "Click the 'Choose Files' button or drag and drop your JPG images directly onto the dropzone. You can select multiple files at once for batch conversion.",
                "position": 1,
                "image": "https://webpcraft.vercel.app/og.png"
            },
            {
                "@type": "HowToStep",
                "name": "Adjust Quality Settings",
                "text": "Use the quality slider to set your desired compression level (1-100%). We recommend 90% for the best balance between file size and image quality.",
                "position": 2
            },
            {
                "@type": "HowToStep",
                "name": "Resize (Optional)",
                "text": "If you want to resize your images, enter custom dimensions or click a preset size. The aspect ratio lock ensures your images don't get distorted.",
                "position": 3
            },
            {
                "@type": "HowToStep",
                "name": "Convert to WebP",
                "text": "Click the 'Convert to WebP' button. The conversion happens instantly in your browser. You'll see a preview of the converted image and compression statistics.",
                "position": 4
            },
            {
                "@type": "HowToStep",
                "name": "Download Your WebP Files",
                "text": "Click the 'Download' button to save your converted WebP images. If you converted multiple files, use 'Download All' to get them all at once.",
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
                            How to Convert JPG to WebP
                        </h1>
                        <p className="text-lg text-softText mb-8">
                            Follow these simple steps to convert your JPG images to WebP
                            format with optimal compression and quality.
                        </p>

                        <Card padding="lg" className="mb-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Select Your JPG Images
                                        </h2>
                                        <p className="text-softText">
                                            Click the "Choose Files" button or drag and drop your JPG
                                            images directly onto the dropzone. You can select multiple
                                            files at once for batch conversion.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Adjust Quality Settings
                                        </h2>
                                        <p className="text-softText">
                                            Use the quality slider to set your desired compression
                                            level (1-100%). We recommend 90% for the best balance
                                            between file size and image quality. Higher values mean
                                            better quality but larger files.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Resize (Optional)
                                        </h2>
                                        <p className="text-softText">
                                            If you want to resize your images, enter custom
                                            dimensions or click a preset size. The aspect ratio lock
                                            ensures your images don't get distorted.
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
                                            Click the "Convert to WebP" button. The conversion happens
                                            instantly in your browser. You'll see a preview of the
                                            converted image and compression statistics.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        5
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Download Your WebP Files
                                        </h2>
                                        <p className="text-softText">
                                            Click the "Download" button to save your converted WebP
                                            images. If you converted multiple files, use "Download
                                            All" to get them all at once.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card padding="lg" className="mb-8 bg-accent/5 border-2 border-accent">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                🔒 Privacy First
                            </h2>
                            <p className="text-softText">
                                All image conversion happens directly in your browser using
                                JavaScript. Your JPG images are never uploaded to any server.
                                This ensures complete privacy and security for your images.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Related Conversion Guides
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link
                                    href="/how-to/convert-png-to-webp"
                                    className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    <h3 className="font-semibold text-gray-900 mb-2">Convert PNG to WebP</h3>
                                    <p className="text-sm text-softText">Learn how to convert PNG images with transparency to WebP format.</p>
                                </Link>
                                <Link
                                    href="/how-to/convert-gif-to-webp"
                                    className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    <h3 className="font-semibold text-gray-900 mb-2">Convert GIF to WebP</h3>
                                    <p className="text-sm text-softText">Convert animated GIFs to static WebP images for better compression.</p>
                                </Link>
                            </div>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Why Convert JPG to WebP?
                            </h2>
                            <ul className="space-y-2 text-softText">
                                <li className="flex items-start space-x-2">
                                    <span className="text-accent">•</span>
                                    <span><strong>25-35% smaller file sizes</strong> compared to JPG at same quality</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-accent">•</span>
                                    <span><strong>Faster website loading</strong> and improved Core Web Vitals</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-accent">•</span>
                                    <span><strong>Better SEO rankings</strong> due to improved page speed</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-accent">•</span>
                                    <span><strong>Reduced bandwidth costs</strong> for high-traffic websites</span>
                                </li>
                            </ul>
                        </Card>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/"
                                className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-160"
                            >
                                Start Converting JPG to WebP
                            </Link>
                            <Link
                                href="/bulk"
                                className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                            >
                                Bulk Convert Multiple Images
                            </Link>
                            <Link
                                href="/features"
                                className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                            >
                                View All Features
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
