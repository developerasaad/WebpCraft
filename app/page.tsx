import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SingleImageConverter } from "@/components/converter/SingleImageConverter";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { Card } from "@/components/ui/Card";
import { AdUnit } from "@/components/ads";
import Link from "next/link";
import type { Metadata } from "next";
import {
    getWebApplicationSchema,
    getHowToSchema,
    getFAQSchema,
    getArticleSchema,
    getBreadcrumbSchema
} from "@/lib/schema";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "WebpCraft - Free Online WebP Converter | 100% Privacy | Open Source",
    description:
        "Convert JPG, PNG, and GIF to WebP format instantly with WebpCraft. 100% on-device processing guarantees your privacy. No file size limits, no uploads, completely free forever. Open source by developerasaad.",
    keywords: [
        "webp converter",
        "convert to webp",
        "jpg to webp",
        "png to webp",
        "open source webp converter",
        "developerasaad webp tool",
        "github webp converter",
        "privacy first converter",
        "client side image processing",
        "bulk webp converter",
        "free webp converter",
        "webp optimization tool",
        "image compression webp",
        "web performance optimization",
        "core web vitals improvement",
        "website speed optimization",
        "image format converter",
        "browser based converter",
        "no upload converter",
        "offline image converter",
        "gif to webp",
        "bulk image converter",
        "privacy first converter",
        "offline converter",
        "free webp converter",
        "online image converter",
        "webp optimization",
        "image compression",
        "reduce image size",
        "web performance",
        "core web vitals",
        "website speed optimization",
        "image format converter",
        "browser based converter",
        "no upload converter",
        "client side image processing"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app",
    },
    openGraph: {
        title: "WebpCraft - Free Online WebP Converter | 100% Privacy | Open Source",
        description:
            "Convert JPG, PNG, and GIF to WebP format instantly. 100% on-device processing, unlimited bulk conversion, and complete privacy. Open source by developerasaad.",
        url: "https://webpcraft.vercel.app",
        images: ["/og.png"],
        type: "website",
        siteName: "WebpCraft"
    },
    twitter: {
        card: "summary_large_image",
        title: "WebpCraft - Free Online WebP Converter | Open Source",
        description:
            "Convert images to WebP instantly with 100% on-device processing. No uploads, no limits, completely free. Open source by developerasaad.",
        images: ["/og.png"],
        creator: "@developerasaad"
    }
};

export default function HomePage() {
    // Generate comprehensive schema graph for homepage
    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            getWebApplicationSchema(),
            getHowToSchema(),
            getFAQSchema(),
            getArticleSchema({
                headline: "Complete Guide to Converting Images to WebP Format",
                description: "Learn how to convert JPG, PNG, and GIF images to WebP format for better web performance and faster loading times.",
                url: "https://webpcraft.vercel.app",
                datePublished: "2024-01-01",
                dateModified: new Date().toISOString().split('T')[0],
                keywords: [
                    "webp conversion guide",
                    "image optimization",
                    "web performance",
                    "webp tutorial"
                ]
            }),
            getBreadcrumbSchema([
                { name: "Home", url: "https://webpcraft.vercel.app" }
            ])
        ]
    };

    return (
        <>
            {/* Comprehensive Schema Graph for Homepage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaGraph),
                }}
            />
            {/* Compact Hero + Converter Section */}
            <Section className="pt-12 pb-8">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Compact Hero */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                                Convert Images to WebP{" "}
                                <span className="text-accent">Instantly</span>
                            </h1>
                            <p className="text-base md:text-lg text-softText mb-3">
                                100% on-device processing • No uploads • Complete privacy
                            </p>

                            {/* Mode Switcher */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Link
                                    href="/"
                                    className="px-4 py-2 bg-accent text-white font-medium rounded-md"
                                >
                                    Single Image
                                </Link>
                                <Link
                                    href="/bulk"
                                    className="px-4 py-2 bg-card text-softText border border-border font-medium rounded-md hover:bg-gray-50 transition-all"
                                >
                                    Bulk Converter →
                                </Link>
                            </div>

                            <p className="text-sm text-accent font-medium">
                                🔒 Your images never leave your device
                            </p>
                        </div>

                        {/* Single Image Converter */}
                        <SingleImageConverter />

                        {/* Trust Signals */}
                        <TrustSignals />

                        {/* Ad Unit - Below Tool Output */}
                        <div className="mt-12">
                            <AdUnit
                                slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_TOOL || ''}
                                format="auto"
                                responsive={true}
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* What is WebpCraft Section - SEO Content */}
            <Section variant="gray" className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            What is WebpCraft?
                        </h2>
                        <div className="prose prose-lg mx-auto text-center">
                            <p className="text-base text-softText mb-4">
                                <strong>WebpCraft</strong> is a professional, privacy-first WebP image converter that runs entirely in your browser. Unlike other converters that upload your images to servers, WebpCraft processes everything on-device using advanced JavaScript and Canvas API technology.
                            </p>
                            <p className="text-base text-softText mb-4">
                                Founded in 2024, WebpCraft was created to solve a critical problem: the need for secure, unlimited image conversion without compromising privacy or paying expensive subscription fees.
                            </p>
                            <p className="text-base text-softText">
                                Our mission is to make modern web image formats accessible to everyone while protecting user privacy and providing enterprise-grade conversion capabilities completely free.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Why WebP Section */}
            <Section className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                            Why WebP? The Future of Web Images
                        </h2>
                        <p className="text-base text-softText text-center mb-8">
                            Google developed WebP to replace JPEG, PNG, and GIF with superior compression and quality
                        </p>
                    </div>
                </Container>
            </Section>

            {/* WebP Benefits Grid */}
            <Section className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-6 h-6 text-accent"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        25-35% Smaller
                                    </h3>
                                    <p className="text-sm text-softText">
                                        Significantly smaller than JPG and PNG at same quality
                                    </p>
                                </div>
                            </Card>

                            <Card>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-6 h-6 text-accent"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Superior Quality
                                    </h3>
                                    <p className="text-sm text-softText">
                                        Advanced compression maintains visual fidelity
                                    </p>
                                </div>
                            </Card>

                            <Card>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-6 h-6 text-accent"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Universal Support
                                    </h3>
                                    <p className="text-sm text-softText">
                                        Works in Chrome, Firefox, Safari, Edge, and more
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Who is this for Section - SEO Content */}
            <Section variant="gray" className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Who is WebpCraft For?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Web Developers & Designers</h3>
                                <p className="text-sm text-softText mb-4">
                                    Optimize website performance by converting images to WebP format. Reduce page load times, improve Core Web Vitals scores, and enhance user experience across all devices.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-commerce Businesses</h3>
                                <p className="text-sm text-softText mb-4">
                                    Faster product images mean higher conversion rates. WebpCraft helps online stores reduce bandwidth costs while maintaining image quality.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Creators & Bloggers</h3>
                                <p className="text-sm text-softText">
                                    Compress images for faster blog loading, social media sharing, and better SEO rankings without sacrificing visual quality.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Marketing Agencies</h3>
                                <p className="text-sm text-softText mb-4">
                                    Batch convert client images for campaigns, landing pages, and social media. Improve ad performance with faster-loading creative assets.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy-Conscious Users</h3>
                                <p className="text-sm text-softText mb-4">
                                    Anyone concerned about data privacy who needs image conversion without uploading sensitive images to third-party servers.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Small Business Owners</h3>
                                <p className="text-sm text-softText">
                                    Professional image optimization without expensive software subscriptions or technical expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* What Problems WebpCraft Solves - SEO Content */}
            <Section className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            What Problems Does WebpCraft Solve?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Privacy Concerns</h3>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Problem:</strong> Traditional online converters require uploading images to third-party servers, creating privacy risks and security vulnerabilities.
                                </p>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Solution:</strong> WebpCraft processes everything locally in your browser. Your images never leave your device, ensuring complete privacy and security.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">💰 Cost & Limitations</h3>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Problem:</strong> Most converters have file size limits, watermarks, or require expensive subscriptions for bulk conversion.
                                </p>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Solution:</strong> Unlimited conversions, no file size limits, no watermarks, and completely free forever.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚡ Speed & Convenience</h3>
                                <p className="text-sm text-softText">
                                    <strong>Problem:</strong> Waiting for uploads, processing delays, and downloading individual files wastes time and bandwidth.
                                </p>
                                <p className="text-sm text-softText">
                                    <strong>Solution:</strong> Instant conversion with bulk processing and ZIP downloads for maximum efficiency.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Website Performance</h3>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Problem:</strong> Large image files slow down websites, hurt SEO rankings, and provide poor user experience.
                                </p>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Solution:</strong> Convert to WebP format to reduce file sizes by 25-35% while maintaining quality, improving Core Web Vitals.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔧 Technical Complexity</h3>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Problem:</strong> Converting images requires technical knowledge, expensive software, or command-line tools.
                                </p>
                                <p className="text-sm text-softText mb-4">
                                    <strong>Solution:</strong> Simple drag-and-drop interface that anyone can use without technical expertise.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Mobile & Offline Access</h3>
                                <p className="text-sm text-softText">
                                    <strong>Problem:</strong> Most converters require internet connection and don't work well on mobile devices.
                                </p>
                                <p className="text-sm text-softText">
                                    <strong>Solution:</strong> Works offline after initial load and is fully responsive for mobile and desktop use.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* How WebpCraft Works - SEO Content */}
            <Section variant="gray" className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            How Does WebpCraft Work?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-accent">1</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Upload Images
                                    </h3>
                                    <p className="text-sm text-softText">
                                        Drag and drop or select JPG, PNG, or GIF files. No registration required.
                                    </p>
                                </div>
                            </Card>

                            <Card>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-accent">2</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Configure Settings
                                    </h3>
                                    <p className="text-sm text-softText">
                                        Adjust quality (1-100%), enable resizing, and preview changes in real-time.
                                    </p>
                                </div>
                            </Card>

                            <Card>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-accent">3</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Download Results
                                    </h3>
                                    <p className="text-sm text-softText">
                                        Get optimized WebP files individually or as a convenient ZIP archive.
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-base text-softText">
                                <strong>Technical Details:</strong> WebpCraft uses the Canvas API and modern JavaScript to convert images directly in your browser.
                                No server processing, no data transmission, just pure client-side optimization using the same technology that powers modern web browsers.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Use Cases & Benefits - SEO Content */}
            <Section className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Real-World Use Cases & Benefits
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 E-commerce Optimization</h3>
                                <p className="text-sm text-softText mb-4">
                                    Online stores using WebpCraft report 30-40% faster product page load times, leading to improved conversion rates and better Google Shopping performance.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">📝 Blog & Content Sites</h3>
                                <p className="text-sm text-softText mb-4">
                                    Content creators reduce bandwidth costs by 25-35% while improving page speed scores, directly impacting SEO rankings and reader engagement.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Design Agencies</h3>
                                <p className="text-sm text-softText mb-4">
                                    Agencies deliver optimized assets to clients faster, reducing project timelines and client hosting costs while maintaining visual quality.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Mobile App Development</h3>
                                <p className="text-sm text-softText mb-4">
                                    App developers reduce APK sizes and improve in-app image loading speeds, leading to better user retention and app store ratings.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏢 Enterprise Websites</h3>
                                <p className="text-sm text-softText mb-4">
                                    Large organizations save significantly on CDN costs and server bandwidth while improving global site performance for international users.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 Educational Platforms</h3>
                                <p className="text-sm text-softText">
                                    Schools and online courses improve learning experiences with faster-loading educational content, especially important for students with limited bandwidth.
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tip</h3>
                            <p className="text-sm text-green-700">
                                Combine WebpCraft with modern image loading techniques like lazy loading and responsive images for maximum website performance gains.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Privacy Section - Compact */}
            <Section className="py-12">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Card padding="lg" className="bg-accent/5 border-2 border-accent">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-6 h-6 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Privacy First, Always
                                </h2>
                                <p className="text-base text-softText mb-6">
                                    All processing happens directly in your browser. Your images
                                    are never uploaded to any server.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <svg
                                            className="w-8 h-8 text-green-500 mx-auto mb-2"
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
                                        <p className="text-sm font-medium text-gray-900">
                                            No Uploads
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <svg
                                            className="w-8 h-8 text-green-500 mx-auto mb-2"
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
                                        <p className="text-sm font-medium text-gray-900">
                                            No Tracking
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <svg
                                            className="w-8 h-8 text-green-500 mx-auto mb-2"
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
                                        <p className="text-sm font-medium text-gray-900">
                                            Works Offline
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <svg
                                            className="w-8 h-8 text-green-500 mx-auto mb-2"
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
                                        <p className="text-sm font-medium text-gray-900">
                                            Open Source
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Explore More - Internal Links for SEO */}
            <Section variant="gray" className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Explore More
                        </h2>
                        <p className="text-base text-softText text-center mb-8">
                            Discover all the features and resources WebpCraft has to offer
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Tools */}
                            <Card padding="lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Tools</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/bulk" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Bulk WebP Converter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            All Features
                                        </Link>
                                    </li>
                                </ul>
                            </Card>

                            {/* Guides */}
                            <Card padding="lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">How-To Guides</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/how-to/convert-jpg-to-webp" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Convert JPG to WebP
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to/convert-png-to-webp" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Convert PNG to WebP
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to/convert-gif-to-webp" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Convert GIF to WebP
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/webp-guide" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Complete WebP Guide
                                        </Link>
                                    </li>
                                </ul>
                            </Card>

                            {/* Resources */}
                            <Card padding="lg">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/faq" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Frequently Asked Questions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            About WebpCraft
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Additional Resources
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="text-softText hover:text-accent transition-colors flex items-center">
                                            <span className="mr-2">→</span>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
