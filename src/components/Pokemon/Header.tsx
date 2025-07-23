import { Link } from "react-router-dom";
import { LightningIcon } from "../../icons";

const PokedexHeader = () => {
  return (
    <div className="text-center py-10">
      <div className="flex justify-center items-center gap-2 text-3xl font-bold text-gray-800">
        <LightningIcon />
        <h1>Pokédex</h1>
      </div>
      <p className="text-gray-600 mt-2">
        Discover and explore Pokemon with infinite scroll
      </p>

      <div className="flex justify-center mt-6 gap-4">
        <Link
          to="/"
          className="px-4 py-2 border border-black rounded-md bg-white text-black hover:bg-gray-100"
        >
          Page Controls
        </Link>
        <Link
          to="/infinite-scroll"
          className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
        >
          Infinite Scroll
        </Link>
      </div>
    </div>
  );
};

export default PokedexHeader;
