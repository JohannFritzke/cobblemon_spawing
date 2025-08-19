import { Header } from "@/components/header";
import { supabase } from "../lib/supabaseClient";
import { PokeCards } from "@/components/pokemon_card";

export default async function Home() {
  const { data: pokemon, error } = await supabase.from("pokemon").select("*");
  if (pokemon == null) {
    return <div></div>;
  }
  return (
    <div className="flex flex-col bg-gray-900 w-full">
      <Header />
      <main className="grid grid-cols-8 gap-4 p-6 place-items-center z-0">
        {pokemon.map((p) => (
          <PokeCards pokemon={p} key={p.id} />
        ))}
      </main>
    </div>
  );
}
