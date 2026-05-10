import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1> Suna Hai do you love me?</h1>
      <Link href="/features">Features</Link>
      <Link href="/about">About</Link>
      <Link href="/pricing">Pricing</Link>
    </div>
  );
}
