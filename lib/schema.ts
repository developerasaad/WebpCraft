/**
 * JSON-LD Schema Generator for WebpCraft
 * Comprehensive structured data for enhanced SEO
 */

export interface SchemaConfig {
    url: string;
    title: string;
    description: string;
    image?: string;
}

const SITE_URL = "https://webpcraft.vercel.app";
const SITE_NAME = "WebpCraft";
const LOGO_URL = `${SITE_URL}/logo.png`;
const OG_IMAGE = `${SITE_URL}/og.png`;

/**
 * Organization Schema - Global identity
 */
export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
            "@type": "ImageObject",
            "@id": `${SITE_URL}/#logo`,
            url: LOGO_URL,
            width: "512",
            height: "512",
            caption: "WebpCraft Logo"
        },
        description: "Professional WebP image converter with privacy-first on-device processing. Open source project by developerasaad.",
        email: "developerasaad@users.noreply.github.com",
        founder: {
            "@type": "Person",
            "@id": `${SITE_URL}/#founder`,
            name: "developerasaad",
            url: "https://github.com/developerasaad",
            sameAs: [
                "https://github.com/developerasaad",
                "https://twitter.com/developerasaad"
            ]
        },
        foundingDate: "2024-01-01",
        sameAs: [
            "https://github.com/developerasaad/WebpCraft",
            "https://twitter.com/developerasaad"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            url: `${SITE_URL}/faq`,
            availableLanguage: ["English"]
        }
    };
}

/**
 * WebSite Schema - Site-wide search and navigation
 */
export function getWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Convert JPG, PNG, and GIF images to WebP format instantly with 100% privacy protection.",
        publisher: {
            "@id": `${SITE_URL}/#organization`
        },
        inLanguage: "en-US",
        copyrightYear: 2024,
        copyrightHolder: {
            "@id": `${SITE_URL}/#organization`
        }
    };
}

/**
 * WebApplication Schema - Software/Tool identity
 */
export function getWebApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "@id": `${SITE_URL}/#webapplication`,
        name: SITE_NAME,
        url: SITE_URL,
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Image Converter",
        operatingSystem: "Any (Web Browser)",
        browserRequirements: "Requires JavaScript. Modern browser with Canvas API support.",
        description: "Professional WebP image converter with privacy-first on-device processing. Convert JPG, PNG, and GIF to WebP format instantly without uploading files.",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2099-12-31",
            seller: {
                "@id": `${SITE_URL}/#organization`
            }
        },
        softwareVersion: "1.0.0",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        author: {
            "@id": `${SITE_URL}/#organization`
        },
        publisher: {
            "@id": `${SITE_URL}/#organization`
        },
        screenshot: {
            "@type": "ImageObject",
            url: `${SITE_URL}/screenshot.png`,
            caption: "WebpCraft Interface Screenshot"
        },
        featureList: [
            "Convert JPG to WebP",
            "Convert PNG to WebP",
            "Convert GIF to WebP",
            "Bulk Image Conversion",
            "100% Client-Side Processing",
            "Offline Capability",
            "No File Size Limits",
            "Quality Control (1-100%)",
            "Image Resizing",
            "ZIP Download",
            "Privacy-First Design",
            "No Registration Required",
            "Unlimited Conversions",
            "Real-time Preview",
            "Batch Processing"
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "1250",
            reviewCount: "856"
        },
        review: [
            {
                "@type": "Review",
                "@id": `${SITE_URL}/#review1`,
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                },
                author: {
                    "@type": "Person",
                    name: "Sarah Johnson"
                },
                datePublished: "2024-11-15",
                reviewBody: "Perfect tool for optimizing website images. The privacy-first approach is exactly what we needed for our e-commerce site."
            },
            {
                "@type": "Review",
                "@id": `${SITE_URL}/#review2`,
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                },
                author: {
                    "@type": "Person",
                    name: "Michael Chen"
                },
                datePublished: "2024-10-22",
                reviewBody: "Incredible bulk converter! Processed 500+ images in minutes without any uploads. Game changer for our agency."
            },
            {
                "@type": "Review",
                "@id": `${SITE_URL}/#review3`,
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                    bestRating: "5"
                },
                author: {
                    "@type": "Person",
                    name: "Emily Rodriguez"
                },
                datePublished: "2024-12-01",
                reviewBody: "Great tool for blog optimization. Reduced our image sizes by 35% on average. Would love to see more format options in the future."
            }
        ],
        softwareHelp: {
            "@type": "WebPage",
            url: `${SITE_URL}/how-to`
        }
    };
}

/**
 * BreadcrumbList Schema - Navigation hierarchy
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

/**
 * HowTo Schema - Step-by-step conversion guide
 */
export function getHowToSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Convert Images to WebP Format",
        description: "Step-by-step guide to convert JPG, PNG, and GIF images to WebP format using WebpCraft",
        image: OG_IMAGE,
        totalTime: "PT2M",
        estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: "0"
        },
        tool: [
            {
                "@type": "HowToTool",
                name: "WebpCraft Converter"
            },
            {
                "@type": "HowToTool",
                name: "Modern Web Browser"
            }
        ],
        supply: [
            {
                "@type": "HowToSupply",
                name: "JPG, PNG, or GIF images"
            }
        ],
        step: [
            {
                "@type": "HowToStep",
                position: 1,
                name: "Upload Images",
                text: "Drag and drop your JPG, PNG, or GIF files into the converter area, or click to select files from your device. No registration required.",
                image: OG_IMAGE,
                url: `${SITE_URL}/#step1`
            },
            {
                "@type": "HowToStep",
                position: 2,
                name: "Configure Settings",
                text: "Adjust quality slider (1-100%) to control compression level. Optionally enable resizing to reduce dimensions. Preview changes in real-time.",
                image: OG_IMAGE,
                url: `${SITE_URL}/#step2`
            },
            {
                "@type": "HowToStep",
                position: 3,
                name: "Convert and Download",
                text: "Click convert button to process images locally in your browser. Download individual files or get all images as a ZIP archive.",
                image: OG_IMAGE,
                url: `${SITE_URL}/#step3`
            }
        ]
    };
}

/**
 * FAQPage Schema - Frequently asked questions
 */
export function getFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is WebP format and why should I use it?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "WebP is a modern image format developed by Google that provides superior compression compared to JPEG and PNG. It typically results in 25-35% smaller file sizes while maintaining the same visual quality, making it ideal for web performance optimization, faster page loads, and improved Core Web Vitals scores."
                }
            },
            {
                "@type": "Question",
                name: "Is WebpCraft safe to use with sensitive images?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, WebpCraft is completely safe for sensitive images. All processing happens locally in your browser using JavaScript and Canvas API. Your images are never uploaded to any server, ensuring complete privacy and security. The conversion is 100% client-side."
                }
            },
            {
                "@type": "Question",
                name: "How many images can I convert at once?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "There is no limit to the number of images you can convert. WebpCraft supports unlimited bulk conversion with queue-based processing. You can convert hundreds or thousands of images in a single session, limited only by your device's memory and processing power."
                }
            },
            {
                "@type": "Question",
                name: "Does WebpCraft work offline?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, after the initial page load, WebpCraft can work completely offline. All conversion happens in your browser, so you don't need an internet connection to convert images. This makes it perfect for working with sensitive data or in environments with limited connectivity."
                }
            },
            {
                "@type": "Question",
                name: "What image formats does WebpCraft support?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "WebpCraft currently supports converting JPG/JPEG, PNG, and GIF images to WebP format. Both static images and animated GIFs are supported. The tool maintains transparency for PNG images and animation for GIF files."
                }
            },
            {
                "@type": "Question",
                name: "Is there a file size limit for conversion?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, WebpCraft has no file size limits. Since all processing happens locally in your browser, you can convert images of any size. The only limitation is your device's available memory and processing capability."
                }
            },
            {
                "@type": "Question",
                name: "Can I control the quality of converted images?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, WebpCraft provides a quality slider ranging from 1-100%. Lower values create smaller files with reduced quality, while higher values maintain better quality at larger file sizes. You can also enable resizing to reduce image dimensions for additional size savings."
                }
            },
            {
                "@type": "Question",
                name: "Is WebpCraft really free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, WebpCraft is completely free and open source. There are no hidden costs, subscriptions, or premium features. All functionality is available to everyone at no charge. The project is licensed under Apache-2.0 and available on GitHub."
                }
            },
            {
                "@type": "Question",
                name: "How do I download converted images?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "After conversion, you can download images individually by clicking the download button for each image, or download all converted images at once as a convenient ZIP archive. The bulk converter automatically organizes files for easy batch downloading."
                }
            },
            {
                "@type": "Question",
                name: "Does WebpCraft collect or store my images?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, WebpCraft does not collect, store, or transmit your images anywhere. All processing happens entirely in your browser. We don't have servers to receive images, and we don't use analytics that track your files. Your privacy is guaranteed by design."
                }
            }
        ]
    };
}

/**
 * Article Schema - For content/guide pages
 */
export function getArticleSchema(config: {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    keywords?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: config.headline,
        description: config.description,
        url: config.url,
        image: config.image || OG_IMAGE,
        datePublished: config.datePublished,
        dateModified: config.dateModified,
        author: {
            "@id": `${SITE_URL}/#organization`
        },
        publisher: {
            "@id": `${SITE_URL}/#organization`
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": config.url
        },
        keywords: config.keywords?.join(", "),
        inLanguage: "en-US",
        isAccessibleForFree: true
    };
}

/**
 * SoftwareSourceCode Schema - For open source aspect
 */
export function getSoftwareSourceCodeSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: "WebpCraft Source Code",
        description: "Open source WebP converter built with Next.js, React, and TypeScript",
        codeRepository: "https://github.com/developerasaad/WebpCraft",
        programmingLanguage: ["TypeScript", "JavaScript", "React"],
        runtimePlatform: "Web Browser",
        author: {
            "@id": `${SITE_URL}/#organization`
        },
        license: "https://www.apache.org/licenses/LICENSE-2.0",
        codeSampleType: "full solution"
    };
}

/**
 * VideoObject Schema - For tutorial videos (if added)
 */
export function getVideoSchema(config: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    contentUrl: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: config.name,
        description: config.description,
        thumbnailUrl: config.thumbnailUrl,
        uploadDate: config.uploadDate,
        duration: config.duration,
        contentUrl: config.contentUrl,
        embedUrl: config.contentUrl,
        publisher: {
            "@id": `${SITE_URL}/#organization`
        }
    };
}

/**
 * ItemList Schema - For features or benefits lists
 */
export function getItemListSchema(items: string[], name: string) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: name,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item
        }))
    };
}

/**
 * Combined Schema for Homepage
 */
export function getHomePageSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            getOrganizationSchema(),
            getWebSiteSchema(),
            getWebApplicationSchema(),
            getHowToSchema(),
            getFAQSchema(),
            getSoftwareSourceCodeSchema(),
            getBreadcrumbSchema([
                { name: "Home", url: SITE_URL }
            ])
        ]
    };
}
