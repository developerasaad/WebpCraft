import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F5F5F7",
                card: "#FFFFFF",
                accent: "#6366F1",
                border: "rgba(0,0,0,0.08)",
                softText: "#555",
            },
            borderRadius: {
                xs: "8px",
                sm: "12px",
                md: "16px",
                lg: "24px",
                xl: "32px",
            },
            boxShadow: {
                soft: "0 4px 16px rgba(0,0,0,0.08)",
            },
            transitionDuration: {
                "160": "160ms",
                "220": "220ms",
            },
        },
    },
    plugins: [],
};

export default config;
