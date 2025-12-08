import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "WebP Resources - Tools, Guides & References for Web Developers",
    description: "Comprehensive collection of WebP resources: browser support data, compression tools, implementation guides, and developer references.",
    keywords: [
        "webp resources",
        "webp tools",
        "webp browser support",
        "webp compression tools",
        "webp implementation guide",
        "webp developer resources",
        "webp references",
        "webp testing tools"
    ],
    alternates: {
        canonical: "https://webpcraft.vercel.app/resources",
    },
    openGraph: {
        title: "WebP Resources - Tools, Guides & References for Web Developers",
        description: "Comprehensive WebP resource collection for developers: tools, guides, browser support data, and implementation references.",
        url: "https://webpcraft.vercel.app/resources",
        images: ["/og.png"],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "WebP Resources - Developer Tools & Guides",
        description: "Complete collection of WebP resources for web developers: tools, guides, and references.",
        images: ["/og.png"]
    }
};

export default function ResourcesPage() {
    return (
        <Section className="pt-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        WebP Resources
                    </h1>
                    <p className="text-xl text-softText mb-12">
                        Comprehensive collection of WebP resources, tools, and references 
                        for web developers and designers.
                    </p>

                    {/* Browser Support Data */}
                    <Card padding="lg" className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Support Data</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-2">Browser</th>
                                        <th className="py-2">Version</th>
                                        <th className="py-2">Release Date</th>
                                        <th className="py-2">Support</th>
                                    </tr>
                                </thead>
                                <tbody className="text-softText">
                                    <tr className="border-b">
                                        <td className="py-2">Chrome</td>
                                        <td className="py-2">23+</td>
                                        <td className="py-2">October 2012</td>
                                        <td className="py-2 text-green-600">✓ Full Support</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">Firefox</td>
                                        <td className="py-2">65+</td>
                                        <td className="py-2">January 2019</td>
                                        <td className="py-2 text-green-600">✓ Full Support</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">Safari</td>
                                        <td className="py-2">14+</td>
                                        <td className="py-2">September 2020</td>
                                        <td className="py-2 text-green-600">✓ Full Support</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2">Edge</td>
                                        <td className="py-2">18+</td>
                                        <td className="py-2">November 2018</td>
                                        <td className="py-2 text-green-600">✓ Full Support</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">Internet Explorer</td>
                                        <td className="py-2">All versions</td>
                                        <td className="py-2">-</td>
                                        <td className="py-2 text-red-600">✗ Not Supported</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* Developer Tools */}
                    <Card padding="lg" className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Developer Tools</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing Tools</h3>
                                <ul className="space-y-2 text-softText">
                                    <li>• WebP support detection</li>
                                    <li>• Image format validation</li>
                                    <li>• Compression quality testing</li>
                                    <li>• Performance benchmarking</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization Tools</h3>
                                <ul className="space-y-2 text-softText">
                                    <li>• Batch conversion utilities</li>
                                    <li>• Quality optimization guides</li>
                                    <li>• Automated conversion scripts</li>
                                    <li>• CDN integration tools</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    {/* Implementation Resources */}
                    <Card padding="lg" className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Resources</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">HTML Implementation</h3>
                                <p className="text-softText mb-2">Use the picture element for progressive enhancement:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}
                                </pre>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">CSS Background Images</h3>
                                <p className="text-softText mb-2">Modern CSS with feature queries:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`.hero {
  background-image: url('image.webp');
}

@supports not (background-image: url('image.webp')) {
  .hero {
    background-image: url('image.jpg');
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </Card>

                    {/* Related Resources */}
                    <Card padding="lg" className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/webp-guide"
                                className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                            >
                                <h3 className="font-semibold text-gray-900 mb-2">WebP Guide</h3>
                                <p className="text-sm text-softText">Complete guide to WebP format and benefits</p>
                            </Link>
                            <Link
                                href="/how-to/convert-jpg-to-webp"
                                className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                            >
                                <h3 className="font-semibold text-gray-900 mb-2">Conversion Guides</h3>
                                <p className="text-sm text-softText">Step-by-step conversion tutorials</p>
                            </Link>
                            <Link
                                href="/features"
                                className="block p-4 border border-border rounded-lg hover:bg-gray-50 transition-all"
                            >
                                <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                                <p className="text-sm text-softText">WebpCraft converter features and capabilities</p>
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
                            href="/webp-guide"
                            className="inline-block px-6 py-3 bg-card text-softText border border-border font-semibold rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-160"
                        >
                            Read WebP Guide
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
