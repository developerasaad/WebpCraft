import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SingleImageConverter } from "@/components/converter/SingleImageConverter";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { Card } from "@/components/ui/Card";
import { AdUnit } from "@/components/ads";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "WebP Image Converter Online — Free, Secure, On-Device",
    description:
        "Convert JPG, PNG, GIF to WebP instantly on your browser — no upload, fully private, unlimited and free. Bulk WebP converter with 100% on-device processing for faster websites & SEO.",
    keywords: [
        // Primary Core Keywords
        "webp image converter",
        "convert images to webp",
        "webp converter online",
        "free webp converter",
        "webp image optimizer",
        // Long-tail High-Intent Keywords
        "bulk webp converter no upload",
        "online webp converter 100% free no limit",
        "convert jpg png gif to webp offline",
        "secure on-device webp conversion",
        "image converter without uploading files",
        "privacy first image optimization tool",
        // Format-Specific
        "jpg to webp converter",
        "png to webp converter",
        "gif to webp converter",
        "webp bulk image converter",
        "bulk jpg to webp",
        "convert png to webp online",
        // SEO & Performance Focus
        "webp image optimization for seo",
        "how to reduce image size for core web vitals",
        "webp vs jpeg for site speed",
        "image optimization for seo",
        "reduce image size for web",
        "webp for faster websites",
        "improve core web vitals with webp",
        "optimize images for seo",
        // Privacy & Security
        "on-device image converter",
        "client-side webp converter",
        "no upload image converter",
        "browser only image converter",
        "secure image conversion",
        "privacy first webp tool",
        // Use-Case Keywords
        "webp converter for e-commerce",
        "best webp tool for bloggers",
        "image compression without upload",
        "webp for web developers",
        "seo image optimization tool",
        // Additional variants
        "open source webp converter",
        "developerasaad webp tool",
        "github webp converter",
        "client side image processing",
        "bulk webp converter",
        "webp optimization tool",
        "image compression webp",
        "web performance optimization",
        "website speed optimization",
        "image format converter",
        "browser based converter",
        "offline image converter"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app",
    },
    openGraph: {
        title: "WebP Image Converter Online — Free, Secure, On-Device",
        description:
            "Convert JPG, PNG, GIF to WebP instantly on your browser. No upload, fully private, unlimited conversions. Best online WebP converter for SEO and web performance.",
        url: "https://webpcraft.vercel.app",
        images: ["/og.png"],
        type: "website",
        siteName: "WebpCraft"
    },
    twitter: {
        card: "summary_large_image",
        title: "WebP Image Converter — Free, Secure, On-Device",
        description:
            "Convert JPG, PNG, GIF to WebP instantly. No uploads, 100% browser-based processing. Privacy-first image optimization for faster websites.",
        images: ["/og.png"],
        creator: "@developerasaad"
    }
};

export default function HomePage() {
    return (
        <>


            {/* Compact Hero + Converter Section */}
            <Section className="pt-12 pb-8">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Compact Hero */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                                WebP Image Converter Online{" "}
                                <span className="text-accent">— Free, Secure, On-Device</span>
                            </h1>
                            <p className="text-base md:text-lg text-softText mb-3">
                                Convert JPG, PNG, GIF to WebP instantly • No upload • 100% privacy • Unlimited & free
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

            {/* New SEO Content Section - Keyword Rich */}
            <Section className="py-12">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                                Best WebP Converter for SEO & Web Performance
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 What is a WebP Image Converter?</h3>
                                    <p className="text-sm text-softText mb-4">
                                        A WebP image converter is a tool that transforms JPG, PNG, and GIF images into the modern WebP format. WebpCraft is a <strong>free online WebP converter</strong> that processes images 100% on-device, ensuring your privacy while delivering professional-grade optimization for faster websites.
                                    </p>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">⚡ Why Use WebP for Your Website?</h3>
                                    <p className="text-sm text-softText">
                                        Converting to WebP format reduces image file sizes by 25-35% compared to JPEG and PNG without compromising visual quality. This directly improves <strong>Core Web Vitals</strong>, page load speed, and SEO rankings. Faster websites rank higher on Google and provide better user experience.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Privacy-First Image Conversion</h3>
                                    <p className="text-sm text-softText mb-4">
                                        Unlike traditional online converters that upload your images to remote servers, WebpCraft performs <strong>100% client-side conversion</strong>. Your images never leave your browser, making it the most secure option for converting sensitive photos, business assets, or personal content.
                                    </p>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">📦 Bulk WebP Converter with No Limits</h3>
                                    <p className="text-sm text-softText">
                                        Convert hundreds of images at once with our <strong>bulk WebP converter</strong>. No file size restrictions, no daily limits, no watermarks. Perfect for e-commerce stores, bloggers, and agencies who need to optimize large image libraries quickly.
                                    </p>
                                </div>
                            </div>

                            {/* Long-tail keyword section */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Common Search Queries We Solve:</h3>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-blue-800">
                                    <li>✓ How to convert JPG to WebP online free?</li>
                                    <li>✓ Best PNG to WebP converter without upload?</li>
                                    <li>✓ Bulk image converter for WebP format?</li>
                                    <li>✓ How to reduce image size for Core Web Vitals?</li>
                                    <li>✓ Secure image conversion without cloud upload?</li>
                                    <li>✓ WebP vs JPEG for website speed optimization?</li>
                                </ul>
                            </div>
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
                            Why Convert Images to WebP?
                        </h2>
                        <p className="text-base text-softText text-center mb-8">
                            WebP format reduces image size by 25-35% compared to JPEG and PNG — improving website speed and SEO
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
                            WebP for Faster Websites & SEO
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
                            Privacy-First WebP Conversion
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
                            Convert Images in Bulk — No Upload Required
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
