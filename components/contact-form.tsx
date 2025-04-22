"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, User, ArrowRight } from "lucide-react"

export function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !email) return

        setIsSubmitting(true)
        // Here you would typically send the form data to your backend
        // For demonstration, we'll just simulate a delay
        setTimeout(() => {
            setIsSubmitting(false)
            // Reset form after submission
            setName("")
            setEmail("")
            // Show success message or redirect
            alert("Thank you! Our support team will contact you shortly.")
        }, 1000)
    }

    return (
        <section className="w-full py-12 md:py-16" id="contact">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Reach our{" "}
                        <span className="bg-gradient-to-r from-[#0069ab] to-[#2cbeff] bg-clip-text text-transparent">
                            Help Desk
                        </span>{" "}
                        for support
                    </h2>
                    <p className="mb-12 text-lg text-muted-foreground">
                        Questions? Need assistance? Our dedicated support team is here to help you every step of the way:
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row">
                        <div className="relative flex-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <User className="h-5 w-5 text-[#0069ab]" />
                            </div>
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Your First Name"
                                className="rounded-xl border-[#e7f6ff] pl-10 py-6 focus-visible:ring-[#0069ab]"
                                required
                            />
                        </div>
                        <div className="relative flex-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Mail className="h-5 w-5 text-[#0069ab]" />
                            </div>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email Address"
                                className="rounded-xl border-[#e7f6ff] pl-10 py-6 focus-visible:ring-[#0069ab]"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting || !name || !email}
                            className="rounded-xl bg-[#00a4f4] px-8 py-6 text-lg font-medium text-white hover:bg-[#0069ab]"
                        >
                            Contact us <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
