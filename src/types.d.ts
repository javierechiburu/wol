export interface PokemonEntry {
  id: number;
  name: string;
  type: string;
}

//type NonTypeInfoPokemonEntry = Pick<PokemonEntry, "id" | "name">;
type NonTypeInfoPokemonEntry = Omit<PokemonEntry, "type">;
