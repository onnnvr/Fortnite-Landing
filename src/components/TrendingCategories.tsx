"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
import { useEffect, useRef } from "react";

export default function TrendingCategories() {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    
    useEffect(() => {
        const ctx = gsap.context(() => {
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

            gsap.from(paragraphRef.current, {
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


            gsap.to(".slide-x", {
                x: "-1000px"
            })

            const slides = gsap.utils.toArray(".slide")
            const tl = gsap.timeline({
                scrollTrigger: {
                        trigger: sectionRef.current,
                        // markers: true,
                        start: "top top",
                        pin: true,
                        pinSpacing: true,
                        end: "+=1500px",
                        scrub: 2
                }
            })

            slides.map((slide: any, i) => {

                const classList = [...slide.classList]

                tl.to(slide, {
                    x: classList.includes("slide-x") ? "0px" : "-1000px",
                    
                }, "<")

                console.log(classList)
            })

            
            
        });
        return () => ctx.revert();
    }, [])

    return (
        <section className="h-dvh w-screen overflow-hidden bg-black py-20 leading-[18vh]" ref={sectionRef}>
            <h2 ref={headingRef} className="fortnite uppercase text-7xl lg:text-[8vw] text-white w-full text-center ">
                {"TRENDING CATEGORIES".split(" ").map((word, i) => (
                    <span className="inline-block" key={i}>
                        {word.split("").map((char, y) => (
                            <span className="inline-block char-animate" key={y}>{char}</span>
                        ))}
                        {"\u00A0"}
                    </span>
                ))}
            </h2>
            <p ref={paragraphRef} className=" mb-10 w-full text-center text-lg text-white font-semibold ">
                The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?
            </p>
            <div className="mt-[15vh] flex text-white flex-col fortnite uppercase text-6xl lg:text-[6vw] lg:leading-[14vh]">
                <div className="flex flex-row flex-nowrap slide -slide-x">{"COMBAT MINIGAME PRACTICE SURVIVAL HORROR ESCAPE COMBAT MINIGUN PRACTICE SURVIVAL HORROR".split(" ").map((word, i) => word === "SURVIVAL" ? <span key={i} className="inline-block text-yellow-300">{word + "\u00A0"}</span> : <span key={i} className="inline-block text-gray-700">{word + "\u00A0"}</span>)}</div>
                <div className="flex flex-row flex-nowrap slide slide-x">{"POPULAR 1V1 ADVENTURE BOXFIGHT DEATHRUN ZOMBIES POPULAR 1V1 ADVENTURE BOXFIGHT DEATHRUN ZOMBIES".split(" ").map((word, i) => word === "POPULAR" ? <span key={i} className="inline-block text-yellow-300">{word + "\u00A0"}</span> : <span key={i} className="inline-block text-gray-700">{word + "\u00A0"}</span>)}</div>
                <div className="flex flex-row flex-nowrap slide -slide-x">{"PARKOUR ROLEPLAY ZONEWARS DEATHMATCH FASHION MUSIC PARKOUR ROLEPLAY ZONEWARS DEATHMATCH FASHION MUSIC".split(" ").map((word, i) => word === "DEATHMATCH" ? <span key={i} className="inline-block text-yellow-300">{word + "\u00A0"}</span> : <span key={i} className="inline-block text-gray-700">{word + "\u00A0"}</span>)}</div>
            </div>
        </section>
    )
}