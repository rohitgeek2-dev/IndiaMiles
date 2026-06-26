'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselContextValue {
  scrollRef: React.RefObject<HTMLDivElement>;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollToIndex: (index: number) => void;
  currentIndex: number;
  totalItems: number;
  totalDots: number;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: {
    align?: 'start' | 'center' | 'end';
    loop?: boolean;
    totalDots?: number;
  };
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      opts,
      autoplay = false,
      autoplayInterval = 3000,
      children,
      ...props
    },
    ref,
  ) => {
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);
    const [totalDots, setTotalDots] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const autoplayRef = React.useRef<ReturnType<typeof setInterval> | null>(
      null,
    );

    const scrollPrev = React.useCallback(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount =
          current.clientWidth * (opts?.align === 'center' ? 0.5 : 0.75);
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }, [opts?.align]);

    const scrollNext = React.useCallback(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount =
          current.clientWidth * (opts?.align === 'center' ? 0.5 : 0.75);
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, [opts?.align]);

    const scrollToIndex = React.useCallback((index: number) => {
      if (!scrollRef.current) return;

      const slides = scrollRef.current.querySelectorAll('[role="group"]');

      const slide = slides[index] as HTMLElement;

      if (!slide) return;

      scrollRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth',
      });
    }, []);

    const handleScroll = React.useCallback(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      setCanScrollPrev(scrollLeft > 5);
      setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 5);

      const slides = Array.from(container.querySelectorAll('[role="group"]'));

      if (slides.length === 0) return;

      const slide = slides[0] as HTMLElement;
      const slideWidth = slide.offsetWidth + 24;

      const current = Math.round(container.scrollLeft / slideWidth);

      setCurrentIndex(Math.min(current, totalDots - 1));
    }, [totalDots]);

    React.useEffect(() => {
      const node = scrollRef.current;
      if (node) {
        node.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => node.removeEventListener('scroll', handleScroll);
      }
    }, [handleScroll]);

    React.useEffect(() => {
      if (!scrollRef.current) return;

      const items = scrollRef.current.querySelectorAll('[role="group"]');

      const total = items.length;

      setTotalItems(total);

      const containerWidth = scrollRef.current.clientWidth;

      const firstSlide = items[0] as HTMLElement;

      if (!firstSlide) return;

      const slideWidth = firstSlide.offsetWidth + 24;

      const visibleSlides = Math.round(containerWidth / slideWidth);

      const dots = Math.max(total - visibleSlides + 1, 1);

      setTotalDots(dots);

      setCurrentIndex(0);
    }, [children]);

    React.useEffect(() => {
      if (!autoplay) return;

      autoplayRef.current = setInterval(() => {
        if (document.visibilityState !== 'visible') return;
        if (!scrollRef.current) return;

        const container = scrollRef.current;

        const slide = container.querySelector('[role="group"]') as HTMLElement;

        if (!slide) return;

        const scrollAmount = slide.offsetWidth + 24;

        const maxScroll = container.scrollWidth - container.clientWidth;

        const isAtEnd = container.scrollLeft >= maxScroll - 5;

        if (isAtEnd) {
          if (opts?.loop) {
            container.scrollTo({
              left: 0,
              behavior: 'smooth',
            });
          }
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
          });
        }
      }, autoplayInterval);

      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
      };
    }, [autoplay, autoplayInterval, opts?.loop]);

    return (
      <CarouselContext.Provider
        value={{
          scrollRef,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          scrollToIndex,
          currentIndex,
          totalItems,
          totalDots,
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { scrollRef } = useCarousel();

  return (
    <div
      ref={(node) => {
        scrollRef.current = node;

        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={cn(
        'flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scrollbar scroll-smooth',
        className,
      )}
      {...props}
    />
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex-shrink-0 snap-start', className)}
      role="group"
      aria-roledescription="slide"
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        'absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-6 w-6 text-gray-700" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      className={cn(
        'absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-6 w-6 text-gray-700" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { scrollToIndex, currentIndex, totalDots } = useCarousel();

  if (totalDots === 0) return null;

  return (
    <div
      ref={ref}
      className={cn('flex justify-center gap-2 mt-8', className)}
      role="tablist"
      aria-label="Slide navigation"
      {...props}
    >
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          role="tab"
          aria-selected={index === currentIndex}
          aria-label={`Go to slide ${index + 1}`}
          className={cn(
            'h-2.5 rounded-full cursor-pointer transition-all ease-in-out duration-300',
            index === currentIndex
              ? 'w-8 bg-[#EAC587]'
              : 'w-2.5 bg-gray-300 hover:bg-gray-400',
          )}
          onClick={() => scrollToIndex(index)}
        />
      ))}
    </div>
  );
});
CarouselDots.displayName = 'CarouselDots';

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarousel,
};
