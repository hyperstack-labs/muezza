"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Package, GitBranch, Layers, Wifi, BookOpen, Terminal, Star } from "lucide-react";

const tracks = [
    {
        icon: Code2,
        title: "Shariah-Compliant Smart Contracts",
        level: "Intermediate",
        description:
            "Write contracts on SidraChain that avoid Riba (interest) and Gharar (ambiguity). Includes templates, code reviews, and deployment guides for the Sidra testnet.",
        tags: ["Solidity-like", "Sidra SDK", "Zakat Logic"],
    },
    {
        icon: Package,
        title: "Philanthropic dApp Boilerplate",
        level: "Beginner-Friendly",
        description:
            "A starter template with charitable contribution logic already wired in. Fork it, fill in your idea, and ship without writing the giving mechanism from scratch.",
        tags: ["Open Source", "Plug-and-play", "Free"],
    },
    {
        icon: GitBranch,
        title: "On-Chain Governance Tools",
        level: "Advanced",
        description:
            "Build community voting mechanisms for directing charitable distributions. The community decides. The chain enforces it. No admin key needed.",
        tags: ["DAO", "Community", "Transparency"],
    },
    {
        icon: Layers,
        title: "Meme and Creative Asset Tooling",
        level: "All Levels",
        description:
            "Tools for the cultural layer: NFTs, meme economy mechanics, and creative campaigns with Sadaqah distribution built into every engagement event.",
        tags: ["NFTs", "Creative", "Engagement"],
    },
    {
        icon: Wifi,
        title: "Sidra API Integration",
        level: "Intermediate",
        description:
            "Official APIs for reading and writing to SidraChain from your app. Data feeds, wallet auth, contribution tracking. The full stack is accessible.",
        tags: ["REST", "WebSocket", "SDKs"],
    },
    {
        icon: BookOpen,
        title: "Ethical Web3 Curriculum",
        level: "Beginner",
        description:
            "A structured learning path covering both the technical and ethical dimensions of blockchain. No prior Web3 experience required. Free, self-paced, and honest.",
        tags: ["Free", "Self-Paced", "Certificates"],
    },
];

const principles = [
    "No anonymous contracts. Every dApp must publish auditable code.",
    "No Riba-generating mechanics. Interest-based tokenomics are out.",
    "Charity contribution is required, not optional. That is how the sandbox works.",
    "Open source by default. The ecosystem grows faster when knowledge moves freely.",
];

export default function SandboxPage() {
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
                            "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(64, 145, 108, 0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(233, 196, 106, 0.06) 0%, transparent 60%)",
                        pointerEvents: "none",
                    }}
                />
                <div
                    className="grid-pattern"
                    style={{ position: "absolute", inset: 0, opacity: 0.7, pointerEvents: "none" }}
                />

                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1.1fr 1fr",
                        gap: "64px",
                        alignItems: "center",
                    }}
                    className="sandbox-grid"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Terminal-style badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 16px",
                                borderRadius: "8px",
                                background: "rgba(13, 34, 24, 0.8)",
                                border: "1px solid rgba(82, 183, 136, 0.25)",
                                marginBottom: "24px",
                                fontFamily: "'Geist Mono', monospace",
                                fontSize: "12px",
                                color: "#74c69d",
                            }}
                        >
                            <Terminal size={12} />
                            <span style={{ color: "#5a806a" }}>$</span> sidra init my-ethical-dapp
                        </div>

                        <h1
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(36px, 5.5vw, 64px)",
                                fontWeight: 800,
                                lineHeight: 1.05,
                                letterSpacing: "-0.03em",
                                color: "#f0faf4",
                                marginBottom: "24px",
                            }}
                        >
                            Build ethical.{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #74c69d 0%, #40916c 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Ship boldly.
                            </span>
                        </h1>

                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "18px",
                                color: "#a3c4b0",
                                lineHeight: 1.7,
                                maxWidth: "540px",
                                marginBottom: "16px",
                            }}
                        >
                            SidraChain's Creative Sandbox is where developers build decentralized applications without trading away Shariah standards, integrity, or creativity.
                        </p>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "16px",
                                color: "#5a806a",
                                lineHeight: 1.7,
                                maxWidth: "520px",
                                marginBottom: "36px",
                            }}
                        >
                            You don't have to choose between technical ambition and ethical practice. Here, they're the same thing.
                        </p>

                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            <Link
                                href="#tracks"
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
                                Explore Tracks <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/charity"
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
                                See Charity Model
                            </Link>
                        </div>
                    </motion.div>

                    {/* Code terminal — no image needed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            border: "1px solid rgba(82, 183, 136, 0.2)",
                            background: "rgba(8, 18, 12, 0.9)",
                            boxShadow: "0 0 60px rgba(64, 145, 108, 0.15), 0 32px 64px rgba(0, 0, 0, 0.5)",
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "13px",
                        }}
                    >
                        {/* Window chrome */}
                        <div style={{
                            padding: "12px 16px",
                            borderBottom: "1px solid rgba(82, 183, 136, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "rgba(13, 26, 18, 0.8)",
                        }}>
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                            <span style={{ marginLeft: 8, color: "#3d6b53", fontSize: "11px" }}>sidra-contract.js</span>
                        </div>
                        {/* Code body */}
                        <div style={{ padding: "24px", lineHeight: "1.8", overflowX: "auto" }}>
                            <div><span style={{ color: "#5a806a" }}>// Deploy a Shariah-compliant giving contract</span></div>
                            <div style={{ marginTop: "8px" }}>
                                <span style={{ color: "#74c69d" }}>import</span>
                                <span style={{ color: "#f0faf4" }}> {"{ SidraSDK }"} </span>
                                <span style={{ color: "#74c69d" }}>from</span>
                                <span style={{ color: "#f9c877" }}> &apos;@sidrachain/sdk&apos;</span>
                            </div>
                            <div style={{ marginTop: "16px" }}>
                                <span style={{ color: "#74c69d" }}>const</span>
                                <span style={{ color: "#a3c4b0" }}> sdk </span>
                                <span style={{ color: "#74c69d" }}>=</span>
                                <span style={{ color: "#74c69d" }}> new </span>
                                <span style={{ color: "#f9c877" }}>SidraSDK</span>
                                <span style={{ color: "#a3c4b0" }}>({"{ network: "}</span>
                                <span style={{ color: "#f9c877" }}>&apos;mainnet&apos;</span>
                                <span style={{ color: "#a3c4b0" }}>{" })"})</span>
                            </div>
                            <div style={{ marginTop: "16px" }}>
                                <span style={{ color: "#74c69d" }}>await</span>
                                <span style={{ color: "#a3c4b0" }}> sdk.</span>
                                <span style={{ color: "#f9c877" }}>deploy</span>
                                <span style={{ color: "#a3c4b0" }}>({"({"})</span>
                            </div>
                            <div style={{ paddingLeft: "20px", color: "#a3c4b0" }}>
                                <div>contract: <span style={{ color: "#f9c877" }}>&apos;ZakatRouter&apos;</span>,</div>
                                <div>charityRate: <span style={{ color: "#74c69d" }}>0.025</span>,  <span style={{ color: "#5a806a" }}>// 2.5% auto-distributed</span></div>
                                <div>verify: <span style={{ color: "#74c69d" }}>true</span>,      <span style={{ color: "#5a806a" }}>// Shariah audit flag</span></div>
                                <div>recipients: <span style={{ color: "#74c69d" }}>zakatWallets</span>,</div>
                            </div>
                            <div style={{ color: "#a3c4b0" }}>{"})"}</div>
                            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                                <span style={{ color: "#5a806a" }}>$</span>
                                <span style={{ color: "#74c69d" }}>✓</span>
                                <span style={{ color: "#f0faf4" }}> Contract deployed</span>
                                <span style={{ color: "#5a806a" }}>· tx: 0x4f2a…c8e1</span>
                            </div>
                        </div>
                        {/* Status bar */}
                        <div style={{
                            padding: "8px 16px",
                            borderTop: "1px solid rgba(82, 183, 136, 0.1)",
                            background: "rgba(64, 145, 108, 0.08)",
                            display: "flex",
                            gap: "16px",
                            fontSize: "11px",
                        }}>
                            <span style={{ color: "#40916c" }}>● SidraChain Mainnet</span>
                            <span style={{ color: "#5a806a" }}>Zakat-verified</span>
                            <span style={{ color: "#5a806a", marginLeft: "auto" }}>Gas: 0.0012 SDA</span>
                        </div>
                    </motion.div>
                </div>

                <style>{`
          @media (max-width: 900px) {
            .sandbox-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </section>

            {/* ─── Tracks ─── */}
            <section
                id="tracks"
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
                            What's available
                        </p>
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(28px, 4vw, 44px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                maxWidth: "480px",
                            }}
                        >
                            Developer tracks & tooling
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {tracks.map((track, i) => {
                            const Icon = track.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.6 }}
                                    whileHover={{ y: -4, borderColor: "rgba(82, 183, 136, 0.3)" }}
                                    style={{
                                        padding: "28px",
                                        borderRadius: "16px",
                                        background: "rgba(13, 34, 24, 0.6)",
                                        border: "1px solid rgba(82, 183, 136, 0.12)",
                                        backdropFilter: "blur(12px)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "14px",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                                        <span
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                color: "#5a806a",
                                                background: "rgba(27, 67, 50, 0.5)",
                                                padding: "4px 10px",
                                                borderRadius: "6px",
                                                border: "1px solid rgba(82, 183, 136, 0.1)",
                                            }}
                                        >
                                            {track.level}
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "17px",
                                                fontWeight: 700,
                                                color: "#f0faf4",
                                                marginBottom: "8px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {track.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: "Outfit, sans-serif",
                                                fontSize: "14px",
                                                color: "#a3c4b0",
                                                lineHeight: "1.65",
                                            }}
                                        >
                                            {track.description}
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                        {track.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontFamily: "Outfit, sans-serif",
                                                    fontSize: "11px",
                                                    fontWeight: 500,
                                                    color: "#40916c",
                                                    background: "rgba(64, 145, 108, 0.08)",
                                                    border: "1px solid rgba(64, 145, 108, 0.2)",
                                                    padding: "3px 10px",
                                                    borderRadius: "100px",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── The Standard ─── */}
            <section style={{ padding: "80px 24px" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            padding: "48px",
                            borderRadius: "20px",
                            background: "rgba(13, 34, 24, 0.7)",
                            border: "1px solid rgba(82, 183, 136, 0.15)",
                            backdropFilter: "blur(16px)",
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(22px, 3vw, 34px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                marginBottom: "8px",
                            }}
                        >
                            The Sandbox Standard
                        </h2>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "15px",
                                color: "#5a806a",
                                marginBottom: "32px",
                                lineHeight: 1.5,
                            }}
                        >
                            Participation in the creative ecosystem means agreeing to these operating principles. No exceptions.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {principles.map((principle, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    style={{
                                        display: "flex",
                                        gap: "14px",
                                        alignItems: "flex-start",
                                        padding: "16px 20px",
                                        borderRadius: "10px",
                                        background: "rgba(27, 67, 50, 0.2)",
                                        border: "1px solid rgba(82, 183, 136, 0.08)",
                                    }}
                                >
                                    <Star
                                        size={14}
                                        style={{ color: "#e9c46a", flexShrink: 0, marginTop: "3px" }}
                                        fill="#e9c46a"
                                    />
                                    <p
                                        style={{
                                            fontFamily: "Outfit, sans-serif",
                                            fontSize: "14px",
                                            color: "#a3c4b0",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        {principle}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section style={{ padding: "40px 24px 80px" }}>
                <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "24px",
                            }}
                        >
                            <Image
                                src="/muezza-logo.png"
                                alt="Muezza"
                                width={100}
                                height={100}
                                style={{ objectFit: "contain", filter: "drop-shadow(0 0 20px rgba(233, 196, 106, 0.3))" }}
                            />
                        </div>
                        <h2
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "clamp(26px, 4vw, 40px)",
                                fontWeight: 800,
                                color: "#f0faf4",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                marginBottom: "16px",
                            }}
                        >
                            Muezza is already here.{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #74c69d, #40916c)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Are you?
                            </span>
                        </h2>
                        <p
                            style={{
                                fontFamily: "Outfit, sans-serif",
                                fontSize: "16px",
                                color: "#a3c4b0",
                                lineHeight: 1.6,
                                maxWidth: "480px",
                                margin: "0 auto 32px",
                            }}
                        >
                            The Oasis does not require credentials, only honest intention. The chain is live and the sandbox is open.
                        </p>
                        <Link
                            href="https://sidrachain.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "16px 36px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                                color: "#f0faf4",
                                fontFamily: "Outfit, sans-serif",
                                fontWeight: 700,
                                fontSize: "16px",
                                textDecoration: "none",
                                boxShadow: "0 0 32px rgba(64, 145, 108, 0.4)",
                            }}
                        >
                            Go to SidraChain <ArrowRight size={17} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
