import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { RevealSection } from "../components/RevealSection";
import type { ServiceData } from "../data/services";

const serviceHeroImages: Record<string, string> = {
  "business-growth-strategy":  "/assets/generated/svc-hero-business-growth-strategy.jpg",
  "revenue-optimization":      "/assets/generated/svc-hero-revenue-optimization.jpg",
  "leadership-development":    "/assets/generated/svc-hero-leadership-development.jpg",
  "performance-coaching":      "/assets/generated/svc-hero-performance-coaching.jpg",
  "systems-scaling":           "/assets/generated/svc-hero-systems-scaling.jpg",
  "execution-accountability":  "/assets/generated/svc-hero-execution-accountability.jpg",
  "family-business":           "/assets/generated/svc-hero-family-business.webp",
  "leading-in-a-vuca-bani-world":                             "/assets/generated/svc-hero-leading-in-a-vuca-bani-world.webp",
  "perform-or-perish-high-performance-team-leaders":          "/assets/generated/svc-hero-perform-or-perish-high-performance-team-leaders.webp",
  "breaking-organizational-complacency":                      "/assets/generated/svc-hero-breaking-organizational-complacency.webp",
  "customer-centricity-to-customer-intelligence":              "/assets/generated/svc-hero-customer-centricity-to-customer-intelligence.webp",
  "complaint-intelligence-framework":                          "/assets/generated/svc-hero-complaint-intelligence-framework.webp",
  "reading-minds-and-leading-people":                          "/assets/generated/svc-hero-reading-minds-and-leading-people.webp",
  "the-art-of-verbal-communication":                           "/assets/generated/svc-hero-the-art-of-verbal-communication.webp",
  "turning-crisis-into-competitive-advantage":                 "/assets/generated/svc-hero-turning-crisis-into-competitive-advantage.webp",
  "insight-to-impact-frontline-intelligence":                  "/assets/generated/svc-hero-insight-to-impact-frontline-intelligence.webp",
  "corporate-ready-classroom-to-corporate":                    "/assets/generated/svc-hero-corporate-ready-classroom-to-corporate.webp",
  "business-conversations-executive-communication-mastery":    "/assets/generated/svc-hero-business-conversations-executive-communication-mastery.webp",
  "from-mba-to-executive-leader":                              "/assets/generated/svc-hero-from-mba-to-executive-leader.webp",
  "win-every-customer-every-time":                             "/assets/generated/svc-hero-win-every-customer-every-time.webp",
  "from-insight-to-impact-relationship-management":            "/assets/generated/svc-hero-from-insight-to-impact-relationship-management.webp",
  "sales-mastery-science-and-art":                             "/assets/generated/svc-hero-sales-mastery-science-and-art.webp",
  "5s-sales-excellence":                                       "/assets/generated/svc-hero-5s-sales-excellence.webp",
  "heir-to-leader-next-generation-business-leaders":           "/assets/generated/svc-hero-heir-to-leader-next-generation-business-leaders.webp",
};

interface ServicePageProps {
  service: ServiceData;
}

export function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon;
  const accentColor =
    service.accent === "gold" ? "text-gold" : "text-electric-blue";
  const accentBg =
    service.accent === "gold"
      ? "bg-gold/10 border-gold/20"
      : "bg-electric-blue/10 border-electric-blue/20";
  const accentBorder =
    service.accent === "gold" ? "border-gold/30" : "border-electric-blue/30";
  const accentGlow =
    service.accent === "gold"
      ? "hover:shadow-[0_0_32px_rgba(198,167,94,0.25)]"
      : "hover:shadow-[0_0_32px_rgba(198,167,94,0.25)]";

  return (
    <div className="min-h-screen bg-surface-1">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background image */}
        {serviceHeroImages[service.slug] && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${serviceHeroImages[service.slug]})`,
            }}
          />
        )}
        {/* Dark overlay so text stays readable — let image show through on right side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.50) 100%)",
          }}
        />
        {/* Bottom fade to match next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(var(--surface-1)))",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              service.accent === "gold"
                ? "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(198,167,94,0.07), transparent)"
                : "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(198,167,94,0.07), transparent)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(oklch(0.96 0 0 / 1) 1px, transparent 1px),
                             linear-gradient(90deg, oklch(0.96 0 0 / 1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 container max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5rem", flexWrap: "nowrap", whiteSpace: "nowrap", fontSize: "12px", marginBottom: "2rem" }}
          >
            <a href="/" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", flexShrink: 0, display: "inline" }}>
              Home
            </a>
            <ChevronRight size={12} style={{ flexShrink: 0, color: "rgba(255,255,255,0.2)" }} />
            <a
              href={`/?segment=${service.segment}#programs`}
              style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", flexShrink: 0, display: "inline" }}
            >
              Programs
            </a>
            <ChevronRight size={12} style={{ flexShrink: 0, color: "rgba(255,255,255,0.2)" }} />
            <span style={{ color: "rgba(255,255,255,0.6)", flexShrink: 0 }}>{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Icon badge */}
            <div
              className={`inline-flex items-center gap-3 border rounded-full px-4 py-2 mb-6 ${accentBg}`}
            >
              <Icon size={16} className={accentColor} />
              <span
                className={`text-xs font-heading font-bold tracking-widest uppercase ${accentColor}`}
              >
                Alpha Radar Program
              </span>
            </div>

            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              {service.title}
            </h1>
            <p
              className={`text-xl md:text-2xl font-heading font-medium mb-8 ${accentColor}`}
            >
              {service.tagline}
            </p>

            <a
              href="/#contact"
              className="btn-gold-gradient inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-heading font-bold tracking-wide uppercase w-full sm:w-auto"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <RevealSection className="py-20 bg-surface-1">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-divider-left" />
              <p
                className={`text-sm font-heading font-bold tracking-widest uppercase mb-3 ${accentColor}`}
              >
                Program Overview
              </p>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-7">
                What This Program Delivers
              </h2>
              <p className="text-white/65 text-lg leading-relaxed font-body">
                {service.overview}
              </p>
            </div>

            {/* Quick stats sidebar */}
            <div
              className="rounded-2xl p-7 border h-fit"
              style={{
                background: "oklch(var(--surface-2))",
                borderColor: "oklch(0.96 0 0 / 8%)",
              }}
            >
              <p
                className={`text-xs font-heading font-bold tracking-widest uppercase mb-4 ${accentColor}`}
              >
                Program Highlights
              </p>
              <div className="divide-y divide-white/5">
                {(service.segment === "corporate"
                  ? [
                      { label: "Duration", value: "1–2 Days" },
                      { label: "Content", value: "Professionally Designed Slides" },
                      { label: "Delivery", value: "Classroom · Virtual · Hybrid" },
                      { label: "Methodology", value: "Interactive, Practical & Business-Focused" },
                    ]
                  : service.segment === "university"
                  ? [
                      { label: "Content", value: "Professionally Designed Slides" },
                      { label: "Delivery", value: "Offline & Online" },
                      { label: "Methodology", value: "Interactive, Practical & Business-Focused" },
                    ]
                  : [
                      { label: "Duration", value: service.slug === "business-growth-strategy" ? "6–9 Months" : "3–6 Months" },
                      { label: "Format", value: "1-on-1 & Group" },
                      { label: "Sessions", value: "Weekly Check-ins" },
                      { label: "Support", value: "24/7 Access" },
                    ]
                ).map(({ label, value }) => (
                  <div key={label} className="py-4 first:pt-0 last:pb-0">
                    <div className="text-white/50 text-xs font-heading uppercase tracking-wide mb-1.5">
                      {label}
                    </div>
                    <div className="text-white text-sm font-heading font-semibold leading-snug">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Who It's For + Problems Solved */}
      <RevealSection className="py-20 bg-surface-2">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Who It's For */}
            <div>
              <div className="section-divider-left" />
              <p
                className={`text-sm font-heading font-bold tracking-widest uppercase mb-3 ${accentColor}`}
              >
                Who This Is For
              </p>
              <h2 className="heading-display text-3xl md:text-4xl text-white mb-8">
                Is This For You?
              </h2>
              <ul className="space-y-4">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className={`${accentColor} shrink-0 mt-0.5`}
                    />
                    <span className="text-white/65 text-base font-body leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Help You Achieve */}
            <div>
              <div className="section-divider-left" />
              <p
                className={`text-sm font-heading font-bold tracking-widest uppercase mb-3 ${accentColor}`}
              >
                What We Address
              </p>
              <h2 className="heading-display text-3xl md:text-4xl text-white mb-8">
                What We Work Together
              </h2>
              <div className="grid gap-4 grid-cols-1">
                {service.problemsSolved.map((item) => (
                  <div
                    key={item.heading}
                    className="rounded-xl p-5 transition-all duration-300 group hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, rgba(198,167,94,0.06) 0%, rgba(198,167,94,0.02) 100%)",
                      border: "1px solid rgba(198,167,94,0.16)",
                    }}
                  >
                    <p
                      className="font-heading font-bold text-sm mb-1.5 leading-snug"
                      style={{ color: "#D4AF37" }}
                    >
                      {item.heading}
                    </p>
                    <p className="text-white/55 text-sm font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Program Structure */}
      <RevealSection className="py-20 bg-surface-1">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <p
              className={`text-sm font-heading font-bold tracking-widest uppercase mb-3 ${accentColor}`}
            >
              How It Works
            </p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-5">
              Program Structure
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-body">
              A proven, phased methodology that takes you from where you are to
              where you want to be.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.96 0 0 / 15%) 10%, oklch(0.96 0 0 / 15%) 90%, transparent)",
              }}
            />

            <div className="space-y-8">
              {service.programStructure.map((phase, idx) => (
                <div
                  key={phase.phase}
                  className="flex gap-6 md:gap-10 relative"
                >
                  {/* Phase number circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 border ${accentBg} ${accentBorder}`}
                  >
                    <span
                      className={`font-display font-bold text-sm ${accentColor}`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className={`flex-1 rounded-xl p-6 border transition-all duration-300 ${accentGlow} hover:border-opacity-50`}
                    style={{
                      background: "oklch(var(--surface-2))",
                      borderColor: "oklch(0.96 0 0 / 8%)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-heading font-bold tracking-widest uppercase ${accentColor}`}
                      >
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-white/55 text-sm font-body leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Expected Results */}
      <RevealSection className="py-20 bg-surface-2">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <p
              className={`text-sm font-heading font-bold tracking-widest uppercase mb-3 ${accentColor}`}
            >
              What to Expect
            </p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-5">
              Expected Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.expectedResults.map((result, idx) => (
              <div
                key={result}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-surface-3 group hover:border-gold/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${accentBg} ${accentBorder}`}
                >
                  <span
                    className={`font-display font-bold text-xs ${accentColor}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-white/70 text-sm font-body leading-relaxed pt-1">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Master Program upsell -- all SME/family-business programs roll up into it */}
      {service.segment === "sme" && (
        <RevealSection className="py-16 bg-surface-1">
          <div className="container max-w-5xl mx-auto px-6">
            <div
              className="rounded-2xl p-10 md:p-12 text-center border"
              style={{
                background: "linear-gradient(135deg, rgba(198,167,94,0.08) 0%, rgba(13,13,13,0.4) 100%)",
                borderColor: "rgba(198,167,94,0.25)",
              }}
            >
              <p className="text-gold text-xs font-heading font-bold tracking-widest uppercase mb-3">
                Ready to Go Further?
              </p>
              <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">
                Explore the Master Program
              </h2>
              <p className="text-white/60 text-base font-body leading-relaxed max-w-xl mx-auto mb-8">
                For leaders who want to go beyond this program -- the Elite
                Growth System is our complete 6-12 month business and
                leadership transformation engagement, by application only.
              </p>
              <Link
                to="/elite-growth-system"
                className="btn-gold-gradient inline-flex items-center gap-2 px-8 py-4 rounded-md font-heading font-bold tracking-wide uppercase"
              >
                View Master Program
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </RevealSection>
      )}

      {/* Final CTA */}
      <RevealSection className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              service.accent === "gold"
                ? "linear-gradient(135deg, rgba(17,17,17,1) 0%, rgba(13,13,13,1) 100%)"
                : "linear-gradient(135deg, rgba(17,17,17,1) 0%, rgba(13,13,13,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              service.accent === "gold"
                ? "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,167,94,0.07), transparent)"
                : "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,167,94,0.07), transparent)",
          }}
        />

        <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Ready to Start?
          </h2>
          <p className="text-white/60 text-lg font-body max-w-xl mx-auto mb-8 leading-relaxed">
            Apply for the {service.title} program today. We will review your
            application and schedule a strategy call within 24 hours.
          </p>
          <a
            href="/#contact"
            className="btn-gold-gradient glow-gold-gradient inline-flex items-center justify-center gap-2 px-10 py-5 rounded-md text-base font-heading font-bold tracking-wide uppercase w-full sm:w-auto"
          >
            Apply Now
            <ArrowRight size={18} />
          </a>
          <p className="text-white/50 text-sm font-body mt-6">
            Application takes 5 minutes. No commitment required.
          </p>
        </div>
      </RevealSection>
    </div>
  );
}
