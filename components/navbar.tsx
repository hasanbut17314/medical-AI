"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Find Doctors", href: "/doctors" },
        { name: "About us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Contact us", href: "/contact" },
    ]

    return (
        <header className="relative top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto lg:px-4 px-3 flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.png" alt="HealNet Logo" width={120} height={120} />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.name}>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "text-base font-medium text-gray-700 hover:text-blue-600",
                                    )}
                                    href={item.href}
                                >
                                    {item.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="size-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-4 mt-8 p-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="/login" className="mt-4 w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-1 text-lg font-semibold text-center rounded-md">Join us</Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Join us button */}
                <Link href="/login" className="hidden md:inline-flex bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md px-6 py-2 text-lg font-semibold">
                    Join us
                </Link>
            </div>
        </header>
    )
}
