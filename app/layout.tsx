import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://webpcraft.vercel.app"),
    title: {
        default: "WebpCraft - Professional WebP Converter | Privacy-First & Free",
        template: "%s | WebpCraft",
    },
    description:
        "Convert JPG, PNG, and GIF images to WebP format instantly. WebpCraft offers 100% on-device processing, unlimited bulk conversion, and complete privacy. Free forever.",
    keywords: [
        "webp converter",
        "convert to webp",
        "jpg to webp",
        "png to webp",
        "bulk image converter",
        "privacy first converter",
        "offline converter"
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
        title: "WebpCraft - Professional WebP Converter | Open Source",
        description:
            "Convert JPG, PNG, and GIF to WebP instantly. 100% on-device processing, unlimited bulk conversion, and complete privacy. Open source project by developerasaad.",
        siteName: "WebpCraft",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "WebpCraft - Professional WebP Converter by developerasaad",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WebpCraft - Professional WebP Converter | Open Source",
        description:
            "Convert JPG, PNG, and GIF to WebP instantly. 100% on-device processing and complete privacy. Open source by developerasaad.",
        images: ["/og.png"],
        creator: "@developerasaad",
    },
    icons: {
        icon: "/logo.ico",
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
    return (
        <html lang="en">
            <body className={inter.className}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "WebpCraft",
                            "url": "https://webpcraft.vercel.app",
                            "logo": "https://webpcraft.vercel.app/logo.png",
                            "description": "Professional WebP image converter with privacy-first on-device processing. Open source project by developerasaad.",
                            "founder": {
                                "@type": "Person",
                                "name": "developerasaad",
                                "url": "https://github.com/developerasaad"
                            },
                            "sameAs": [
                                "https://github.com/developerasaad/WebpCraft",
                                "https://twitter.com/developerasaad"
                            ]
                        }),
                    }}
                />
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}