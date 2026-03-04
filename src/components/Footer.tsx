"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Send, Github, ExternalLink } from "lucide-react";

const footerLinks = {
    Explore: [
        { label: "Home", href: "/" },
        { label: "About Muezza", href: "/about" },
        { label: "Charity", href: "/charity" },
        { label: "Sandbox", href: "/sandbox" },
    ],
    Community: [
        { label: "SidraChain", href: "https://sidrachain.com", external: true },
        { label: "Twitter / X", href: "#", external: true },
        { label: "Telegram", href: "#", external: true },
        { label: "GitHub", href: "#", external: true },
    ],
    Principles: [
        { label: "Character (Al-Akhlaq)", href: "/about#character" },
        { label: "Charity (Sadaqah)", href: "/charity" },
        { label: "Cheerfulness (Bishr)", href: "/about#cheerfulness" },
        { label: "Creativity (Ibtikar)", href: "/sandbox" },
    ],
};

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid rgba(82, 183, 136, 0.12)",
                background: "linear-gradient(180deg, #070e0a 0%, #030704 100%)",
                padding: "64px 24px 32px",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                {/* Top section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "48px",
                        marginBottom: "64px",
                    }}
                >
                    {/* Brand column */}
                    <div style={{ gridColumn: "span 1" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                            <Image
                                src="/muezza-logo.png"
                                alt="Muezza logo"
                                width={44}
                                height={44}
                                style={{ objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(233, 196, 106, 0.3))" }}
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
                        </div>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "14px",
                                color: "#5a806a",
                                lineHeight: "1.7",
                                maxWidth: "260px",
                                marginBottom: "24px",
                            }}
                        >
                            "Patience is the key to the harvest." — The Ambassador of Barakah on SidraChain.
                        </p>
                        <div style={{ display: "flex", gap: "12px" }}>
                            {[Twitter, Send, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label="Social link"
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: "rgba(27, 67, 50, 0.4)",
                                        border: "1px solid rgba(82, 183, 136, 0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#5a806a",
                                        transition: "all 0.2s ease",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "#74c69d";
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(82, 183, 136, 0.4)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(64, 145, 108, 0.15)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "#5a806a";
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(82, 183, 136, 0.15)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(27, 67, 50, 0.4)";
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h3
                                style={{
                                    fontFamily: "Outfit, sans-serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "#5a806a",
                                    marginBottom: "16px",
                                }}
                            >
                                {section}
                            </h3>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            target={"external" in link && link.external ? "_blank" : undefined}
                                            rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "14px",
                                                color: "#a3c4b0",
                                                textDecoration: "none",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "4px",
                                                transition: "color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0faf4")}
                                            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#a3c4b0")}
                                        >
                                            {link.label}
                                            {"external" in link && link.external && (
                                                <ExternalLink size={12} style={{ opacity: 0.5 }} />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        paddingTop: "24px",
                        borderTop: "1px solid rgba(82, 183, 136, 0.08)",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                    }}
                >
                    <p style={{ fontFamily: "Outfit, sans-serif", fontSize: "13px", color: "#5a806a" }}>
                        © 2025–2026 Muezza · SidraChain Ambassador · All contributions Shariah-verified
                    </p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {["Privacy", "Terms", "Zakat Policy"].map((label) => (
                            <Link
                                key={label}
                                href="#"
                                style={{
                                    fontFamily: "Outfit, sans-serif",
                                    fontSize: "13px",
                                    color: "#5a806a",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#a3c4b0")}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5a806a")}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
