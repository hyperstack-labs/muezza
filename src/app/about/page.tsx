"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Smile, Lightbulb, Sunrise, Eye, Compass } from "lucide-react";

const timeline = [
    {
        period: "The Ancient Story",
        description:
            "Muezza is named after the cat of the Prophet. A creature whose rest was so valued that a sleeve was cut away rather than disturb it. The legacy is simple: gentleness and care for the living world are not weaknesses. They are strength.",
    },
    {
        period: "The Digital Awakening",
        description:
            "In a blockchain space crowded with noise and volatility, a quiet figure emerges. Not a wolf. Not a bear. A cat. Patient, precise, and deliberate in every step he takes on-chain.",
    },
    {
        period: "The Mission Today",
        description:
            "Muezza does not chase green candles or announce grand schemes. He shows up, consistently and honestly, making sure every wallet that touches his world also touches something charitable and real.",
    },
    {
        period: "Now: The SidraChain Ecosystem",
        description:
            "SidraChain is live. The sandbox is open. Developers are already building Shariah-compliant dApps with Muezza's framework. The Zakat distribution contracts are deployed and auditable by anyone.",
    },
];

const traits = [
    {
        icon: Sunrise,
        title: "Hospitality - Welcome to the Oasis",
        description:
            "Every newcomer stepping into Web3 faces confusion, and often predators. Muezza's first word is always \"Welcome.\" His second is always a genuine direction, not a sales pitch.",
    },
    {
        icon: Compass,
        title: "Wisdom - Patience is the Harvest",
        description:
            "Most of this industry measures progress in 24-hour candles. Muezza measures it in what gets built, what gets distributed, and who benefits. Slow and deliberate is the Oasis way.",
    },
    {
        icon: Eye,
        title: "Integrity - The Anti-Scam Standard",
        description:
            "Clean Meme Culture is not an aesthetic. It is an operating policy. No anonymous founders. No anonymous contracts. No anonymous charity destinations. Full transparency, at all times.",
    },
    {
        icon: Shield,
        title: "Stability - Built on Trust, Not Sand",
        description:
            "Shariah-compliant principles require transactions to carry genuine value and avoid speculation. That is Sidra's core. That is Muezza's walk. No pump, no dump, growth only through real contribution.",
    },
];

export default function AboutPage() {
    return (
        <div style={{ minHeight: "100vh", background: "var(--background)" }}>
            {/* ─── Hero ─── */}
            <section
                style={{
                    position: "relative",
                    padding: "160px 24px 80px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(233, 196, 106, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 70% 60%, rgba(45, 106, 79, 0.15) 0%, transparent 60%)",
                        pointerEvents: "none",
                    }}
                />
                <div
                    className="grid-pattern"
                    style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}
                />

                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ maxWidth: "760px" }}
                    >
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "12px",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#e9c46a",
                                marginBottom: "16px",
                            }}
                        >
                            The Ambassador of Barakah
                        </p>
                        <h1
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(40px, 6vw, 68px)",
                                fontWeight: 800,
                                lineHeight: 1.05,
                                letterSpacing: "-0.03em",
                                color: "#f0faf4",
                                marginBottom: "24px",
                            }}
                        >
                            More than a meme.{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #e9c46a 0%, #f4a261 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                A standard.
                            </span>
                        </h1>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "18px",
                                color: "#a3c4b0",
                                lineHeight: 1.7,
                                maxWidth: "620px",
                                marginBottom: "32px",
                            }}
                        >
                            Muezza is not a concept. He is the operating face of SidraChain's ethical standards: the character who walks the talk on-chain, every transaction, every contribution, every build.
                        </p>
                    </motion.div>

                    {/* Image + story grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1.2fr",
                            gap: "64px",
                            alignItems: "start",
                            marginTop: "48px",
                        }}
                        className="about-grid"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div
                                style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src="/muezza-logo.png"
                                    alt="Muezza, the Ambassador of Baraqah"
                                    width={560}
                                    height={560}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        filter: "drop-shadow(0 0 40px rgba(233, 196, 106, 0.25))",
                                    }}
                                />
                            </div>

                            {/* Quote card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                style={{
                                    marginTop: "20px",
                                    padding: "24px",
                                    borderRadius: "14px",
                                    background: "rgba(27, 67, 50, 0.3)",
                                    border: "1px solid rgba(233, 196, 106, 0.2)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "15px",
                                        fontStyle: "italic",
                                        color: "#f9c877",
                                        lineHeight: 1.6,
                                        marginBottom: "8px",
                                    }}
                                >
                                    "He wakes up the sleepers, so they do not miss the dawn of a new era."
                                </p>
                                <p style={{ fontFamily: "Outfit, sans-serif", fontSize: "12px", color: "#5a806a" }}>
                                    The story behind the name
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: "flex", flexDirection: "column", gap: "0" }}
                        >
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12, duration: 0.6 }}
                                    style={{ display: "flex", gap: "24px", paddingBottom: i < timeline.length - 1 ? "36px" : "0" }}
                                >
                                    {/* Timeline spine */}
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                                        <div
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                borderRadius: "50%",
                                                background: i === 0 ? "#f9c877" : "#2d6a4f",
                                                border: `2px solid ${i === 0 ? "#f9c877" : "#40916c"}`,
                                                boxShadow: i === 0 ? "0 0 12px rgba(249, 200, 119, 0.5)" : "none",
                                                marginTop: "4px",
                                                flexShrink: 0,
                                            }}
                                        />
                                        {i < timeline.length - 1 && (
                                            <div
                                                style={{
                                                    width: "1px",
                                                    flexGrow: 1,
                                                    marginTop: "8px",
                                                    background: "linear-gradient(180deg, rgba(82, 183, 136, 0.3), rgba(82, 183, 136, 0.05))",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "11px",
                                                fontWeight: 700,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                color: "#40916c",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {item.period}
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "15px",
                                                color: "#a3c4b0",
                                                lineHeight: "1.65",
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <style>{`
          @media (max-width: 900px) {
            .about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </section>

            {/* ─── Character Traits ─── */}
            <section
                style={{
                    padding: "80px 24px",
                    background: "linear-gradient(180deg, transparent 0%, rgba(13, 26, 18, 0.4) 50%, transparent 100%)",
                }}
            >
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: "56px" }}
                    >
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "12px",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#40916c",
                                marginBottom: "12px",
                            }}
                        >
                            How he moves
                        </p>
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(28px, 4vw, 44px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                maxWidth: "520px",
                            }}
                        >
                            Four traits to know
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {traits.map((trait, i) => {
                            const Icon = trait.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -4 }}
                                    style={{
                                        padding: "28px",
                                        borderRadius: "16px",
                                        background: "rgba(13, 34, 24, 0.6)",
                                        border: "1px solid rgba(82, 183, 136, 0.12)",
                                        backdropFilter: "blur(12px)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "14px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "10px",
                                            background: "rgba(64, 145, 108, 0.12)",
                                            border: "1px solid rgba(82, 183, 136, 0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#52b788",
                                        }}
                                    >
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h3
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "16px",
                                                fontWeight: 700,
                                                color: "#f0faf4",
                                                marginBottom: "8px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {trait.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "14px",
                                                color: "#a3c4b0",
                                                lineHeight: "1.65",
                                            }}
                                        >
                                            {trait.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section style={{ padding: "80px 24px" }}>
                <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(28px, 4vw, 40px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                marginBottom: "16px",
                            }}
                        >
                            Curious about the{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #e9c46a, #f4a261)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                giving side?
                            </span>
                        </h2>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "16px",
                                color: "#a3c4b0",
                                lineHeight: 1.6,
                                marginBottom: "32px",
                            }}
                        >
                            Every token transaction includes a built-in commitment to charity. See exactly where contributions go and how SidraChain makes it automatic.
                        </p>
                        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link
                                href="/charity"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "14px 28px",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                                    color: "#f0faf4",
                                    fontFamily: "Outfit, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    textDecoration: "none",
                                    boxShadow: "0 0 24px rgba(64, 145, 108, 0.35)",
                                }}
                            >
                                See the Charity Model <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/sandbox"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "14px 28px",
                                    borderRadius: "10px",
                                    background: "rgba(27, 67, 50, 0.3)",
                                    color: "#a3c4b0",
                                    fontFamily: "Outfit, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    textDecoration: "none",
                                    border: "1px solid rgba(82, 183, 136, 0.2)",
                                }}
                            >
                                Explore the Sandbox
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
