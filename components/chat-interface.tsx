"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function AIChatInterface() {
    const [problem, setProblem] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!problem.trim()) return

        setIsLoading(true)
        // Here you would typically send the problem to your AI backend
        // For demonstration, we'll just simulate a delay
        setTimeout(() => {
            setIsLoading(false)
            // Handle the response from your AI
            console.log("Problem submitted:", problem)
            // Reset the input after submission if desired
            // setProblem("")
        }, 1000)
    }

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            {/* Decorative dots */}
            <div className="absolute z-[-1] -bottom-8 -left-16 w-32 h-32 pointer-events-none">
                <div className="grid grid-cols-5 gap-2">
                    {[...Array(25)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00a4f4]/40"></div>
                    ))}
                </div>
            </div>

            <Card className="border z-30 border-[#e7e7e7] rounded-3xl shadow-sm">
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00a4f4] mb-6">Ask your problem to AI</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                        <Textarea
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            placeholder="Enter Your problem"
                            className="min-h-[120px] md:min-h-[80px] flex-1 resize-none border-[#e7e7e7] rounded-xl focus-visible:ring-[#00a4f4]"
                        />
                        <Button
                            type="submit"
                            disabled={isLoading || !problem.trim()}
                            className="bg-[#00a4f4] hover:bg-[#0069ab] text-white rounded-xl px-6 py-6 h-auto md:self-end"
                        >
                            {isLoading ? "Processing..." : "Chat with AI"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
