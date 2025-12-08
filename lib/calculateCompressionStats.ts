/**
 * Calculate compression statistics
 * @param originalSize - Original file size in bytes
 * @param compressedSize - Compressed file size in bytes
 * @returns Statistics object with formatted sizes and percentage saved
 */
export function calculateCompressionStats(
    originalSize: number,
    compressedSize: number
): {
    originalSizeFormatted: string;
    compressedSizeFormatted: string;
    percentageSaved: number;
    percentageSavedFormatted: string;
} {
    const percentageSaved =
        originalSize > 0
            ? ((originalSize - compressedSize) / originalSize) * 100
            : 0;

    return {
        originalSizeFormatted: formatBytes(originalSize),
        compressedSizeFormatted: formatBytes(compressedSize),
        percentageSaved,
        percentageSavedFormatted: `${percentageSaved.toFixed(1)}%`,
    };
}

/**
 * Format bytes to human-readable string
 * @param bytes - Number of bytes
 * @param decimals - Number of decimal places
 * @returns Formatted string (e.g., "1.5 MB")
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
