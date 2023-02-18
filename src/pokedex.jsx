import Pokecard from "./pokecard";

function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      {pokemon.map((val) => (
        <Pokecard pokemon={val} />
      ))}
    </div>
  );
}

export default Pokedex;
