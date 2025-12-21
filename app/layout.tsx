import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getOrganizationSchema, getWebSiteSchema, getSoftwareSourceCodeSchema, getWebApplicationSchema, getHowToSchema, getFAQSchema, getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { AdSenseScript } from "@/components/ads";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://webpcraft.vercel.app"),
    title: {
        default: "WebP Image Converter Online — Free, Secure, On-Device | WebpCraft",
        template: "%s | WebpCraft",
    },
    description:
        "Convert JPG, PNG, GIF to WebP instantly on your browser — no upload, fully private, unlimited and free. Bulk WebP converter with on-device processing for faster websites & SEO.",
    keywords: [
        // Core Service Keywords
        "webp image converter",
        "convert images to webp",
        "webp converter online",
        "webp bulk image converter",
        "webp converter free",
        "webp image optimizer",
        // Privacy & Processing Keywords  
        "on-device image converter",
        "client-side webp converter",
        "no upload image converter",
        "browser only image converter",
        "secure image conversion",
        "privacy first webp tool",
        // Format-Specific Conversion
        "jpg to webp converter",
        "png to webp converter",
        "gif to webp converter",
        "webp batch conversion",
        "bulk jpg to webp",
        "convert png to webp online",
        // SEO & Performance Keywords
        "image optimization for seo",
        "reduce image size for web",
        "webp for faster websites",
        "improve core web vitals with webp",
        "optimize images for seo",
        // Use-Case Keywords
        "webp converter for e-commerce",
        "best webp tool for bloggers",
        "image compression without upload",
        "webp for web developers",
        "seo image optimization tool"
    ],
    authors: [{ name: "developerasaad", url: "https://github.com/developerasaad" }],
    creator: "developerasaad",
    publisher: "developerasaad",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google48d66446e78d0313.html",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://webpcraft.vercel.app",
        title: "WebP Image Converter Online — Free, Secure, On-Device",
        description:
            "Convert JPG, PNG, GIF to WebP instantly on your browser. No upload, fully private, unlimited conversions. Best online WebP converter for SEO and web performance.",
        siteName: "WebpCraft",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "WebpCraft - Privacy-First WebP Image Converter for Faster Websites",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WebP Image Converter — Free, Secure, On-Device",
        description:
            "Convert JPG, PNG, GIF to WebP instantly. No uploads, 100% browser-based processing. Privacy-first image optimization for faster websites.",
        images: ["/og.png"],
        creator: "@developerasaad",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Generate comprehensive schema graph for global context
    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            getOrganizationSchema(),
            getWebSiteSchema(),
            getSoftwareSourceCodeSchema(),
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
        <html lang="en">
            <head>
                {/* Global Schema - Organization, WebSite, and Open Source */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaGraph),
                    }}
                />
            </head>
            <body className={inter.className}>

                {/* Google AdSense */}
                <AdSenseScript />
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}