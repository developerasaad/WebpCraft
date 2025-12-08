import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - WebpCraft | 100% On-Device & Secure",
    description: "WebpCraft's privacy guarantee: Your images never leave your device. No uploads, no cloud processing, no tracking. 100% client-side WebP conversion.",
    alternates: {
        canonical: "https://webpcraft.vercel.app/privacy",
    },
    openGraph: {
        title: "Privacy Policy - WebpCraft | 100% On-Device",
        description:
            "WebpCraft's privacy guarantee: Your images never leave your device. 100% client-side WebP conversion.",
        url: "https://webpcraft.vercel.app/privacy",
        images: ["/og.png"],
    },
};

export default function PrivacyPage() {
    return (
        <>
            <Section className="pt-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            WebpCraft Privacy Policy
                        </h1>
                        <p className="text-lg text-softText mb-12">
                            Your privacy is our top priority. This page explains how we handle
                            your data (or rather, how we don't).
                        </p>

                        <Card padding="lg" className="mb-8 bg-accent/5 border-2 border-accent">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                The Short Version
                            </h2>
                            <p className="text-lg text-softText">
                                We don't collect, store, or transmit any of your images or
                                personal data. All image conversion happens directly in your
                                browser. We have no servers processing your images, no databases
                                storing your files, and no tracking of any kind.
                            </p>
                        </Card>

                        <div className="space-y-8">
                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    How Image Conversion Works
                                </h2>
                                <p className="text-softText mb-4">
                                    When you select an image to convert, it is loaded into your
                                    browser's memory. The conversion happens entirely within your
                                    browser using JavaScript and the HTML5 Canvas API.
                                </p>
                                <p className="text-softText mb-4">
                                    Your images are <strong>never uploaded</strong> to our servers
                                    or any third-party servers. The conversion process is
                                    completely client-side, meaning everything happens on your
                                    device.
                                </p>
                                <p className="text-softText">
                                    Once you close the browser tab, all images are immediately
                                    removed from your browser's memory. We have no way to access
                                    your images because they never leave your device.
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    No Data Collection
                                </h2>
                                <p className="text-softText mb-4">
                                    We do not collect any personal information, usage data, or
                                    analytics. This includes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-softText">
                                    <li>No image files or file metadata</li>
                                    <li>No IP addresses</li>
                                    <li>No browser fingerprinting</li>
                                    <li>No cookies (except essential ones for the website to function)</li>
                                    <li>No analytics or tracking scripts</li>
                                    <li>No third-party advertising or tracking</li>
                                    <li>No user accounts or registration</li>
                                </ul>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Open Source Technology
                                </h2>
                                <p className="text-softText mb-4">
                                    This converter uses standard web technologies that are open
                                    and transparent:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-softText">
                                    <li>
                                        <strong>FileReader API</strong> - Reads files from your
                                        device
                                    </li>
                                    <li>
                                        <strong>Canvas API</strong> - Processes and converts images
                                    </li>
                                    <li>
                                        <strong>Blob API</strong> - Creates downloadable files
                                    </li>
                                </ul>
                                <p className="text-softText mt-4">
                                    All of these technologies run entirely in your browser without
                                    any server communication after the initial page load.
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Works Offline
                                </h2>
                                <p className="text-softText">
                                    After the initial page load, you can disconnect from the
                                    internet and the converter will continue to work. This is proof
                                    that no data is being transmitted to any servers during the
                                    conversion process.
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Third-Party Services
                                </h2>
                                <p className="text-softText mb-4">
                                    We do not use any third-party services for image processing,
                                    analytics, or advertising. The website is hosted on a static
                                    hosting platform and serves only static HTML, CSS, and
                                    JavaScript files.
                                </p>
                                <p className="text-softText">
                                    There are no third-party scripts that could track you or access
                                    your images.
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Your Rights
                                </h2>
                                <p className="text-softText mb-4">
                                    Since we don't collect any data about you, there's no data to
                                    access, modify, or delete. You maintain complete control over
                                    your images at all times.
                                </p>
                                <p className="text-softText">
                                    You can verify that no data is being transmitted by using your
                                    browser's developer tools to monitor network activity during
                                    conversion.
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Updates to This Policy
                                </h2>
                                <p className="text-softText">
                                    If we ever change how we handle data (which would be a
                                    fundamental change to how this tool works), we will update this
                                    privacy policy and clearly announce the changes.
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Questions?
                                </h2>
                                <p className="text-softText">
                                    If you have any questions about this privacy policy or how the
                                    converter works, please check our FAQ page for detailed
                                    technical information.
                                </p>
                            </Card>
                        </div>

                        <div className="mt-8 p-6 bg-green-50 border-2 border-green-300 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                ✅ Privacy Guarantee
                            </h3>
                            <p className="text-softText">
                                We guarantee that your images never leave your device. This is not
                                just a promise—it's how the technology works. Client-side
                                processing means complete privacy by design, not by policy.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
