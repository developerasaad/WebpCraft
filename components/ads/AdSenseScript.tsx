'use client';

import { useEffect, useState } from 'react';

export function AdSenseScript() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
    const isEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true';

    useEffect(() => {
        // Don't load if AdSense is disabled or client ID is missing or placeholder
        const isPlaceholder = clientId === 'ca-pub-XXXXXXXXXXXXXXXX' || clientId === 'ca-pub-YOUR-ACTUAL-ID-HERE';

        if (!isEnabled || !clientId || isPlaceholder || scriptLoaded) {
            return;
        }

        // Create and inject script manually to avoid Next.js data-nscript attribute
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
        script.async = true;
        script.crossOrigin = 'anonymous';

        script.onload = () => {
            setScriptLoaded(true);
        };

        script.onerror = () => {
            console.warn('AdSense script failed to load');
        };

        document.head.appendChild(script);

        return () => {
            // Cleanup on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [clientId, isEnabled, scriptLoaded]);

    return null;
}
