import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="container mx-auto pb-12">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-5">
                <div className="col-span-2 md:col-span-6">
                    <div className="flex gap-2">
                        <Image
                            src="/logo.png"
                            width={45}
                            height={45}
                            alt="Logo"
                        />
                        <div className="font-semibold text-primary text-2xl">Orginaziz</div>
                    </div>
                    <div className="text-secondary mt-5">Cleava Avenue <br />Obafemi Awolowo Road, Ikeja, Lagos(4298323)</div>
                    <div className="mt-5 flex flex-wrap gap-4">
                        <Input placeholder="Enter your email" className="w-[100] rounded-full py-5" />
                        <Button className="rounded-full px-6 py-5 font-semibold text-white shadow-none border border-primary">Subscribe</Button>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="font-semibold">Section Page</div>
                    <div className="text-secondary mt-5">Header</div>
                    <div className="text-secondary mt-2">Advantage</div>
                    <div className="text-secondary mt-2">Feature</div>
                    <div className="text-secondary mt-2">Pricing</div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="font-semibold">Useful Link</div>
                    <div className="text-secondary mt-5">Services</div>
                    <div className="text-secondary mt-2">Product</div>
                    <div className="text-secondary mt-2">Features</div>
                    <div className="text-secondary mt-2">Contact Us</div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="font-semibold">Social media</div>
                    <div className="text-secondary mt-5">Instagram</div>
                    <div className="text-secondary mt-2">Facebook</div>
                    <div className="text-secondary mt-2">Twitter</div>
                </div>
            </div>
            <Separator className="my-8" />
            <div className="text-secondary text-center text-sm">
                &copy;2024. Organizez. All Rights Reserved. Oladapo Daniel.
            </div>
        </footer>
    )
}