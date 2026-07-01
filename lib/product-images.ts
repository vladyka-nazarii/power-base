type ProductImageRecord = {
  src?: unknown;
};

function imageUrl(value: unknown) {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    const src = (value as ProductImageRecord).src;
    return typeof src === "string" ? src : null;
  }

  return null;
}

export function getProductImages(
  primaryImage: string,
  specifications: Record<string, unknown> | null,
) {
  const galleries = [
    specifications?.productImages,
    specifications?.allImages,
    specifications?.additionalImages,
  ];
  const galleryImages = galleries.flatMap((gallery) =>
    Array.isArray(gallery)
      ? gallery.map(imageUrl).filter((url): url is string => Boolean(url))
      : [],
  );

  return [...new Set([primaryImage, ...galleryImages])];
}
