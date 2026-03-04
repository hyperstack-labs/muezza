"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Muezza" },
    { href: "/charity", label: "Charity" },
    { href: "/sandbox", label: "Sandbox" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "all 0.3s ease",
                ...(scrolled
                    ? {
                        background: "rgba(7, 14, 10, 0.85)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderBottom: "1px solid rgba(82, 183, 136, 0.12)",
                    }
                    : { background: "transparent" }),
            }}
        >
            <nav
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "0 24px",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <Image
                        src="/muezza-logo.png"
                        alt="Muezza - Ambassador of Baraqah"
                        width={48}
                        height={48}
                        style={{ objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(233, 196, 106, 0.35))" }}
                        priority
                    />
                    <span
                        style={{
                            fontFamily: "Outfit, sans-serif",
                            fontWeight: 700,
                            fontSize: "18px",
                            background: "linear-gradient(135deg, #f9c877, #f4a261)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Muezza
                    </span>
                </Link>

                {/* Desktop nav */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden-mobile">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "8px 16px",
                                    borderRadius: "8px",
                                    fontFamily: "Outfit, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    ...(isActive
                                        ? {
                                            background: "rgba(64, 145, 108, 0.15)",
                                            color: "#74c69d",
                                            border: "1px solid rgba(82, 183, 136, 0.3)",
                                        }
                                        : {
                                            color: "#a3c4b0",
                                            border: "1px solid transparent",
                                        }),
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        (e.target as HTMLElement).style.color = "#f0faf4";
                                        (e.target as HTMLElement).style.background = "rgba(64, 145, 108, 0.08)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        (e.target as HTMLElement).style.color = "#a3c4b0";
                                        (e.target as HTMLElement).style.background = "transparent";
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/sandbox"
                        style={{
                            marginLeft: "8px",
                            padding: "9px 20px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            fontWeight: 600,
                            fontFamily: "Outfit, sans-serif",
                            textDecoration: "none",
                            background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                            color: "#f0faf4",
                            border: "1px solid rgba(82, 183, 136, 0.3)",
                            boxShadow: "0 0 16px rgba(64, 145, 108, 0.2)",
                            transition: "all 0.2s ease",
                        }}
                    >
                        Build on Sidra →
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        color: "#a3c4b0",
                        cursor: "pointer",
                        padding: "8px",
                    }}
                    className="show-mobile"
                    aria-label="Toggle mobile menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: "rgba(7, 14, 10, 0.95)",
                            backdropFilter: "blur(20px)",
                            borderBottom: "1px solid rgba(82, 183, 136, 0.12)",
                            padding: "16px 24px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                        }}
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        fontFamily: "Outfit, sans-serif",
                                        fontWeight: 500,
                                        fontSize: "15px",
                                        textDecoration: "none",
                                        color: isActive ? "#74c69d" : "#a3c4b0",
                                        background: isActive ? "rgba(64, 145, 108, 0.12)" : "transparent",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
