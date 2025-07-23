import { useQuery } from "@tanstack/react-query";
import PokemonCard from "../../components/Pokemon/Card";
import PageMeta from "../../components/common/PageMeta";
import { pokeonService } from "../../services/pokemon";
import PokedexHeader from "../../components/Pokemon/Header";
import Pagination from "../../components/common/Pagination";
import { useSearchParams } from "react-router";
import SkeltonCard from "../../components/Pokemon/SkeltonCard";

export default function Home() {
  const [searchParams] = useSearchParams();

  const pageParam = searchParams.get("page");
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));
  const limit = 20;
  const offset = (currentPage - 1) * limit;
  const { data: pokemonData, isLoading } = useQuery({
    queryKey: ["pokemon-list", currentPage],

    queryFn: () => pokeonService.getAll({ limit, offset }),
  });

  return (
    <div className="container mx-auto py-4 space-y-4">
      <PageMeta title="Pokemon List" description="This is Pokemon List" />

      <PokedexHeader />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 2xl:gap-6">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <SkeltonCard key={index} />
            ))
          : pokemonData?.results.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.name} />
            ))}
      </div>

      {pokemonData && (
        <div>
          <Pagination
            count={pokemonData.count}
            limit={limit}
            tips={`(${pokemonData.results.length} Pokémon shown)`}
          />
        </div>
      )}
    </div>
  );
}
