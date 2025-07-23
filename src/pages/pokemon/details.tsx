import { Link, useParams } from "react-router-dom";

import { pokeonService } from "../../services/pokemon";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../OtherPage/NotFound";
import PokemonDetailsHeader from "../../components/Pokemon/details/header";
import { PokemonImage } from "../../components/Pokemon/details/Image";
import BaseState from "../../components/Pokemon/details/BaseState";
import Abilibities from "../../components/Pokemon/details/Abilities";
import PokemonTitle from "../../components/Pokemon/details/Title";
import PokemonDetailSkeleton from "./Skeleton";

const PokemonDetail = () => {
  const { id } = useParams();

  if (!id) return <NotFound />;

  const { data: pokemon, isLoading } = useQuery({
    queryKey: [`pokemon-details-${id}`],
    queryFn: () => pokeonService.getById(id),
  });

  return (
    <div className=" container mx-auto py-5  space-y-5 ">
      <div>
        <Link
          to="/"
          className="border inline-block border-edge py-2  px-3 rounded-lg"
        >
          Back to list
        </Link>
      </div>

      {isLoading ? (
        <PokemonDetailSkeleton />
      ) : pokemon ? (
        <div className=" max-w-4xl mx-auto">
          <PokemonDetailsHeader pokemon={pokemon} />
          <div className="  p-4 border border-edge rounded-b-xl">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PokemonImage pokemon={pokemon} />
              <div className=" space-y-5">
                <BaseState stats={pokemon.stats} />
                <Abilibities abilities={pokemon.abilities} />
                <div className="">
                  <PokemonTitle title="Base Experience" />

                  <p className="text-xl text-purple-600 font-bold">
                    {pokemon.base_experience} XP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PokemonDetail;
