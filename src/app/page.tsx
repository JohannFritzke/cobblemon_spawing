import { Header } from "@/components/header";
import { supabase } from "../lib/supabaseClient";
import { PokeCards } from "@/components/pokemon_card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PokemonContent } from "@/components/pokemon_dialog_content";

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
          <Dialog key={p.id}>
            <DialogTrigger>
              <PokeCards pokemon={p} />
            </DialogTrigger>
            <PokemonContent pokemon={p}/>
          </Dialog>
        ))}
      </main>
    </div>
  );
}
