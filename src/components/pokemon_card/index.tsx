import { Pokemon } from "@/lib/types"; 
import Image from "next/image";

export function PokeCards({ pokemon }: { pokemon: Pokemon }) {
  const number = pokemon.dex_number.toString().padStart(3, "0");

  return (
    <div className="bg-white/5 w-36 h-48 place-items-center p-2 shadow-white/20 shadow-sm cursor-pointer">
      {/*----------------------------Imagem do Pokemon----------------------------*/}
      <div className="flex justify-center">
        <div
          className={`w-[96px] h-[96px] absolute z-0 rounded-full bg-gray-400/10`}
        ></div>
        <Image
          src={`/imgs/sprites/normal/${number}.png`}
          alt=""
          width={96}
          height={96}
          className="z-1"
        />
      </div>
      {/*--------------------------------------------------------------------------------*/}

      <p className="text-gray-500">{`#${number}`}</p>
      <p className="capitalize text-gray-300">{pokemon.name}</p>

      {/*-------------------------------Tipos do Pokemon----------------------------------*/}
      {/*--------------------------------------------------------------------------------*/}
      
    </div>
  );
}