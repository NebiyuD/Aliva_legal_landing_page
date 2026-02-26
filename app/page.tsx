"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main style={{ minHeight: "100vh", background: "#0c0a09" }}>
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
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px 28px",
            background: "rgba(12, 10, 9, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #d4a85c 0%, #b8860b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(212, 168, 92, 0.3)",
                }}
              >
                <span style={{ color: "white", fontWeight: 700, fontSize: 17 }}>A</span>
              </div>
              <span className="font-display" style={{ fontSize: 24, color: "#fafaf9", letterSpacing: "-0.02em" }}>
                Aliva
              </span>
            </a>

            <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {["Product", "Workflows", "Security", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#a8a29e",
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: 8,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fafaf9";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#a8a29e";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a
                href="#"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#a8a29e",
                  textDecoration: "none",
                  padding: "8px 16px",
                }}
              >
                Sign in
              </a>
              <a
                href="#"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0c0a09",
                  padding: "10px 22px",
                  background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                  borderRadius: 100,
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(212, 168, 92, 0.4)",
                  transition: "all 0.2s",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION - Dark
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: 160,
          paddingBottom: 120,
          background: "linear-gradient(180deg, #0c0a09 0%, #1c1917 100%)",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold gradient glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(212, 168, 92, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left Content */}
            <div>
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
                  color: "#d4a85c",
                  background: "rgba(212, 168, 92, 0.1)",
                  border: "1px solid rgba(212, 168, 92, 0.2)",
                  borderRadius: 100,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#d4a85c",
                    boxShadow: "0 0 8px rgba(212, 168, 92, 0.6)",
                  }}
                />
                Built for Personal Injury Firms
              </div>

              <h1
                className="font-display"
                style={{
                  fontSize: 64,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#fafaf9",
                  marginBottom: 28,
                }}
              >
                Win more cases.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #d4a85c 0%, #f5d799 50%, #d4a85c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Settle faster.
                </span>
              </h1>

              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.7,
                  color: "#a8a29e",
                  maxWidth: 480,
                  marginBottom: 40,
                }}
              >
                The case management system that helps PI attorneys qualify better cases, hit every statute deadline, and
                move from intake to settlement 2× faster.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 48 }}>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#0c0a09",
                    padding: "16px 32px",
                    background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                    borderRadius: 100,
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(212, 168, 92, 0.4)",
                    transition: "all 0.3s",
                  }}
                >
                  Start Free Trial
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#fafaf9",
                    padding: "16px 32px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Demo
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex" }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, hsl(${38 - i * 8}, 60%, ${55 - i * 8}%) 0%, hsl(${38 - i * 8}, 70%, ${45 - i * 8}%) 100%)`,
                        border: "2px solid #1c1917",
                        marginLeft: i > 0 ? -10 : 0,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: 14, color: "#fafaf9", fontWeight: 600 }}>500+ PI firms trust Aliva</p>
                  <p style={{ fontSize: 13, color: "#78716c" }}>From solo practitioners to AmLaw 200</p>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  background: "#fafaf9",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {/* Browser Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 16px",
                    background: "#f4f2ef",
                    borderBottom: "1px solid #e7e5e4",
                  }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      padding: "6px 14px",
                      background: "#fff",
                      borderRadius: 8,
                      fontSize: 12,
                      color: "#a8a29e",
                      border: "1px solid #e7e5e4",
                    }}
                  >
                    app.aliva.legal/dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div style={{ padding: 20, background: "#fafaf9" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
                    {[
                      { label: "Active PI Cases", value: "147", change: "+12%", up: true },
                      { label: "Pending Intake", value: "23", change: "8 urgent", up: false },
                      { label: "Pipeline Value", value: "$4.2M", change: "+18%", up: true },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        style={{
                          background: "#fff",
                          padding: 14,
                          borderRadius: 12,
                          border: "1px solid #e7e5e4",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: "#a8a29e",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginBottom: 4,
                          }}
                        >
                          {stat.label}
                        </div>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#1c1917" }}>{stat.value}</div>
                        <div
                          style={{
                            fontSize: 11,
                            color: stat.up ? "#16a34a" : "#d4a85c",
                            fontWeight: 600,
                          }}
                        >
                          {stat.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 12,
                      border: "1px solid #e7e5e4",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid #e7e5e4",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#1c1917" }}>Recent PI Cases</span>
                      <span style={{ fontSize: 11, color: "#d4a85c", fontWeight: 600 }}>View All →</span>
                    </div>
                    {[
                      { name: "Martinez v. Acme Corp", type: "Auto Accident", value: "$340K", status: "Discovery" },
                      { name: "Johnson Slip & Fall", type: "Premises Liability", value: "$125K", status: "Negotiation" },
                      { name: "Smith Medical Injury", type: "Med Malpractice", value: "$890K", status: "Review" },
                    ].map((c, i) => (
                      <div
                        key={c.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          borderBottom: i < 2 ? "1px solid #f4f2ef" : "none",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: i === 0 ? "#d4a85c" : "#16a34a",
                            }}
                          />
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 500, color: "#1c1917" }}>{c.name}</div>
                            <div style={{ fontSize: 11, color: "#a8a29e" }}>{c.type}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#1c1917" }}>{c.value}</div>
                          <div style={{ fontSize: 11, color: "#78716c" }}>{c.status}</div>
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
          STATS BAR
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#1c1917", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { value: "2.1×", label: "Faster case intake" },
              { value: "31%", label: "Fewer missed deadlines" },
              { value: "$48M+", label: "In PI cases tracked" },
              { value: "500+", label: "PI firms nationwide" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 48,
                    color: "#d4a85c",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: 14, color: "#78716c" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUSTED BY - Light Section
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 0", background: "#fafaf9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a8a29e",
              marginBottom: 32,
            }}
          >
            Trusted by leading personal injury firms
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
            {[
              "Morgan & Associates",
              "Bellwether Legal",
              "Pinnacle Law Group",
              "Archer & Stone",
              "Meridian Partners",
              "Catalyst Legal",
            ].map((firm) => (
              <div
                key={firm}
                style={{
                  padding: "24px 16px",
                  background: "#fff",
                  border: "1px solid #e7e5e4",
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#78716c",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
              >
                {firm}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WORKFLOW SECTION - Dark
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="workflows" style={{ padding: "120px 0", background: "#0c0a09", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
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
                color: "#d4a85c",
                background: "rgba(212, 168, 92, 0.1)",
                border: "1px solid rgba(212, 168, 92, 0.2)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              How It Works
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 48, color: "#fafaf9", letterSpacing: "-0.02em", marginBottom: 20 }}
            >
              From intake to settlement,{" "}
              <span style={{ color: "#d4a85c" }}>streamlined</span>
            </h2>
            <p style={{ fontSize: 18, color: "#a8a29e", lineHeight: 1.7 }}>
              Three powerful workflows designed specifically for how PI attorneys work.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                number: "01",
                title: "Smart PI Intake",
                description:
                  "AI scores incoming leads based on case potential, liability factors, and your firm's criteria. High-value auto accidents and med mal cases surface first.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a85c" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Case Dashboard",
                description:
                  "Track every PI case from first call to final settlement. See deadlines, statute dates, treatment status, and demand timelines at a glance.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a85c" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Document Hub",
                description:
                  "All medical records, police reports, and demand packages in one place. AI-powered search finds what you need across your entire caseload.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4a85c" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div
                key={step.title}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: 36,
                  position: "relative",
                  transition: "all 0.4s",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 20,
                    fontSize: 72,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.03)",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "rgba(212, 168, 92, 0.1)",
                    border: "1px solid rgba(212, 168, 92, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: 24, color: "#fafaf9", marginBottom: 12, position: "relative" }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#78716c", position: "relative" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURES SECTION - Light
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="product" style={{ padding: "120px 0", background: "#fafaf9" }}>
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
                color: "#b07d2a",
                background: "#fef8f0",
                border: "1px solid #f5e0b8",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              Features
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 48, color: "#1c1917", letterSpacing: "-0.02em", marginBottom: 20 }}
            >
              Everything your PI firm needs
            </h2>
            <p style={{ fontSize: 18, color: "#57534e", lineHeight: 1.7 }}>
              Purpose-built tools for personal injury case management.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                title: "PI Intake Queue",
                description: "Auto-sort leads by case value, injury severity, and liability strength. Focus on cases that matter.",
              },
              {
                title: "Statute Alerts",
                description: "Never miss a filing deadline. Get alerts for every statute of limitations across all your PI cases.",
              },
              {
                title: "Treatment Tracking",
                description: "Monitor client treatment progress. Know when medical records are ready for demand.",
              },
              {
                title: "Demand Builder",
                description: "Generate demand packages with medical summaries, damages calculations, and liability analysis.",
              },
              {
                title: "Settlement Tracker",
                description: "Track negotiations, log offers, and manage lien resolutions all in one place.",
              },
              {
                title: "PI Analytics",
                description: "See your firm's performance: avg settlement time, case values by type, and conversion rates.",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e7e5e4",
                  borderRadius: 16,
                  padding: 28,
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #fef8f0 0%, #fdf4e3 100%)",
                    border: "1px solid #f5e0b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b07d2a" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1c1917", marginBottom: 8 }}>{cap.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#57534e" }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUTCOMES SECTION - Dark
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "120px 0", background: "#0c0a09" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: 56 }}>
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
                  color: "#d4a85c",
                  background: "rgba(212, 168, 92, 0.1)",
                  border: "1px solid rgba(212, 168, 92, 0.2)",
                  borderRadius: 100,
                  marginBottom: 24,
                }}
              >
                Results
              </div>
              <h2
                className="font-display"
                style={{ fontSize: 40, color: "#fafaf9", lineHeight: 1.2, marginBottom: 32 }}
              >
                Less time on admin.
                <br />
                <span style={{ color: "#d4a85c" }}>More time winning cases.</span>
              </h2>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  "AI reduces intake triage time by 70%",
                  "Automatic statute deadline tracking",
                  "Smart case prioritization by value",
                  "Real-time settlement pipeline view",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "rgba(22, 163, 74, 0.15)",
                        border: "1px solid rgba(22, 163, 74, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 16, color: "#a8a29e" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: 56, background: "rgba(212, 168, 92, 0.05)" }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#78716c",
                  marginBottom: 28,
                }}
              >
                PI Firm Results
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { value: "+28%", label: "Higher case acceptance", color: "#16a34a" },
                  { value: "-35%", label: "Faster response time", color: "#d4a85c" },
                  { value: "+22%", label: "Settlement velocity", color: "#16a34a" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    style={{
                      padding: "24px 28px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 16,
                    }}
                  >
                    <span className="font-display" style={{ fontSize: 40, color: kpi.color }}>
                      {kpi.value}
                    </span>
                    <p style={{ marginTop: 4, fontSize: 15, color: "#78716c" }}>{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECURITY + TESTIMONIAL - Light
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="security" style={{ padding: "120px 0", background: "#fafaf9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #e7e5e4",
                borderRadius: 20,
                padding: 48,
              }}
            >
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
                  color: "#b07d2a",
                  background: "#fef8f0",
                  border: "1px solid #f5e0b8",
                  borderRadius: 100,
                  marginBottom: 20,
                }}
              >
                Security
              </div>
              <h2 className="font-display" style={{ fontSize: 36, color: "#1c1917", marginBottom: 16 }}>
                Your client data, protected
              </h2>
              <p style={{ fontSize: 16, color: "#57534e", lineHeight: 1.7, marginBottom: 32 }}>
                PI firms handle sensitive client information. We take security seriously with enterprise-grade protection.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
                {[
                  { title: "Data Isolation", desc: "Your data never shared" },
                  { title: "HIPAA Compliant", desc: "Medical records secure" },
                  { title: "SOC 2 Type II", desc: "Certified compliance" },
                  { title: "AES-256", desc: "Bank-level encryption" },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        marginTop: 2,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#fef8f0",
                        border: "1px solid #f5e0b8",
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
                      <p style={{ fontWeight: 600, fontSize: 15, color: "#1c1917" }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#78716c" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #1c1917 0%, #0c0a09 100%)",
                borderRadius: 20,
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <svg
                  style={{ width: 48, height: 48, color: "rgba(212, 168, 92, 0.3)", marginBottom: 24 }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p
                  className="font-display"
                  style={{ fontSize: 22, lineHeight: 1.6, fontStyle: "italic", color: "#fafaf9" }}
                >
                  &ldquo;Aliva transformed how we handle PI intake. We went from drowning in leads to focusing only on
                  cases worth pursuing. Our settlement volume is up 40%.&rdquo;
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 32 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #d4a85c 0%, #b8860b 100%)",
                  }}
                />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 16, color: "#fafaf9" }}>Sarah Mitchell</p>
                  <p style={{ fontSize: 14, color: "#78716c" }}>Managing Partner, Mitchell PI Law</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ SECTION - Light
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "120px 0", background: "#f4f2ef" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
            <div>
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
                  color: "#b07d2a",
                  background: "#fff",
                  border: "1px solid #f5e0b8",
                  borderRadius: 100,
                  marginBottom: 20,
                }}
              >
                FAQ
              </div>
              <h2 className="font-display" style={{ fontSize: 40, color: "#1c1917", marginBottom: 16 }}>
                Questions from PI firms
              </h2>
              <p style={{ fontSize: 16, color: "#57534e", lineHeight: 1.7 }}>
                Everything you need to know about Aliva for your personal injury practice.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  question: "Is Aliva built specifically for PI firms?",
                  answer:
                    "Yes. Every feature is designed for personal injury workflows—from intake scoring based on liability and damages, to statute tracking, treatment monitoring, and settlement management.",
                },
                {
                  question: "How long does it take to get started?",
                  answer:
                    "Most PI firms are fully operational in 2-3 weeks. We handle data migration from your existing system and provide hands-on training for your team.",
                },
                {
                  question: "Can we start with just intake management?",
                  answer:
                    "Absolutely. Many firms start with our AI intake system to immediately improve lead qualification, then add case management features as they see results.",
                },
                {
                  question: "Do you integrate with our existing tools?",
                  answer:
                    "Yes. Aliva integrates with popular PI firm tools including Clio, MyCase, PracticePanther, as well as medical record services and document management systems.",
                },
              ].map((faq, i) => (
                <div
                  key={faq.question}
                  style={{
                    background: "#fff",
                    border: "1px solid #e7e5e4",
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
                      padding: "22px 28px",
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
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: openFaq === i ? "#fef8f0" : "#f4f2ef",
                        border: openFaq === i ? "1px solid #f5e0b8" : "1px solid #e7e5e4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s",
                        transform: openFaq === i ? "rotate(180deg)" : "none",
                        flexShrink: 0,
                        marginLeft: 16,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#57534e" strokeWidth="2">
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                  {openFaq === i && (
                    <div style={{ padding: "0 28px 22px" }}>
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
          CTA SECTION - Dark
          ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "120px 0", background: "#0c0a09", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at center, rgba(212, 168, 92, 0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
          <h2
            className="font-display"
            style={{ fontSize: 56, color: "#fafaf9", letterSpacing: "-0.02em", marginBottom: 20 }}
          >
            Ready to win more{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d4a85c 0%, #f5d799 50%, #d4a85c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PI cases?
            </span>
          </h2>
          <p style={{ fontSize: 19, color: "#a8a29e", marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
            Join 500+ personal injury firms using Aliva to streamline intake, hit deadlines, and settle faster.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 16,
                fontWeight: 600,
                color: "#0c0a09",
                padding: "18px 36px",
                background: "linear-gradient(135deg, #d4a85c 0%, #c9943f 100%)",
                borderRadius: 100,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(212, 168, 92, 0.4)",
              }}
            >
              Start Free Trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: 16,
                fontWeight: 600,
                color: "#fafaf9",
                padding: "18px 36px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              Schedule Demo
            </a>
          </div>

          <p style={{ marginTop: 24, fontSize: 14, color: "#57534e" }}>
            No credit card required · 14-day free trial · Setup in minutes
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 0", background: "#0c0a09" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)", gap: 48 }}>
            <div>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #d4a85c 0%, #b8860b 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontWeight: 700, fontSize: 17 }}>A</span>
                </div>
                <span className="font-display" style={{ fontSize: 24, color: "#fafaf9" }}>
                  Aliva
                </span>
              </a>
              <p style={{ marginTop: 16, fontSize: 14, color: "#57534e", maxWidth: 280, lineHeight: 1.7 }}>
                The case management system built exclusively for personal injury law firms.
              </p>
            </div>

            {[
              { title: "Product", links: ["Features", "Integrations", "Security", "Pricing"] },
              { title: "Company", links: ["About", "Careers", "Blog"] },
              { title: "Resources", links: ["Documentation", "Help Center", "API"] },
              { title: "Legal", links: ["Privacy", "Terms", "HIPAA"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 20, color: "#fafaf9" }}>{col.title}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: 14, color: "#57534e", textDecoration: "none" }}>
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
              marginTop: 64,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#57534e",
            }}
          >
            <p>&copy; {new Date().getFullYear()} Aliva Legal Technology. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ color: "#57534e", textDecoration: "none" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: "#57534e", textDecoration: "none" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
