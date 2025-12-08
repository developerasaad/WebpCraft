import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "WebpCraft Features - Complete WebP Converter Feature List | Privacy & Performance",
    description: "Explore all WebpCraft features: Bulk conversion, quality control, image resizing, offline mode, real-time preview, and 100% privacy protection.",
    keywords: [
        "webpcraft features",
        "webp converter features",
        "bulk image conversion",
        "image quality control",
        "offline image converter",
        "real-time image preview",
        "image resizing tool",
        "privacy first converter",
        "no limit image converter",
        "client side image processing",
        "webp optimization features",
        "free image converter capabilities"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app/features",
    },
    openGraph: {
        title: "WebpCraft Features - Complete WebP Converter Feature List",
        description: "Explore all WebpCraft features: Bulk conversion, quality control, offline mode, and complete privacy.",
        url: "https://webpcraft.vercel.app/features",
        images: ["/og.png"],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "WebpCraft Features - Powerful WebP Converter",
        description: "Discover all features of the privacy-first WebP converter with bulk conversion and quality control.",
        images: ["/og.png"]
    }
};

export default function FeaturesPage() {
    return (
        <>
            <Section className="pt-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Powerful Features for Image Conversion
                        </h1>
                        <p className="text-lg text-softText">
                            Everything you need to convert images to WebP format, all running
                            securely in your browser.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                100% On-Device Processing
                            </h2>
                            <p className="text-softText mb-4">
                                All image conversion happens directly in your browser using
                                JavaScript and the HTML5 Canvas API. Your images never leave
                                your device, ensuring complete privacy and security.
                            </p>
                            <p className="text-softText">
                                This means you can convert sensitive images without any privacy
                                concerns. No server uploads, no data collection, no tracking.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Batch Conversion
                            </h2>
                            <p className="text-softText mb-4">
                                Convert multiple images at once to save time. Simply select or
                                drag multiple files and convert them all with a single click.
                            </p>
                            <p className="text-softText">
                                Each image is processed individually with your chosen quality
                                settings, and you can download them all together or one by one.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Adjustable Quality
                            </h2>
                            <p className="text-softText mb-4">
                                Fine-tune the compression quality from 1% to 100% to find the
                                perfect balance between file size and image quality.
                            </p>
                            <p className="text-softText">
                                Lower quality settings produce smaller files, while higher
                                settings maintain better visual fidelity. The default 90%
                                quality provides excellent results for most use cases.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Image Resizing
                            </h2>
                            <p className="text-softText mb-4">
                                Resize images while converting to WebP format. Set custom width
                                and height, or use quick presets for common sizes like 1920px,
                                1080px, 800px, and 512px.
                            </p>
                            <p className="text-softText">
                                The aspect ratio lock ensures your images maintain their
                                proportions while resizing. High-quality interpolation keeps
                                your images sharp.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Format Support
                            </h2>
                            <p className="text-softText mb-4">
                                Convert JPG, PNG, GIF, and even WebP images to optimized WebP
                                format. All common image formats are supported.
                            </p>
                            <p className="text-softText">
                                Note: GIF animations are converted to static WebP images using
                                the first frame. For animated output, consider using specialized
                                GIF to animated WebP tools.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Real-Time Preview
                            </h2>
                            <p className="text-softText mb-4">
                                See a side-by-side comparison of your original image and the
                                converted WebP version before downloading.
                            </p>
                            <p className="text-softText">
                                The preview helps you verify the conversion quality and make
                                adjustments if needed.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Compression Statistics
                            </h2>
                            <p className="text-softText mb-4">
                                View detailed statistics showing original file size, WebP file
                                size, and percentage saved. Understand exactly how much space
                                you're saving.
                            </p>
                            <p className="text-softText">
                                WebP typically achieves 25-35% smaller file sizes compared to
                                JPG and PNG while maintaining similar visual quality.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                No Limitations
                            </h2>
                            <p className="text-softText mb-4">
                                Convert unlimited images with no file size restrictions. Since
                                processing happens on your device, there are no server-side
                                limits.
                            </p>
                            <p className="text-softText">
                                The only limitation is your device's processing power and
                                available memory.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Works Offline
                            </h2>
                            <p className="text-softText mb-4">
                                After the initial page load, the converter works completely
                                offline. No internet connection required for image processing.
                            </p>
                            <p className="text-softText">
                                This makes it perfect for use on the go or in environments with
                                limited internet connectivity.
                            </p>
                        </Card>
                    </div>
                </Container>
            </Section>
        </>
    );
}
