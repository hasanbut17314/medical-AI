"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export interface BookingForm {
    fullName: string
    phoneNumber: string
    address: string
    email: string
    gender: string
    age: string
    condition: string
    symptoms: string
}

export function BookingForm({ handleBooking }: { handleBooking: (data: BookingForm) => void }) {
    const [formData, setFormData] = useState<BookingForm>({
        fullName: "",
        phoneNumber: "",
        address: "",
        email: "",
        gender: "",
        age: "",
        condition: "other",
        symptoms: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Perform validation if needed
        // Call the handleBooking function with the form data
        handleBooking(formData)
    }

    return (
        <div className="mx-auto w-full max-w-4xl p-4">
            <h1 className="mb-8 text-center text-3xl font-bold text-[#00a4f4]">Step-by-Step Booking Form</h1>

            <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Details */}
                <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">Step 1: Your Details</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-gray-600">
                                full name
                            </Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="rounded-md border-gray-300 p-4"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-gray-600">
                                Phone Number
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="rounded-md border-gray-300 p-4"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address" className="text-gray-600">
                                Address
                            </Label>
                            <Input
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="rounded-md border-gray-300 p-4"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-600">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-md border-gray-300 p-4"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="gender" className="text-gray-600">
                                Gender
                            </Label>
                            <Input
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="rounded-md border-gray-300 p-4"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="age" className="text-gray-600">
                                Age
                            </Label>
                            <Input
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="rounded-md border-gray-300 p-4"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Step 2: Symptoms */}
                <div className="mb-8">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h2 className="mb-1 text-xl font-semibold">Step 2: What do you need help with?</h2>
                            <p className="text-gray-600">Tell us what you&apos;re feeling. Our AI will help find the right doctor</p>
                        </div>
                        <div className="w-full md:w-64">
                            <Select value={formData.condition} onValueChange={(value) => handleSelectChange("condition", value)}>
                                <SelectTrigger className="h-12 rounded-md border-gray-300">
                                    <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="other">Other</SelectItem>
                                    <SelectItem value="cold">Cold & Flu</SelectItem>
                                    <SelectItem value="allergy">Allergies</SelectItem>
                                    <SelectItem value="skin">Skin Conditions</SelectItem>
                                    <SelectItem value="mental">Mental Health</SelectItem>
                                    <SelectItem value="chronic">Chronic Disease</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Textarea
                            id="symptoms"
                            name="symptoms"
                            value={formData.symptoms}
                            onChange={handleChange}
                            placeholder="Type symptoms"
                            className="min-h-[150px] rounded-md border-gray-300 p-4"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="rounded-md bg-[#00a4f4] px-8 py-6 text-lg font-medium text-white hover:bg-[#0069ab]"
                    >
                        Start Booking <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </form>
        </div>
    )
}
