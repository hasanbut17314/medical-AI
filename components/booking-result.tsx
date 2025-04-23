import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Globe, Github } from "lucide-react"

export default function BookingResult() {
    interface Doctor {
        id: string
        name: string
        title: string
        description: string
        price: number
        location: string
        image: string
    }

    const doctors: Doctor[] = [
        {
            id: "1",
            name: "Dr. Bonnie Green",
            title: "Cardiologist",
            description: "Specializing in heart health and cardiovascular care with over 10 years of experience.",
            price: 150,
            location: "New York",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            id: "2",
            name: "Dr. Thomas Lean",
            title: "General Practitioner",
            description: "Providing comprehensive primary care for patients of all ages.",
            price: 100,
            location: "Chicago",
            image: "/placeholder.svg?height=300&width=400",
        },
    ]
    return (
        <main className="flex min-h-screen flex-col bg-white py-8">
            <h1 className="mb-8 text-center text-3xl font-bold">Choose Your Doctor</h1>

            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {doctors.map((doctor) => (
                        <Card key={doctor.id} className="overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={"/placeholder.svg"}
                                    alt={doctor.name}
                                    width={400}
                                    height={300}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-[#233876]">{doctor.name}</h3>
                                <p className="mb-4 text-gray-500">{doctor.title}</p>
                                <p className="mb-4 text-gray-600">{doctor.description}</p>
                                <div className="mb-4">
                                    <p className="text-gray-700">
                                        <span className="font-medium">Price:</span> ${doctor.price}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Location:</span> {doctor.location}
                                    </p>
                                </div>
                                <div className="flex space-x-4">
                                    <Link href="#" className="text-gray-400 hover:text-[#00a4f4]">
                                        <Facebook size={20} />
                                        <span className="sr-only">Facebook</span>
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-[#00a4f4]">
                                        <Twitter size={20} />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-[#00a4f4]">
                                        <Globe size={20} />
                                        <span className="sr-only">Website</span>
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-[#00a4f4]">
                                        <Github size={20} />
                                        <span className="sr-only">Github</span>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>

        </main>
    )
}
