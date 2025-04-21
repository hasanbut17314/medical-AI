import { Calendar, FileText, MessageSquare, Pill, ClipboardList } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
    const services = [
        {
            icon: <MessageSquare className="h-8 w-8 text-[#0069ab]" />,
            title: "Online Consultations",
            description:
                "Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.",
        },
        {
            icon: <Calendar className="h-8 w-8 text-[#0069ab]" />,
            title: "Booking Appointments",
            description:
                "Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.",
        },
        {
            icon: <FileText className="h-8 w-8 text-[#0069ab]" />,
            title: "Prescriptions",
            description: "Receive and renew prescriptions digitally after your consultation with our specialists.",
        },
        {
            icon: <ClipboardList className="h-8 w-8 text-[#0069ab]" />,
            title: "Medical Notes",
            description: "Obtain necessary medical notes for work or school with only a few clicks of hassle.",
        },
        {
            icon: <Pill className="h-8 w-8 text-[#0069ab]" />,
            title: "Medicine Refills",
            description: "Skip the pharmacy queues and save time + energy by ordering medicine refills online.",
        },
    ]

    return (
        <section className="relative w-full overflow-hidden py-16">
            <div className="max-w-7xl mx-auto px-3 md:px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Top <span className="text-[#2cbeff]">services</span> we offer
                    </h2>
                    <p className="mb-12 text-muted-foreground">
                        In today&apos;s fast-paced world, your health deserves the utmost attention and convenience. That&apos;s why HealNet
                        offers a suite of integrated services designed to cater to your healthcare needs digitally:
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden rounded-xl border border-[#e7f6ff] shadow-sm transition-all hover:shadow-md"
                        >
                            <CardContent className="p-6">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="mb-2 text-xl font-bold text-[#0069ab]">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Decorative wave pattern */}
            <div className="absolute bottom-5 right-20 -z-10 h-32 w-32 md:h-48 md:w-48">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path d="M0,50 Q25,40 50,50 T100,50" stroke="#2cbeff" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M0,70 Q25,60 50,70 T100,70" stroke="#0069ab" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path
                        d="M0,90 Q25,80 50,90 T100,90"
                        stroke="#2cbeff"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </section>
    )
}
