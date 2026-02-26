"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main style={{ minHeight: "100vh", background: "#faf9f7" }}>
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
          background: "rgba(250, 249, 247, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white", fontWeight: 700, fontSize: 16 }}>A</span>
            </div>
            <span className="font-display" style={{ fontSize: 22, color: "#1c1917" }}>
              Aliva
            </span>
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["Product", "Workflows", "Security", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ fontSize: 14, fontWeight: 500, color: "#57534e", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "#57534e", textDecoration: "none" }}>
              Sign in
            </a>
            <a
              href="#"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "white",
                padding: "10px 20px",
                background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 640 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "#0891b2",
                background: "#ecfeff",
                border: "1px solid #cffafe",
                borderRadius: 100,
                marginBottom: 24,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0891b2" }} />
              Introducing AI-powered case management
            </div>

            <h1
              className="font-display"
              style={{ fontSize: 56, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1c1917" }}
            >
              The smarter CMS for <span style={{ color: "#c9943f" }}>personal injury</span> firms.
            </h1>

            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.7, color: "#57534e", maxWidth: 500 }}>
              AI qualifies better cases, predicts deadlines, and moves matters from intake to settlement 2× faster.
            </p>

            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "white",
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                  borderRadius: 100,
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(201, 148, 63, 0.35)",
                }}
              >
                Start Free Trial
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#1c1917",
                  padding: "14px 28px",
                  background: "white",
                  border: "1px solid #d6d3d1",
                  borderRadius: 100,
                  textDecoration: "none",
                }}
              >
                Watch Demo
              </a>
            </div>

            <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex" }}>
                {["#d4a85c", "#c9943f", "#b07d2a", "#8b6914"].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: color,
                      border: "2px solid white",
                      marginLeft: i > 0 ? -8 : 0,
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#57534e" }}>
                <strong style={{ color: "#1c1917" }}>500+</strong> law firms trust Aliva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUST SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 40, paddingBottom: 80, background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "white",
              borderRadius: 20,
              border: "1px solid #e5e5e5",
              padding: 36,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div>
                <h2 className="font-display" style={{ fontSize: 26, color: "#1c1917" }}>
                  Trusted by growing PI firms
                </h2>
                <p style={{ marginTop: 8, fontSize: 15, color: "#a8a29e" }}>
                  AI-powered case management for modern practices
                </p>
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                {[
                  { value: "2.1×", label: "Faster intake" },
                  { value: "31%", label: "Fewer missed tasks" },
                  { value: "$48M+", label: "Cases tracked" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "16px 20px",
                      background: "white",
                      border: "1px solid #e5e5e5",
                      borderRadius: 12,
                    }}
                  >
                    <p className="font-display" style={{ fontSize: 28, color: "#b07d2a", lineHeight: 1 }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: 13, color: "#a8a29e", marginTop: 4 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 32,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: 12,
              }}
            >
              {["Morgan & Associates", "Bellwether Legal", "Pinnacle Law", "Archer & Stone", "Meridian Partners", "Catalyst Legal"].map(
                (firm) => (
                  <div
                    key={firm}
                    style={{
                      padding: "18px 16px",
                      background: "white",
                      border: "1px solid #e5e5e5",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#a8a29e",
                      textAlign: "center",
                    }}
                  >
                    {firm}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WORKFLOW SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="workflows" style={{ padding: "80px 0", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#b07d2a",
                background: "#fef8f0",
                border: "1px solid #f5e0b8",
                borderRadius: 100,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9943f" }} />
              How It Works
            </span>
            <h2 className="font-display" style={{ marginTop: 16, fontSize: 40, color: "#1c1917" }}>
              AI-powered workflows
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "#57534e", lineHeight: 1.7 }}>
              Three intelligent workflows that keep your cases moving forward.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                number: "01",
                title: "Smart Intake",
                description: "AI scores and prioritizes new cases using your firm's criteria. High-potential leads surface first.",
              },
              {
                number: "02",
                title: "Case Dashboard",
                description: "Track stage, deadlines, and team ownership in one intelligent view. No spreadsheets needed.",
              },
              {
                number: "03",
                title: "Document Hub",
                description: "AI-powered search finds what you need instantly across your entire case lifecycle.",
              },
            ].map((step) => (
              <div
                key={step.title}
                style={{
                  background: "white",
                  border: "1px solid #e5e5e5",
                  borderRadius: 20,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    position: "absolute",
                    right: -8,
                    top: -12,
                    fontSize: 96,
                    fontWeight: 400,
                    color: "#f4f2ef",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    position: "relative",
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#fef8f0",
                    border: "1px solid #f5e0b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b07d2a" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: 22, color: "#1c1917", marginBottom: 12, position: "relative" }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#57534e", position: "relative" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CAPABILITIES SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="product" style={{ padding: "80px 0", background: "#f4f2ef" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#b07d2a",
                background: "#fef8f0",
                border: "1px solid #f5e0b8",
                borderRadius: 100,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9943f" }} />
              Features
            </span>
            <h2 className="font-display" style={{ marginTop: 16, fontSize: 40, color: "#1c1917" }}>
              AI that works like your best paralegal
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "#57534e", lineHeight: 1.7 }}>
              Every feature designed to make your firm more efficient.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { title: "AI Intake Queue", description: "Sort by urgency and case potential so teams focus on what matters." },
              { title: "Deadline Alerts", description: "Surface statute-sensitive items before they become emergencies." },
              { title: "Stage Tracking", description: "Monitor progression from intake to settlement with clear visibility." },
              { title: "Document Search", description: "AI-powered retrieval finds records in seconds, not hours." },
              { title: "Team Collaboration", description: "Assign owners, capture notes, keep everyone aligned." },
              { title: "Smart Analytics", description: "AI transforms activity into actionable insights." },
            ].map((cap) => (
              <div
                key={cap.title}
                style={{
                  background: "white",
                  border: "1px solid #e5e5e5",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "#f4f2ef",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b07d2a" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1c1917", marginBottom: 8 }}>{cap.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#57534e" }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUTCOMES SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 0", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "white",
              borderRadius: 20,
              border: "1px solid #e5e5e5",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div style={{ padding: 40 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#b07d2a",
                  background: "#fef8f0",
                  border: "1px solid #f5e0b8",
                  borderRadius: 100,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9943f" }} />
                Outcomes
              </span>
              <h2 className="font-display" style={{ marginTop: 20, fontSize: 34, color: "#1c1917", lineHeight: 1.2 }}>
                Less admin drag.
                <br />
                More case progress.
              </h2>

              <ul style={{ marginTop: 28, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "AI reduces manual triage by 70%",
                  "Automatic deadline detection",
                  "Smart case prioritization",
                  "Real-time pipeline analytics",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        marginTop: 3,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#dcfce7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 15, color: "#57534e" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: 40, background: "#fef8f0" }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#a8a29e",
                }}
              >
                AI-Driven Results
              </p>

              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { value: "+28%", label: "Intake conversion", color: "#16a34a" },
                  { value: "-35%", label: "Response time", color: "#b07d2a" },
                  { value: "+22%", label: "Case velocity", color: "#16a34a" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    style={{
                      padding: "20px 24px",
                      background: "white",
                      borderRadius: 14,
                      border: "1px solid #e5e5e5",
                    }}
                  >
                    <span className="font-display" style={{ fontSize: 32, color: kpi.color }}>
                      {kpi.value}
                    </span>
                    <p style={{ marginTop: 4, fontSize: 14, color: "#a8a29e" }}>{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECURITY SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="security" style={{ padding: "80px 0", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
            <div
              style={{
                background: "white",
                border: "1px solid #e5e5e5",
                borderRadius: 20,
                padding: 36,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#b07d2a",
                  background: "#fef8f0",
                  border: "1px solid #f5e0b8",
                  borderRadius: 100,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9943f" }} />
                Security
              </span>
              <h2 className="font-display" style={{ marginTop: 16, fontSize: 30, color: "#1c1917" }}>
                Enterprise-grade AI security
              </h2>
              <p style={{ marginTop: 12, fontSize: 16, color: "#57534e", lineHeight: 1.7 }}>
                Your data never trains our models. Full encryption, SOC 2 compliant, and audit-ready.
              </p>

              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {[
                  { title: "Data Isolation", desc: "Your data stays yours" },
                  { title: "Audit Logs", desc: "Full activity tracking" },
                  { title: "SOC 2 Type II", desc: "Certified compliance" },
                  { title: "Encryption", desc: "AES-256 at rest" },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        marginTop: 2,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#fef8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b07d2a" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: 14, color: "#1c1917" }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#a8a29e" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "white",
                border: "1px solid #e5e5e5",
                borderRadius: 20,
                padding: 36,
                position: "relative",
              }}
            >
              <svg
                style={{ position: "absolute", right: 24, top: 24, width: 48, height: 48, color: "#f5e0b8" }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p
                className="font-display"
                style={{ fontSize: 20, lineHeight: 1.6, fontStyle: "italic", color: "#1c1917" }}
              >
                &ldquo;Aliva&apos;s AI cut our intake processing time in half. It&apos;s like having a senior
                paralegal that never sleeps.&rdquo;
              </p>

              <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #e8c78e 0%, #c9943f 100%)",
                  }}
                />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 15, color: "#1c1917" }}>Sarah Mitchell</p>
                  <p style={{ fontSize: 14, color: "#a8a29e" }}>Managing Partner, Mitchell & Associates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 0", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 64 }}>
            <div style={{ maxWidth: 400 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#b07d2a",
                  background: "#fef8f0",
                  border: "1px solid #f5e0b8",
                  borderRadius: 100,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9943f" }} />
                FAQ
              </span>
              <h2 className="font-display" style={{ marginTop: 16, fontSize: 36, color: "#1c1917" }}>
                Common questions
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: "#57534e", lineHeight: 1.7 }}>
                Everything you need to know about our AI platform.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  question: "Is Aliva built for plaintiff firms specifically?",
                  answer:
                    "Yes. Our AI is trained specifically for plaintiff-side workflows including personal injury, mass tort, and class action practices.",
                },
                {
                  question: "How long does implementation take?",
                  answer:
                    "Most firms launch core workflows in 2-4 weeks. Our team provides hands-on onboarding support throughout.",
                },
                {
                  question: "Can we start with intake only?",
                  answer:
                    "Absolutely. Many teams begin with AI intake triage, then expand to case management as they see results.",
                },
                {
                  question: "What integrations do you support?",
                  answer:
                    "We integrate with leading case management systems, document platforms, and communication tools.",
                },
              ].map((faq, i) => (
                <div
                  key={faq.question}
                  style={{
                    background: "white",
                    border: "1px solid #e5e5e5",
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "20px 24px",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#1c1917",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span>{faq.question}</span>
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#f4f2ef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.2s",
                        transform: openFaq === i ? "rotate(180deg)" : "none",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#57534e" strokeWidth="2">
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                  {openFaq === i && (
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#57534e" }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 0", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #fef8f0 0%, #faf5ed 100%)",
              borderRadius: 24,
              padding: "56px 32px",
              textAlign: "center",
              border: "1px solid #f5e0b8",
            }}
          >
            <h2
              className="font-display"
              style={{ fontSize: 44, color: "#1c1917", maxWidth: 600, margin: "0 auto" }}
            >
              Experience AI-powered case management
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "#57534e", maxWidth: 480, margin: "16px auto 0" }}>
              Join 500+ law firms already using Aliva to win more cases.
            </p>

            <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 12 }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "white",
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                  borderRadius: 100,
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(201, 148, 63, 0.35)",
                }}
              >
                Start Free Trial
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#1c1917",
                  padding: "16px 32px",
                  background: "white",
                  border: "1px solid #e5e5e5",
                  borderRadius: 100,
                  textDecoration: "none",
                }}
              >
                Schedule Demo
              </a>
            </div>

            <p style={{ marginTop: 20, fontSize: 13, color: "#a8a29e" }}>
              No credit card required · 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid #e5e5e5", padding: "64px 0", background: "#faf9f7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)", gap: 40 }}>
            <div>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontWeight: 700, fontSize: 16 }}>A</span>
                </div>
                <span className="font-display" style={{ fontSize: 22, color: "#1c1917" }}>
                  Aliva
                </span>
              </a>
              <p style={{ marginTop: 16, fontSize: 14, color: "#a8a29e", maxWidth: 280 }}>
                AI-powered case management for personal injury firms.
              </p>
            </div>

            {[
              { title: "Product", links: ["Overview", "AI Features", "Security", "Pricing"] },
              { title: "Company", links: ["About", "Careers", "Blog"] },
              { title: "Resources", links: ["Documentation", "Help Center"] },
              { title: "Legal", links: ["Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "#1c1917" }}>{col.title}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: 14, color: "#a8a29e", textDecoration: "none" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 48,
              paddingTop: 24,
              borderTop: "1px solid #e5e5e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#a8a29e",
            }}
          >
            <p>&copy; {new Date().getFullYear()} Aliva AI. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ color: "#a8a29e", textDecoration: "none" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: "#a8a29e", textDecoration: "none" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
