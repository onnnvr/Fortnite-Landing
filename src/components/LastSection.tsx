import LastSectionCard from "./LastSectionCard";

export default function LastSection() {
    return (
        <section className="w-screen overflow-hidden bg-black py-20 ">
            <div className="mx-auto container px-40 flex flex-col items-center gap-30">
                <LastSectionCard image="/imgs/p1.jpg" title="BY EPIC" paragraph="The fate of the Islands at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?" button="PLAY NOW" />
                <LastSectionCard className="flex-row-reverse" image="/imgs/p1.jpg" title="BATTLE PASS" paragraph="FORTNITE CREW IS THE ULTIMATE MONTHLY FORTNITE SUBSCRIPTION OFFER. THIS SUBSCRIPTION INCLUDES THE BATTLE PASS, 1000 MONTHLY V-BUCKS, AND A MONTHLY CREW PACK (THE CREW PACK IS AN OUTFIT BUNDLE EXCLUSIVE TO FORTNITE CREW MEMBERS THAT'S YOURS TO KEEP!)" button="LEARN MORE" />
                <LastSectionCard image="/imgs/p3.jpg" title="XP BEYOND" paragraph="WANT A BATTLE ROYALE BREAK? IN ADDITION TO BATTLE ROYALE AND ZERO BUILD, YOU CAN EARN XP TOWARDS YOUR BATTLE PASS IN ANY CREATOR-MADE ISLANDS THROUGH GAMEPLAY OR TIME PLAYED ON THE ISLAND. PLAY THE WAY YOU WANT TO UNLOCK KADO THORNE, KHABY LAME, AND MORE!" button="LEARN MORE" />
            </div>
        </section>
    )
}