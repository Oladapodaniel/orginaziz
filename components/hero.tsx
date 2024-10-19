import { Button } from "@/components/ui/button"
import Image from "next/image"
import SlidingText from "./slidingtext"
import SlidingImages from "./slidingimage";


export default function Hero() {
    const images = [
        '/logo_1.png',
        '/logo_2.png',
        '/logo_3.png',
        '/logo_4.png',
        // Add more images as needed
    ];
    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <div>
                    <div className="text-primary font-semibold text-lg text-center md:text-left">Recruit - Onboard - Manage</div>
                    <div className="mt-5 font-bold text-3xl md:text-5xl text-center md:text-left leading-tight">Revolutionize Your HR <br />Management with Cloud-<br />Based Solutions</div>
                    <div className="mt-5 text-secondary text-lg text-center md:text-left">The best HR software for SMB companies and startup<br /> to manage employee, payroll assistance, time off, <br />attendance tracking with single software</div>
                    <div className="flex justify-center flex-wrap md:justify-start gap-2 mt-8">
                        <Button className="rounded-full px-6 py-5 font-semibold text-white shadow-none border border-primary">Get started</Button>
                        <Button className="border py-5 border-primary rounded-full shadow-none px-6 text-primary font-semibold" variant={'outline'}>How it work</Button>
                    </div>
                </div>
                <div className="order-first md:order-last">
                    <Image
                        src={'/Hero.svg'}
                        alt={'Hero Image'}
                        width={600}
                        height={600}
                        className="animate-bounce-up-down"
                    />
                </div>
            </div>
            <div>
                <div className="bg-primary-foreground p-10 rounded-xl mt-12 overflow-hidden">
                    <div className="font-semibold text-center mb-7 text-lg">Trusted by over 1,000 business on Humanet</div>
                    <div className="flex justify-around flex-wrap">
                        <SlidingImages images={images} />
                    </div>
                </div>
            </div>
        </div>
    )
}