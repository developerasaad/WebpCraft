'use client';

import { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
    layout?: string;
    style?: React.CSSProperties;
    className?: string;
    responsive?: boolean;
}

export function AdUnit({
    slot,
    format = 'auto',
    layout,
    style,
    className = '',
    responsive = true,
}: AdUnitProps) {
    // All hooks must be called before any conditional returns
    const adRef = useRef<HTMLModElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [adLoaded, setAdLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
    const isEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true';

    // Mount effect - must be called unconditionally
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Intersection Observer - must be called unconditionally
    useEffect(() => {
        if (!isMounted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isInView) {
                        setIsInView(true);
                    }
                });
            },
            {
                rootMargin: '200px',
                threshold: 0.01,
            }
        );

        if (adRef.current) {
            observer.observe(adRef.current);
        }

        return () => {
            if (adRef.current) {
                observer.unobserve(adRef.current);
            }
        };
    }, [isInView, isMounted]);

    // Ad loading effect - must be called unconditionally
    useEffect(() => {
        if (!isMounted || !isInView || adLoaded || !adRef.current) return;

        try {
            if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
                setAdLoaded(true);
            }
        } catch (error) {
            console.warn('AdSense ad failed to load:', error);
        }
    }, [isInView, adLoaded, isMounted]);

    // NOW we can do conditional returns (after all hooks)
    if (!isEnabled || !clientId || clientId === 'ca-pub-XXXXXXXXXXXXXXXX' || !slot) {
        return null;
    }

    if (!isMounted) {
        return (
            <div
                className={`ad-container ${className}`}
                style={{
                    minHeight: responsive ? '250px' : undefined,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    ...style,
                }}
            />
        );
    }

    return (
        <div
            className={`ad-container ${className}`}
            style={{
                minHeight: responsive ? '250px' : undefined,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                ...style,
            }}
        >
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{
                    display: 'block',
                    minHeight: '250px',
                    width: '100%',
                }}
                data-ad-client={clientId}
                data-ad-slot={slot}
                data-ad-format={format}
                data-ad-layout={layout}
                data-full-width-responsive={responsive ? 'true' : 'false'}
            />
        </div>
    );
}
