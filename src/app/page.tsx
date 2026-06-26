"use client"

import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import News from "@/components/News";
import TrendingCategories from "@/components/TrendingCategories";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollSmoother)

export default function Home() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });
  })

  return (
    <main className="overflow-hidden">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <News />
          <TrendingCategories />
          <LastSection />
        </div>
      </div>
    </main>
  );
}
