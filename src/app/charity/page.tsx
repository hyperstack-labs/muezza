"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Globe, Zap, CheckCircle, ArrowUpRight } from "lucide-react";

const flowSteps = [
    {
        step: "01",
        title: "Interaction on SidraChain",
        description:
            "A user participates in the Muezza ecosystem, holding, transacting, or engaging with a smart contract on the Sidra blockchain.",
    },
    {
        step: "02",
        title: "Smart Contract Triggers Automatically",
        description:
            "A fixed percentage of the transaction value is routed by smart contract, no manual handling, no intermediary, no trust gap.",
    },
    {
        step: "03",
        title: "Verified Against Zakat Standards",
        description:
            "The receiving wallet is cross-checked against a pre-approved list of Shariah-verified charities covering Zakat and Sadaqah categories globally.",
    },
    {
        step: "04",
        title: "Funds Reach the Cause Directly",
        description:
            "Every transaction is recorded on-chain and auditable by anyone. Full transparency, zero ambiguity, and no handling fees skimmed off the top.",
    },
];

const causes = [
    {
        icon: Globe,
        title: "Global Emergency Relief",
        category: "Zakat-Eligible",
        description: "Direct assistance to communities facing food insecurity, displacement, and humanitarian crises, routed through vetted on-the-ground partners.",
        status: "Active",
    },
    {
        icon: Heart,
        title: "Orphan Sponsorship",
        category: "Sadaqah",
        description: "Ongoing support for orphaned children covering education, nutrition, and long-term welfare. Contributions qualify as perpetual Sadaqah.",
        status: "Active",
    },
    {
        icon: Zap,
        title: "Clean Water Access",
        category: "Sadaqah Jariyah",
        description: "Infrastructure projects bringing clean water to communities that lack consistent access. A Sadaqah Jariyah: a gift that keeps compounding.",
        status: "Active",
    },
];

export default function CharityPage() {
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
                            "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(233, 196, 106, 0.1) 0%, transparent 60%)",
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
                            On-chain giving � Running now
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
                            Charity that runs{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #e9c46a 0%, #f4a261 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                itself.
                            </span>
                        </h1>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "18px",
                                color: "#a3c4b0",
                                lineHeight: 1.7,
                                maxWidth: "600px",
                            }}
                        >
                            Every SDA interaction inside the Muezza ecosystem automatically routes a percentage to verified Zakat and Sadaqah charity wallets. No opt-in. No admin. The contract handles it.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "56px",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { value: "2,947.62", unit: "SDA", label: "Distributed to Charity" },
                            { value: "100%", unit: "", label: "On-chain, auditable by anyone" },
                            { value: "3", unit: "Causes", label: "Active right now" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: "20px 28px",
                                    borderRadius: "14px",
                                    background: "rgba(13, 34, 24, 0.7)",
                                    border: "1px solid rgba(82, 183, 136, 0.15)",
                                    backdropFilter: "blur(12px)",
                                    minWidth: "180px",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "clamp(24px, 3vw, 32px)",
                                        fontWeight: 800,
                                        background: "linear-gradient(135deg, #f9c877, #f4a261)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        lineHeight: 1.1,
                                        marginBottom: "4px",
                                    }}
                                >
                                    {stat.value} <span style={{ fontSize: "0.55em", WebkitTextFillColor: "#5a806a" }}>{stat.unit}</span>
                                </div>
                                <p style={{ fontFamily: "Outfit, sans-serif", fontSize: "13px", color: "#5a806a" }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── How it Works ─── */}
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
                            Under the hood
                        </p>
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(28px, 4vw, 44px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                maxWidth: "440px",
                            }}
                        >
                            Contributions: how they move from your wallet to a cause
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {flowSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                style={{
                                    padding: "28px",
                                    borderRadius: "16px",
                                    background: "rgba(13, 34, 24, 0.6)",
                                    border: "1px solid rgba(82, 183, 136, 0.12)",
                                    backdropFilter: "blur(12px)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "48px",
                                        fontWeight: 900,
                                        color: "rgba(45, 106, 79, 0.1)",
                                        lineHeight: 1,
                                        userSelect: "none",
                                    }}
                                >
                                    {step.step}
                                </div>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        padding: "6px 12px",
                                        borderRadius: "6px",
                                        background: "rgba(64, 145, 108, 0.12)",
                                        border: "1px solid rgba(82, 183, 136, 0.2)",
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "11px",
                                        fontWeight: 700,
                                        color: "#52b788",
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        marginBottom: "14px",
                                    }}
                                >
                                    Step {step.step}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "17px",
                                        fontWeight: 700,
                                        color: "#f0faf4",
                                        marginBottom: "10px",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "14px",
                                        color: "#a3c4b0",
                                        lineHeight: "1.65",
                                    }}
                                >
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Current Causes ─── */}
            <section style={{ padding: "80px 24px" }}>
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
                            Where the value goes
                        </p>
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(28px, 4vw, 44px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                            }}
                        >
                            Supported causes
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {causes.map((cause, i) => {
                            const Icon = cause.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -4 }}
                                    style={{
                                        padding: "32px",
                                        borderRadius: "16px",
                                        background: "rgba(13, 34, 24, 0.7)",
                                        border: "1px solid rgba(82, 183, 136, 0.12)",
                                        backdropFilter: "blur(12px)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                                        <div
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "12px",
                                                background: "rgba(64, 145, 108, 0.12)",
                                                border: "1px solid rgba(82, 183, 136, 0.2)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#52b788",
                                            }}
                                        >
                                            <Icon size={22} />
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                padding: "5px 10px",
                                                borderRadius: "100px",
                                                background: "rgba(64, 145, 108, 0.1)",
                                                border: "1px solid rgba(82, 183, 136, 0.2)",
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                color: "#52b788",
                                                fontFamily: "Outfit, sans-serif",
                                            }}
                                        >
                                            <CheckCircle size={10} />
                                            {cause.status}
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                letterSpacing: "0.09em",
                                                textTransform: "uppercase",
                                                color: "#e9c46a",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {cause.category}
                                        </p>
                                        <h3
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "19px",
                                                fontWeight: 700,
                                                color: "#f0faf4",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            {cause.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "14px",
                                                color: "#a3c4b0",
                                                lineHeight: "1.65",
                                            }}
                                        >
                                            {cause.description}
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontFamily: "Outfit, sans-serif",
                                            fontSize: "13px",
                                            color: "#52b788",
                                            textDecoration: "none",
                                            fontWeight: 600,
                                            marginTop: "auto",
                                        }}
                                    >
                                        View on-chain record <ArrowUpRight size={14} />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── Image / Visual ─── */}
            <section style={{ padding: "0 24px 80px" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(82, 183, 136, 0.15)",
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/charity-visual.png"
                            alt="Muezza's giving mechanism visualized: charity value flowing on-chain"
                            width={1280}
                            height={480}
                            style={{ width: "100%", height: "auto", display: "block", maxHeight: "500px", objectFit: "cover" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(90deg, rgba(7, 14, 10, 0.8) 0%, transparent 50%, rgba(7, 14, 10, 0.6) 100%)",
                                display: "flex",
                                alignItems: "center",
                                padding: "48px",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "#e9c46a",
                                        marginBottom: "12px",
                                    }}
                                >
                                    This is live
                                </p>
                                <h2
                                    style={{
                                        fontFamily: "Outfit, sans-serif",
                                        fontSize: "clamp(24px, 3.5vw, 40px)",
                                        fontWeight: 800,
                                        color: "#f0faf4",
                                        lineHeight: 1.15,
                                        letterSpacing: "-0.02em",
                                        maxWidth: "440px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Every share, every viral moment, carries a charitable instruction.
                                </h2>
                                <Link
                                    href="/sandbox"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "12px 24px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                                        color: "#f0faf4",
                                        fontFamily: "Outfit, sans-serif",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        textDecoration: "none",
                                        boxShadow: "0 0 20px rgba(64, 145, 108, 0.3)",
                                    }}
                                >
                                    Build with Purpose <ArrowRight size={15} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
