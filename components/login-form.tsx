"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log({ email, password, rememberMe })
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6 p-4">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight">Nice to see you again</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email or phone number"
                        className="h-12 rounded-md bg-gray-100"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="h-12 rounded-md bg-gray-100 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="remember-me"
                            checked={rememberMe}
                            onCheckedChange={setRememberMe}
                            className="data-[state=checked]:bg-[#00a4f4]"
                        />
                        <Label htmlFor="remember-me" className="text-sm font-normal">
                            Remember me
                        </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm font-medium text-[#00a4f4] hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <Button
                    type="submit"
                    className="w-full rounded-md bg-[#00a4f4] py-6 text-base font-medium text-white hover:bg-[#0069ab]"
                >
                    Sign in
                </Button>

                <div className="relative mb-6 mt-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                </div>

                <div className="text-center text-sm">
                    <span className="text-gray-700">Don't have an account? </span>
                    <Link href="/signup" className="font-medium text-[#00a4f4] hover:underline">
                        Sign up now
                    </Link>
                </div>
            </form>
        </div>
    )
}
