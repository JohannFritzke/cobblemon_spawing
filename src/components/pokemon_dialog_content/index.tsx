"use client";
import { useState, useEffect } from "react";
import { Pokemon } from "@/lib/types";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { BiomeCard } from "../biome_card";

export function PokemonContent({ pokemon }: { pokemon: Pokemon }) {
  const number = pokemon.dex_number.toString().padStart(3, "0");
  const [spawnRules, setSpawnRules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pokemon) return;

    const fetchSpawn = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("spawn_rules")
        .select("*")
        .eq("pokemon_dex", pokemon.dex_number);

      if (error) {
        console.error(error);
      } else {
        setSpawnRules(data ?? []);
      }
      setLoading(false);
    };
    fetchSpawn();
  }, [pokemon]);

  return (
    <DialogContent className="bg-gray-900 w-[900px] h-[90%] flex flex-col">
      <DialogHeader className="pt-3">
        <DialogTitle className="bg-white/5 backdrop-blur-sm rounded-md p-3 flex flex-col justify-center items-center gap-2">
          <div className="p-2 flex">
            <div
              className={`w-[96px] h-[96px] absolute z-0 rounded-full bg-gray-400/10`}
            ></div>
            <Image
              src={`/imgs/sprites/normal/${number}.png`}
              alt=""
              width={96}
              height={96}
              className="z-1"
              priority
            />
          </div>
          <div className="flex gap-1 text-justify">
            <p className="capitalize text-gray-300 text-sm">{pokemon.name}</p>
            <p className="text-sm text-gray-500">#{number}</p>
          </div>
        </DialogTitle>
      </DialogHeader>
      <div className="bg-white/5 backdrop-blur-sm rounded-md p-3 grid grid-cols-3 max-h-96 overflow-y-auto w-full gap-2">
        {spawnRules.map((s, key) => (
          <BiomeCard key={key} spawn={s} />
        ))}
      </div>
    </DialogContent>
  );
}
