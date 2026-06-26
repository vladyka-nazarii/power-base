"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

type ProductImageGalleryProps = {
  alt: string;
  images: string[];
};

type CarouselSurface = "gallery" | "lightbox";
type GestureIntent = "pending" | "horizontal" | "vertical";

export default function ProductImageGallery({
  alt,
  images,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchSurface = useRef<CarouselSurface | null>(null);
  const gestureIntent = useRef<GestureIntent>("pending");
  const suppressOpen = useRef(false);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lightboxHistoryPushed = useRef(false);
  const hasMultipleImages = images.length > 1;

  const setCarouselIndex = useCallback(
    (index: number) => {
      if (images.length === 0) return;

      setActiveIndex((index + images.length) % images.length);
    },
    [images.length],
  );

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % images.length);
  }, [images.length]);

  const handleTouchStart = useCallback(
    (surface: CarouselSurface, event: TouchEvent<HTMLElement>) => {
      const touch = event.touches[0];
      if (!touch) return;

      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
      touchSurface.current = surface;
      gestureIntent.current = "pending";
      setDragOffset(0);
      setIsDragging(hasMultipleImages);
      suppressOpen.current = false;
    },
    [hasMultipleImages],
  );

  const handleTouchMove = useCallback(
    (surface: CarouselSurface, event: TouchEvent<HTMLElement>) => {
      if (!hasMultipleImages || touchSurface.current !== surface) return;

      const touch = event.touches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartX.current;
      const deltaY = touch.clientY - touchStartY.current;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (gestureIntent.current === "pending" && Math.max(absX, absY) > 8) {
        gestureIntent.current = absX > absY * 1.2 ? "horizontal" : "vertical";
      }

      if (gestureIntent.current !== "horizontal") return;

      event.preventDefault();
      suppressOpen.current = true;
      setDragOffset(deltaX);
    },
    [hasMultipleImages],
  );

  const handleTouchEnd = useCallback(
    (surface: CarouselSurface, event: TouchEvent<HTMLElement>) => {
      if (!hasMultipleImages || touchSurface.current !== surface) {
        setIsDragging(false);
        setDragOffset(0);
        return;
      }

      const touch = event.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartX.current;
      const deltaY = touch.clientY - touchStartY.current;
      const swipeThreshold = Math.max(
        48,
        event.currentTarget.getBoundingClientRect().width * 0.16,
      );
      const isHorizontalSwipe =
        Math.abs(deltaX) > swipeThreshold &&
        Math.abs(deltaX) > Math.abs(deltaY) * 1.2;

      if (isHorizontalSwipe) {
        suppressOpen.current = true;
        if (deltaX > 0) {
          showPrevious();
        } else {
          showNext();
        }
      }

      touchSurface.current = null;
      gestureIntent.current = "pending";
      setIsDragging(false);
      setDragOffset(0);
    },
    [hasMultipleImages, showNext, showPrevious],
  );

  const openLightbox = useCallback(() => {
    if (suppressOpen.current) {
      suppressOpen.current = false;
      return;
    }

    if (!lightboxHistoryPushed.current) {
      const currentState = window.history.state;
      const nextState =
        currentState && typeof currentState === "object"
          ? { ...currentState, powerBaseProductLightbox: true }
          : { powerBaseProductLightbox: true };

      window.history.pushState(nextState, "", window.location.href);
      lightboxHistoryPushed.current = true;
    }

    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    if (lightboxHistoryPushed.current) {
      window.history.back();
      return;
    }

    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft" && hasMultipleImages) showPrevious();
      if (event.key === "ArrowRight" && hasMultipleImages) showNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeLightbox, hasMultipleImages, isOpen, showNext, showPrevious]);

  useEffect(() => {
    function onPopState(event: PopStateEvent) {
      const state = event.state as {
        powerBaseProductLightbox?: unknown;
      } | null;

      if (state?.powerBaseProductLightbox) {
        lightboxHistoryPushed.current = true;
        setIsOpen(true);
        return;
      }

      if (isOpen || lightboxHistoryPushed.current) {
        lightboxHistoryPushed.current = false;
        setIsOpen(false);
      }
    }

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!hasMultipleImages) return;

    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [activeIndex, hasMultipleImages]);

  useEffect(() => {
    if (activeIndex >= images.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, images.length]);

  const carouselTransform = `translate3d(calc(${-activeIndex * 100}% + ${dragOffset}px), 0, 0)`;

  function renderCarouselImages(surface: CarouselSurface) {
    const imagePadding = surface === "gallery" ? "p-8" : "p-6 sm:p-12";
    const imageSizes =
      surface === "gallery"
        ? "(min-width: 1600px) 760px, (min-width: 1024px) 55vw, 100vw"
        : "100vw";

    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`flex h-full ${
            isDragging
              ? ""
              : "transition-transform duration-300 ease-out motion-reduce:transition-none"
          }`}
          style={{ transform: carouselTransform }}
        >
          {images.map((image, index) => (
            <div
              key={`${surface}-${image}`}
              className={`relative h-full min-w-full shrink-0 ${imagePadding}`}
              aria-hidden={activeIndex === index ? undefined : "true"}
            >
              <Image
                src={image}
                alt={
                  activeIndex === index
                    ? `${alt}, image ${index + 1} of ${images.length}`
                    : ""
                }
                fill
                priority={surface === "gallery" && index === 0}
                sizes={imageSizes}
                unoptimized
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-w-0">
        <div className="relative">
          <button
            type="button"
            onClick={openLightbox}
            onTouchStart={(event) => handleTouchStart("gallery", event)}
            onTouchMove={(event) => handleTouchMove("gallery", event)}
            onTouchEnd={(event) => handleTouchEnd("gallery", event)}
            onTouchCancel={(event) => handleTouchEnd("gallery", event)}
            className="group relative flex aspect-[4/3] w-full min-w-0 touch-pan-y cursor-zoom-in items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:border-white/10 dark:bg-zinc-950"
            aria-label={`Open image gallery for ${alt}`}
          >
            {renderCarouselImages("gallery")}
            <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <Expand className="size-3.5" aria-hidden="true" />
              {activeIndex + 1}/{images.length}
            </span>
          </button>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute top-1/2 left-2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-sm ring-1 ring-black/10 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-black/80 dark:text-white dark:ring-white/15 dark:hover:bg-black sm:left-3"
                aria-label="Previous product image"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute top-1/2 right-2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-sm ring-1 ring-black/10 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-black/80 dark:text-white dark:ring-white/15 dark:hover:bg-black sm:right-3"
                aria-label="Next product image"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>

        {hasMultipleImages ? (
          <div
            className="product-thumbnail-strip mt-3 flex gap-2 overflow-x-auto overscroll-x-contain rounded-md pb-2"
            aria-label="Product images"
            role="group"
          >
            {images.map((image, index) => (
              <button
                key={image}
                ref={(element) => {
                  thumbnailRefs.current[index] = element;
                }}
                type="button"
                onClick={() => setCarouselIndex(index)}
                className={`relative size-16 shrink-0 overflow-hidden rounded-md border bg-zinc-50 p-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-zinc-950 ${
                  activeIndex === index
                    ? "border-black dark:border-white"
                    : "border-black/10 dark:border-white/10"
                }`}
                aria-label={`Show image ${index + 1} of ${images.length}`}
                aria-current={activeIndex === index ? "true" : undefined}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="64px"
                  unoptimized
                  className="object-contain p-1.5"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} image gallery`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close image gallery"
          />
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Close image gallery"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-7" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight className="size-7" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <div
            className="relative m-6 flex-1 touch-pan-y sm:m-12"
            onTouchStart={(event) => handleTouchStart("lightbox", event)}
            onTouchMove={(event) => handleTouchMove("lightbox", event)}
            onTouchEnd={(event) => handleTouchEnd("lightbox", event)}
            onTouchCancel={(event) => handleTouchEnd("lightbox", event)}
          >
            {renderCarouselImages("lightbox")}
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
