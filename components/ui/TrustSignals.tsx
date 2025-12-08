import { Card } from "@/components/ui/Card";

export function TrustSignals() {
    return (
        <div className="grid grid-cols-2 gap-4 my-8">
            <Card className="bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-2xl font-bold text-accent mb-1">100%</span>
                <span className="text-xs text-softText font-medium uppercase tracking-wider">Privacy Secured</span>
            </Card>
            <Card className="bg-gray-50 border border-gray-100 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-2xl font-bold text-accent mb-1">0s</span>
                <span className="text-xs text-softText font-medium uppercase tracking-wider">Upload Wait Time</span>
            </Card>
        </div>
    );
}
