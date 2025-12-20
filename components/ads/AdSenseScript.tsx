'use client';

import Script from 'next/script';

export function AdSenseScript() {
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
    const isEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true';

    // Don't render if AdSense is disabled or client ID is missing
    if (!isEnabled || !clientId || clientId === 'ca-pub-XXXXXXXXXXXXXXXX') {
        return null;
    }

    return (
        <Script
            id="adsense-script"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
            onError={(e) => {
                console.warn('AdSense script failed to load:', e);
            }}
        />
    );
}
