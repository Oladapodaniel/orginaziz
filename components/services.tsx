import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Services() {
    return (
        <div>
        <div className="container mx-auto py-10 flex items-center justify-between">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full">
                <div>
                    <div className="text-primary font-semibold text-lg text-center md:text-left">Our Core - Services</div>
                    <div className="mt-5 font-bold text-3xl md:text-5xl text-center md:text-left leading-tight">We Make It <br />Effortless To Track All <br />Employee Performance</div>
                    {/* <div className="mt-5 text-[#666666] text-lg">Self service data analytics software that lets you create <br />visually appealing data visualizations and insightful <br />dashboard in minutes.</div> */}
                    <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
                        <div>
                        <Image
                                src={'/fi_slack.svg'}
                                width={20}
                                height={20}
                                alt={'icon'}
                            />
                            <div className="mt-3 text-lg font-semibold">Recruitment and Onboarding</div>
                            <div className="text-secondary mt-3">streamlines the hiring process by automating job <br />postings, tracking applications, and <br />managing candidate profiles.</div>
                        </div>
                        <div>
                        <Image
                                src={'/fi_slack.svg'}
                                width={20}
                                height={20}
                                alt={'icon'}
                            />
                            <div className="mt-3 text-lg font-semibold">Performance Management</div>
                            <div className="text-secondary mt-3">Performance management tools facilitate <br />continuous feedback, goal setting, and <br />performance evaluations</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
                        <div>
                        <Image
                                src={'/fi_slack.svg'}
                                width={20}
                                height={20}
                                alt={'icon'}
                            />
                            <div className="mt-3 text-lg font-semibold">Payroll Management</div>
                            <div className="text-secondary mt-3">Automated payroll systems ensure accurate salary calculations, <br />tax deductions, and timely payments.</div>
                        </div>
                        <div>
                            <Image
                                src={'/fi_slack.svg'}
                                width={20}
                                height={20}
                                alt={'icon'}
                            />
                            <div className="mt-3 text-lg font-semibold">Employee Self-Service Portal</div>
                            <div className="text-secondary mt-3">An employee self-service portal empowers <br /> employees to manage their personal information,<br /> request leave, access payslips etc.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={'/service_image.png'}
                        alt={'Hero Image'}
                        width={600}
                        height={600}
                        className="animate-bounce-up-down"
                    />
                </div>
            </div>
        </div>
            <Separator className="my-10" />
            </div>
    )
}