import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Medical Web App Admin Dashboard",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex`}>
            {/* You can add admin-specific UI elements here */}
            {/* <AdminSidebar /> */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}