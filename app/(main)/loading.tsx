import { Skeleton } from '@/components/ui/skeleton';

function HeroSectionSkeleton() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07131f]">
      <div className="absolute inset-0 bg-[#07131f]" />
      <div className="container relative mx-auto px-4 pb-20 pt-32 sm:px-6 md:px-8 lg:px-12 lg:pb-24 lg:pt-36">
        <div className="w-full max-w-[860px]">
          <div className="mb-8 flex items-center gap-4">
            <Skeleton className="h-px w-10 bg-white/10" />
            <Skeleton className="h-4 w-56 bg-white/10" />
          </div>
          <Skeleton className="mb-4 h-[clamp(3.5rem,8vw,7rem)] w-full max-w-[820px] bg-white/10" />
          <Skeleton className="mb-4 h-[clamp(3.5rem,8vw,7rem)] w-3/5 bg-white/10" />
          <div className="mt-8 h-px w-14 bg-white/10" />
          <Skeleton className="mt-8 h-7 w-full max-w-[620px] bg-white/10" />
          <Skeleton className="mt-2 h-7 w-4/6 max-w-[480px] bg-white/10" />
          <Skeleton className="mt-10 h-20 w-full max-w-[760px] rounded-[2.25rem] bg-white/8" />
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Skeleton className="h-[60px] w-[200px] rounded-full bg-white/10" />
            <Skeleton className="h-[60px] w-[200px] rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationsSectionSkeleton() {
  return (
    <section className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col items-start gap-4">
          <Skeleton className="h-3 w-24 bg-gray-200" />
          <Skeleton className="h-10 w-72 bg-gray-200" />
          <Skeleton className="h-6 w-96 bg-gray-200" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Skeleton className="aspect-[4/3] w-full rounded-none bg-gray-200" />
              <div className="p-5">
                <Skeleton className="mb-2 h-5 w-3/4 bg-gray-200" />
                <Skeleton className="h-4 w-1/2 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemesSectionSkeleton() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <Skeleton className="h-3 w-28 bg-gray-200" />
          <Skeleton className="h-10 w-64 bg-gray-200" />
          <Skeleton className="h-6 w-80 bg-gray-200" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-[#faf9f6] p-6">
              <Skeleton className="mb-4 h-12 w-12 rounded-full bg-gray-200" />
              <Skeleton className="mb-2 h-6 w-3/4 bg-gray-200" />
              <Skeleton className="mb-1 h-4 w-full bg-gray-200" />
              <Skeleton className="h-4 w-5/6 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonalizedRecsSkeleton() {
  return (
    <section className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-14 text-center">
          <Skeleton className="mx-auto mb-4 h-3 w-28 bg-gray-200" />
          <Skeleton className="mx-auto h-10 w-72 bg-gray-200" />
        </div>
        <div className="mb-12 flex items-center justify-center">
          <Skeleton className="h-11 w-96 rounded-full bg-gray-200" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Skeleton className="h-52 w-full rounded-none bg-gray-200" />
              <div className="space-y-3 p-5">
                <Skeleton className="h-5 w-3/4 bg-gray-200" />
                <Skeleton className="h-3 w-1/2 bg-gray-200" />
                <Skeleton className="h-10 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-4 w-24 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSectionSkeleton() {
  return (
    <section className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <Skeleton className="h-3 w-32 bg-gray-200" />
          <Skeleton className="h-10 w-72 bg-gray-200" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <Skeleton className="mb-1 h-4 w-28 bg-gray-200" />
                  <Skeleton className="h-3 w-20 bg-gray-200" />
                </div>
              </div>
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-4 bg-gray-200" />
                ))}
              </div>
              <Skeleton className="mb-1 h-4 w-full bg-gray-200" />
              <Skeleton className="mb-1 h-4 w-full bg-gray-200" />
              <Skeleton className="h-4 w-3/4 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySectionSkeleton() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col items-start gap-4">
          <Skeleton className="h-3 w-28 bg-gray-200" />
          <Skeleton className="h-10 w-80 bg-gray-200" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-[#faf9f6]">
              <Skeleton className="aspect-[16/10] w-full rounded-none bg-gray-200" />
              <div className="p-6">
                <Skeleton className="mb-3 h-3 w-20 bg-gray-200" />
                <Skeleton className="mb-2 h-6 w-full bg-gray-200" />
                <Skeleton className="mb-1 h-4 w-full bg-gray-200" />
                <Skeleton className="h-4 w-5/6 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestTimeSectionSkeleton() {
  return (
    <section className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <Skeleton className="mb-4 h-3 w-32 bg-gray-200" />
          <Skeleton className="mb-2 h-10 w-96 bg-gray-200" />
          <Skeleton className="h-6 w-80 bg-gray-200" />
        </div>
        <div className="mb-12 flex gap-2 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-11 w-28 shrink-0 rounded-full bg-gray-200" />
          ))}
        </div>
        <Skeleton className="h-64 w-full rounded-2xl bg-gray-200" />
      </div>
    </section>
  );
}

function HotelsSectionSkeleton() {
  return (
    <section className="bg-[#0e1a24] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col items-start gap-4">
          <Skeleton className="h-3 w-32 bg-white/10" />
          <Skeleton className="h-10 w-80 bg-white/10" />
          <Skeleton className="h-6 w-96 bg-white/10" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white/5">
              <Skeleton className="aspect-[4/3] w-full rounded-none bg-white/10" />
              <div className="p-5">
                <Skeleton className="mb-2 h-5 w-3/4 bg-white/10" />
                <Skeleton className="mb-4 h-4 w-1/2 bg-white/10" />
                <Skeleton className="h-10 w-full rounded-lg bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CuratedItinerariesSectionSkeleton() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Skeleton className="mb-4 h-3 w-36 bg-gray-200" />
            <Skeleton className="h-10 w-72 bg-gray-200" />
          </div>
          <Skeleton className="h-11 w-44 rounded-full bg-gray-200" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Skeleton className="h-48 w-full rounded-none bg-gray-200" />
              <div className="p-6">
                <Skeleton className="mb-3 h-3 w-20 bg-gray-200" />
                <div className="mb-4 flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <Skeleton key={j} className="h-8 w-24 rounded-full bg-gray-200" />
                  ))}
                </div>
                <Skeleton className="mb-4 h-5 w-3/4 bg-gray-200" />
                <Skeleton className="h-4 w-32 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DreamJourneySkeleton() {
  return (
    <section className="bg-[#030712] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Skeleton className="mx-auto mb-4 h-3 w-36 bg-white/10" />
            <Skeleton className="mx-auto mb-2 h-10 w-96 bg-white/10" />
            <Skeleton className="mx-auto h-6 w-80 bg-white/10" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <div className="p-8 sm:p-10">
              <div className="mb-10 flex items-center justify-center gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-2xl bg-white/10" />
                    {i < 2 && <Skeleton className="h-0.5 w-16 bg-white/10 sm:w-24" />}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <Skeleton className="mb-4 h-14 w-14 rounded-2xl bg-white/10" />
                    <Skeleton className="mb-2 h-5 w-28 bg-white/10" />
                    <Skeleton className="h-4 w-36 bg-white/10" />
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <Skeleton className="h-5 w-16 bg-white/10" />
                <Skeleton className="h-12 w-44 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FestivalsSectionSkeleton() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <Skeleton className="mb-4 h-3 w-36 bg-gray-200" />
          <Skeleton className="mb-2 h-10 w-80 bg-gray-200" />
          <Skeleton className="h-6 w-96 bg-gray-200" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Skeleton className="h-56 w-full rounded-none bg-gray-200" />
              <div className="space-y-4 p-6">
                <Skeleton className="h-4 w-32 bg-gray-200" />
                <Skeleton className="h-6 w-3/4 bg-gray-200" />
                <Skeleton className="h-4 w-full bg-gray-200" />
                <Skeleton className="h-4 w-2/3 bg-gray-200" />
                <Skeleton className="h-4 w-28 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConciergeSectionSkeleton() {
  return (
    <section className="bg-[#030712] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#071228]/80 to-[#030712]">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-5xl">
              <div className="mb-14 text-center">
                <Skeleton className="mx-auto mb-4 h-3 w-40 bg-white/10" />
                <Skeleton className="mx-auto mb-2 h-10 w-80 bg-white/10" />
                <Skeleton className="mx-auto h-6 w-96 bg-white/10" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="text-center">
                    <Skeleton className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white/10" />
                    <Skeleton className="mx-auto mb-2 h-5 w-32 bg-white/10" />
                    <Skeleton className="mx-auto h-4 w-40 bg-white/10" />
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Skeleton className="h-14 w-52 rounded-full bg-white/10" />
                <Skeleton className="h-14 w-36 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InspirationGallerySkeleton() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <Skeleton className="mb-4 h-3 w-36 bg-gray-200" />
          <Skeleton className="h-10 w-96 bg-gray-200" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl bg-white shadow-sm ${
                i === 0 ? 'col-span-2 row-span-2 md:col-span-1' : ''
              } ${i === 3 ? 'col-span-2' : ''}`}
            >
              <div className={`${i === 0 ? 'h-80 md:h-96' : 'h-48'} bg-gray-200`} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Skeleton className="mx-auto h-11 w-44 rounded-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
}

function FinaleSectionSkeleton() {
  return (
    <section className="bg-[#faf9f6] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Skeleton className="mx-auto mb-4 h-3 w-24 bg-gray-200" />
          <Skeleton className="mx-auto mb-4 h-10 w-3/4 bg-gray-200" />
          <Skeleton className="mx-auto mb-6 h-6 w-5/6 bg-gray-200" />
          <Skeleton className="mx-auto h-14 w-64 rounded-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
}

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      <HeroSectionSkeleton />
      <DestinationsSectionSkeleton />
      <ThemesSectionSkeleton />
      <PersonalizedRecsSkeleton />
      <TestimonialsSectionSkeleton />
      <StorySectionSkeleton />
      <BestTimeSectionSkeleton />
      <HotelsSectionSkeleton />
      <CuratedItinerariesSectionSkeleton />
      <DreamJourneySkeleton />
      <FestivalsSectionSkeleton />
      <ConciergeSectionSkeleton />
      <InspirationGallerySkeleton />
      <FinaleSectionSkeleton />
    </div>
  );
}