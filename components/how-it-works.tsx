import Image from "next/image"
import { Star } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Create Your Profile",
            description:
                "Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.",
        },
        {
            number: 2,
            title: "Choose Your Service",
            description:
                "Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.",
        },
        {
            number: 3,
            title: "Meet Your Doctor",
            description:
                "Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.",
        },
    ]

    return (
        <section className="relative w-full overflow-hidden py-14">
            {/* Decorative cross in top right */}
            <div className="absolute right-0 top-0 h-24 w-24 text-[#2cbeff]">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <rect x="40" y="0" width="20" height="100" />
                    <rect x="0" y="40" width="100" height="20" />
                </svg>
            </div>

            {/* Decorative cross in bottom right */}
            <div className="absolute bottom-0 right-0 h-32 w-32 text-[#2cbeff]/30">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                    <path d="M20,20 L80,20 L80,80 L20,80 L20,20" />
                    <path d="M50,20 L50,80" />
                    <path d="M20,50 L80,50" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        How <span className="text-[#2cbeff]">our platform</span> works
                    </h2>
                    <p className="mb-12 max-w-3xl text-muted-foreground">
                        Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned below to
                        proceed with your selected services. You can also see our FAQ section for more guidance:
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="relative">
                            {/* Vertical dotted line connecting steps */}
                            <div className="absolute left-[30px] top-0 h-full w-0.5 border-l-2 border-dashed border-[#2cbeff]/50 md:left-[36px]"></div>

                            <div className="space-y-12 md:space-y-16">
                                {steps.map((step) => (
                                    <div key={step.number} className="relative flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2cbeff] text-2xl font-bold text-white md:h-18 md:w-18 md:text-3xl">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-2xl font-bold text-gray-800 md:text-3xl">{step.title}</h3>
                                            <p className="mt-2 text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="relative rounded-3xl border border-[#e7f6ff] bg-white p-2">
                                <Image
                                    src="/f-doctor2.png"
                                    alt="Doctor with stethoscope"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl"
                                />

                                {/* Badge */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-white px-4 py-2 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Star className="h-5 w-5 fill-[#2cbeff] text-[#2cbeff]" />
                                        <span className="text-[#0069ab] font-medium">Best Certified Team of Specialists</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
