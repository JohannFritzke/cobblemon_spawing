import { Spawn } from "@/lib/types";

export function BiomeCard({ spawn }: { spawn: Spawn }) {
  return (
    <div className="bg-gray-400/10 rounded-lg p-3 w-full capitalize">
      <p>{spawn.biomes}</p>
      <p>Level: {spawn.level_min + "-" + spawn.level_max}</p>
      <p>Time: {spawn.time}</p>
      <p>Context: {spawn.context}</p>
      <p>Rarity: {spawn.bucket}</p>
    </div>
  );
}
