export type Pokemon = {
  id: number;
  dex_number: number;
  name: string;
};

export type Spawn = {
  anticonditions: string;
  context:string;
  biomes: string;
  bucket: string;
  can_see_sky: string;
  conditions: string;
  constring: string;
  excluded_biomes: string;
  id: number;
  level_max: number;
  level_min: number;
  pokemon_dex: number;
  presets: string;
  skylight_max: number;
  skylight_min: number;
  time: string;
  weather: string;
  weight: number;
};
