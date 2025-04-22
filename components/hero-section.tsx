"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

import c1 from '@/public/customer1.png'
import c2 from '@/public/customer2.png'
import c3 from '@/public/customer3.png'
import c4 from '@/public/customer4.png'

export function HeroSection() {
    const cArry = [c1, c2, c3, c4]
    return (
        <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20" id="home">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    {/* Left column - Text content */}
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            <span className="text-gray-800">Your </span>
                            <span className="text-[#2cbeff]">Trusted Partner</span>
                            <br />
                            <span className="text-gray-800">in </span>
                            <span className="text-[#00a4f4]">Digital</span>
                            <span className="text-gray-800"> Healthcare.</span>
                        </h1>

                        <div className="space-y-4 text-gray-700">
                            <p className="text-lg">
                                <span className="font-medium text-[#00a4f4]">Empowering Your Health at Every Step.</span> Experience
                                personalized medical care from the comfort of your home. Connect with{" "}
                                <Link href="#" className="text-[#00a4f4] hover:underline">
                                    certified doctors
                                </Link>
                                , or manage prescriptions, and schedule appointments with ease. Ready to take control of your health?{" "}
                                <Link href="#" className="text-[#00a4f4] hover:underline">
                                    Get Started
                                </Link>{" "}
                                or Book an Appointment today.
                            </p>

                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="rounded-full bg-[#2cbeff] px-8 py-6 text-lg font-medium text-white hover:bg-[#0069ab]"
                                >
                                    <Link href="#appointment">
                                        Book an appointment <span className="ml-2">→</span>
                                    </Link>
                                </Button>
                            </div>

                            <p className="pt-6 text-gray-500">Trusted by millions across the globe:</p>
                        </div>
                    </div>

                    {/* Right column - Image and stats */}
                    <div className="relative mt-8 flex justify-center lg:mt-0">
                        <div className="relative sm:h-[450px] sm:w-[450px]">
                            <div className="absolute inset-0 rounded-full bg-[#2cbeff]/20"></div>
                            <Image
                                src="/doctor.png"
                                alt="Doctor with stethoscope"
                                width={450}
                                height={450}
                                className="relative z-10 rounded-full object-cover"
                                priority
                            />

                            {/* Customer card */}
                            <Card className="absolute -right-20 top-1/2 z-20 flex w-64 flex-col rounded-xl bg-white p-3 shadow-lg">
                                <div className="flex items-center gap-1">
                                    <div className="flex -space-x-2">
                                        {cArry.map((i, index) => (
                                            <div key={index} className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                                                <Image
                                                    src={i}
                                                    alt={`Customer ${i}`}
                                                    width={32}
                                                    height={32}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="ml-1 text-xl font-bold text-gray-800">
                                        2400<span className="text-[#00a4f4]">+</span>
                                    </span>
                                </div>
                                <p className="text-[#00a4f4]">Happy Customers</p>
                                <div className="flex items-center">
                                    {[1, 2, 3, 4].map((i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" strokeWidth={0.5} />
                                    <span className="ml-1 text-sm text-gray-600">(4.7 Stars)</span>
                                </div>
                            </Card>

                            {/* Easy booking badge */}
                            <div className="absolute bottom-20 -left-4 z-20 flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-lg">
                                <Star className="h-5 w-5 fill-[#00a4f4] text-[#00a4f4]" />
                                <span className="text-[#00a4f4] font-medium">Easy Appointment Booking</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-12 w-full overflow-hidden rounded-lg bg-[#2cbeff]">
                    <div className="grid grid-cols-3 divide-x divide-[#0069ab]/20">
                        <div className="flex flex-col items-center py-8 text-white">
                            <h3 className="text-4xl font-bold sm:text-5xl">24/7</h3>
                            <p className="mt-1 text-sm sm:text-base">Online Support</p>
                        </div>
                        <div className="flex flex-col items-center py-8 text-white">
                            <h3 className="text-4xl font-bold sm:text-5xl">
                                100<span className="text-white">+</span>
                            </h3>
                            <p className="mt-1 text-sm sm:text-base">&nbsp;</p>
                        </div>
                        <div className="flex flex-col items-center py-8 text-white">
                            <h3 className="text-4xl font-bold sm:text-5xl">
                                1M<span className="text-white">+</span>
                            </h3>
                            <p className="mt-1 text-sm sm:text-base">Active Patients</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative curved line */}
            <div className="absolute bottom-0 left-0 h-32 w-32 translate-y-1/2 transform">
                <svg viewBox="0 0 100 100" className="h-full w-full fill-none stroke-[#2cbeff]/30 stroke-2">
                    <path d="M0,50 Q25,0 50,50 T100,50" />
                </svg>
            </div>
        </section>
    )
}
