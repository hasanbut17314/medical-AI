import Image from "next/image"

interface Testimonial {
    id: number
    name: string
    quote: string
    image: string
}

interface Statistic {
    value: string
    label: string
}

export function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Linda A.",
            quote:
                "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
            image: "/customer1.png",
        },
        {
            id: 2,
            name: "Henry B.",
            quote:
                "Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.",
            image: "/customer2.png",
        },
        {
            id: 3,
            name: "Joshua T.",
            quote:
                "The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free.",
            image: "/customer3.png",
        },
        {
            id: 4,
            name: "Samantha K.",
            quote:
                "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.",
            image: "/customer4.png",
        },
    ]

    const statistics: Statistic[] = [
        {
            value: "10,000+",
            label: "Successful Consultations",
        },
        {
            value: "2,500+",
            label: "Healthcare Professionals",
        },
        {
            value: "98%",
            label: "Patient Satisfaction Rate",
        },
        {
            value: "200+",
            label: "Top Specialists",
        },
    ]

    return (
        <section className="relative w-full overflow-hidden py-16 max-w-7xl mx-auto">
            {/* Decorative dots pattern top left */}
            <div className="absolute left-0 top-0 h-48 w-48 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#2cbeff">
                        {Array.from({ length: 10 }).map((_, i) =>
                            Array.from({ length: 10 }).map((_, j) => (
                                <circle key={`${i}-${j}`} cx={i * 10 + 5} cy={j * 10 + 5} r={2} />
                            )),
                        )}
                    </g>
                </svg>
            </div>

            {/* Decorative dots pattern bottom right */}
            <div className="absolute bottom-0 right-0 h-48 w-48 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#2cbeff">
                        {Array.from({ length: 10 }).map((_, i) =>
                            Array.from({ length: 10 }).map((_, j) => (
                                <circle key={`${i}-${j}`} cx={i * 10 + 5} cy={j * 10 + 5} r={2} />
                            )),
                        )}
                    </g>
                </svg>
            </div>

            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            <span className="text-[#2cbeff]">Patient Testimonials:</span>
                            <br />
                            Hear from Those We've Cared For
                        </h2>
                        <p className="mx-auto mb-12 max-w-3xl text-muted-foreground">
                            Discover the difference we make through the voices of those we've served:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {testimonials.slice(0, 2).map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="rounded-xl border border-[#e7f6ff] bg-white p-6 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="text-gray-700">"{testimonial.quote}"</p>
                                        <p className="mt-2 font-medium text-gray-900">- {testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Statistics */}
                    <div className="my-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {statistics.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-4xl font-bold text-[#2cbeff] md:text-5xl">{stat.value}</span>
                                <span className="mt-2 text-sm text-gray-600 md:text-base">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {testimonials.slice(2, 4).map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="rounded-xl border border-[#e7f6ff] bg-white p-6 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="text-gray-700">"{testimonial.quote}"</p>
                                        <p className="mt-2 font-medium text-gray-900">- {testimonial.name}</p>
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
