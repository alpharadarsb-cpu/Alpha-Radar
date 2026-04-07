import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  Crown,
  Layers,
  Map as MapIcon,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { RevealSection } from "../components/RevealSection";

const WHATS_INCLUDED = [
  {
    icon: Target,
    title: "Strategy Development",
    description:
      "Complete business strategy architecture — vision, positioning, growth roadmap, and competitive moat — designed to deliver 3x results in 12 months.",
  },
  {
    icon: Layers,
    title: "Systems Implementation",
    description:
      "End-to-end operational systems design and implementation: SOPs, automation, team structures, and technology stack that scale without breaking.",
  },
  {
    icon: Users,
    title: "Leadership Optimization",
    description:
      "Executive presence development, team leadership frameworks, decision-making upgrades, and culture design to build a high-performance organization.",
  },
  {
    icon: BarChart3,
    title: "Revenue Acceleration",
    description:
      "Comprehensive revenue architecture: pricing optimization, conversion systems, retention programs, and new revenue streams that compound growth.",
  },
  {
    icon: CheckCircle,
    title: "Execution Accountability",
    description:
      "Rigorous weekly accountability framework with sprint planning, KPI reviews, and real-time strategic coaching to guarantee execution.",
  },
  {
    icon: MapIcon,
    title: "6–12 Month Growth Roadmap",
    description:
      "A living, adaptive strategic roadmap with clear milestones, decision trees, and performance gates aligned to your specific business goals.",
  },
  {
    icon: Crown,
    title: "Personal Strategic Advisory",
    description:
      "Direct, private access to your dedicated Alpha Radar strategist — a true thought partner for every major decision and challenge.",
  },
];

const MILESTONES = [
  {
    month: "Month 1–2",
    title: "Deep Dive & Foundation",
    items: [
      "Complete business diagnostic and strategic audit",
      "Leadership and performance assessment",
      "Custom growth roadmap creation",
      "Quick-win identification and activation",
    ],
  },
  {
    month: "Month 3–4",
    title: "Systems & Momentum",
    items: [
      "Operational systems design and implementation",
      "Revenue optimization and pricing overhaul",
      "Team structure redesign and talent gaps",
      "First measurable revenue milestones",
    ],
  },
  {
    month: "Month 5–6",
    title: "Scale & Acceleration",
    items: [
      "Full-scale growth initiatives launched",
      "Leadership operating at executive level",
      "Automated systems running at full capacity",
      "Target: 2x+ revenue trajectory achieved",
    ],
  },
  {
    month: "Month 7–12",
    title: "Elite Performance & Legacy",
    items: [
      "Business operating independently of you",
      "3x revenue target locked in",
      "Leadership pipeline established",
      "Exit-ready or scale-ready business architecture",
    ],
  },
];

export function EliteGrowthSystemPage() {
  return (
    <div className="min-h-screen bg-surface-1">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Pure black gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #000000 0%, #111111 60%, #000000 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(198,167,94,0.08), transparent)",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(198,167,94,0.8) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(198,167,94,0.8) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Top blue beam */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.5) 50%, transparent 100%)",
          }}
        />

        <div className="relative z-10 container max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Exclusivity badge */}
            <div
              className="inline-flex items-center gap-3 mb-8 animate-fade-up"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(198,167,94,0.6))",
                }}
              />
              <div
                className="flex items-center gap-2 rounded-full px-5 py-2 backdrop-blur-sm"
                style={{
                  background: "rgba(198,167,94,0.10)",
                  border: "1px solid rgba(198,167,94,0.28)",
                }}
              >
                <Crown size={13} className="text-gold" />
                <span className="text-gold text-xs font-heading font-bold tracking-[0.2em] uppercase">
                  Elite Transformation Program
                </span>
              </div>
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(198,167,94,0.6), transparent)",
                }}
              />
            </div>

            <h1
              className="heading-display text-[clamp(2.8rem,7vw,5.5rem)] text-white mb-6 animate-fade-up"
              style={{
                animationDelay: "0.1s",
                opacity: 0,
                animationFillMode: "forwards",
                lineHeight: 1.0,
              }}
            >
              Alpha Radar{" "}
              <span className="text-gradient-gold block">
                Elite Growth System
              </span>
            </h1>

            <p
              className="text-white/65 text-xl md:text-2xl font-heading font-medium mb-4 animate-fade-up"
              style={{
                animationDelay: "0.2s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              The Complete Business Transformation
            </p>
            <p
              className="text-white/45 text-base font-body max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
              style={{
                animationDelay: "0.28s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              For leaders who refuse to settle for incremental progress. A
              comprehensive 6–12 month engagement that systematically transforms
              every dimension of your business and leadership.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{
                animationDelay: "0.36s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <a
                href="/#contact"
                className="btn-blue-cta inline-flex items-center gap-2 px-10 py-5 rounded-md font-heading font-bold tracking-wide uppercase glow-blue"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Stat bar */}
            <div
              className="grid grid-cols-3 gap-8 mt-16 pt-12 animate-fade-up"
              style={{
                animationDelay: "0.44s",
                opacity: 0,
                animationFillMode: "forwards",
                borderTop: "1px solid oklch(0.96 0 0 / 8%)",
              }}
            >
              {[
                { value: "6–12", label: "Month Engagement" },
                { value: "7", label: "Core Pillars" },
                { value: "3x", label: "Average ROI" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-gold font-display text-3xl md:text-4xl font-extrabold tracking-tight">
                    {value}
                  </div>
                  <div className="text-white/35 text-xs font-heading tracking-[0.1em] uppercase mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <RevealSection className="py-24 bg-surface-1">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <p className="text-gold font-heading text-sm tracking-widest uppercase mb-3 font-semibold">
              Complete Package
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-4">
              Everything Included
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-body">
              The Elite Growth System isn't a coaching program. It's a complete
              business and leadership transformation infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHATS_INCLUDED.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className="card-premium rounded-2xl p-7 group relative overflow-hidden"
              >
                {/* Number */}
                <div
                  className="absolute top-5 right-6 font-display text-5xl font-black text-white/[0.04] select-none pointer-events-none"
                  style={{ lineHeight: 1 }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:opacity-80 transition-colors"
                  style={{
                    background: "rgba(198,167,94,0.10)",
                    border: "1px solid rgba(198,167,94,0.20)",
                  }}
                >
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Who This Is For */}
      <RevealSection className="py-24 bg-surface-2">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider-left" />
              <p className="text-gold font-heading text-sm tracking-widest uppercase mb-3 font-semibold">
                Exclusivity
              </p>
              <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
                Who This Is For
              </h2>
              <p className="text-white/55 text-base font-body leading-relaxed mb-8">
                The Elite Growth System is not for everyone. We work with a
                carefully selected group of leaders who meet our criteria and
                are genuinely committed to transformation at the highest level.
              </p>

              <ul className="space-y-4">
                {[
                  "Business owners generating ₹60L+ in annual revenue",
                  "Leaders with a serious 3–5 year growth ambition",
                  "Individuals who invest in themselves and their business",
                  "Leaders ready to make bold, uncomfortable changes",
                  "People who hold themselves to the highest standards",
                  "Those who understand that elite results require elite inputs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(198,167,94,0.20), rgba(198,167,94,0.07))",
                        border: "1px solid rgba(198,167,94,0.28)",
                      }}
                    >
                      <CheckCircle size={12} className="text-gold" />
                    </div>
                    <span className="text-white/65 text-sm font-body leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative card */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,26,26,0.97) 0%, rgba(13,13,13,0.98) 100%)",
                border: "1px solid rgba(198,167,94,0.20)",
              }}
            >
              {/* Blue shimmer top */}
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(198,167,94,0.6), transparent)",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(198,167,94,0.07), transparent)",
                }}
              />

              <div className="relative z-10">
                <Award size={40} className="text-gold mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  This Is Not For You If…
                </h3>
                <ul className="space-y-3">
                  {[
                    "You're looking for a quick fix or overnight results",
                    "You're not willing to challenge your current thinking",
                    "You're not prepared to make significant changes",
                    "You want to stay in your comfort zone",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/25 shrink-0 mt-2" />
                      <span className="text-white/40 text-sm font-body leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 pt-6"
                  style={{
                    borderTop: "1px solid rgba(198,167,94,0.15)",
                  }}
                >
                  <p className="text-gold/80 text-sm font-heading font-semibold italic">
                    "We don't just help businesses grow. We transform the
                    leaders who build them."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Timeline / Roadmap */}
      <RevealSection className="py-24 bg-surface-1">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <p className="text-gold font-heading text-sm tracking-widest uppercase mb-3 font-semibold">
              Your Journey
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-4">
              6–12 Month Roadmap
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-body">
              A structured, progressive journey from where you are to where
              you've always known you could be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map(({ month, title, items }, idx) => (
              <div key={month} className="card-premium rounded-2xl p-6 group">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-4"
                  style={{
                    background: "rgba(198,167,94,0.10)",
                    border: "1px solid rgba(198,167,94,0.20)",
                  }}
                >
                  <span className="text-gold">{month}</span>
                </div>
                <div
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-4"
                  style={{ background: "rgba(30,30,30,0.90)" }}
                >
                  <span className="font-display font-black text-xs text-gold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-4">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div
                        className="w-1 h-1 rounded-full shrink-0 mt-2"
                        style={{ background: "rgba(198,167,94,0.45)" }}
                      />
                      <span className="text-white/50 text-xs font-body leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Investment Section */}
      <RevealSection className="py-24 bg-surface-2">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider" />
            <p className="text-gold font-heading text-sm tracking-widest uppercase mb-3 font-semibold">
              Investment
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
              By Application Only
            </h2>
            <p className="text-white/55 text-lg font-body leading-relaxed mb-8">
              The Elite Growth System is a high-investment, high-return
              engagement. Investment details are discussed privately with
              qualified candidates during the strategy call — because the right
              investment depends entirely on your business situation, goals, and
              the transformation scope required.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-12">
              {[
                {
                  icon: Shield,
                  title: "Confidential",
                  desc: "All discussions are NDA-protected and strictly confidential.",
                },
                {
                  icon: Star,
                  title: "Selective",
                  desc: "We accept only 5–8 Elite clients per quarter to ensure exceptional results.",
                },
                {
                  icon: Zap,
                  title: "ROI-Focused",
                  desc: "Designed to generate 10x+ return on your investment within 12 months.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-5 border text-left"
                  style={{
                    background: "oklch(var(--surface-3))",
                    borderColor: "oklch(0.96 0 0 / 8%)",
                  }}
                >
                  <Icon size={20} className="text-gold mb-3" />
                  <h4 className="font-heading font-bold text-white text-sm mb-1">
                    {title}
                  </h4>
                  <p className="text-white/40 text-xs font-body leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-sm font-body italic mb-8">
              "This isn't an expense. It's the highest-leverage investment
              you'll make in your business this year."
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Testimonial highlight */}
      <RevealSection className="py-16 bg-surface-1">
        <div className="container max-w-4xl mx-auto px-6">
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,26,26,0.97) 0%, rgba(13,13,13,0.98) 100%)",
              border: "1px solid rgba(198,167,94,0.20)",
            }}
          >
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(198,167,94,0.5), transparent)",
              }}
            />
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-gold fill-current" />
              ))}
            </div>
            <blockquote className="text-white/80 text-xl font-body italic leading-relaxed mb-8 max-w-2xl mx-auto">
              "The Elite Growth System transformed not just my business, but how
              I think about what's possible. In 10 months, we went from ₹2Cr to
              ₹8.5Cr. I have a business that runs without me and a team that's
              hungry to win."
            </blockquote>
            <div>
              <p className="font-heading font-bold text-white">Rajiv Mehta</p>
              <p className="text-white/40 text-sm font-body">
                Managing Director, Apex Industrial Solutions
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,167,94,0.08), transparent)",
          }}
        />

        <div className="relative z-10 container max-w-3xl mx-auto px-6 text-center">
          <Crown size={36} className="text-gold mx-auto mb-6" />
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-4">
            Ready to Go Elite?
          </h2>
          <p className="text-white/55 text-lg font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Applications are reviewed personally. If you qualify, we'll schedule
            a private strategy call to explore fit and discuss the program in
            detail.
          </p>
          <a
            href="/#contact"
            className="btn-blue-cta inline-flex items-center gap-2 px-12 py-5 rounded-md text-base font-heading font-bold tracking-wide uppercase glow-blue"
          >
            Apply Now
            <ArrowRight size={18} />
          </a>
          <p className="text-white/25 text-sm font-body mt-6">
            Limited to 8 clients per quarter. Applications close when capacity
            is full.
          </p>
        </div>
      </RevealSection>
    </div>
  );
}
