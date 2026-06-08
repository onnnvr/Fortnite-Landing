"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import { useGSAP } from "@gsap/react";


export default function News() {

    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const cardsRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
            gsap.from(headingRef.current?.querySelectorAll(".char-animate") || [], {
                y: 400,
                stagger: 0.05,
                opacity: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top bottom",
                    end: "top bottom",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            gsap.from(".paragraph-animate", {
                y: 400,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top bottom",
                    end: "top bottom",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            gsap.from(".newscard-animate", {
                scale: 2,
                x: -200,
                y: -200,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top bottom",
                    end: "top bottom",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="h-dvh w-screen overflow-hidden bg-black py-20 ">
            <div className="mx-auto container px-40">
                <h2 ref={headingRef} className="fortnite uppercase text-9xl text-white w-full text-center ">
                    {"FORTNITE NEWS".split(" ").map((word, i) => (
                        <span className="inline-block" key={i}>
                            {word.split("").map((char, y) => (
                                <span className="inline-block char-animate" key={y}>{char}</span>
                            ))}
                            {"\u00A0"}
                        </span>
                    ))}
                </h2>
                <p className=" mb-10 w-full text-center text-lg paragraph-animate text-white font-semibold ">
                    Check out the latest news and updates about Fortnite
                </p>
                <div ref={cardsRef} className="mt-5 flex flex-row justify-between gap-5">
                    <NewsCard image="/imgs/n1.jpg" tag="V26.30 UPDATE" paragraph="FORTNITEMARES 2023 DAWNS IN THE FORTNITE BATTLE ROYALE" />
                    <NewsCard image="/imgs/n2.jpg" tag="SEP 27, 2023" paragraph="UPCOMING FORTNITE PRICING ALIGNMENT IN - OCTOBER 2023" />
                    <NewsCard image="/imgs/n3.webp" tag="V26.20 UPDATE" paragraph="THE FORTNITE SAVE THE WORLD HOTFIX HOMEBASE STATUS REPORT" />
                </div>
            </div>

        </section>
    )
}