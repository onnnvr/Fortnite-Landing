"use client"

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        // استخدام الـ scope جوه الـ context بيخلي GSAP يدور على الكلاسات جوه الـ container ده بس
        const ctx = gsap.context(() => {
            
            gsap.from(".char-animate", {
                y: 200,            // 200 كافية جداً للظهور من الأسفل بناءً على حجم الخط
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.05,     // التتابع السحري اللي هيخلي الحروف تطلع ورا بعضها
            });

        }, containerRef); // ربط الـ scope هنا

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative overflow-hidden h-dvh w-screen bg-linear-to-br from-indigo-800 to-purple-900">
            {/* شيلنا overflow-hidden من الـ h1 عشان الحروف تبان وهي طالعة من تحت */}
            <h1 className="absolute flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fortnite uppercase text-[26vw] opacity-40 text-white font-extrabold select-none pointer-events-none z-1">
                {"FORTNITE".split("").map((char, i) => (
                    // هنا بنلف كل حرف جوه span واخد overflow-hidden خاص بيه لو عايز تأثير القطع، أو سيبه كدة للحركة الحرة
                    <span className="inline-block char-animate" key={i}>
                        {char}
                    </span>
                ))}
            </h1>
            
            {/* تأكد من ضبط الـ z-index عشان الصورة متغطيش على حركة الحروف بشكل كامل */}
            <div className="absolute z-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex flex-col items-center justify-center pointer-events-none">
                <Image src="/imgs/p2.png" alt="p2" width={1150} height={1150} priority />
            </div>
            
            <div className="z-3 absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col gap-6 justify-center items-center max-w-[600px]">
                <p className="text-white text-xl text-center font-semibold">
                    The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?
                </p>
                <button className="bg-yellow-300 uppercase fortnite w-50 h-13 text-3xl -skew-x-12 cursor-pointer hover:bg-yellow-400 transition-colors">
                    LEARN MORE
                </button>
            </div>
        </section>
    );
}