"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../components/Logo";

export default function Features() {
  const [loaded, setLoaded] = useState(false);
  const [activePlan, setActivePlan] = useState(1); // Default to Professional

  useEffect(() => {
    setLoaded(true);
  }, []);

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

  const fadeUp = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  // Features organized by pricing plan
  const planFeatures = [
    {
      plan: "Starter",
      price: "$39",
      period: "/user/month",
      description: "Essential tools for solo practitioners and small teams",
      color: "#3B82F6",
      features: [
        {
          id: "basic-search",
          title: "AI-Powered Document Search",
          description: "Search across your documents using natural language. Find what you need instantly without digging through folders.",
          benefits: ["Natural language queries", "Keyword search", "Basic filters"],
        },
        {
          id: "basic-summaries",
          title: "Document Summaries",
          description: "Get AI-generated summaries of documents. Limited to 5 summaries per day.",
          benefits: ["One-click summaries", "Key point extraction", "5 per day limit"],
        },
        {
          id: "auto-categorization",
          title: "Automatic Categorization",
          description: "Documents automatically sorted by type — medical records, billing, correspondence, and more.",
          benefits: ["Zero manual sorting", "Standard categories", "Basic organization"],
        },
        {
          id: "basic-storage",
          title: "Document Storage",
          description: "Securely store up to 1 GB of documents in the cloud with encryption at rest.",
          benefits: ["1 GB storage", "Cloud-based", "Encrypted"],
        },
        {
          id: "email-support",
          title: "Email Support",
          description: "Get help when you need it via email with responses within 24 business hours.",
          benefits: ["Email support", "24-hour response", "Help documentation"],
        },
        {
          id: "soc2",
          title: "SOC 2 Type II Compliance",
          description: "Your data is protected by enterprise-grade security with SOC 2 Type II certification.",
          benefits: ["SOC 2 certified", "Secure infrastructure", "Regular audits"],
        },
      ],
    },
    {
      plan: "Professional",
      price: "$79",
      period: "/user/month",
      description: "Everything in Starter, plus advanced capabilities for growing PI firms",
      color: colors.gold,
      popular: true,
      includesAllFrom: "Starter",
      features: [
        {
          id: "unlimited-search",
          title: "Unlimited AI Search",
          description: "Unlimited document searches with advanced semantic understanding. Find documents even when exact terms don't match.",
          benefits: ["Unlimited searches", "Semantic matching", "Advanced filters"],
        },
        {
          id: "pro-summaries",
          title: "50 AI Summaries Per Day",
          description: "Generate up to 50 AI summaries daily. Summarize medical records, depositions, bills, and any document type.",
          benefits: ["50 summaries/day", "All document types", "Customizable detail"],
        },
        {
          id: "medical-analysis",
          title: "Medical Record Analysis",
          description: "Extract diagnoses, treatments, medications, and provider info automatically. Build treatment timelines instantly.",
          benefits: ["Diagnosis extraction", "Treatment tracking", "Provider identification"],
        },
        {
          id: "treatment-timeline",
          title: "Treatment Timeline Generation",
          description: "Automatically build comprehensive treatment timelines from medical records. Visualize every visit and procedure.",
          benefits: ["Auto-generated timelines", "Multi-provider view", "Gap highlighting"],
        },
        {
          id: "medical-chronology",
          title: "Medical Chronology Export",
          description: "Generate professional medical chronologies ready for demand packages. Export to Word, PDF, or Excel.",
          benefits: ["Auto-generation", "Multiple formats", "Custom templates"],
        },
        {
          id: "cross-case-search",
          title: "Cross-Case Search",
          description: "Search across all your cases simultaneously. Find precedents and patterns across your entire document library.",
          benefits: ["Multi-case queries", "Pattern detection", "Precedent finding"],
        },
        {
          id: "smart-tagging",
          title: "Smart Tagging & Organization",
          description: "AI automatically tags documents with dates, providers, injury types, and custom metadata you define.",
          benefits: ["Auto-tagging", "Custom tags", "Advanced organization"],
        },
        {
          id: "pro-storage",
          title: "25 GB Document Storage",
          description: "Store up to 25 GB of documents per user. Plenty of room for growing caseloads.",
          benefits: ["25 GB storage", "Scalable", "Auto-backup"],
        },
        {
          id: "integrations",
          title: "Case Management Integrations",
          description: "Connect with Clio, Filevine, MyCase, and other popular PI case management systems.",
          benefits: ["Clio, Filevine, MyCase", "Two-way sync", "Matter mapping"],
        },
        {
          id: "cloud-integration",
          title: "Cloud Storage Integration",
          description: "Connect Google Drive, Dropbox, OneDrive, and Box. Documents sync automatically.",
          benefits: ["One-click connect", "Auto-sync", "Multiple providers"],
        },
        {
          id: "ocr",
          title: "OCR & Scanned Documents",
          description: "Automatically extract text from scanned documents. Make every document fully searchable.",
          benefits: ["Automatic OCR", "Handwriting recognition", "Full-text search"],
        },
        {
          id: "team-sharing",
          title: "Team Collaboration",
          description: "Share documents and summaries with your team. Control permissions for viewing, editing, and downloading.",
          benefits: ["Instant sharing", "Permission controls", "Team workspaces"],
        },
        {
          id: "priority-support",
          title: "Priority Support",
          description: "Get priority email and chat support with faster response times and dedicated help.",
          benefits: ["Chat support", "Priority queue", "4-hour response"],
        },
        {
          id: "hipaa",
          title: "HIPAA Compliance",
          description: "Full HIPAA compliance for handling protected health information securely.",
          benefits: ["HIPAA compliant", "BAA available", "PHI protection"],
        },
      ],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Everything in Professional, plus advanced features for large firms",
      color: "#8B5CF6",
      includesAllFrom: "Professional",
      features: [
        {
          id: "unlimited-everything",
          title: "Unlimited Everything",
          description: "No limits on users, searches, summaries, or storage. Scale without constraints.",
          benefits: ["Unlimited users", "Unlimited summaries", "Unlimited storage"],
        },
        {
          id: "custom-integrations",
          title: "Custom Integrations",
          description: "Build custom integrations with your existing systems. Our team works with you to connect everything.",
          benefits: ["Custom API access", "Dedicated integration support", "Legacy system support"],
        },
        {
          id: "advanced-analytics",
          title: "Advanced Analytics & Reporting",
          description: "Get detailed analytics on document processing, team usage, and case insights. Custom dashboards and scheduled reports.",
          benefits: ["Custom dashboards", "Usage analytics", "Scheduled reports"],
        },
        {
          id: "sso",
          title: "Single Sign-On (SSO)",
          description: "Integrate with your firm's identity provider. Support for SAML, OAuth, and Active Directory.",
          benefits: ["SAML/OAuth", "Active Directory", "Centralized access"],
        },
        {
          id: "sla",
          title: "SLA Guarantee",
          description: "Guaranteed uptime and response times with a formal Service Level Agreement.",
          benefits: ["99.9% uptime SLA", "Guaranteed response times", "Credits for downtime"],
        },
        {
          id: "dedicated-manager",
          title: "Dedicated Account Manager",
          description: "Your own dedicated account manager who knows your firm and can help optimize your workflow.",
          benefits: ["Named contact", "Quarterly reviews", "Proactive optimization"],
        },
        {
          id: "24-7-support",
          title: "24/7 Phone Support",
          description: "Round-the-clock phone support for urgent issues. Never wait for help.",
          benefits: ["24/7 availability", "Phone support", "1-hour response"],
        },
        {
          id: "custom-training",
          title: "Custom Training & Onboarding",
          description: "Personalized training sessions for your team. Custom onboarding plan tailored to your workflow.",
          benefits: ["On-site training", "Custom curriculum", "Ongoing education"],
        },
        {
          id: "advanced-security",
          title: "Advanced Security Controls",
          description: "Additional security features including IP allowlisting, session controls, and advanced audit logs.",
          benefits: ["IP allowlisting", "Session management", "Advanced audit logs"],
        },
        {
          id: "on-premise",
          title: "On-Premise Deployment Option",
          description: "Deploy Aliva on your own infrastructure for maximum control and compliance.",
          benefits: ["Self-hosted option", "Data residency control", "Air-gapped support"],
        },
        {
          id: "iso27001",
          title: "ISO 27001 Certification",
          description: "Full ISO 27001 certification for international security standards compliance.",
          benefits: ["ISO 27001 certified", "International compliance", "Regular assessments"],
        },
        {
          id: "custom-retention",
          title: "Custom Data Retention",
          description: "Configure data retention policies to match your firm's compliance requirements.",
          benefits: ["Custom policies", "Automated archival", "Compliance reporting"],
        },
      ],
    },
  ];

  const selectedPlan = planFeatures[activePlan];

  return (
    <main style={{ minHeight: "100vh", background: colors.background }}>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 165, 116, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 165, 116, 0.5); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .hover-scale { transition: transform 0.2s ease; }
        .hover-scale:hover { transform: scale(1.02); }
        .feature-card { animation: fadeInUp 0.5s ease forwards; }
      `}</style>

      {/* Header */}
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
                  { name: "Security", href: "/#security" },
                  { name: "Pricing", href: "/pricing" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover-scale"
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: item.name === "Features" ? colors.gold : "#FAFAFA",
                      textDecoration: "none",
                      padding: "8px 16px",
                    borderRadius: 8,
                    background: item.name === "Features" ? "rgba(212, 165, 116, 0.15)" : "transparent",
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

      {/* Hero Section */}
      <section style={{ paddingTop: 160, paddingBottom: 40, textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: colors.foreground,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              ...fadeUp(0.2),
            }}
          >
            Features by Plan
          </h1>
          <p
            style={{
              fontSize: 20,
              color: colors.muted,
              marginBottom: 40,
              lineHeight: 1.6,
              ...fadeUp(0.3),
            }}
          >
            Explore what&apos;s included in each plan. Better plans unlock more powerful features.
          </p>
        </div>
      </section>

      {/* Plan Tabs */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Plan Selector */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 48,
              flexWrap: "wrap",
              ...fadeUp(0.4),
            }}
          >
            {planFeatures.map((plan, i) => (
              <button
                key={plan.plan}
                onClick={() => setActivePlan(i)}
                style={{
                  padding: "16px 32px",
                  borderRadius: 12,
                  border: activePlan === i ? "none" : `2px solid ${colors.border}`,
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 600,
                  background: activePlan === i ? plan.color : colors.card,
                  color: activePlan === i ? "#FFFFFF" : colors.foreground,
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <span
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      background: colors.navy,
                      color: "#FAFAFA",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 8px",
                      borderRadius: 100,
                    }}
                  >
                    POPULAR
                  </span>
                )}
                <div>{plan.plan}</div>
                <div style={{ fontSize: 13, fontWeight: 400, opacity: 0.8, marginTop: 4 }}>
                  {plan.price}{plan.period}
                </div>
              </button>
            ))}
          </div>

          {/* Plan Description */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 48,
              ...fadeUp(0.5),
            }}
          >
            <p style={{ fontSize: 18, color: colors.muted }}>
              {selectedPlan.description}
            </p>
            {selectedPlan.includesAllFrom && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 12,
                  padding: "8px 16px",
                  background: colors.goldLight,
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 500,
                  color: colors.accentText,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Includes all {selectedPlan.includesAllFrom} features
              </div>
            )}
            <p style={{ fontSize: 14, color: colors.slateWarm, marginTop: 8 }}>
              {selectedPlan.features.length} {selectedPlan.includesAllFrom ? "exclusive" : ""} features {selectedPlan.includesAllFrom ? `(plus all ${selectedPlan.includesAllFrom} features)` : "included"}
            </p>
          </div>

          {/* Features Grid */}
          <div
            key={activePlan}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: 24,
            }}
          >
            {selectedPlan.features.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-card hover-lift"
                style={{
                  background: colors.card,
                  borderRadius: 16,
                  padding: 28,
                  border: `1px solid ${colors.border}`,
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${selectedPlan.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={selectedPlan.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: colors.foreground,
                    marginBottom: 12,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: colors.muted,
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {feature.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {feature.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: colors.slateWarm,
                        background: colors.secondary,
                        padding: "4px 10px",
                        borderRadius: 100,
                      }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Upgrade Note for Starter */}
          {activePlan === 0 && (
            <div
              style={{
                marginTop: 48,
                padding: 24,
                background: colors.goldLight,
                borderRadius: 12,
                textAlign: "center",
                border: `1px solid ${colors.gold}33`,
              }}
            >
              <p style={{ fontSize: 16, color: colors.accentText, fontWeight: 500 }}>
                Need more features? Upgrade to <strong>Professional</strong> for treatment timelines, medical chronologies, integrations, and more.
              </p>
              <Link
                href="/pricing"
                style={{
                  display: "inline-block",
                  marginTop: 16,
                  padding: "10px 24px",
                  background: colors.gold,
                  color: colors.navy,
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Compare Plans
              </Link>
            </div>
          )}

          {/* Upgrade Note for Professional */}
          {activePlan === 1 && (
            <div
              style={{
                marginTop: 48,
                padding: 24,
                background: `${colors.navy}08`,
                borderRadius: 12,
                textAlign: "center",
                border: `1px solid ${colors.border}`,
              }}
            >
              <p style={{ fontSize: 16, color: colors.foreground, fontWeight: 500 }}>
                Need unlimited users, custom integrations, or SSO? Contact us about <strong>Enterprise</strong>.
              </p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: 16,
                  padding: "10px 24px",
                  background: colors.navy,
                  color: "#FAFAFA",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Contact Sales
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 24px", background: colors.navy }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: 16,
            }}
          >
            Ready to get started?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Start your 14-day free trial today. No credit card required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#"
              className="hover-lift"
              style={{
                padding: "16px 32px",
                fontSize: 16,
                fontWeight: 600,
                color: colors.navy,
                background: `linear-gradient(135deg, ${colors.gold} 0%, #C4956A 100%)`,
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(212, 165, 116, 0.4)",
              }}
            >
              Start Free Trial
            </a>
            <Link
              href="/pricing"
              className="hover-scale"
              style={{
                padding: "16px 32px",
                fontSize: 16,
                fontWeight: 600,
                color: "#FAFAFA",
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                textDecoration: "none",
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "60px 24px 40px", background: colors.navyLight }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0 }}>
              © {new Date().getFullYear()} Aliva Technologies LLC. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy", "Terms", "Security"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
