import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Factory,
  Lightbulb,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Shield,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { RevealSection } from "../components/RevealSection";
import { servicesData } from "../data/services";
import {
  useSubmitContactForm,
  useSubmitQualificationForm,
} from "../hooks/useQueries";

// --- Radar pulse animation component ----------------------------------------
function RadarPulse() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="radar-ring absolute w-24 h-24"
          style={{
            animationDelay: `${i * 0.75}s`,
            animationDuration: "3s",
          }}
        />
      ))}
    </div>
  );
}

// --- Live animated radar canvas ----------------------------------------------
function RadarDisplay({ size = 320 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [actualSize, setActualSize] = useState(size);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const s = Math.min(entry.contentRect.width, entry.contentRect.height);
        if (s > 0) setActualSize(Math.round(s));
      }
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = actualSize;
    let angle = 0;
    let animId: number;

    // Blips: random positions within the radar circle
    const blips = Array.from({ length: 8 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: (0.2 + Math.random() * 0.7) * (s / 2 - 10),
      brightness: 0,
    }));

    function draw() {
      if (!canvas || !ctx) return;
      const cx = s / 2;
      const cy = s / 2;
      const r = s / 2 - 4;

      // Clear
      ctx.clearRect(0, 0, s, s);

      // Clip to circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      // Pure black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, s, s);

      // Concentric rings -- Deep Gold
      for (const ratio of [0.25, 0.5, 0.75, 1]) {
        ctx.beginPath();
        ctx.arc(cx, cy, r * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(198, 167, 94, 0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Cross hairs
      ctx.strokeStyle = "rgba(198, 167, 94, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy - r);
      ctx.lineTo(cx, cy + r);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - r, cy);
      ctx.lineTo(cx + r, cy);
      ctx.stroke();

      // Draw sweep as a filled arc wedge -- Gold
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      const grad = ctx.createLinearGradient(0, 0, r, 0);
      grad.addColorStop(0, "rgba(198, 167, 94, 0.0)");
      grad.addColorStop(0.7, "rgba(198, 167, 94, 0.18)");
      grad.addColorStop(1, "rgba(212, 175, 55, 0.45)");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, -Math.PI * 0.35, 0);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      // Sweep line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(r, 0);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.90)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Update and draw blips
      for (const blip of blips) {
        const blipAngle = blip.angle;
        const a = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const b = (blipAngle + Math.PI * 2) % (Math.PI * 2);
        const diff = (a - b + Math.PI * 2) % (Math.PI * 2);
        if (diff < 0.15) {
          blip.brightness = 1;
        } else {
          blip.brightness *= 0.97;
        }
        if (blip.brightness > 0.02) {
          const bx = cx + Math.cos(blipAngle) * blip.radius;
          const by = cy + Math.sin(blipAngle) * blip.radius;
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${blip.brightness})`;
          ctx.fill();
          // Outer glow
          ctx.beginPath();
          ctx.arc(bx, by, 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(198, 167, 94, ${blip.brightness * 0.35})`;
          ctx.fill();
        }
      }

      ctx.restore();

      // Outer border ring -- Gold
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(198, 167, 94, 0.55)";
      ctx.lineWidth = 2;
      ctx.stroke();

      angle += 0.02;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, [actualSize]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        width={actualSize}
        height={actualSize}
        style={{ borderRadius: "50%", display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}

// --- Radar Section -----------------------------------------------------------
function RadarSection() {
  return (
    <RevealSection
      className="py-24 relative overflow-hidden"
      style={
        {
          background: "linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%)",
        } as React.CSSProperties
      }
    >
      {/* Grid overlay -- Deep Gold tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(198,167,94,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(198,167,94,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow behind radar -- Gold */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 50% 50%, rgba(198,167,94,0.08), transparent 70%)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Radar display -- centered, large */}
          <div className="flex justify-center lg:justify-start shrink-0 w-full lg:w-auto">
            <div className="relative">
              <div
                className="rounded-full p-1"
              >
                <div className="w-full flex justify-center overflow-hidden">
                <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] shrink-0">
                  <RadarDisplay size={460} />
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left max-w-xl">
            <p
              className="font-heading text-[10.5px] font-bold tracking-[0.26em] uppercase mb-4 flex items-center justify-center lg:justify-start gap-2"
              style={{ color: "#C6A75E" }}
            >
              <span
                className="inline-block h-[1.5px] w-5 rounded"
                style={{ background: "#C6A75E" }}
              />
              The Alpha Radar System
            </p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
              Scanning for Your{" "}
              <span style={{ color: "#D4AF37" }}>Next Breakthrough</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed font-body mb-8">
              Just like a military-grade radar system, Alpha Radar scans your
              business landscape -- uncovering hidden opportunities,
              identifying growth gaps and pinpointing decisive actions
              that drive exponential growth. Every blip on the screen is a potential
              breakthrough waiting to be activated.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { dot: "#C6A75E", label: "Growth Opportunities Detected" },
                { dot: "#D4AF37", label: "Revenue Leaks Identified" },
                { dot: "#C6A75E", label: "Strategic Gaps Mapped" },
                { dot: "#D4AF37", label: "High-Impact Actions Activated" },
              ].map(({ dot, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg px-4 py-3"
                  style={{
                    background: "rgba(198,167,94,0.06)",
                    border: "1px solid rgba(198,167,94,0.22)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                    style={{ background: dot, boxShadow: `0 0 6px ${dot}` }}
                  />
                  <span className="text-white/70 text-sm font-body leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

// --- Hero section ------------------------------------------------------------
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* -- Hero Background: Pure black base -- */}
      <div className="absolute inset-0" style={{ background: "#0D0D0D" }} />

      {/* -- Full-screen radar: grid + concentric rings -- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198,167,94,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,167,94,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* -- Concentric radar rings centered on screen -- */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200vmax",
          height: "200vmax",
        }}
      >
        {[12, 22, 32, 42, 52, 62, 72, 82, 92].map((pct, i) => (
          <div
            key={pct}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: `${pct}%`,
              height: `${pct}%`,
              borderRadius: "50%",
              border: `1px solid rgba(198,167,94,${i < 3 ? 0.30 : i < 6 ? 0.18 : 0.09})`,
            }}
          />
        ))}
        {/* Crosshair vertical */}
        <div style={{
          position: "absolute", top: 0, left: "50%",
          width: "1px", height: "100%",
          background: "rgba(198,167,94,0.12)",
        }} />
        {/* Crosshair horizontal */}
        <div style={{
          position: "absolute", top: "50%", left: 0,
          width: "100%", height: "1px",
          background: "rgba(198,167,94,0.12)",
        }} />
      </div>

      {/* -- Center gold radial glow -- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 48%, rgba(198,167,94,0.11), transparent 70%)",
        }}
      />

      {/* -- Bottom fade to black so it blends into next section -- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 45%, rgba(10,10,10,0.7) 70%, #0D0D0D 100%)",
        }}
      />

      {/* -- Radar-style grid overlay -- Gold tint (kept for texture) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(198,167,94,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(198,167,94,0.04) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle radial radar glow at center -- Gold */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(198,167,94,0.08), transparent 70%)",
        }}
      />

      {/* Gold horizontal light beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6" style={{ paddingTop: "clamp(100px, 18vh, 160px)", paddingBottom: "clamp(60px, 10vh, 100px)" }}>
        {/* Radar icon -- pure SVG, no image box, perfect blend */}
        <div className="relative flex justify-center mb-10">
          <div className="relative w-28 h-28 flex items-center justify-center animate-float-y">
            <RadarPulse />
            {/* Gold radar target SVG -- transparent background, no box */}
            <svg
              className="relative z-10 w-20 h-20 animate-fade-in"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 14px rgba(198,167,94,0.70))" }}
            >
              {/* Outer ring */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(198,167,94,0.90)" strokeWidth="2.5" />
              {/* Mid ring */}
              <circle cx="50" cy="50" r="33" fill="none" stroke="rgba(198,167,94,0.75)" strokeWidth="2" />
              {/* Inner ring */}
              <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(198,167,94,0.85)" strokeWidth="2" />
              {/* Center dot */}
              <circle cx="50" cy="50" r="5" fill="rgba(198,167,94,1)" />
              {/* Crosshair lines */}
              <line x1="50" y1="4" x2="50" y2="96" stroke="rgba(198,167,94,0.45)" strokeWidth="1.5" />
              <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(198,167,94,0.45)" strokeWidth="1.5" />
              {/* Small notch marks on outer ring */}
              <line x1="50" y1="4" x2="50" y2="12" stroke="rgba(198,167,94,0.90)" strokeWidth="2.5" />
              <line x1="50" y1="88" x2="50" y2="96" stroke="rgba(198,167,94,0.90)" strokeWidth="2.5" />
              <line x1="4" y1="50" x2="12" y2="50" stroke="rgba(198,167,94,0.90)" strokeWidth="2.5" />
              <line x1="88" y1="50" x2="96" y2="50" stroke="rgba(198,167,94,0.90)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>

        {/* Ceremonial badge -- Gold accent */}
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
            className="flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-sm"
            style={{
              background: "rgba(198,167,94,0.10)",
              border: "1px solid rgba(198,167,94,0.30)",
            }}
          >
            <Zap size={11} className="text-gold" />
            <span className="text-xs font-heading font-bold tracking-[0.18em] uppercase" style={{ background: "linear-gradient(90deg, #F4DC6A, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Strategic Growth & Peak Performance
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

        {/* Main headline -- "Alpha" in Royal Gold */}
        <h1
          className="heading-display text-[clamp(2.6rem,5.5vw,4.8rem)] text-white mb-6 animate-fade-up" data-smooth="true"
          style={{
            WebkitFontSmoothing: "antialiased" as const,
            MozOsxFontSmoothing: "grayscale" as const,
            textRendering: "optimizeLegibility" as const,
            animationDelay: "0.12s",
            opacity: 0,
            animationFillMode: "forwards",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          Unlock Your{" "}
          <span style={{ color: "#D4AF37", fontWeight: 900 }}>Alpha</span>
          <br />
          <span className="text-white/92">Scale Beyond Limits</span>
        </h1>

        {/* Gold accent underline */}
        <div
          className="animate-fade-up mx-auto"
          style={{
            width: "72px",
            height: "3px",
            background: "linear-gradient(90deg, #C6A75E, #D4AF37)",
            borderRadius: "2px",
            marginBottom: "24px",
            opacity: 0,
            animationDelay: "0.18s",
            animationFillMode: "forwards",
          }}
        />

        {/* Subheading -- Royal Gold */}
        <p
          className="text-[1.125rem] md:text-[1.25rem] font-heading font-bold max-w-[540px] mx-auto mb-14 animate-fade-up"
          style={{
            animationDelay: "0.22s",
            opacity: 0,
            animationFillMode: "forwards",
            lineHeight: 1.6,
            letterSpacing: "0.01em",
            color: "#D4AF37",
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
          }}
        >
          Sharper Vision. Stronger Execution.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{
            animationDelay: "0.34s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#programs"
            className="btn-outline-gold px-10 py-[1.05rem] rounded-lg text-[0.8125rem] font-heading font-bold tracking-[0.12em] uppercase"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
}

// --- About section -- Owner Bio ------------------------------------------------
function AboutSection() {
  const expertiseTags = [
    "Business Strategy",
    "Revenue Optimization",
    "Leadership Coaching",
    "Systems Design",
    "Execution Advisory",
    "Startup Scaling",
  ];

  return (
    <RevealSection
      id="about"
      className="py-28 relative overflow-hidden"
      style={
        {
          background: "linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%)",
        } as React.CSSProperties
      }
    >
      {/* Background texture -- Gold tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(198,167,94,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(198,167,94,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow -- Gold */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,167,94,0.07), transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT -- Portrait */}
          <div className="flex flex-col gap-5">
            {/* Portrait */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Glow border -- Gold */}
                <div
                  className="absolute -inset-1 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(198,167,94,0.45), rgba(212,175,55,0.12), rgba(140,107,31,0.25))",
                    filter: "blur(8px)",
                  }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(198,167,94,0.35)",
                    boxShadow:
                      "0 0 40px rgba(198,167,94,0.12), 0 24px 80px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src="/assets/generated/owner-portrait.dim_600x700.jpg"
                    loading="eager"
                    alt="Sushil Bohra -- Founder, Alpha Radar"
                    className="w-full object-cover block mx-auto"
                    style={{ maxHeight: "520px", objectPosition: "center top" }}
                  />
                  {/* Subtle bottom gradient fade */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT -- Bio Content */}
          <div>
            {/* Eyebrow -- Gold */}
            <p
              className="font-heading text-[10.5px] font-bold tracking-[0.26em] uppercase mb-4 flex items-center gap-2"
              style={{ color: "#C6A75E" }}
            >
              <span
                className="inline-block h-[1.5px] w-5 rounded"
                style={{ background: "#C6A75E" }}
              />
              Meet the Founder
            </p>

            {/* Heading */}
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Driven by Results
              <span className="block">Built on Experience</span>
            </h2>

            {/* Name & Title */}
            <div className="mb-6">
              <div
                className="font-heading text-xl font-bold mb-1"
                style={{ color: "#D4AF37" }}
              >
                Sushil Bohra
              </div>
              <div className="text-white/50 text-sm font-body">
                Founder, Alpha Radar
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="text-white/70 text-base leading-relaxed font-body">
                Sushil Bohra is the Founder of Alpha Radar Business Consultancy,
                a firm focused on helping entrepreneurs transform their businesses
                from daily firefighting to structured, system-driven growth.
                With over 35 years of professional experience, including 27 years
                with one of India's largest financial institutions, he brings deep
                practical insights into business operations, financial discipline and organizational growth. Having worked closely with entrepreneurs,
                traders and MSME businesses across industries and geographies,
                he understands both what drives success and what limits scalability.
              </p>
              <p className="text-white/60 text-base leading-relaxed font-body">
                No fluff. No theory. No generic advice. Just clear strategy,
                sharp execution and measurable growth. If your business feels stuck,
                unstructured, or underperforming -- the problem isn't effort, it's direction.
                That's where Alpha Radar comes in.
              </p>
              <p className="text-white/55 text-base leading-relaxed font-body italic">
                "You don't need more ideas. You need the right strategy -- and the
                discipline to execute it."
              </p>
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1.5 text-sm font-heading font-medium"
                  style={{
                    border: "1px solid rgba(198,167,94,0.30)",
                    color: "#C6A75E",
                    background: "rgba(198,167,94,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

// --- Who We Help section ------------------------------------------------------
function WhoWeHelpSection() {
  const segments = [
    {
      icon: Briefcase,
      title: "Business Owners",
      description:
        "Scale your operations, increase profitability and build systems that run without your presence. Break through revenue plateaus and create lasting enterprise value.",
    },
    {
      icon: Building2,
      title: "Corporate Professionals",
      description:
        "Accelerate your career trajectory, develop executive presence and build the leadership skills needed to rise to C-suite and beyond.",
    },
    {
      icon: Factory,
      title: "Industrial Leaders",
      description:
        "Modernize operations, drive efficiency and lead transformational change in traditional industries. Future-proof your organization.",
    },
    {
      icon: Lightbulb,
      title: "Startup Founders",
      description:
        "Validate your model, achieve product-market fit and build investor-ready businesses. Navigate the startup journey with a proven strategist.",
    },
  ];

  return (
    <RevealSection
      id="who-we-help"
      className="py-28 relative overflow-hidden"
      style={
        {
          background: "linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,167,94,0.1), transparent)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="eyebrow mb-4">Whom We Serve</p>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-5">
            Built for Driven Leaders
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body text-base">
            Alpha Radar works exclusively with ambitious individuals committed
            to achieving extraordinary results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card-premium rounded-xl p-7 group flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:opacity-80 transition-colors"
                style={{
                  background: "rgba(198,167,94,0.10)",
                  border: "1px solid rgba(198,167,94,0.25)",
                }}
              >
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3 tracking-tight">
                {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-body flex-1">
                {description}
              </p>
              <a
                href="#programs"
                className="mt-4 inline-flex items-center gap-1 text-xs font-heading font-semibold tracking-wide transition-colors hover:opacity-80"
                style={{ color: "#C6A75E" }}
              >
                Explore Programs
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

// --- Services section -- dark navy with background-image cards ----------------
const serviceImages: Record<string, string> = {
  "business-growth-strategy":  "/assets/generated/svc-card-business-growth-strategy.jpg",
  "revenue-optimization":      "/assets/generated/svc-card-revenue-optimization.jpg",
  "leadership-development":    "/assets/generated/svc-card-leadership-development.jpg",
  "performance-coaching":      "/assets/generated/svc-card-performance-coaching.jpg",
  "systems-scaling":           "/assets/generated/svc-card-systems-scaling.jpg",
  "execution-accountability":  "/assets/generated/svc-card-execution-accountability.jpg",
};

function ProgramsSection() {
  return (
    <RevealSection
      id="programs"
      className="py-28 relative overflow-hidden"
      style={
        {
          background: "linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%)",
        } as React.CSSProperties
      }
    >
      {/* Subtle top separator -- Gold */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(198,167,94,0.4), transparent)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p
            className="font-heading text-[10.5px] font-bold tracking-[0.26em] uppercase mb-4 flex items-center justify-center gap-2"
            style={{ color: "#C6A75E" }}
          >
            <span
              className="inline-block h-[1.5px] w-5 rounded"
              style={{ background: "#C6A75E" }}
            />
            What We Offer
          </p>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-5">
            Our Programs
          </h2>
          <p className="text-white/55 max-w-xl mx-auto font-body text-base">
            Each program is engineered for maximum ROI. No fluff, no generic
            frameworks -- only high-impact interventions tailored to your
            specific situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="relative rounded-xl overflow-hidden block group"
                style={{ minHeight: "280px" }}
              >
                {/* Background image layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${serviceImages[service.slug] ?? ""})`,
                  }}
                />
                {/* Dark overlay -- heavy black + gold tint for black/gold theme */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(4,3,0,0.72) 45%, rgba(0,0,0,0.95) 100%)",
                  }}
                />
                {/* Permanent subtle gold tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(160deg, rgba(198,167,94,0.05) 0%, transparent 60%)",
                  }}
                />
                {/* Gold tint stronger on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(198,167,94,0.08)" }}
                />
                {/* Content on top */}
                <div
                  className="relative z-10 p-7 h-full flex flex-col justify-end"
                  style={{ minHeight: "280px" }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors"
                    style={{
                      background: "rgba(198,167,94,0.15)",
                      border: "1px solid rgba(198,167,94,0.35)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed font-body mb-4">
                    {service.tagline}
                  </p>
                  <div
                    className="mt-3 inline-flex items-center gap-2 text-sm font-heading font-bold tracking-wide transition-all duration-300 group-hover:gap-3"
                    style={{ color: "#D4AF37" }}
                  >
                    <span style={{
                      borderBottom: "1.5px solid rgba(212,175,55,0.5)",
                      paddingBottom: "1px",
                    }}>
                      Learn More
                    </span>
                    <ChevronRight size={14} style={{ transition: "transform 0.2s" }} />
                  </div>
                </div>
                {/* Top-edge gold line on hover */}
                <div
                  className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

// --- Why This Is Important section -------------------------------------------
function WhyThisIsImportantSection() {
  const pillars = [
    { label: "Clarity", sub: "creates confidence" },
    { label: "Strategy", sub: "creates momentum" },
    { label: "Execution", sub: "creates authority" },
  ];

  return (
    <RevealSection
      className="relative overflow-hidden"
      style={{ background: "transparent" } as React.CSSProperties}
    >
      {/* -- Cinematic aerial city background -- dark gold tones like live site -- */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=75&auto=format&fit=crop)",
        }}
      />
      {/* Top seamless fade from previous section */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0F0F0F 0%, transparent 100%)",
        }}
      />
      {/* Dark overlay -- 78% so text is fully readable, city shows through */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.87)" }}
      />
      {/* Gold warm tint to match the amber glow of city lights */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(198,167,94,0.09), transparent 70%)",
        }}
      />
      {/* Bottom seamless fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)",
        }}
      />


      <div className="relative z-10 py-32 container max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="font-heading text-[10.5px] font-bold tracking-[0.28em] uppercase mb-5 flex items-center justify-center gap-3"
          style={{ color: "#C6A75E" }}
        >
          <span
            className="inline-block h-[1.5px] w-8 rounded"
            style={{
              background: "linear-gradient(90deg, transparent, #C6A75E)",
            }}
          />
          The Reality of Growth
          <span
            className="inline-block h-[1.5px] w-8 rounded"
            style={{
              background: "linear-gradient(90deg, #C6A75E, transparent)",
            }}
          />
        </p>

        {/* Heading */}
        <h2
          className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ color: "#EAEAEA" }}
        >
          Why This Is <span style={{ color: "#D4AF37" }}>Important</span>
        </h2>

        {/* Gold divider */}
        <div
          className="mx-auto mb-12"
          style={{
            width: "64px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            borderRadius: "2px",
          }}
        />

        {/* Opening statement */}
        <div className="mb-10 space-y-4">
          <p
            className="text-xl md:text-2xl font-heading font-semibold leading-relaxed"
            style={{ color: "#EAEAEA" }}
          >
            Most businesses don't fail because of lack of effort.
          </p>
          <p
            className="text-xl md:text-2xl font-heading font-bold"
            style={{ color: "#D4AF37" }}
          >
            They fail because of lack of clarity.
          </p>
        </div>

        {/* Gold divider line */}
        <div
          className="mx-auto mb-10"
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(198,167,94,0.40)",
          }}
        />

        {/* Three failure lines */}
        <div className="mb-10 space-y-3 max-w-2xl mx-auto">
          {[
            "Without strategic direction, growth becomes random.",
            "Without structured thinking, execution becomes inconsistent.",
            "Without accountability, potential remains unused.",
          ].map((line) => (
            <p
              key={line}
              className="text-base md:text-lg font-body leading-relaxed"
              style={{ color: "#CFCFCF" }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Gold divider line */}
        <div
          className="mx-auto mb-10"
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(198,167,94,0.40)",
          }}
        />

        {/* Instinct paragraph */}
        <div className="mb-10 space-y-3 max-w-2xl mx-auto">
          <p
            className="text-base md:text-lg font-body leading-relaxed"
            style={{ color: "#CFCFCF" }}
          >
            Every ambitious leader reaches a point where instinct is not enough.
          </p>
          <p
            className="text-base font-heading font-semibold"
            style={{ color: "#EAEAEA" }}
          >
            You need sharper perspective.
          </p>
          <p
            className="text-base font-heading font-semibold"
            style={{ color: "#EAEAEA" }}
          >
            Stronger execution.
          </p>
          <p
            className="text-base font-heading font-semibold"
            style={{ color: "#EAEAEA" }}
          >
            A system that turns vision into measurable results.
          </p>
        </div>

        {/* Key insight */}
        <div
          className="mx-auto mb-12 rounded-xl px-8 py-6 max-w-2xl"
          style={{
            background: "rgba(198,167,94,0.07)",
            border: "1px solid rgba(198,167,94,0.22)",
          }}
        >
          <p
            className="text-base md:text-lg font-body leading-relaxed italic"
            style={{ color: "#EAEAEA" }}
          >
            Initial success comes from hard work and hustle -- but long-term growth
            comes from{" "}
            <span style={{ color: "#D4AF37", fontWeight: 700 }}>
              systems, vision, team and adaptability.
            </span>
          </p>
        </div>

        {/* Three pillars -- boxed */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {pillars.map(({ label, sub }) => (
            <div
              key={label}
              className="rounded-lg px-5 py-4"
              style={{
                background: "rgba(198,167,94,0.06)",
                border: "1px solid rgba(198,167,94,0.20)",
              }}
            >
              <p
                className="font-heading font-bold text-lg mb-1"
                style={{ color: "#D4AF37" }}
              >
                {label}
              </p>
              <p
                className="text-xs font-body tracking-wide"
                style={{ color: "#9A9A9A" }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>

        {/* Closing lines */}
        <div className="max-w-xl mx-auto space-y-3 mb-10">
          <p
            className="text-base font-body leading-relaxed"
            style={{ color: "#CFCFCF" }}
          >
            Every business that scales does so on the back of clear decisions,
            repeatable systems and leaders who know exactly where they are going.
          </p>
          <p
            className="text-base font-body leading-relaxed"
            style={{ color: "#CFCFCF" }}
          >
            You need structured thinking, disciplined action and strategic
            oversight.
          </p>
        </div>

        {/* Gold divider line */}
        <div
          className="mx-auto mb-8"
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(198,167,94,0.40)",
          }}
        />

        {/* Final punch */}
        <div className="space-y-2">
          <p className="text-base font-body" style={{ color: "#9A9A9A" }}>
            This session is not for everyone.
          </p>
          <p
            className="text-lg md:text-xl font-heading font-bold"
            style={{ color: "#EAEAEA" }}
          >
            It is for leaders who refuse to stay average.
          </p>
          <p
            className="text-base md:text-lg font-body mt-6"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}
          >
            The reality of growth -- those who want to move from effort-driven growth to system-driven scale are willing to think strategically and act decisively.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

// --- FAQ section --------------------------------------------------------------
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does coaching engagement typically last?",
      answer:
        "Most of our programs run for 3-12 months. The exact duration depends on your goals, the scope of transformation required and the program you select. We design each engagement to achieve specific, measurable outcomes -- not just to fill a calendar.",
    },
    {
      question: "What kind of results can I realistically expect?",
      answer:
        "Results vary by business, starting point and commitment level. Clients typically experience improved revenue and profitability, stronger operational efficiency, better team performance and the strategic clarity to scale with confidence.",
    },
    {
      question: "Who is this coaching designed for?",
      answer:
        "Our ideal clients are entrepreneurs and business owners who are performing well but feel held back by operational complexity, team dependency, or the absence of structured processes -- and are ready to shift from reactive management to scalable, professionally run businesses. We work with those who take ownership seriously and are committed to building something lasting. We are not the right fit for those seeking quick fixes, avoiding accountability, or unwilling to invest in systems, empower their teams and stay the course for long-term growth.",
    },
    {
      question: "What is the investment for your programs?",
      answer:
        "Our engagements are selectively designed and fees are tailored to the scope, scale and strategic impact of each assignment, reflecting the depth of expertise, level of involvement and long-term value creation -- aligned with outcomes rather than time.",
    },
    {
      question: "How does the qualification process work?",
      answer:
        "Submit your inquiry through our website to get started. You will then receive a detailed business assessment form via email. Complete the form so we can understand your business, challenges and goals. Based on your submission, we will schedule a strategy call to discuss the next steps.",
    },
    {
      question: "Is there any support between coaching sessions?",
      answer:
        "Yes. All Alpha Radar clients receive ongoing support between sessions via WhatsApp and email. We're your strategic partner, not just your weekly coach.",
    },
  ];

  return (
    <RevealSection
      id="faq"
      className="py-28 relative overflow-hidden"
      style={
        {
          background: "linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-4 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,167,94,0.06), transparent)",
          transform: "translate(30%, -50%)",
        }}
      />

      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="eyebrow mb-4">Common Questions</p>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-5">
            FAQ
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body text-base">
            Everything you need to know before applying.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="rounded-xl overflow-hidden border transition-all duration-300"
              style={{
                background:
                  openIndex === idx
                    ? "oklch(var(--surface-3))"
                    : "oklch(var(--surface-2))",
                borderColor:
                  openIndex === idx
                    ? "rgba(198,167,94,0.28)"
                    : "rgba(255,255,255,0.06)",
              }}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-6 text-left gap-4 group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-heading font-semibold text-white text-base leading-snug group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={
                    openIndex === idx
                      ? {
                          background: "rgba(198,167,94,0.12)",
                          border: "1px solid rgba(198,167,94,0.32)",
                        }
                      : {
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }
                  }
                >
                  {openIndex === idx ? (
                    <X size={13} className="text-gold" />
                  ) : (
                    <ChevronDown
                      size={13}
                      className="text-white/40 group-hover:text-gold transition-colors"
                    />
                  )}
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6">
                  <div
                    className="pt-4"
                    style={{
                      borderTop: "1px solid rgba(198,167,94,0.12)",
                    }}
                  >
                    <p className="text-white/60 text-sm font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/30 text-sm font-body mb-4">
            Have more questions?
          </p>
          <a
            href="/#contact"
            className="btn-gold-gradient inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-heading font-bold tracking-wide uppercase"
          >
            Ask Us Directly
            <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

// --- Final CTA section --------------------------------------------------------
function FinalCTASection() {
  return (
    <RevealSection
      className="py-28 relative overflow-hidden"
      style={
        {
          background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,167,94,0.07), transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(198,167,94,0.20) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(198,167,94,0.20) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{
            background: "rgba(198,167,94,0.10)",
            border: "1px solid rgba(198,167,94,0.30)",
          }}
        >
          <Rocket size={12} className="text-gold" />
          <span className="text-gold text-xs font-heading font-semibold tracking-widest uppercase">
            Next Level Awaits
          </span>
        </div>

        <h2 className="heading-display text-5xl md:text-7xl text-white mb-6">
          Ready to <span className="text-gradient-gold">Scale?</span>
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed">
          Join elite leaders who chose to perform at the highest level. One
          conversation could be the turning point your business needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="btn-gold-gradient px-10 py-5 rounded-md text-base font-heading font-bold tracking-wide uppercase inline-flex items-center gap-2 glow-gold-gradient"
          >
            Book Your Free Consultation
            <ChevronRight size={20} />
          </a>
        </div>

        <p className="text-white/25 text-xs font-body mt-4">
          Limited spots available each month. First session is complimentary.
        </p>
      </div>
    </RevealSection>
  );
}

// --- Contact section ----------------------------------------------------------
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success("Message received! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please reach out via WhatsApp.");
    }
  };

  return (
    <RevealSection
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)" } as React.CSSProperties}
    >
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.6), transparent)" }}
      />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <p className="eyebrow mb-4">Direct Access</p>
          <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-5">
            Let's Talk Business
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body text-base">
            One conversation can change the trajectory of your business. Reach
            out on your preferred channel -- we respond fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* -- Left: Contact form -- */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(26,26,26,0.97) 0%, rgba(13,13,13,0.99) 100%)",
              border: "1px solid rgba(198,167,94,0.12)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "inset 0 1px 0 rgba(198,167,94,0.06), 0 8px 40px rgba(0,0,0,0.50)",
            }}
          >
            <h3 className="font-heading text-xl font-bold text-white mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(198,167,94,0.10)", border: "1px solid rgba(198,167,94,0.30)" }}
                >
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white mb-2">Message Received!</h4>
                <p className="text-white/50 font-body text-sm">Our team will reach out within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gold text-sm font-heading underline hover:opacity-80 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-white/60 text-xs font-heading tracking-wider uppercase mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name" required autoComplete="name"
                    className="bg-surface-3 border-white/10 text-white placeholder:text-white/25 focus:border-gold/50 focus:ring-gold/20 font-body"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white/60 text-xs font-heading tracking-wider uppercase mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required autoComplete="email"
                      className="bg-surface-3 border-white/10 text-white placeholder:text-white/25 focus:border-gold/50 focus:ring-gold/20 font-body"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/60 text-xs font-heading tracking-wider uppercase mb-2 block">
                      Phone
                    </Label>
                    <div className="relative">
                      <Input
                        id="phone" name="phone" type="tel" inputMode="numeric"
                        value={form.phone}
                        onChange={(e) => {
                          const d = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                          setForm((prev) => ({ ...prev, phone: d }));
                        }}
                        placeholder="98765 43210" maxLength={10} pattern="[0-9]{10}"
                        autoComplete="tel"
                        className="bg-surface-3 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50 focus:ring-gold/20 font-body"
                        style={{ paddingLeft: "3.4rem" }}
                      />
                      <div
                        className="absolute left-0 top-0 bottom-0 flex items-center px-3 pointer-events-none z-10"
                        style={{ borderRight: "1px solid rgba(198,167,94,0.22)" }}
                      >
                        <span className="text-white/55 text-sm font-heading font-semibold select-none">+91</span>
                      </div>
                      {form.phone.length > 0 && (
                        <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-heading pointer-events-none"
                          style={{ color: form.phone.length === 10 ? "#4ade80" : "rgba(198,167,94,0.55)" }}
                        >
                          {form.phone.length}/10
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-white/60 text-xs font-heading tracking-wider uppercase mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message" name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your business and what you're looking to achieve..."
                    required rows={5}
                    className="bg-surface-3 border-white/10 text-white placeholder:text-white/25 focus:border-gold/50 focus:ring-gold/20 font-body resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit" disabled={isPending}
                  className="btn-gold-gradient w-full py-3 rounded-md font-heading font-bold tracking-wide uppercase border-0 text-sm"
                >
                  {isPending ? (
                    <><Loader2 size={16} className="mr-2 animate-spin" />Sending...</>
                  ) : (
                    <>Send Message<ChevronRight size={16} className="ml-2" /></>
                  )}
                </Button>

              </form>
            )}
          </div>

          {/* -- Right: Contact info -- */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-white/50 font-body text-sm leading-relaxed">
                Whether you're ready to commit or just exploring your options,
                we welcome the conversation. Reach us on your preferred channel.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919377676979" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl p-5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(14,14,14,0.98) 100%)", border: "1px solid rgba(198,167,94,0.15)", boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)" }}>
                <MessageCircle size={20} className="text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-bold text-white text-sm">WhatsApp</div>
                <div className="text-white/50 text-xs font-body mt-0.5">+91 93776 76979</div>
                <div className="text-green-400 text-[11px] font-heading mt-0.5">Usually responds within 2 hours</div>
              </div>
              <ChevronRight size={14} className="text-white/20 shrink-0 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </a>

            {/* Email */}
            <a
              href="mailto:contactalpharadar@gmail.com"
              className="group flex items-center gap-4 rounded-xl p-5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(14,14,14,0.98) 100%)", border: "1px solid rgba(198,167,94,0.15)", boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(198,167,94,0.10)", border: "1px solid rgba(198,167,94,0.25)" }}>
                <Mail size={20} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-bold text-white text-sm">Email</div>
                <div className="text-white/50 text-xs font-body mt-0.5">contactalpharadar@gmail.com</div>
                <div className="text-gold text-[11px] font-heading mt-0.5">Responds within 24 hours</div>
              </div>
              <ChevronRight size={14} className="text-white/20 shrink-0 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </a>

            {/* Phone */}
            <a
              href="tel:+919377676979"
              className="group flex items-center gap-4 rounded-xl p-5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(14,14,14,0.98) 100%)", border: "1px solid rgba(198,167,94,0.15)", boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(198,167,94,0.10)", border: "1px solid rgba(198,167,94,0.25)" }}>
                <Phone size={20} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-bold text-white text-sm">Phone</div>
                <div className="text-white/50 text-xs font-body mt-0.5">+91 93776 76979</div>
                <div className="text-gold text-[11px] font-heading mt-0.5">Mon - Fri, 10 AM - 5 PM IST</div>
              </div>
              <ChevronRight size={14} className="text-white/20 shrink-0 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </a>

            {/* Why Alpha Radar */}
            <div className="bg-surface-3 rounded-xl p-6 border border-white/5">
              <p className="text-white/40 text-xs font-heading tracking-wider uppercase mb-4">Why Alpha Radar?</p>
              <div className="space-y-3">
                {[
                  "Result-Oriented Strategy -- Tailored to Your Business",
                  "Value Execution, Discipline and Measurable Outcomes",
                  "First Consultation Completely Free",
                  "All Discussions Are Strictly Confidential",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-white/50 text-xs font-body leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </RevealSection>
  );
}


// --- Homepage root -------------------------------------------------------------
export function HomePage() {
  return (
    <main>
      <HeroSection />
      <RadarSection />
      <AboutSection />
      <WhoWeHelpSection />
      <ProgramsSection />
      <WhyThisIsImportantSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
    </main>
  );
}
