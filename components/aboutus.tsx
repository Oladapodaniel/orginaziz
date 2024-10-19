import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="bg-[#f6f9ff] py-10 mt-10 ">
            <section className="container mx-auto rounded-xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div>
                        <div className="text-secondary font-semibold text-lg text-center md:text-left">About us</div>
                        <div className="mt-5 font-bold text-3xl md:text-5xl leading-tight text-center md:text-left">Welcome to Orginazez <br />Where Excellence Meet<br />Innovation</div>
                        <div className="mt-5 text-secondary text-lg text-center md:text-left">We are dedicated to strengthening the <br />relationship between companies and employees <br />throught technological innovation that simplifies HR processes</div>
                    </div>
                    <div>
                        <Image
                            src={'/about_image.png'}
                            alt={'About Image'}
                            width={600}
                            height={600}
                            className="rounded-xl animate-bounce-up-down"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[40px] justify-between py-10">
                    <div>
                        <div className="mt-5 font-bold text-3xl md:text-5xl leading-tight">Our Mission</div>
                        <div className="mt-5 text-secondary text-lg">Our mission is to provide intuitive HR solutions that streamline processes, enhance employee experience, and drive organizational success. We are committed to leveraging technology to simplify HR management and support strategic decision-making. Through continuous innovation and customer collaboration, we aim to redefine the future of work.</div>
                    </div>
                    <div>
                        <div className="mt-5 font-bold text-3xl md:text-5xl leading-tight text-right">Our Vision</div>
                        <div className="mt-5 text-secondary text-lg text-right">To empower organizations with innovative HR technology that fosters a culture of engagement, efficiency, and growth. We envision a future where every employee thrives in a seamless work environment. Our goal is to transform HR practices through cutting-edge solutions that enhance workplace dynamics.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}