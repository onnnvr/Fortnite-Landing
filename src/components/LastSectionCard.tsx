"use client"

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);




export default function LastSectionCard({image, title, paragraph, button, className}: {image: string, title?: string, paragraph?: string, button?: string, className?: string}) {
    
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
            gsap.from(".char-animate", {
                y: 200,          
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.05,    
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    end: "top bottom",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".image-animate", {
                scale: 2,
                duration: 1.5,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    end: "top bottom",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            gsap.from(".paragraph-animate", {
                y: 200,
                opacity: 0,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    end: "top bottom",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
    }, { scope: cardRef })
    
    return (
        <div ref={cardRef} className={`flex justify-between items-start w-full ${className}`}>
            <div className="flex flex-col items-start gap-2  w-[43%] pb-10">
                <h3 className="text-white text-7xl font-bold fortnite uppercase">{title?.split(" ").map((word, i) => (
                        <span className="inline-block" key={i}>
                            {word.split("").map((char, y) => (
                                <span className="inline-block char-animate" key={y}>{char}</span>
                            ))}
                            {"\u00A0"}
                        </span>
                    ))}</h3>
                <p className=" paragraph-animate text-white text-lg font-semibold max-w-[700px]">{paragraph}</p>
                <button className="bg-yellow-300 mt-3 uppercase button-animate fortnite w-50 h-13 text-3xl -skew-x-12 cursor-pointer hover:bg-yellow-400 transition-colors">
                    {button}
                </button>
            </div>
            <div className="rounded-2xl overflow-hidden w-[50%]">
                <Image className="image-animate" src={image} alt="p1" width={1100} height={800} />
            </div>
        </div>

    )
}