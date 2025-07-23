import { PokemonList } from "../../services/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }: { pokemon: PokemonList }) => {
  const getIdFromUrl = (url: string): string => {
    return url.split("/")[6];
  };

  const id = getIdFromUrl(pokemon.url);
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; // link from documentation https://pokeapi.co/docs/v2#pokemon

  return (
    <Link
      to={`/${id}`}
      className="w-full border  border-edge flex bg-white
    flex-col gap-2 rounded-lg p-2 sm:p-3 md:p-4 "
    >
      <div className=" h-40 rounded-t-lg bg-gray-50">
        <img
          width={150}
          height={150}
          className=" object-contain mx-auto"
          src={spriteUrl}
          alt={pokemon.name}
        />
      </div>
      <p className="text-xl font-medium text-center">{pokemon.name}</p>
    </Link>
  );
};

export default PokemonCard;
