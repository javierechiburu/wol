import { PokemonEntry, NonTypeInfoPokemonEntry } from "../types";
import pokemonData from "./pokemon.json";

const pokemons: PokemonEntry[] = pokemonData as PokemonEntry[];

export const getEntries = (): PokemonEntry[] => pokemons;

export const getEntry = (id: number): NonTypeInfoPokemonEntry | undefined => {
  const entry = pokemons.find((p) => p.id === id);
  if (entry != null) {
    const { type, ...restOfPokemon } = entry;
    return restOfPokemon;
  }
  return entry;
};

export const addEntry = () => null;
