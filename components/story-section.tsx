import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StorySection() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-6xl rounded-3xl border border-[#e7f6ff] bg-white p-6 md:p-8 lg:p-12">
                    <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
                        <span className="text-[#2cbeff]">HealNet&apos;s Story:</span> Get to know us
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src="/f-doctor.png"
                                alt="Healthcare professionals team"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <p className="text-gray-600">
                                HealNet is more than just an online medical service; it&apos;s a movement towards accessible, efficient, and
                                compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and
                                technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no
                                matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity,
                                ensuring that every interaction is personalized and every treatment plan is tailored to your unique
                                needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive
                                care that&apos;s just a click away.
                            </p>

                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="rounded-xl bg-[#00a4f4] px-8 py-6 text-lg font-medium text-white hover:bg-[#0069ab]"
                                >
                                    <Link href="/about">Learn more about us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
