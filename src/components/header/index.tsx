import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-30 flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm shadow-xl gap-5 z-1">
      <div className="flex items-center gap-2">
        <Image
          src="/icon.svg"
          alt="NextMon"
          width={30}
          height={30}
          priority
        />
        <h1 className="text-xl">
          <Link href="/">Cobblemon Spawing</Link>
        </h1>
      </div>
    </header>
  );
}
