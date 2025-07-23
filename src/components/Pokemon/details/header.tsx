import { LightningIcon } from "../../../icons";
import { PokemonDetails } from "../../../services/pokemon";

const PokemonDetailsHeader = ({ pokemon }: { pokemon: PokemonDetails }) => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-6 rounded-t-lg">
      <h1 className="text-4xl font-bold flex justify-center items-center gap-2 capitalize">
        <LightningIcon />
        {pokemon.name}
      </h1>
      <p className="text-sm">#{pokemon.id.toString().padStart(3, "0")}</p>
    </div>
  );
};

export default PokemonDetailsHeader;
