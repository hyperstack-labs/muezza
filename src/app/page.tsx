"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Smile, Lightbulb, TrendingUp, Users, Star } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const pillars = [
  {
    icon: Shield,
    title: "Character",
    arabic: "Al-Akhlaq",
    description:
      "No rug-pulls. No inflated promises. Every project here runs on verified integrity. The Anti-Scam ethos is not a slogan; it's the operating condition.",
    color: "#40916c",
  },
  {
    icon: Heart,
    title: "Charity",
    arabic: "Sadaqah",
    description:
      "Every interaction is coded with purpose. Smart contracts on SidraChain automatically send a share of value to Zakat and Sadaqah-verified causes worldwide.",
    color: "#e9c46a",
  },
  {
    icon: Smile,
    title: "Cheerfulness",
    arabic: "Bishr",
    description:
      "In a market that runs on FUD, Muezza brings Sakina: calm, clarity, direction. \"Onwards!\" is more than a word. It's the standing invitation to keep going.",
    color: "#74c69d",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    arabic: "Ibtikar",
    description:
      "SidraChain opens as a working sandbox for developers who think ethical innovation is the interesting kind. Pick a track. Start building.",
    color: "#f4a261",
  },
];

const stats = [
  { value: "2,947", unit: "SDA", label: "Total Contributions" },
  { value: "2.5", unit: "%", label: "Auto-distributed per tx" },
  { value: "Dec 25", unit: "'25", label: "Campaign Launched" },
  { value: "Apr 24", unit: "'26", label: "Campaign Expiry" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* ─── Hero ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(45, 106, 79, 0.18) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="grid-pattern"
          style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: copy */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <motion.div variants={fadeUp}>
              <span
                className="shimmer-badge"
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "Outfit, sans-serif",
                  color: "#0a1a11",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Live on SidraChain · Shariah-Compliant Web3
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#f0faf4",
              }}
            >
              Ethical Web3,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e9c46a 0%, #f4a261 50%, #e9c46a 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                actually live.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#a3c4b0",
                maxWidth: "520px",
              }}
            >
              Muezza is SidraChain's philanthropic ambassador. Every wallet interaction here gives back. Every token carries a charitable instruction. Every developer who builds here builds with a standard.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              style={{
                borderLeft: "3px solid #e9c46a",
                paddingLeft: "20px",
                margin: "8px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: "#74c69d",
                  lineHeight: 1.6,
                }}
              >
                "In the desert of volatility, the wise cat finds the shade. We do not build on sand. We build on trust. Onwards!"
              </p>
            </motion.blockquote>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", paddingTop: "8px" }}
            >
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
                  transition: "all 0.2s ease",
                }}
              >
                See Where SDA Goes <ArrowRight size={16} />
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
                  border: "1px solid rgba(82, 183, 136, 0.25)",
                  transition: "all 0.2s ease",
                }}
              >
                Start Building
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: real Muezza logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="animate-float"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/muezza-logo.png"
              alt="Muezza, the Ambassador of Baraqah on SidraChain"
              width={560}
              height={560}
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 0 60px rgba(233, 196, 106, 0.35)) drop-shadow(0 24px 48px rgba(0, 0, 0, 0.5))",
              }}
              priority
            />
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ─── Stats Bar ─── */}
      <section
        style={{
          borderTop: "1px solid rgba(82, 183, 136, 0.1)",
          borderBottom: "1px solid rgba(82, 183, 136, 0.1)",
          background: "rgba(13, 26, 18, 0.5)",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #f9c877, #f4a261)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
                <span style={{ fontSize: "0.5em", WebkitTextFillColor: "#a3c4b0" }}> {stat.unit}</span>
              </div>
              <p
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "13px",
                  color: "#5a806a",
                  marginTop: "6px",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <style>{`
          @media (max-width: 600px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ─── The 4 C's ─── */}
      <section style={{ padding: "100px 24px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27, 67, 50, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "64px" }}
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
              Built on four things
            </p>
            <h2
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                color: "#f0faf4",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              The{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f9c877, #f4a261)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4 C's
              </span>{" "}
              of Muezza
            </h2>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "17px",
                color: "#a3c4b0",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              How Muezza runs, and why it works.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  style={{
                    background: "rgba(13, 34, 24, 0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(82, 183, 136, 0.12)",
                    borderRadius: "16px",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    cursor: "default",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `rgba(${pillar.color === "#40916c" ? "64,145,108" : pillar.color === "#e9c46a" ? "233,196,106" : pillar.color === "#74c69d" ? "116,198,157" : "244,162,97"}, 0.15)`,
                      border: `1px solid ${pillar.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: pillar.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: pillar.color,
                        marginBottom: "4px",
                      }}
                    >
                      {pillar.arabic}
                    </p>
                    <h3
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#f0faf4",
                        marginBottom: "10px",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "14px",
                        color: "#a3c4b0",
                        lineHeight: "1.65",
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Muezza ─── */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(180deg, transparent 0%, rgba(13, 26, 18, 0.5) 50%, transparent 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="two-col-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              Why it&apos;s different
            </p>
            <h2
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#f0faf4",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              Web3 has a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f9c877, #f4a261)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                trust problem.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                color: "#a3c4b0",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Most meme projects disappear by Tuesday. Muezza does not. The charity distribution runs automatically on-chain. The sandbox is open. The code is auditable. None of this requires your trust in a team — it runs on the chain.
            </p>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                color: "#a3c4b0",
                lineHeight: 1.7,
              }}
            >
              That is what makes it different from every other project with a cat mascot and a roadmap PDF.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              { icon: TrendingUp, label: "No pump schemes", sub: "Stability over speculation. Full stop." },
              { icon: Shield, label: "Anti-scam by default", sub: "Not a feature. The baseline." },
              { icon: Heart, label: "Charity built in", sub: "Every interaction gives back. No opt-in required." },
              { icon: Users, label: "Open to builders", sub: "A real stage to ship ethical work on SidraChain." },
              { icon: Star, label: "Shariah-compliant", sub: "Aligned with Islamic financial principles from day one." },
            ].map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "18px 20px",
                  background: "rgba(13, 34, 24, 0.5)",
                  border: "1px solid rgba(82, 183, 136, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(64, 145, 108, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#40916c",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#f0faf4",
                      marginBottom: "3px",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontFamily: "Outfit, sans-serif", fontSize: "13px", color: "#5a806a" }}>
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .two-col-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              textAlign: "center",
              padding: "64px 48px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(27, 67, 50, 0.4), rgba(13, 34, 24, 0.8))",
              border: "1px solid rgba(82, 183, 136, 0.2)",
              backdropFilter: "blur(16px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(233, 196, 106, 0.08), transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "13px",
                color: "#40916c",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              You're invited
            </p>
            <h2
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#f0faf4",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Build something that holds up.
            </h2>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                color: "#a3c4b0",
                lineHeight: 1.6,
                maxWidth: "500px",
                margin: "0 auto 36px",
              }}
            >
              The Sandbox is live. SidraChain is live. Bring your ideas and a clean approach.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/sandbox"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                  color: "#f0faf4",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  boxShadow: "0 0 32px rgba(64, 145, 108, 0.4)",
                }}
              >
                Enter the Sandbox <ArrowRight size={16} />
              </Link>
              <Link
                href="/charity"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  borderRadius: "10px",
                  background: "transparent",
                  color: "#a3c4b0",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  border: "1px solid rgba(82, 183, 136, 0.2)",
                }}
              >
                Explore Giving
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
