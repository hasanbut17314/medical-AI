import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface Specialist {
    id: number
    name: string
    title: string
    description: string
    image: string
}

export function SpecialistsTeam() {
    const specialists: Specialist[] = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            title: "Cardiologist",
            description:
                "Heart health is Dr. Wong's passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She's a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.",
            image: "/f-doctor3.png",
        },
        {
            id: 2,
            name: "Dr. Mark Lee",
            title: "Dermatologist",
            description:
                "Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He's known for his precision and commitment to patient-centered care.",
            image: "/doctor.png",
        },
    ]

    return (
        <section className="relative w-full overflow-hidden py-16" id="doctors">
            {/* Decorative dots pattern left side */}
            <div className="absolute bottom-1/4 left-0 h-32 w-32 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#2cbeff">
                        {Array.from({ length: 6 }).map((_, i) =>
                            Array.from({ length: 6 }).map((_, j) => (
                                <circle key={`${i}-${j}`} cx={i * 10 + 5} cy={j * 10 + 5} r={2} />
                            )),
                        )}
                    </g>
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            <span className="text-[#2cbeff]">Masters of Medicine:</span>
                            <br />
                            Meet our team of specialists
                        </h2>
                        <p className="mx-auto mb-12 max-w-3xl text-muted-foreground">
                            Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend
                            of expertise, empathy, and experience to ensure that your health is in the best hands:
                        </p>
                    </div>

                    <div className="space-y-8">
                        {specialists.map((specialist, index) => (
                            <div
                                key={specialist.id}
                                className={`overflow-hidden rounded-3xl bg-gradient-to-r from-[#2cbeff] to-[#0069ab] ${index % 2 === 0 ? "" : "flex-row-reverse"
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3">
                                        <Image
                                            src={specialist.image || "/placeholder.svg"}
                                            alt={specialist.name}
                                            width={400}
                                            height={500}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                                        <h3 className="mb-1 text-2xl font-bold text-white md:text-3xl">
                                            {specialist.name} <span className="font-normal">({specialist.title})</span>
                                        </h3>
                                        <p className="mb-6 text-white/90">{specialist.description}</p>
                                        <div>
                                            <Button
                                                asChild
                                                className="rounded-xl bg-white px-6 py-2 text-[#0069ab] hover:bg-gray-100"
                                                variant="outline"
                                            >
                                                <Link href="/appointment">
                                                    Book appointment <Phone className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
