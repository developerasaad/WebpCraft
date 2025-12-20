import Link from "next/link";
import { Container } from "./Container";
import { AdUnit } from "@/components/ads";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-accent to-indigo-600 rounded-md group-hover:scale-110 transition-transform duration-200"></div>
                            <span className="text-lg font-bold text-gray-900">
                                WebpCraft
                            </span>
                        </Link>
                        <p className="text-sm text-softText">
                            Craft perfect WebP images instantly on your device. Privacy-first, secure, and free forever.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/bulk"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    Bulk Converter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* How-To Guides */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Guides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/how-to/convert-jpg-to-webp"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    JPG to WebP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-to/convert-png-to-webp"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    PNG to WebP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/how-to/convert-gif-to-webp"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    GIF to WebP
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-softText hover:text-accent transition-colors duration-160"
                                >
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ad Unit - Footer */}
                <div className="mt-12">
                    <AdUnit
                        slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || ''}
                        format="auto"
                        className="mb-8"
                    />
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-softText text-center">
                        © 2024 WebpCraft. Crafted with ❤️ for performance and privacy.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
