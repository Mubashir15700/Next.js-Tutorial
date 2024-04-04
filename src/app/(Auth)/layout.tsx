"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "../styles.css"

const navLinks = [
    { name: "Sign Up", href: "/sign-up" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
    { name: "Verify Email", href: "/verify-email" }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            <h2>Auth Layout</h2>
            {children}
        </>
    )
}
