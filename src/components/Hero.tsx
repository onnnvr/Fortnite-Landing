"use client"

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const containerRef = useRef<HTMLHeadingElement | null>(null);

    useGSAP(() => {
            
            gsap.from(".char-animate", {
                y: 200,          
                opacity: 0,
                duration: 2,
                ease: "power4.out",
                stagger: 0.1, 
            });

            gsap.from(".image-animate", {
                x:1000,
                duration:2,
                ease: "power4.out",
            })

            gsap.timeline().from(".word-animate", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.05,
            }).from(".button-animate", {
                y: 50,
                opacity: 0,
                duration: 0.5,
                ease: "power4.out"
            })
    }, {scope : containerRef});

    return (
        <section ref={containerRef} className="relative overflow-hidden h-dvh w-screen bg-linear-to-br from-indigo-800 to-purple-900">
            <h1 className="absolute flex top-[20%] left-1/2 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 fortnite uppercase text-[26vw] opacity-40 text-white font-extrabold select-none pointer-events-none z-1">
                {"FORTNITE".split("").map((char, i) => (
                    <span className="inline-block char-animate" key={i}>
                        {char}
                    </span>
                ))}
            </h1>
            
            <div className="absolute image-animate z-2 left-1/2 -translate-x-1/2 bottom-0 w-screen flex flex-col items-center justify-center pointer-events-none">
                <div className="relative overflow-hidden w-[90vw] h-[35vh] lg:w-[60vw] lg:h-[100vh]">
                    <Image src="/imgs/p2.png" alt="p2" className="object-cover" fill />
                </div>
            </div>
            
            <div className="z-3 absolute left-1/2 -translate-x-1/2 top-[40%] lg:top-[80%] lg:bottom-10 flex flex-col gap-6 justify-center items-center max-w-[600px]">
                <p className="text-white text-sm lg:text-xl text-center font-semibold">
                    {"The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?".split(" ").map((word, i) => <span className="word-animate inline-block" key={i}>{"\u00A0" +  word} </span>)}
                </p>
                <button className="bg-yellow-300 uppercase button-animate fortnite w-35 h-10 lg:w-50 lg:h-13 text-xl lg:text-3xl -skew-x-12 cursor-pointer hover:bg-yellow-400 transition-colors">
                    LEARN MORE
                </button>
            </div>
        </section>
    );
}