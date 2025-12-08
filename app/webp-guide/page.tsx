import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Complete WebP Guide - Everything You Need to Know About WebP Format",
    description: "Comprehensive guide to WebP image format: benefits, browser support, conversion methods, optimization tips, and best practices for web developers.",
    keywords: [
        "webp guide",
        "webp format guide",
        "webp benefits",
        "webp browser support",
        "webp vs jpeg",
        "webp optimization",
        "webp best practices",
        "webp compression",
        "webp quality",
        "webp implementation"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app/webp-guide",
    },
    openGraph: {
        title: "Complete WebP Guide - Everything You Need to Know About WebP Format",
        description: "Master WebP format with our comprehensive guide covering benefits, browser support, and optimization techniques.",
        url: "https://webpcraft.vercel.app/webp-guide",
        images: ["/og.png"],
        type: "article"
    },
    twitter: {
        card: "summary_large_image",
        title: "Complete WebP Guide - Everything You Need to Know",
        description: "Master WebP format with our comprehensive guide covering benefits, browser support, and optimization.",
        images: ["/og.png"]
    }
};

export default function WebpGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Complete WebP Guide - Everything You Need to Know About WebP Format",
        "description": "Comprehensive guide to WebP image format covering benefits, browser support, conversion methods, and optimization techniques.",
        "author": {
            "@type": "Organization",
            "name": "WebpCraft Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "WebpCraft"
        },
        "datePublished": "2024-12-08",
        "dateModified": "2024-12-08",
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is WebP format?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WebP is a modern image format developed by Google that provides superior compression compared to JPEG and PNG, typically achieving 25-35% smaller file sizes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which browsers support WebP?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WebP is supported by all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. Internet Explorer does not support WebP."
                    }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Section className="pt-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Complete WebP Guide
                        </h1>
                        <p className="text-xl text-softText mb-12">
                            Everything you need to know about WebP format: benefits, browser support, 
                            conversion methods, and optimization techniques for better web performance.
                        </p>

                        {/* Table of Contents */}
                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                            <nav className="space-y-2">
                                <Link href="#what-is-webp" className="block text-accent hover:underline">What is WebP?</Link>
                                <Link href="#webp-benefits" className="block text-accent hover:underline">WebP Benefits</Link>
                                <Link href="#browser-support" className="block text-accent hover:underline">Browser Support</Link>
                                <Link href="#webp-vs-jpeg" className="block text-accent hover:underline">WebP vs JPEG/PNG</Link>
                                <Link href="#conversion-methods" className="block text-accent hover:underline">Conversion Methods</Link>
                                <Link href="#optimization-tips" className="block text-accent hover:underline">Optimization Tips</Link>
                                <Link href="#best-practices" className="block text-accent hover:underline">Best Practices</Link>
                            </nav>
                        </Card>

                        {/* What is WebP */}
                        <Card padding="lg" className="mb-8" id="what-is-webp">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is WebP?</h2>
                            <p className="text-softText mb-4">
                                WebP is a modern image format developed by Google that provides superior compression 
                                compared to traditional formats like JPEG and PNG. It supports both lossy and lossless 
                                compression, as well as transparency and animation.
                            </p>
                            <p className="text-softText mb-4">
                                Released in 2010, WebP was designed specifically for the web to address the growing 
                                need for faster-loading websites and better bandwidth efficiency. The format uses 
                                advanced compression algorithms based on VP8 video coding and WebM video container.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-blue-800 font-semibold">Key Fact:</p>
                                <p className="text-blue-700">WebP typically achieves 25-35% smaller file sizes compared to JPEG and PNG while maintaining similar visual quality.</p>
                            </div>
                        </Card>
                        </div>

                        {/* WebP Benefits */}
                        <div id="webp-benefits">
                            <Card padding="lg" className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">WebP Benefits</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Performance Benefits</h3>
                                    <ul className="space-y-2 text-softText">
                                        <li>• Smaller file sizes (25-35% reduction)</li>
                                        <li>• Faster page load times</li>
                                        <li>• Improved Core Web Vitals</li>
                                        <li>• Reduced bandwidth usage</li>
                                        <li>• Better user experience</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🎨 Quality Benefits</h3>
                                    <ul className="space-y-2 text-softText">
                                        <li>• Superior compression efficiency</li>
                                        <li>• Lossless and lossy compression</li>
                                        <li>• Alpha channel support (transparency)</li>
                                        <li>• Animation support</li>
                                        <li>• Color profile preservation</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        {/* Browser Support */}
                        <Card padding="lg" className="mb-8" id="browser-support">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browser Support</h2>
                            <p className="text-softText mb-4">
                                WebP has excellent browser support across all modern browsers:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Chrome 23+ (2012)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Firefox 65+ (2019)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Safari 14+ (2020)</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Edge 18+ (2018)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-500">✓</span>
                                        <span>Opera 12.1+ (2012)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-red-500">✗</span>
                                        <span>Internet Explorer (not supported)</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Related Guides */}
                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Conversion Guides
                            </h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link
                                    href="/how-to/convert-jpg-to-webp"
                                    className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    <h3 className="font-semibold text-gray-900 mb-2">JPG to WebP</h3>
                                    <p className="text-sm text-softText">Convert JPEG photos to WebP format</p>
                                </Link>
                                <Link
                                    href="/how-to/convert-png-to-webp"
                                    className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    <h3 className="font-semibold text-gray-900 mb-2">PNG to WebP</h3>
                                    <p className="text-sm text-softText">Convert PNG images with transparency</p>
                                </Link>
                                <Link
                                    href="/how-to/convert-gif-to-webp"
                                    className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    <h3 className="font-semibold text-gray-900 mb-2">GIF to WebP</h3>
                                    <p className="text-sm text-softText">Convert animated GIFs to WebP</p>
                                </Link>
                            </div>
                        </Card>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/"
                                className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-160"
                            >
                                Start Converting Images
                            </Link>
                            <Link
                                href="/features"
                                className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                            >
                                View Features
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
