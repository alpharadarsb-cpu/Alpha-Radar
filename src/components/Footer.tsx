import { Link } from "@tanstack/react-router";
import { ChevronRight, Mail, MessageCircle, Phone } from "lucide-react";
import { servicesData } from "../data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/5 pt-16 pb-8"
      style={{ background: "#0D0D0D" }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group transition-opacity duration-200 hover:opacity-80">
              <img
                src="/assets/generated/alpha-radar-logo-mark.png"
                alt="Alpha Radar — Business Coaching, Consulting & Corporate Learning"
                style={{ height: "38px", width: "auto", filter: "drop-shadow(0 0 5px rgba(212,175,55,0.22))" }}
              />
              <div style={{ width: "1px", height: "26px", background: "rgba(198,167,94,0.18)", flexShrink: 0 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "17px",
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
                <span style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "6.5px",
                  fontWeight: 400,
                  letterSpacing: "2.2px",
                  color: "rgba(198,167,94,0.45)",
                  textTransform: "uppercase",
                  WebkitFontSmoothing: "antialiased",
                }}>Sharper Vision · Superior Returns</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-6">
              We partner with corporates, SME owners and academic institutions
              to build the leadership, customer, sales and communication
              capabilities that create lasting value and sustainable growth.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/50 hover:text-gold text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={10}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gold"
                  />
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-white/50 hover:text-gold text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight
                    size={10}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gold"
                  />
                  Book a Free Call
                </a>
              </li>
            </ul>
          </div>

          {/* Programs -- grouped by segment, curated, with a link to the full filtered list */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Programs
            </h4>
            {(
              [
                { key: "corporate", label: "Corporate" },
                { key: "sme", label: "SME & Family Business" },
                { key: "university", label: "Universities" },
              ] as const
            ).map(({ key, label }) => {
              const items = servicesData.filter((s) => s.segment === key).slice(0, 3);
              return (
                <div key={key} className="mb-5 last:mb-0">
                  <p className="text-white/50 text-xs font-heading font-bold uppercase tracking-wider mb-2.5">
                    {label}
                  </p>
                  <ul className="space-y-2.5">
                    {items.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className="text-white/50 hover:text-gold text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                        >
                          <ChevronRight
                            size={10}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-gold shrink-0"
                          />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a
                        href={`/?segment=${key}#programs`}
                        className="text-gold/80 hover:text-gold text-xs font-heading font-semibold tracking-wide transition-colors inline-flex items-center gap-1"
                      >
                        View All
                        <ChevronRight size={10} />
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Contact quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Connect With Us
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/919377676979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-gold text-sm font-body transition-colors group"
              >
                <MessageCircle size={14} className="shrink-0" />
                WhatsApp: +91 93776 76979
              </a>
              <a
                href="mailto:contactalpharadar@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-gold text-sm font-body transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                contactalpharadar@gmail.com
              </a>
              <a
                href="tel:+919377676979"
                className="flex items-center gap-3 text-white/50 hover:text-gold text-sm font-body transition-colors"
              >
                <Phone size={14} className="shrink-0" />
                +91 93776 76979
              </a>
            </div>

            <div className="mt-6">
              <a
                href="/#contact"
                className="btn-gold-gradient inline-block px-5 py-2.5 rounded-md text-xs font-heading font-bold tracking-wide uppercase"
              >
                Start Free Consultation
              </a>
              <p className="text-white/50 text-xs font-body mt-2">
                No commitment · First call free
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs font-body">
            © {currentYear} Alpha Radar. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
