import Home from "@modules/Home";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Home />
    </div>
  );
}
