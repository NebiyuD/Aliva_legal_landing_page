"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../components/Logo";

export default function Pricing() {
  const [loaded, setLoaded] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

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
    gold: "#D4A574",
    goldLight: "#FEF3E7",
    accentText: "#92400E",
    navy: "#0F172A",
    navyLight: "#1E293B",
    success: "#10B981",
  };

  const fadeUp = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for solo practitioners and small teams getting started",
      monthlyPrice: 49,
      annualPrice: 39,
      popular: false,
      features: [
        "Up to 3 users",
        "AI-powered document search",
        "5 AI summaries per day",
        "1 GB document storage",
        "Basic document organization",
        "Email support",
        "SOC 2 Type II compliant",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "For growing PI firms that need more power and flexibility",
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      features: [
        "Up to 20 users",
        "Unlimited document search",
        "50 AI summaries per day",
        "25 GB document storage",
        "Advanced document organization",
        "Treatment timeline generation",
        "Medical chronology export",
        "Priority email & chat support",
        "Case management integrations",
        "SOC 2 Type II + HIPAA compliant",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large firms with advanced requirements",
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      features: [
        "Unlimited users",
        "Unlimited AI summaries",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training & onboarding",
        "SLA guarantee",
        "SSO & advanced security",
        "SOC 2 + HIPAA + ISO 27001",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Start with a 14-day free trial on any plan. No credit card required. You'll have full access to all features in your chosen tier.",
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle, and we'll prorate any differences.",
    },
    {
      question: "What counts as a 'user'?",
      answer: "A user is anyone who logs into Aliva. This includes attorneys, paralegals, and support staff. We don't charge for client portal access.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC 2 Type II certified, HIPAA compliant, and working toward ISO 27001. All data is encrypted at rest and in transit.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for legal aid organizations and non-profit law firms. Contact us to learn more.",
    },
    {
      question: "What integrations are available?",
      answer: "Professional and Enterprise plans include integrations with popular case management systems like Clio, MyCase, PracticePanther, and more.",
    },
  ];

  const comparisonFeatures = [
    { feature: "Users", starter: "Up to 3", professional: "Up to 20", enterprise: "Unlimited" },
    { feature: "Document Storage", starter: "1 GB", professional: "25 GB", enterprise: "Unlimited" },
    { feature: "AI Summaries", starter: "5/day", professional: "50/day", enterprise: "Unlimited" },
    { feature: "Document Search", starter: "Basic", professional: "Advanced", enterprise: "Advanced + Custom" },
    { feature: "Treatment Timelines", starter: "—", professional: "✓", enterprise: "✓" },
    { feature: "Medical Chronology", starter: "—", professional: "✓", enterprise: "✓" },
    { feature: "Integrations", starter: "—", professional: "Standard", enterprise: "Custom" },
    { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
    { feature: "SSO", starter: "—", professional: "—", enterprise: "✓" },
    { feature: "SLA", starter: "—", professional: "—", enterprise: "✓" },
    { feature: "HIPAA Compliant", starter: "—", professional: "✓", enterprise: "✓" },
    { feature: "ISO 27001", starter: "—", professional: "—", enterprise: "✓" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: colors.background }}>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 165, 116, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 165, 116, 0.5); }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
        .hover-scale { transition: transform 0.2s ease; }
        .hover-scale:hover { transform: scale(1.02); }
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
                      color: item.name === "Pricing" ? colors.gold : "#FAFAFA",
                      textDecoration: "none",
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: item.name === "Pricing" ? "rgba(212, 165, 116, 0.15)" : "transparent",
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
      <section style={{ paddingTop: 160, paddingBottom: 60, textAlign: "center" }}>
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
            Simple, transparent pricing
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
            Choose the plan that fits your firm. Start with a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "6px",
              background: colors.secondary,
              borderRadius: 100,
              ...fadeUp(0.4),
            }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                padding: "10px 24px",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                background: !isAnnual ? colors.card : "transparent",
                color: !isAnnual ? colors.foreground : colors.muted,
                boxShadow: !isAnnual ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{
                padding: "10px 24px",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                background: isAnnual ? colors.card : "transparent",
                color: isAnnual ? colors.foreground : colors.muted,
                boxShadow: isAnnual ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Annual
              <span
                style={{
                  background: colors.success,
                  color: "white",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 100,
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className="hover-lift"
              style={{
                background: tier.popular ? colors.navy : colors.card,
                borderRadius: 20,
                padding: 32,
                border: tier.popular ? "none" : `1px solid ${colors.border}`,
                position: "relative",
                overflow: "hidden",
                ...fadeUp(0.3 + index * 0.1),
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: colors.gold,
                    color: colors.navy,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: tier.popular ? "#FAFAFA" : colors.foreground,
                  marginBottom: 8,
                }}
              >
                {tier.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: tier.popular ? "rgba(255,255,255,0.7)" : colors.muted,
                  marginBottom: 24,
                  lineHeight: 1.5,
                }}
              >
                {tier.description}
              </p>

              <div style={{ marginBottom: 24 }}>
                {tier.monthlyPrice ? (
                  <>
                    <span
                      style={{
                        fontSize: 48,
                        fontWeight: 700,
                        color: tier.popular ? "#FAFAFA" : colors.foreground,
                      }}
                    >
                      ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span
                      style={{
                        fontSize: 16,
                        color: tier.popular ? "rgba(255,255,255,0.7)" : colors.muted,
                      }}
                    >
                      /user/month
                    </span>
                    {isAnnual && (
                      <div
                        style={{
                          fontSize: 13,
                          color: tier.popular ? colors.gold : colors.success,
                          marginTop: 4,
                        }}
                      >
                        Billed annually (${tier.annualPrice! * 12}/user/year)
                      </div>
                    )}
                  </>
                ) : (
                  <span
                    style={{
                      fontSize: 36,
                      fontWeight: 700,
                      color: tier.popular ? "#FAFAFA" : colors.foreground,
                    }}
                  >
                    Custom
                  </span>
                )}
              </div>

              <a
                href="#"
                className="hover-scale"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 24px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  marginBottom: 24,
                  background: tier.popular
                    ? `linear-gradient(135deg, ${colors.gold} 0%, #C4956A 100%)`
                    : "transparent",
                  color: tier.popular ? colors.navy : colors.foreground,
                  border: tier.popular ? "none" : `2px solid ${colors.border}`,
                  transition: "all 0.2s ease",
                }}
              >
                {tier.cta}
              </a>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: tier.popular ? "rgba(255,255,255,0.85)" : colors.foreground,
                      marginBottom: 12,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tier.popular ? colors.gold : colors.success}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section style={{ padding: "80px 24px", background: colors.secondary }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: colors.foreground,
              textAlign: "center",
              marginBottom: 48,
              ...fadeUp(0.2),
            }}
          >
            Compare plans
          </h2>

          <div
            style={{
              background: colors.card,
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              ...fadeUp(0.3),
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: colors.navy }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px 24px",
                      color: "#FAFAFA",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "16px 24px",
                      color: "#FAFAFA",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Starter
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "16px 24px",
                      color: colors.gold,
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Professional
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "16px 24px",
                      color: "#FAFAFA",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      background: i % 2 === 0 ? colors.card : colors.secondary,
                      borderBottom: `1px solid ${colors.border}`,
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 24px",
                        color: colors.foreground,
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "14px 24px",
                        color: row.starter === "—" ? colors.muted : colors.foreground,
                        fontSize: 14,
                      }}
                    >
                      {row.starter === "✓" ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "14px 24px",
                        color: row.professional === "—" ? colors.muted : colors.foreground,
                        fontSize: 14,
                        background: i % 2 === 0 ? colors.goldLight : `${colors.goldLight}88`,
                      }}
                    >
                      {row.professional === "✓" ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        row.professional
                      )}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "14px 24px",
                        color: row.enterprise === "—" ? colors.muted : colors.foreground,
                        fontSize: 14,
                      }}
                    >
                      {row.enterprise === "✓" ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: colors.foreground,
              textAlign: "center",
              marginBottom: 48,
              ...fadeUp(0.2),
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  padding: 24,
                  ...fadeUp(0.3 + i * 0.05),
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: colors.foreground,
                    marginBottom: 8,
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: colors.muted,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
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
              ...fadeUp(0.2),
            }}
          >
            Ready to transform your document workflow?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.6,
              ...fadeUp(0.3),
            }}
          >
            Start your 14-day free trial today. No credit card required.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              ...fadeUp(0.4),
            }}
          >
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
            <a
              href="#"
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
              Contact Sales
            </a>
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
