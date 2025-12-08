import React from "react";
import { Card } from "@/components/ui/Card";

interface ControlsPanelProps {
    children: React.ReactNode;
}

export function ControlsPanel({ children }: ControlsPanelProps) {
    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Conversion Settings
            </h3>
            {children}
        </Card>
    );
}
