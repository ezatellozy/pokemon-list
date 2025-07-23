import { PokemonAbilities } from "../../../services/pokemon";
import PokemonTitle from "./Title";

const Abilibities = ({ abilities }: { abilities: PokemonAbilities[] }) => {
  return (
    <div>
      <PokemonTitle title="Abilities" />
      <h3 className="text-lg font-bold mb-2"></h3>
      <div className="space-y-2">
        {abilities.map((ability) => (
          <p key={ability.ability.name}>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                ability.is_hidden
                  ? "bg-gray-200 text-gray-600"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {ability.ability.name}
            </span>
            {"  "}
            <span className=" text-sm">{ability.is_hidden && "(Hidden)"}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Abilibities;
