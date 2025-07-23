import { PokemonDetails } from "../../../services/pokemon";

const MessureCard = ({ name, value }: { name: string; value: number }) => (
  <div className="flex justify-around bg-gray-100 rounded-lg p-4 mb-6">
    <div className="text-center">
      <p className="text-sm text-gray-500">{name}</p>
      <p className="font-semibold">{value / 10} kg</p>
    </div>
  </div>
);

export const PokemonImage = ({ pokemon }: { pokemon: PokemonDetails }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className=" size-80 rounded-full bg-gray-100 flex items-center justify-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="size-80 object-contain"
          width={320}
          height={320}
        />
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {pokemon.types.map((type: any) => (
          <p
            key={type.type.name}
            className="bg-red-500 text-white capitalize text-sm px-3 py-1 rounded-full"
          >
            {type.type.name}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 items-center gap-2 flex-1 w-full">
        <MessureCard name="Height" value={pokemon.height} />
        <MessureCard name="Weight" value={pokemon.weight} />
      </div>
    </div>
  );
};
