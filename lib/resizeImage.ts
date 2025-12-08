/**
 * Resize an image using canvas
 * @param file - The image file to resize
 * @param width - Target width
 * @param height - Target height
 * @param maintainAspectRatio - Whether to maintain aspect ratio
 * @returns Promise resolving to resized image data URL
 */
export async function resizeImage(
    file: File,
    width: number,
    height: number,
    maintainAspectRatio: boolean = true
): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();

            img.onload = () => {
                try {
                    let targetWidth = width;
                    let targetHeight = height;

                    if (maintainAspectRatio) {
                        const aspectRatio = img.width / img.height;

                        if (width && !height) {
                            targetWidth = width;
                            targetHeight = width / aspectRatio;
                        } else if (height && !width) {
                            targetHeight = height;
                            targetWidth = height * aspectRatio;
                        } else if (width && height) {
                            // Fit within bounds
                            if (width / height > aspectRatio) {
                                targetWidth = height * aspectRatio;
                                targetHeight = height;
                            } else {
                                targetWidth = width;
                                targetHeight = width / aspectRatio;
                            }
                        }
                    }

                    // Create canvas
                    const canvas = document.createElement("canvas");
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;

                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        reject(new Error("Could not get canvas context"));
                        return;
                    }

                    // Enable image smoothing for better quality
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = "high";

                    // Draw resized image
                    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

                    // Return data URL
                    const dataUrl = canvas.toDataURL(file.type);
                    resolve(dataUrl);
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
