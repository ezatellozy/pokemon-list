import { useInfiniteQuery } from "@tanstack/react-query";
import PokemonCard from "../../components/Pokemon/Card";
import PageMeta from "../../components/common/PageMeta";
import { pokeonService } from "../../services/pokemon";
import PokedexHeader from "../../components/Pokemon/Header";
import { useEffect, useRef } from "react";
import SkeltonCard from "../../components/Pokemon/SkeltonCard";

export default function InfiniteScroll() {
  const limit = 20;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["pokemon-infinite-list"],
      initialPageParam: 0,
      queryFn: ({ pageParam = 0 }) =>
        pokeonService.getAllInfinit({ pageParam, limit }),
      getNextPageParam: (lastPage, allPages) => {
        const nextOffset = allPages.length * limit;
        return nextOffset < lastPage.count ? nextOffset : undefined;
      },
    });

  const observerRef = useRef<HTMLDivElement | null>(null);

  // scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

  const totalShown =
    data?.pages
      ?.map((page) => page.results.length)
      .reduce((acc, cur) => acc + cur, 0) || 0;

  return (
    <div className="bg-green-100 py-5">
      <div className="container mx-auto space-y-4">
        <PageMeta title="Pokémon List" description="This is Pokémon List" />
        <PokedexHeader />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 2xl:gap-6">
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SkeltonCard key={index} />
              ))
            : data?.pages.map((page) =>
                page.results.map((pokemon: any) => (
                  <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))
              )}
        </div>

        <div ref={observerRef} className="flex justify-center py-6">
          {isFetchingNextPage && (
            <div className=" flex items-center gap-4 text-sm">
              <div className="animate-spin rounded-full size-7 border-b-2 border-green-400"></div>
              Loading More Pokemon ...
            </div>
          )}
        </div>
        <p className=" text-center text-sm">Shown {totalShown} Pokemon</p>
      </div>
    </div>
  );
}
