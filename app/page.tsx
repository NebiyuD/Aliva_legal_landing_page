"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./components/Logo";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // LegalAI Brand Colors
  const colors = {
    background: "#FAFAF8",
    foreground: "#0F172A",
    card: "#FFFFFF",
    secondary: "#F1F5F9",
    muted: "#64748B",
    border: "#E2E8F0",
    slateWarm: "#475569",
    gold: "#D4A574",
    goldLight: "#FEF3E7",
    accentText: "#92400E",
    navy: "#0F172A",
    navyLight: "#1E293B",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  };

  // Animation styles
  const fadeUp = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const fadeIn = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transition: `opacity 0.6s ease ${delay}s`,
  });

  const scaleIn = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "scale(1)" : "scale(0.95)",
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const slideInRight = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateX(0)" : "translateX(40px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <main style={{ minHeight: "100vh", background: colors.navy, overflow: "hidden" }}>
      {/* Keyframe animations via style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 165, 116, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 165, 116, 0.5); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes typing {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #D4A574 0%, #F5D799 50%, #D4A574 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
        .hover-scale { transition: transform 0.2s ease; }
        .hover-scale:hover { transform: scale(1.02); }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          HEADER
          ══════════════════════════════════════════════════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "12px 24px",
          ...fadeUp(0.1),
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px 28px",
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Logo className="h-20 w-auto" />
              </Link>

              <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[
                { name: "Features", href: "/features" },
                { name: "Security", href: "#security" },
                { name: "Pricing", href: "/pricing" },
              ].map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover-scale"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#FAFAFA",
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: 8,
                    ...fadeIn(0.2 + i * 0.05),
                  }}
                >
                  {item.name}
                </Link>
              ))}
              </nav>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <a
                href="#"
                className="hover-lift"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: colors.navy,
                  padding: "10px 22px",
                  background: `linear-gradient(135deg, ${colors.gold} 0%, #C4956A 100%)`,
                  borderRadius: 100,
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(212, 165, 116, 0.4)",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: 160,
          paddingBottom: 100,
          background: `linear-gradient(180deg, ${colors.navy} 0%, ${colors.navyLight} 100%)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "500px",
            background: `radial-gradient(ellipse at center, rgba(212, 165, 116, 0.15) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontSize: 58,
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#FAFAFA",
                  marginBottom: 28,
                  ...fadeUp(0.3),
                }}
              >
                Find any document in seconds with{" "}
                <span className="shimmer-text">
                  AI-powered search.
                </span>
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: colors.muted,
                  maxWidth: 480,
                  marginBottom: 40,
                  ...fadeUp(0.4),
                }}
              >
                Aliva uses AI to summarize complex legal documents, search through convoluted databases, and surface the information your team needs — instantly.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 48, ...fadeUp(0.5) }}>
                <a
                  href="#"
                  className="hover-lift"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    color: colors.navy,
                    padding: "16px 32px",
                    background: `linear-gradient(135deg, ${colors.gold} 0%, #C4956A 100%)`,
                    borderRadius: 100,
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(212, 165, 116, 0.4)",
                  }}
                >
                  Start Free Trial
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover-scale"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#FAFAFA",
                    padding: "16px 32px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100,
                    textDecoration: "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Demo
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, ...fadeUp(0.6) }}>
                <div style={{ display: "flex" }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, hsl(${30 - i * 5}, 50%, ${60 - i * 8}%) 0%, hsl(${30 - i * 5}, 60%, ${50 - i * 8}%) 100%)`,
                        border: `2px solid ${colors.navyLight}`,
                        marginLeft: i > 0 ? -10 : 0,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: 14, color: "#FAFAFA", fontWeight: 600 }}>Trusted by PI firms nationwide</p>
                  <p style={{ fontSize: 13, color: colors.muted }}>From solo practitioners to multi-attorney firms</p>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div
              className="float-animation"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                ...slideInRight(0.4),
              }}
            >
              <div style={{ background: colors.background, borderRadius: 16, overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 16px",
                    background: colors.secondary,
                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      padding: "6px 14px",
                      background: colors.card,
                      borderRadius: 8,
                      fontSize: 12,
                      color: colors.muted,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    app.aliva.legal/documents
                  </div>
                </div>

                <div style={{ padding: 20, background: colors.background }}>
                  {/* Search Bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 18px",
                      background: colors.card,
                      borderRadius: 12,
                      border: `1px solid ${colors.border}`,
                      marginBottom: 16,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.gold} strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <span style={{ fontSize: 14, color: colors.muted }}>Search medical records for treatment timeline...</span>
                    <span style={{ marginLeft: "auto", padding: "4px 8px", background: colors.goldLight, borderRadius: 6, fontSize: 11, fontWeight: 600, color: colors.accentText }}>AI</span>
                  </div>

                  {/* AI Summary Card */}
                  <div
                    style={{
                      padding: 16,
                      background: `linear-gradient(135deg, ${colors.goldLight} 0%, rgba(254, 243, 231, 0.5) 100%)`,
                      borderRadius: 12,
                      border: "1px solid rgba(212, 165, 116, 0.2)",
                      marginBottom: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.gold} strokeWidth="2">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      <span style={{ fontSize: 12, fontWeight: 600, color: colors.accentText }}>AI Summary</span>
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: colors.foreground }}>
                      Found <strong>23 documents</strong> across 3 providers. Key finding: Treatment began 48hrs post-accident with ER visit, followed by 12 PT sessions over 8 weeks.
                    </p>
                  </div>

                  {/* Document Results */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { name: "ER_Admission_Report.pdf", type: "Medical Record", date: "Mar 15, 2024", relevance: 98 },
                      { name: "PT_Progress_Notes.pdf", type: "Treatment Notes", date: "Apr 22, 2024", relevance: 94 },
                      { name: "MRI_Lumbar_Spine.pdf", type: "Imaging", date: "Mar 18, 2024", relevance: 89 },
                    ].map((doc, i) => (
                      <div
                        key={doc.name}
                        className="hover-scale"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 14px",
                          background: colors.card,
                          borderRadius: 10,
                          border: `1px solid ${colors.border}`,
                          cursor: "pointer",
                          ...fadeIn(0.6 + i * 0.1),
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 8,
                              background: colors.secondary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.slateWarm} strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                            </svg>
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: colors.foreground }}>{doc.name}</div>
                            <div style={{ fontSize: 11, color: colors.muted }}>{doc.type} · {doc.date}</div>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: "4px 8px",
                            borderRadius: 6,
                            background: doc.relevance >= 95 ? "rgba(16, 185, 129, 0.1)" : "rgba(212, 165, 116, 0.1)",
                            fontSize: 11,
                            fontWeight: 600,
                            color: doc.relevance >= 95 ? colors.success : colors.gold,
                          }}
                        >
                          {doc.relevance}% match
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SOCIAL PROOF
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "48px 0", background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.muted,
              marginBottom: 24,
              ...fadeIn(0.8),
            }}
          >
            Trusted by personal injury firms
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 32 }}>
            {["Morgan & Associates", "Bellwether Legal", "Pinnacle Law Group", "Archer & Stone", "Meridian Partners"].map((firm, i) => (
              <span key={firm} style={{ fontSize: 14, fontWeight: 600, color: colors.slateWarm, ...fadeIn(0.9 + i * 0.05) }}>{firm}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" style={{ padding: "100px 0", background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: colors.accentText,
                background: colors.goldLight,
                border: "1px solid rgba(212, 165, 116, 0.2)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              How It Works
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: colors.foreground, letterSpacing: "-0.02em", marginBottom: 20 }}>
              From chaos to clarity in three steps
            </h2>
            <p style={{ fontSize: 17, color: colors.slateWarm, lineHeight: 1.7, marginBottom: 24 }}>
              Stop digging through folders. Aliva&apos;s AI understands your documents and finds exactly what you need.
            </p>
            <Link
              href="/features"
              className="hover-scale"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: colors.gold,
                textDecoration: "none",
              }}
            >
              See all 30+ features
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { step: "01", title: "Connect Your Sources", desc: "Link your document storage — cloud drives, case management systems, or local folders. Aliva indexes everything securely.", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
              { step: "02", title: "Search in Plain English", desc: "Ask questions like \"find all medical records from Dr. Smith\" or \"show me the accident photos\". No complex queries needed.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { step: "03", title: "Get AI Summaries", desc: "Aliva reads and summarizes documents instantly — treatment timelines, key findings, and relevant details at a glance.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            ].map((item, i) => (
              <div
                key={item.step}
                className="hover-lift"
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 20,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    fontSize: 64,
                    fontWeight: 800,
                    color: colors.secondary,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: colors.goldLight,
                    border: "1px solid rgba(212, 165, 116, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={colors.gold} strokeWidth="1.5">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: colors.foreground, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: colors.slateWarm }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURES
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="features" style={{ padding: "100px 0", background: colors.navy, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)`, backgroundSize: "48px 48px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: colors.gold, background: "rgba(212, 165, 116, 0.1)", border: "1px solid rgba(212, 165, 116, 0.2)", borderRadius: 100, marginBottom: 20 }}>
              Features
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: "#FAFAFA", letterSpacing: "-0.02em", marginBottom: 20 }}>Everything your PI firm needs</h2>
            <p style={{ fontSize: 17, color: colors.muted, lineHeight: 1.7, marginBottom: 20 }}>Powerful AI tools designed specifically for personal injury documentation.</p>
            <Link
              href="/features"
              className="hover-lift"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: colors.navy,
                padding: "12px 24px",
                background: colors.gold,
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              View All Features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "AI Document Search", description: "Search across thousands of documents using natural language. Find exactly what you need in seconds." },
              { title: "Instant Summaries", description: "Get AI-generated summaries of medical records, depositions, and legal documents — no more manual review." },
              { title: "Smart Organization", description: "Aliva automatically categorizes and tags documents by type, date, provider, and relevance to your case." },
              { title: "Treatment Timelines", description: "Automatically extract and visualize treatment histories from medical records across multiple providers." },
              { title: "Cross-Reference Detection", description: "AI identifies connections between documents — matching dates, providers, and referenced events." },
              { title: "Secure Collaboration", description: "Share documents and summaries with your team. Role-based access keeps sensitive info protected." },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="hover-lift"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: 28,
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(212, 165, 116, 0.1)", border: "1px solid rgba(212, 165, 116, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.gold} strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#FAFAFA", marginBottom: 8 }}>{feature.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: colors.muted }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          AI DEMO SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: colors.accentText, background: colors.goldLight, border: "1px solid rgba(212, 165, 116, 0.2)", borderRadius: 100, marginBottom: 20 }}>
                AI Summaries
              </div>
              <h2 style={{ fontSize: 40, fontWeight: 700, color: colors.foreground, letterSpacing: "-0.02em", marginBottom: 20 }}>Stop reading every page manually</h2>
              <p style={{ fontSize: 17, color: colors.slateWarm, lineHeight: 1.7, marginBottom: 32 }}>Aliva&apos;s AI reads and understands your documents, extracting key information so you don&apos;t have to.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { title: "Medical Record Analysis", desc: "Extracts diagnoses, treatments, and provider information automatically" },
                  { title: "Deposition Highlights", desc: "Identifies key admissions, contradictions, and important testimony" },
                  { title: "Billing Review", desc: "Summarizes charges, flags duplicates, and calculates totals" },
                  { title: "Correspondence Tracking", desc: "Tracks communications, deadlines, and action items across letters and emails" },
                ].map((item) => (
                  <div key={item.title} className="hover-scale" style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, background: colors.card, borderRadius: 12, border: `1px solid ${colors.border}`, cursor: "pointer" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: colors.foreground, marginBottom: 2 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: colors.muted }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="float-animation"
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ padding: 8, borderRadius: 10, background: colors.goldLight }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.gold} strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: colors.foreground }}>ER_Admission_Martinez.pdf</p>
                  <p style={{ fontSize: 12, color: colors.muted }}>Medical Record · 24 pages</p>
                </div>
                <span style={{ marginLeft: "auto", padding: "6px 12px", background: colors.goldLight, borderRadius: 8, fontSize: 12, fontWeight: 600, color: colors.accentText }}>AI Summary</span>
              </div>

              <div style={{ padding: 20, background: colors.secondary, borderRadius: 14, marginBottom: 20 }}>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: colors.foreground }}>
                  <strong>Patient:</strong> Roberto Martinez, 42M<br />
                  <strong>Date of Service:</strong> March 15, 2024<br />
                  <strong>Chief Complaint:</strong> MVA with neck and back pain<br />
                  <strong>Diagnosis:</strong> Cervical strain, lumbar radiculopathy<br />
                  <strong>Treatment:</strong> CT scan (negative for fracture), prescribed muscle relaxants, referred to PT<br />
                  <strong>Follow-up:</strong> Orthopedic consult recommended in 2 weeks
                </p>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button className="hover-scale" style={{ flex: 1, padding: "12px 16px", background: colors.gold, color: colors.navy, border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  View Full Document
                </button>
                <button className="hover-scale" style={{ flex: 1, padding: "12px 16px", background: colors.secondary, color: colors.foreground, border: `1px solid ${colors.border}`, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Export Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECURITY
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="security" style={{ padding: "100px 0", background: colors.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div className="hover-lift" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 48 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: colors.gold, background: "rgba(212, 165, 116, 0.1)", border: "1px solid rgba(212, 165, 116, 0.2)", borderRadius: 100, marginBottom: 20 }}>
                Security
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 700, color: "#FAFAFA", marginBottom: 16 }}>Your documents, protected</h2>
              <p style={{ fontSize: 16, color: colors.muted, lineHeight: 1.7, marginBottom: 32 }}>PI firms handle sensitive client information. Aliva is built with enterprise-grade security from day one.</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {[
                  { title: "SOC 2 Type II", desc: "Certified compliance" },
                  { title: "HIPAA Compliant", desc: "Healthcare privacy standards" },
                  { title: "ISO 27001", desc: "Certified security management" },
                  { title: "AES-256 Encryption", desc: "Data at rest & in transit" },
                  { title: "Role-Based Access", desc: "Granular permissions" },
                  { title: "Audit Logging", desc: "Full activity tracking" },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ marginTop: 2, width: 20, height: 20, borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: 14, color: "#FAFAFA" }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: colors.muted }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hover-lift" style={{ background: `linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(212, 165, 116, 0.05) 100%)`, border: "1px solid rgba(212, 165, 116, 0.2)", borderRadius: 20, padding: 48, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <svg style={{ width: 48, height: 48, color: "rgba(212, 165, 116, 0.4)", marginBottom: 24 }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p style={{ fontSize: 22, lineHeight: 1.6, fontStyle: "italic", color: "#FAFAFA" }}>
                  &ldquo;We used to spend hours searching for documents. Now Aliva finds everything in seconds and summarizes it for us. It&apos;s changed how we prepare cases.&rdquo;
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 32 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${colors.gold} 0%, #B8860B 100%)` }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 16, color: "#FAFAFA" }}>Sarah Mitchell</p>
                  <p style={{ fontSize: 14, color: colors.muted }}>Managing Partner, Mitchell Law Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: colors.background }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: colors.accentText, background: colors.goldLight, border: "1px solid rgba(212, 165, 116, 0.2)", borderRadius: 100, marginBottom: 20 }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 40, fontWeight: 700, color: colors.foreground, marginBottom: 16 }}>Common questions</h2>
              <p style={{ fontSize: 16, color: colors.slateWarm, lineHeight: 1.7 }}>Everything you need to know about Aliva for your PI practice.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { question: "How does the AI document search work?", answer: "Aliva uses advanced natural language processing to understand your documents. You can search using plain English queries like \"find all medical records from March 2024\" or \"show me documents mentioning surgery\". The AI understands context and finds relevant results even if the exact words aren't present." },
                { question: "What types of documents can Aliva process?", answer: "Aliva handles all common document formats including PDFs, Word documents, images (with OCR), scanned documents, and more. It's particularly optimized for medical records, legal documents, correspondence, and billing statements common in PI cases." },
                { question: "Is my data secure?", answer: "Absolutely. We use AES-256 encryption for all data at rest and in transit. We're SOC 2 Type II certified, and your documents are never used to train our AI models. You maintain full ownership and control of your data." },
                { question: "How accurate are the AI summaries?", answer: "Our AI is specifically trained on legal and medical documents, achieving over 95% accuracy on key information extraction. Every summary includes source references so you can verify the original text." },
              ].map((faq, i) => (
                <div key={faq.question} className="hover-scale" style={{ background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 16, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "20px 24px", fontSize: 16, fontWeight: 600, color: colors.foreground, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span>{faq.question}</span>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: openFaq === i ? colors.goldLight : colors.secondary, border: openFaq === i ? "1px solid rgba(212, 165, 116, 0.2)" : `1px solid ${colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", transform: openFaq === i ? "rotate(180deg)" : "none", flexShrink: 0, marginLeft: 16 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={colors.slateWarm} strokeWidth="2"><path d="M2 4l4 4 4-4" /></svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease"
                  }}>
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: colors.slateWarm }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: colors.navy, position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(ellipse at center, rgba(212, 165, 116, 0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: 48, fontWeight: 700, color: "#FAFAFA", letterSpacing: "-0.02em", marginBottom: 20 }}>Stop searching. Start finding.</h2>
          <p style={{ fontSize: 18, color: colors.muted, marginBottom: 40, lineHeight: 1.7 }}>Let Aliva&apos;s AI handle the document chaos. Try it free for 14 days.</p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <a href="#" className="hover-lift" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 600, color: colors.navy, padding: "18px 36px", background: `linear-gradient(135deg, ${colors.gold} 0%, #C4956A 100%)`, borderRadius: 100, textDecoration: "none", boxShadow: "0 4px 24px rgba(212, 165, 116, 0.4)" }}>
              Start Free Trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#" className="hover-scale" style={{ display: "inline-flex", alignItems: "center", fontSize: 16, fontWeight: 600, color: "#FAFAFA", padding: "18px 36px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, textDecoration: "none" }}>Schedule Demo</a>
          </div>

          <p style={{ marginTop: 24, fontSize: 14, color: colors.slateWarm }}>No credit card required · 14-day free trial</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.15)", padding: "64px 0", background: colors.navy }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)", gap: 48 }}>
            <div>
              <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Logo className="h-24 w-auto" />
              </Link>
              <p style={{ marginTop: 16, fontSize: 14, color: colors.slateWarm, maxWidth: 280, lineHeight: 1.7 }}>AI-powered document search and summaries for personal injury law firms.</p>
            </div>

            {[
              { title: "Product", links: [
                { name: "Features", href: "/features" },
                { name: "Pricing", href: "/pricing" },
                { name: "Security", href: "#security" },
                { name: "Integrations", href: "#" },
              ]},
              { title: "Company", links: [
                { name: "About", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" },
              ]},
              { title: "Resources", links: [
                { name: "Documentation", href: "#" },
                { name: "Help Center", href: "#" },
              ]},
              { title: "Legal", links: [
                { name: "Privacy", href: "#" },
                { name: "Terms", href: "#" },
              ]},
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 20, color: "#FAFAFA" }}>{col.title}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <li key={link.name}><Link href={link.href} className="hover-scale" style={{ fontSize: 14, color: colors.slateWarm, textDecoration: "none", display: "inline-block" }}>{link.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, color: colors.slateWarm }}>
            <p>&copy; {new Date().getFullYear()} Aliva Technologies LLC. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" className="hover-scale" style={{ color: colors.slateWarm, textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" className="hover-scale" style={{ color: colors.slateWarm, textDecoration: "none" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
