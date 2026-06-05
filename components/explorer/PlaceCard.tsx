import Link from "next/link";
import { MapPin } from "lucide-react";

import type { ExplorerPlace } from "@/services/travel-service";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PlaceCardProps = {
  place: ExplorerPlace;
};

export function PlaceCard({ place }: PlaceCardProps) {
  const primaryCategory = place.categories[0]?.category;

  return (
    <Link href={`/place/${place.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-44 bg-gradient-to-br from-orange-100 via-amber-50 to-emerald-100 dark:from-orange-950 dark:via-stone-900 dark:to-emerald-950">
          {place.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={place.imageUrl}
              alt={place.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-end p-5 text-left">
              <span className="text-5xl font-black tracking-tight text-foreground/15">
                {place.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
          {primaryCategory ? (
            <Badge className="absolute left-4 top-4 shadow-sm">
              {primaryCategory.name}
            </Badge>
          ) : null}
          {place.isTop ? (
            <Badge className="absolute right-4 top-4 shadow-sm" variant="secondary">
              Top pick
            </Badge>
          ) : null}
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{place.name}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {place.city.name}, {place.city.state.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {place.shortDescription ?? place.description}
          </p>
          {place.trendingScore > 0 ? (
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Trending score {place.trendingScore}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}
