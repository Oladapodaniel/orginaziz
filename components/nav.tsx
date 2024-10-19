import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function Nav() {
    return (
        <div className="border-b b-[#E9E8E8] bg-white p-5">
            <nav className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Image
                            src="/logo.png"
                            width={45}
                            height={45}
                            alt="Logo"
                        />
                    </div>
                    <div className="text-sm font-semibold hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="font-semibold">Home</div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuList>
                            <NavigationMenuList>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="font-semibold">About</div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuList>
                            <NavigationMenuList>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="font-semibold">Features</div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuList>
                            <NavigationMenuList>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="font-semibold">Testimonials</div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuList>
                            <NavigationMenuList>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <div className="font-semibold">Pricing</div>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-3 hidden md:block">
                        <Button variant="ghost" asChild>
                            <Link href="/" className="font-semibold">Login</Link>
                        </Button>
                        <Button asChild className="font-semibold">
                            <Link href="/">Sign Up</Link>
                        </Button>
                    </div>
                    <div className="block md:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <div className="border p-1 rounded-md">
                                    <Image
                                        src="/fi_menu.svg"
                                        width={25}
                                        height={25}
                                        alt="Menu"

                                    />
                                </div>
                            </SheetTrigger>
                            <SheetContent side={'left'}>
                                <SheetHeader>
                                    <SheetTitle><div className="font-semibold text-2xl text-primary">Orginaziz</div></SheetTitle>
                                    <SheetDescription>
                                        <div className="flex justify-center mt-3 gap-5">
                                            <NavigationMenu className="flex flex-col">
                                                <NavigationMenuList>
                                                    <Link href="/docs" legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            <div className="font-medium">Home</div>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuList>
                                                <NavigationMenuList>
                                                    <Link href="/docs" legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            <div className="font-medium">About</div>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuList>
                                                <NavigationMenuList>
                                                    <Link href="/docs" legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            <div className="font-medium">Features</div>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuList>
                                                <NavigationMenuList>
                                                    <Link href="/docs" legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            <div className="font-medium">Testimonials</div>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuList>
                                                <NavigationMenuList>
                                                    <Link href="/docs" legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            <div className="font-medium">Pricing</div>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuList>
                                            </NavigationMenu>
                                        </div>
                                        <div className="flex flex-col gap-3 mt-4">
                                            <Button variant="outline" asChild>
                                                <Link href="/" className="font-semibold">Login</Link>
                                            </Button>
                                            <Button asChild className="font-semibold">
                                                <Link href="/">Sign Up</Link>
                                            </Button>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </nav>
        </div>
    )
}