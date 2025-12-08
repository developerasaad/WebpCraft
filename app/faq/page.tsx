import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "WebpCraft FAQ - Common Questions Answered",
    description: "Find answers about WebpCraft's privacy, file support, quality settings, and browser compatibility.",
    alternates: {
        canonical: "https://webpcraft.vercel.app/faq",
    },
    openGraph: {
        title: "WebpCraft FAQ - Common Questions Answered",
        description: "Find answers about WebpCraft's privacy and browser support.",
        url: "https://webpcraft.vercel.app/faq",
        images: ["/og.png"],
    },
};

export default function FAQPage() {
    const faqs = [
        {
            question: "Is my data safe? Are images uploaded to a server?",
            answer:
                "Absolutely safe. All image conversion happens directly in your browser using JavaScript. Your images are never uploaded to any server. Everything is processed locally on your device, ensuring complete privacy and security.",
        },
        {
            question: "What image formats can I convert to WebP?",
            answer:
                "You can convert JPG, PNG, GIF, and even WebP images to optimized WebP format. All common image formats are supported. Note that GIF animations are converted to static WebP images using the first frame.",
        },
        {
            question: "What is the recommended quality setting?",
            answer:
                "We recommend 90% quality as a good balance between file size and image quality. For PNG images with transparency, use 90-95%. For photos and JPG images, 85-90% works well. You can adjust based on your specific needs.",
        },
        {
            question: "Can I convert multiple images at once?",
            answer:
                "Yes! You can select or drag multiple images and convert them all in one batch. Each image is processed with your chosen quality settings, and you can download them individually or all together.",
        },
        {
            question: "Is there a file size limit?",
            answer:
                "Since all processing happens on your device, there are no server-side file size limits. The only limitation is your device's processing power and available memory. Most devices can handle images up to several megabytes easily.",
        },
        {
            question: "Does this work on mobile devices?",
            answer:
                "Yes! The converter works on all modern mobile browsers including Safari (iOS), Chrome, and Firefox (Android). However, very large images may process slower on mobile devices due to hardware limitations.",
        },
        {
            question: "Do I need an internet connection?",
            answer:
                "You only need an internet connection to load the page initially. After that, the converter works completely offline since all processing happens in your browser.",
        },
        {
            question: "What browsers are supported?",
            answer:
                "The converter works on all modern browsers that support the Canvas API and WebP format, including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version of your browser for best results.",
        },
        {
            question: "How much smaller will my files be?",
            answer:
                "WebP typically achieves 25-35% smaller file sizes compared to JPG and PNG while maintaining similar visual quality. The actual savings depend on the image content and quality settings you choose.",
        },
        {
            question: "Can I resize images during conversion?",
            answer:
                "Yes! You can set custom width and height dimensions, or use quick presets like 1920px, 1080px, 800px, or 512px. The aspect ratio lock prevents distortion while resizing.",
        },
        {
            question: "Does WebP support transparency?",
            answer:
                "Yes, WebP fully supports transparency (alpha channel) just like PNG. Your transparent backgrounds and semi-transparent pixels are preserved during conversion.",
        },
        {
            question: "Can I convert animated GIFs to animated WebP?",
            answer:
                "This converter extracts the first frame of animated GIFs and creates a static WebP image. For animated WebP conversion, you'll need specialized software that supports WebP animation encoding.",
        },
        {
            question: "Is this tool free to use?",
            answer:
                "Yes, completely free with no limitations. You can convert unlimited images with no restrictions. There are no hidden fees, subscriptions, or premium tiers.",
        },
        {
            question: "Why should I use WebP instead of JPG or PNG?",
            answer:
                "WebP provides better compression than JPG and PNG, resulting in smaller file sizes and faster web page loading. It supports both lossy and lossless compression, transparency (like PNG), and often achieves 25-35% smaller files with the same quality.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
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
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-softText text-center mb-12">
                            Find answers to common questions about converting images to WebP
                            format.
                        </p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index} padding="lg">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                        {faq.question}
                                    </h2>
                                    <p className="text-softText">{faq.answer}</p>
                                </Card>
                            ))}
                        </div>

                        <Card padding="lg" className="mt-8 bg-accent/5 border-2 border-accent">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                Still have questions?
                            </h2>
                            <p className="text-softText mb-4">
                                If you have other questions about using our WebP converter, feel
                                free to check out our detailed guides or explore the features
                                page for more information.
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    href="/features"
                                    className="inline-block px-4 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-all duration-160"
                                >
                                    View Features
                                </Link>
                                <Link
                                    href="/how-to/convert-jpg-to-webp"
                                    className="inline-block px-4 py-2 bg-card text-softText border border-border font-medium rounded-md hover:bg-gray-50 transition-all duration-160"
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
