import Hero from "@/components/Hero";
import News from "@/components/News";
import TrendingCategories from "@/components/TrendingCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <News />
      <TrendingCategories />
    </main>
  );
}
