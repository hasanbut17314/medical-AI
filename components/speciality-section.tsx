"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase, FlaskRoundIcon as Flask, Heart, Gift, Activity, Radio, Users } from "lucide-react"

type Specialty = {
    id: string
    name: string
    selected: boolean
}

export function SpecialtiesSection() {
    const [specialties, setSpecialties] = useState<Specialty[]>([
        { id: "dentist", name: "Dentist", selected: false },
        { id: "padriatric", name: "Padriatric", selected: false },
        { id: "cardiology", name: "Cardiology", selected: false },
        { id: "othopaedi", name: "Othopaedi", selected: true },
        { id: "traumatologi", name: "Traumatologi", selected: true },
        { id: "anestesiologi", name: "Anestesiologi", selected: true },
        { id: "reumatologi", name: "Reumatologi", selected: false },
        { id: "andrologi", name: "Andrologi", selected: false },
        { id: "ortodonsia", name: "Ortodonsia", selected: false },
    ])

    const toggleSpecialty = (id: string) => {
        setSpecialties(
            specialties.map((specialty) =>
                specialty.id === id ? { ...specialty, selected: !specialty.selected } : specialty,
            ),
        )
    }

    return (
        <section className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left side - Specialties diagram */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Outer circle */}
                            <div className="absolute inset-0 rounded-full border border-[#03a9f4]/30"></div>

                            {/* Middle circle */}
                            <div className="absolute inset-[60px] rounded-full border border-[#03a9f4]/30"></div>

                            {/* Center blue circle with text */}
                            <div className="absolute inset-[120px] flex items-center justify-center rounded-full bg-[#03a9f4] text-white">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold sm:text-3xl">Our</h3>
                                    <h3 className="text-2xl font-bold sm:text-3xl">Speciality</h3>
                                </div>
                            </div>

                            {/* Icons positioned around the circles */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Briefcase className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            <div className="absolute top-1/4 right-0 translate-x-1/2 transform">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Heart className="h-5 w-5 text-white" />
                                </div>
                            </div>

                            <div className="absolute top-1/2 right-0 translate-x-1/2 transform">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Gift className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 right-1/4 translate-y-1/2 transform">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Activity className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-1/4 translate-y-1/2 transform">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Radio className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-0 -translate-x-1/2 transform">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Flask className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            <div className="absolute top-1/4 left-0 -translate-x-1/2 transform">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03a9f4]">
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                            </div>

                            {/* Invisible div to maintain aspect ratio */}
                            <div className="aspect-square w-full"></div>
                        </div>
                    </div>

                    {/* Right side - Text and specialty buttons */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                There is no way to live life now unless you always want to.
                            </h2>
                            <p className="mt-4 text-gray-500">
                                Chat enforcement photography lorem or warm-up propaganda gate ID. Police carton loud no, pregnant
                                photography wants sterilized at. But the normal vehicle.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {specialties.map((specialty) => (
                                <Button
                                    key={specialty.id}
                                    variant={specialty.selected ? "default" : "outline"}
                                    className={`rounded-full ${specialty.selected
                                        ? "bg-[#03a9f4] hover:bg-[#0196de] text-white"
                                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                                        }`}
                                    onClick={() => toggleSpecialty(specialty.id)}
                                >
                                    {specialty.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
