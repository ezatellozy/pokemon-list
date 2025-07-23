import { PokemonStats } from "../../../services/pokemon";
import PokemonTitle from "./Title";

function BaseState({ stats }: { stats: PokemonStats[] }) {
  return (
    <div>
      <PokemonTitle title="Base Stats" />

      {stats.map((stat) => (
        <div key={stat.stat.name} className="mb-2">
          <div className="flex justify-between text-sm font-medium capitalize">
            <span>{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="h-2 bg-purple-500 rounded"
              style={{ width: `${stat.base_stat / 2}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BaseState;
