import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About WebpCraft - Privacy-First WebP Converter | Our Mission & Story",
    description: "Learn about WebpCraft's mission to provide free, privacy-first image conversion tools. Discover why we built a 100% client-side WebP converter for developers and designers.",
    keywords: [
        "about webpcraft",
        "webp converter mission",
        "privacy first image converter",
        "client side image processing",
        "webp converter story",
        "free image conversion tool",
        "developer made converter",
        "no upload image converter",
        "browser based converter",
        "webp format benefits"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app/about",
    },
    openGraph: {
        title: "About WebpCraft - Privacy-First WebP Converter | Our Mission & Story",
        description: "Learn about our mission to provide free, privacy-first WebP conversion. 100% on-device processing with no uploads.",
        url: "https://webpcraft.vercel.app/about",
        images: ["/og.png"],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "About WebpCraft - Privacy-First WebP Converter",
        description: "Discover the story behind WebpCraft and our commitment to privacy-first image conversion.",
        images: ["/og.png"]
    }
};

export default function AboutPage() {
    return (
        <>
            <Section className="pt-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About WebpCraft
                        </h1>
                        <p className="text-lg text-softText mb-12">
                            A free, privacy-first tool for converting images to WebP format.
                        </p>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-softText mb-4">
                                We created this WebP converter with a simple goal: provide a
                                fast, free, and completely private way to convert images to WebP
                                format.
                            </p>
                            <p className="text-softText mb-4">
                                In an age where privacy is increasingly compromised, we believe
                                tools like this should respect your data. That's why we built a
                                converter that processes everything locally in your browser—no
                                servers, no uploads, no tracking.
                            </p>
                            <p className="text-softText">
                                This is a tool by developers, for developers, designers, and
                                anyone who values both efficiency and privacy.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Why WebP?
                            </h2>
                            <p className="text-softText mb-4">
                                WebP is a modern image format developed by Google that provides
                                superior compression for images on the web. It supports both
                                lossy and lossless compression, as well as transparency and
                                animation.
                            </p>
                            <p className="text-softText mb-4">
                                Compared to older formats like JPG and PNG, WebP typically
                                achieves 25-35% smaller file sizes while maintaining comparable
                                quality. This means faster page loads, reduced bandwidth usage,
                                and better user experience.
                            </p>
                            <p className="text-softText">
                                With support across all modern browsers, WebP has become the
                                go-to format for web images. Our tool makes it easy to convert
                                your existing images to take advantage of these benefits.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                How It Works
                            </h2>
                            <p className="text-softText mb-4">
                                This converter is built entirely with client-side web
                                technologies:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-softText mb-4">
                                <li>
                                    <strong>Next.js</strong> - Modern React framework for the user
                                    interface
                                </li>
                                <li>
                                    <strong>TypeScript</strong> - Type-safe programming for
                                    reliability
                                </li>
                                <li>
                                    <strong>Canvas API</strong> - For image processing and
                                    conversion
                                </li>
                                <li>
                                    <strong>FileReader API</strong> - To read files from your
                                    device
                                </li>
                                <li>
                                    <strong>Tailwind CSS</strong> - For beautiful, responsive
                                    design
                                </li>
                            </ul>
                            <p className="text-softText">
                                The entire application is statically generated, meaning there's
                                no backend server processing your images. Everything runs in your
                                browser, giving you complete control and privacy.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Privacy by Design
                            </h2>
                            <p className="text-softText mb-4">
                                Privacy isn't an afterthought—it's built into the core
                                architecture:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            No Server Processing
                                        </p>
                                        <p className="text-sm text-softText">
                                            All conversion happens in your browser
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            No Data Collection
                                        </p>
                                        <p className="text-sm text-softText">
                                            We don't track, store, or analyze anything
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">Open Source</p>
                                        <p className="text-sm text-softText">
                                            Transparent code you can verify
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Works Offline
                                        </p>
                                        <p className="text-sm text-softText">
                                            No internet required after initial load
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card>

                        <Card padding="lg" className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Free Forever
                            </h2>
                            <p className="text-softText mb-4">
                                This tool is and will always be completely free to use. No hidden
                                costs, no premium tiers, no subscriptions.
                            </p>
                            <p className="text-softText">
                                We believe essential tools like this should be accessible to
                                everyone without barriers.
                            </p>
                        </Card>

                        <Card padding="lg" className="mb-8 bg-accent/5 border-2 border-accent">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Get Started
                            </h2>
                            <p className="text-softText mb-6">
                                Ready to convert your images to WebP? Start using the converter
                                now or learn more with our detailed guides.
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    href="/"
                                    className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 active:scale-95 transition-all duration-160"
                                >
                                    Start Converting
                                </Link>
                                <Link
                                    href="/how-to/convert-jpg-to-webp"
                                    className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                                >
                                    Read Guides
                                </Link>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>
        </>
    );
}
