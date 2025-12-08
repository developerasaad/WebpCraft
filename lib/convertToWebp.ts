/**
 * Convert an image file to WebP format
 * @param file - The image file to convert
 * @param quality - Quality level (0-100)
 * @returns Promise resolving to WebP blob and filename
 */
export async function convertToWebp(
    file: File,
    quality: number = 90
): Promise<{ blob: Blob; filename: string }> {
    return new Promise((resolve, reject) => {
        // Validate file type
        if (!file.type.startsWith("image/")) {
            reject(new Error("File must be an image"));
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();

            img.onload = () => {
                try {
                    // Create canvas
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;

                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        reject(new Error("Could not get canvas context"));
                        return;
                    }

                    // Draw image
                    ctx.drawImage(img, 0, 0);

                    // Convert to WebP
                    canvas.toBlob(
                        (blob) => {
                            if (!blob) {
                                reject(new Error("Conversion failed"));
                                return;
                            }

                            // Generate filename
                            const originalName = file.name.replace(/\.[^/.]+$/, "");
                            const filename = `${originalName}.webp`;

                            resolve({ blob, filename });
                        },
                        "image/webp",
                        quality / 100
                    );
                } catch (error) {
                    reject(error);
                }
            };

            img.onerror = () => {
                reject(new Error("Failed to load image"));
            };

            img.src = e.target?.result as string;
        };

        reader.onerror = () => {
            reject(new Error("Failed to read file"));
        };

        reader.readAsDataURL(file);
    });
}
