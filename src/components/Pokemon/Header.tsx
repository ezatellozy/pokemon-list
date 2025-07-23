import { NavLink } from "react-router-dom";
import { LightningIcon } from "../../icons";

const PokedexHeader = () => {
  const activeLink =
    "px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800";
  const normalLink =
    "px-4 py-2 border border-black rounded-md bg-white text-black hover:bg-gray-100";

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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Page Controls
        </NavLink>
        <NavLink
          to="/infinite-scroll"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Infinite Scroll
        </NavLink>
      </div>
    </div>
  );
};

export default PokedexHeader;
