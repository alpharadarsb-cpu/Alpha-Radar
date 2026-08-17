import { Link, useRouter } from "@tanstack/react-router";
import { CalendarDays, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : "",
  );
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the active nav item in sync with back/forward nav and manual hash edits
  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: close on nav
  useEffect(() => {
    setMenuOpen(false);
  }, [router.state.location.pathname]);

  const pathname = router.state.location.pathname;
  const isHome = pathname === "/";
  const navLinkClass = (hash: string) => {
    const isActive = isHome && activeHash === hash;
    return `font-heading text-base font-semibold transition-colors duration-200 tracking-wider relative group ${isActive ? "text-gold" : "text-white/70 hover:text-white"}`;
  };
  const mobileNavLinkClass = (hash: string) => {
    const isActive = isHome && activeHash === hash;
    return `block font-heading text-lg font-semibold transition-colors py-3 border-b border-white/5 ${isActive ? "text-gold" : "text-white/80 hover:text-gold"}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b border-white/[0.08]"
          : "backdrop-blur-sm"
      }`}
      style={{
        background: scrolled ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0.25)",
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 h-16" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group transition-opacity duration-200 hover:opacity-85 justify-self-start">
          {/* Logo mark — 256px source, crisp on retina at 40px display height */}
          <img
            src="/assets/generated/alpha-radar-logo-mark.svg"
            alt="Alpha Radar — Business Coaching, Consulting & Corporate Learning"
            fetchPriority="high"
            className="block shrink-0"
            style={{
              height: "40px",
              width: "auto",
              filter: "drop-shadow(0 0 8px rgba(212,175,55,0.4))",
              mixBlendMode: "normal",
            }}
          />
          {/* Thin separator */}
          <div style={{ width: "1px", height: "30px", background: "rgba(198,167,94,0.2)", flexShrink: 0 }} />
          {/* Wordmark — HTML text, always crisp on every screen */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(15px, 2.5vw, 20px)",
              fontWeight: 700,
              letterSpacing: "-0.3px",
              lineHeight: 1,
              background: "linear-gradient(90deg, #F4DC6A 0%, #D4AF37 55%, #9A7010 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}>Alpha Radar</span>
            <span className="hidden sm:block" style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "7.5px",
              fontWeight: 400,
              letterSpacing: "2.4px",
              color: "rgba(198,167,94,0.55)",
              textTransform: "uppercase",
              display: "block",
              WebkitFontSmoothing: "antialiased",
            }}>Sharper Vision · Superior Returns</span>
          </div>
        </Link>

        {/* Desktop Nav — absolutely centered in the header */}
        <nav className="hidden xl:flex items-center gap-7 justify-self-center">
          <Link to="/" className={navLinkClass("")} onClick={() => setActiveHash("")}>
            <span className="relative">
              Overview
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
            </span>
          </Link>

          <a href="/#about" className={navLinkClass("#about")} onClick={() => setActiveHash("#about")}>
            <span className="relative">
              Our Story
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
            </span>
          </a>

          <a href="/#programs" className={navLinkClass("#programs")} onClick={() => setActiveHash("#programs")}>
            <span className="relative">
              Programs
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
            </span>
          </a>

          <a href="/#contact" className={navLinkClass("#contact")} onClick={() => setActiveHash("#contact")}>
            <span className="relative">
              Connect With Us
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
            </span>
          </a>


        </nav>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-4 justify-self-end">
          <div className="relative">
            <a
              href="/#contact"
              className="btn-blue-cta px-5 py-2.5 rounded-md text-sm font-heading font-bold tracking-wide uppercase flex items-center gap-2"
            >
              <CalendarDays size={14} />
              Book a Strategy Call
            </a>
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
              style={{
                background: "#1F4ED8",
                boxShadow: "0 0 6px rgba(31,78,216,0.7)",
              }}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="xl:hidden text-white/80 hover:text-gold transition-colors justify-self-end p-2.5 -m-2.5"
          style={{ gridColumn: "3" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="xl:hidden backdrop-blur-lg border-t border-white/5 px-6 py-6 space-y-1"
          style={{ background: "rgba(0,0,0,0.96)" }}
        >
          <Link
            to="/"
            className={mobileNavLinkClass("")}
            onClick={() => setActiveHash("")}
          >
            Overview
          </Link>

          <a
            href="/#about"
            className={mobileNavLinkClass("#about")}
            onClick={() => setActiveHash("#about")}
          >
            Our Story
          </a>

          <a
            href="/#programs"
            className={mobileNavLinkClass("#programs")}
            onClick={() => setActiveHash("#programs")}
          >
            Programs
          </a>

          <a
            href="/#contact"
            className={mobileNavLinkClass("#contact")}
            onClick={() => setActiveHash("#contact")}
          >
            Connect With Us
          </a>



          <div className="pt-5">
            <p className="text-white/50 text-xs font-heading tracking-widest uppercase pb-3">
              Ready to start?
            </p>
            <a
              href="/#contact"
              className="btn-blue-cta flex items-center justify-center gap-2 w-full py-4 rounded-md text-sm font-heading font-bold tracking-wide uppercase text-center"
            >
              <CalendarDays size={15} />
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
