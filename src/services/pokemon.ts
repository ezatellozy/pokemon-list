import httpClient from "../utils/authenticated-http-client";

export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface PokemonAbilities {
  is_hidden: boolean;

  ability: {
    name: string;
    url: string;
  };
}
export interface PokemonTypes {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  name: string;
  base_experience: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: PokemonTypes[];
  stats: PokemonStats[];
  abilities: PokemonAbilities[];
  height: number;
  weight: number;
}

export interface PokenonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonList[];
}

const BASE_URL = "/pokemon";

export const pokeonService = {
  getAll: async ({
    limit,
    offset,
  }: {
    limit: number;
    offset: number;
  }): Promise<PokenonResponse> => {
    const response = await httpClient.get(
      `${BASE_URL}?limit=${limit}&offset=${offset}`
    );
    return response.data;
  },
  getAllInfinit: async ({
    pageParam = 0,
    limit = 20,
  }: {
    pageParam?: number;
    limit?: number;
  }) => {
    const offset = pageParam;
    const response = await httpClient.get(
      `${BASE_URL}?limit=${limit}&offset=${offset}`
    );
    return response.data;
  },

  getById: async (id: string): Promise<PokemonDetails> => {
    const response = await httpClient.get(`${BASE_URL}/${id}`);
    return response.data;
  },
};
