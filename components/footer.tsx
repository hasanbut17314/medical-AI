import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full bg-[#f2faff]">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Logo and tagline */}
                    <div className="flex flex-col">
                        <div className="mb-8 mt-3 flex items-center">
                            <Image src="/logo.png" alt="Logo" width={150} height={150} />
                        </div>
                        <p className="text-gray-600">Experience personalized medical care from the comfort of your home.</p>
                    </div>

                    {/* Support links */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-[#00a4f4]">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/getting-started" className="text-gray-600 hover:text-[#0069ab]">
                                    Getting Started
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-gray-600 hover:text-[#0069ab]">
                                    FAQS
                                </Link>
                            </li>
                            <li>
                                <Link href="/help-articles" className="text-gray-600 hover:text-[#0069ab]">
                                    Help Articles
                                </Link>
                            </li>
                            <li>
                                <Link href="/report-issue" className="text-gray-600 hover:text-[#0069ab]">
                                    Report an issue
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-[#0069ab]">
                                    Contact Help Desk
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services links */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-[#00a4f4]">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/booking" className="text-gray-600 hover:text-[#0069ab]">
                                    Booking appointments
                                </Link>
                            </li>
                            <li>
                                <Link href="/consultations" className="text-gray-600 hover:text-[#0069ab]">
                                    Online consultations
                                </Link>
                            </li>
                            <li>
                                <Link href="/prescriptions" className="text-gray-600 hover:text-[#0069ab]">
                                    Prescriptions
                                </Link>
                            </li>
                            <li>
                                <Link href="/medicine-refills" className="text-gray-600 hover:text-[#0069ab]">
                                    Medicine Refills
                                </Link>
                            </li>
                            <li>
                                <Link href="/medical-notes" className="text-gray-600 hover:text-[#0069ab]">
                                    Medical Notes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div>
                        <h3 className="mb-4 text-lg font-medium text-[#00a4f4]">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/terms" className="text-gray-600 hover:text-[#0069ab]">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-600 hover:text-[#0069ab]">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-notice" className="text-gray-600 hover:text-[#0069ab]">
                                    Cookie Notice
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-preferences" className="text-gray-600 hover:text-[#0069ab]">
                                    Cookie Preferences
                                </Link>
                            </li>
                            <li>
                                <Link href="/trust-center" className="text-gray-600 hover:text-[#0069ab]">
                                    Trust Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-[#d1eeff]"></div>

                {/* Bottom section with social links and copyright */}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" className="text-[#00a4f4] hover:text-[#0069ab]">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="https://instagram.com" className="text-[#00a4f4] hover:text-[#0069ab]">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://linkedin.com" className="text-[#00a4f4] hover:text-[#0069ab]">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://youtube.com" className="text-[#00a4f4] hover:text-[#0069ab]">
                            <Youtube className="h-6 w-6" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                    </div>
                    <p className="text-gray-500">HealNet 2024 © All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
