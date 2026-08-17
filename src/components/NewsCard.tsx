import gsap from "gsap";
import Image from "next/image";

export default function NewsCard({image, tag, paragraph}: {image: string, tag?: string, paragraph?: string}) {
    return (
        <div className=" w-[95vw] mx-auto lg:w-[500px] newscard-animate h-[330px] relative overflow-hidden rounded-xl cursor-pointer">
            {/* Use Image with `fill` so it covers the card and `object-cover` to maintain aspect */}
            <Image src={image} alt={tag || "News Card Image"} fill className="object-cover" />

            {/* subtle overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

            <div className="absolute bottom-2 left-2 z-10 flex flex-col gap-1 fortnite uppercase p-5">
                <h3 className="text-yellow-200 text-lg">
                    {tag}
                </h3>
                <p className="text-white text-2xl opacity-90 ">
                    {paragraph}
                </p>
            </div>
        </div>
    )
}