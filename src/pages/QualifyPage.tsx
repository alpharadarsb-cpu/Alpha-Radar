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
import { useSearch } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  MessageCircle,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { RevealSection } from "../components/RevealSection";
import { useSubmitQualificationForm } from "../hooks/useQueries";

export function QualifyPage() {
  // Read the selected program from the URL search params via TanStack Router
  const { program: selectedProgram } = useSearch({ from: "/qualify" });

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    profession: "",
    companyName: "",
    industry: "",
    annualTurnover: "",
    biggestChallenge: "",
    primaryGoal: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitQualificationForm();

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
      fullName,
      email,
      phone,
      age,
      profession,
      companyName,
      industry,
      annualTurnover,
      biggestChallenge,
      primaryGoal,
    } = form;

    if (
      !fullName ||
      !email ||
      !phone ||
      !age ||
      !profession ||
      !companyName ||
      !industry ||
      !annualTurnover ||
      !biggestChallenge ||
      !primaryGoal
    ) {
      toast.error("Please complete all fields before submitting.");
      return;
    }

    // Prepend program info to primaryGoal so the received email includes it
    const goalWithProgram = selectedProgram
      ? `[Program: ${selectedProgram}]\n\n${primaryGoal}`
      : primaryGoal;

    try {
      await mutateAsync({
        fullName,
        age,
        profession,
        companyName,
        industry,
        annualTurnover,
        biggestChallenge,
        primaryGoal: goalWithProgram,
      });
      setSubmitted(true);
      toast.success(
        "Application received! We'll review and be in touch within 24 hours.",
      );

      // Trigger mailto so the owner receives an email notification
      const programLabel = selectedProgram
        ? `Program Applied For: ${selectedProgram}\n\n`
        : "";
      const emailSubject = selectedProgram
        ? `New Application -- ${selectedProgram} | Alpha Radar`
        : "New Strategy Call Application | Alpha Radar";
      const emailBody = [
        `${programLabel}APPLICANT DETAILS`,
        "-----------------------------",
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Age: ${age}`,
        `Profession / Role: ${profession}`,
        `Company: ${companyName}`,
        `Industry: ${industry}`,
        `Annual Turnover: ${annualTurnover}`,
        "",
        "BIGGEST CHALLENGE:",
        biggestChallenge,
        "",
        "PRIMARY GOAL (6-12 Months):",
        primaryGoal,
        "",
        "-----------------------------",
        "Submitted via Alpha Radar website.",
      ].join("\n");

      const mailtoUrl = `mailto:contactalpharadar@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoUrl, "_blank");
    } catch {
      toast.error(
        "Something went wrong. Please try again or contact us via WhatsApp.",
      );
    }
  };

  const whatsappUrl =
    "https://wa.me/919377676979?text=I+have+completed+the+qualification+form+and+would+like+to+book+a+strategy+call";

  const inputClass =
    "bg-surface-3 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50 focus:ring-gold/20 font-body h-11 text-base";
  const labelClass =
    "text-white/50 text-xs font-heading tracking-wider uppercase mb-1.5 block font-semibold";

  return (
    <div className="min-h-screen bg-surface-1">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0D0D0D 0%, #111111 50%, #1A1A1A 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198,167,94,0.07), transparent)",
          }}
        />
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.45) 50%, transparent 100%)",
          }}
        />

        <div className="relative z-10 container max-w-3xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "rgba(198,167,94,0.10)",
              border: "1px solid rgba(198,167,94,0.24)",
            }}
          >
            <Zap size={12} className="text-gold" />
            <span className="text-gold text-xs font-heading font-bold tracking-widest uppercase">
              Application Required
            </span>
          </div>

          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Client Qualification{" "}
            <span className="text-gradient-gold">Form</span>
          </h1>
          <p className="text-white/55 text-lg font-body leading-relaxed max-w-xl mx-auto">
            Tell us about your business and goals. Our team reviews every application
            personally -- qualified applicants receive a private strategy call invitation.
          </p>
        </div>
      </section>

      <RevealSection className="pb-24">
        <div className="container max-w-3xl mx-auto px-6">
          {submitted ? (
            /* Success state */
            <div
              className="rounded-2xl p-12 text-center relative"
              style={{
                background: "oklch(var(--surface-2))",
                border: "1px solid rgba(198,167,94,0.20)",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(198,167,94,0.45), transparent)",
                }}
              />
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "rgba(198,167,94,0.10)",
                  border: "1px solid rgba(198,167,94,0.28)",
                }}
              >
                <CheckCircle size={40} className="text-gold" />
              </div>
              <h2 className="heading-display text-3xl text-white mb-3">
                Application Received!
              </h2>
              <p className="text-white/55 font-body text-base max-w-md mx-auto mb-4 leading-relaxed">
                Thank you,{" "}
                <span className="text-white font-semibold">
                  {form.fullName || "applicant"}
                </span>
                .{" "}
                {selectedProgram ? (
                  <>
                    Your application for{" "}
                    <span className="text-gold font-semibold">
                      {selectedProgram}
                    </span>{" "}
                    has been submitted successfully.
                  </>
                ) : (
                  <>Your application has been submitted successfully.</>
                )}{" "}
                Our team will review it and reach out within 24 hours.
              </p>

              {selectedProgram && (
                <div
                  className="rounded-xl px-5 py-3 inline-flex items-center gap-3 mb-6"
                  style={{
                    background: "rgba(198,167,94,0.10)",
                    border: "1px solid rgba(198,167,94,0.25)",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "10px",
                      fontFamily: "heading",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase" as const,
                      fontWeight: 700,
                    }}
                  >
                    Program Applied For:
                  </span>
                  <span
                    style={{
                      color: "#D4AF37",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {selectedProgram}
                  </span>
                </div>
              )}

              <div
                className="rounded-xl p-6 mb-8 text-left"
                style={{
                  background: "oklch(var(--surface-3))",
                  border: "1px solid oklch(0.96 0 0 / 8%)",
                }}
              >
                <p className="text-white/40 text-xs font-heading tracking-widest uppercase mb-3 font-semibold">
                  Next Step
                </p>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  While you wait for our review, you can also reach out directly
                  on WhatsApp to let us know your application is in. This helps
                  us prioritize your review.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-gold-gradient px-8 py-4 rounded-md font-heading font-bold tracking-wide uppercase"
              >
                <MessageCircle size={18} />
                Book Strategy Call on WhatsApp
                <ArrowRight size={16} />
              </a>

              <p className="text-white/25 text-sm font-body mt-6">
                We respond within 24 hours on business days.
              </p>
            </div>
          ) : (
            /* Application form */
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(var(--surface-2))",
                border: "1px solid oklch(0.96 0 0 / 8%)",
              }}
            >
              {/* Form header */}
              <div
                className="px-8 pt-8 pb-6 relative"
                style={{
                  borderBottom: "1px solid oklch(0.96 0 0 / 8%)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={18} className="text-gold" />
                  <h2 className="font-heading text-xl font-bold text-white">
                    Qualification Application
                  </h2>
                </div>
                <p className="text-white/40 text-sm font-body">
                  All information is strictly confidential and protected under
                  NDA.
                </p>

                {/* Progress indicator -- blue */}
                <div className="flex items-center gap-2 mt-4">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className="h-1 flex-1 rounded-full"
                      style={{
                        background: "rgba(198,167,94,0.24)",
                      }}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-8">
                {/* Program banner -- shown when arriving from a service page */}
                {selectedProgram && (
                  <div
                    style={{
                      background: "rgba(198,167,94,0.10)",
                      border: "1px solid rgba(198,167,94,0.25)",
                      borderRadius: "12px",
                      padding: "16px 20px",
                      marginBottom: "24px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                        fontWeight: 700,
                      }}
                      className="font-heading"
                    >
                      Applying For
                    </p>
                    <p
                      style={{
                        color: "#D4AF37",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                      className="font-heading"
                    >
                      {selectedProgram}
                    </p>
                  </div>
                )}

                {/* Section 1: Personal Info */}
                <fieldset className="space-y-5">
                  <legend
                    className="text-gold text-xs font-heading font-bold tracking-widest uppercase pb-3 w-full"
                    style={{
                      borderBottom: "1px solid rgba(198,167,94,0.14)",
                    }}
                  >
                    Personal Information
                  </legend>

                  <div>
                    <Label htmlFor="fullName" className={labelClass}>
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Your full name"
                      required
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className={labelClass}>
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className={labelClass}>
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          inputMode="numeric"
                          value={form.phone}
                          onChange={(e) => {
                            const digits = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                            updateField("phone", digits);
                          }}
                          placeholder="98765 43210"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          required
                          className={inputClass}
                          style={{ paddingLeft: "3.4rem" }}
                          autoComplete="tel"
                        />
                        <div
                          className="absolute left-0 top-0 bottom-0 flex items-center px-3 pointer-events-none z-10"
                          style={{ borderRight: "1px solid rgba(198,167,94,0.22)" }}
                        >
                          <span className="text-white/55 text-sm font-heading font-semibold select-none">
                            +91
                          </span>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age" className={labelClass}>
                        Age *
                      </Label>
                      <Select
                        value={form.age}
                        onValueChange={(v) => updateField("age", v)}
                        required
                      >
                        <SelectTrigger id="age" className={inputClass}>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent className="bg-surface-3 border-white/10 text-white">
                          {["20-30", "30-40", "40-50", "50+"].map((range) => (
                            <SelectItem
                              key={range}
                              value={range}
                              className="text-white hover:bg-white/5 focus:bg-white/5"
                            >
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="profession" className={labelClass}>
                        Current Role *
                      </Label>
                      <Select
                        value={form.profession}
                        onValueChange={(v) => updateField("profession", v)}
                        required
                      >
                        <SelectTrigger id="profession" className={inputClass}>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="bg-surface-3 border-white/10 text-white">
                          {[
                            "Business Owner",
                            "Entrepreneur",
                            "Industrialist",
                            "Corporate Professional",
                            "Startup Founder",
                            "Other",
                          ].map((role) => (
                            <SelectItem
                              key={role}
                              value={role}
                              className="text-white hover:bg-white/5 focus:bg-white/5"
                            >
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </fieldset>

                {/* Section 2: Business Info */}
                <fieldset className="space-y-5">
                  <legend
                    className="text-gold text-xs font-heading font-bold tracking-widest uppercase pb-3 w-full"
                    style={{
                      borderBottom: "1px solid rgba(198,167,94,0.14)",
                    }}
                  >
                    Business Information
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName" className={labelClass}>
                        Company / Business Name *
                      </Label>
                      <Input
                        id="companyName"
                        value={form.companyName}
                        onChange={(e) =>
                          updateField("companyName", e.target.value)
                        }
                        placeholder="Your company name"
                        required
                        className={inputClass}
                        autoComplete="organization"
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry" className={labelClass}>
                        Industry / Niche *
                      </Label>
                      <Input
                        id="industry"
                        value={form.industry}
                        onChange={(e) =>
                          updateField("industry", e.target.value)
                        }
                        placeholder="e.g. Manufacturing, SaaS"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="annualTurnover" className={labelClass}>
                      Annual Turnover *
                    </Label>
                    <Select
                      value={form.annualTurnover}
                      onValueChange={(v) => updateField("annualTurnover", v)}
                      required
                    >
                      <SelectTrigger id="annualTurnover" className={inputClass}>
                        <SelectValue placeholder="Select turnover range" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface-3 border-white/10 text-white">
                        {[
                          "Under ₹12L",
                          "₹12L-₹60L",
                          "₹60L-₹2Cr",
                          "₹2Cr-₹10Cr",
                          "₹10Cr+",
                        ].map((range) => (
                          <SelectItem
                            key={range}
                            value={range}
                            className="text-white hover:bg-white/5 focus:bg-white/5"
                          >
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </fieldset>

                {/* Section 3: Goals */}
                <fieldset className="space-y-5">
                  <legend
                    className="text-gold text-xs font-heading font-bold tracking-widest uppercase pb-3 w-full"
                    style={{
                      borderBottom: "1px solid rgba(198,167,94,0.14)",
                    }}
                  >
                    Your Goals & Challenges
                  </legend>

                  <div>
                    <Label htmlFor="biggestChallenge" className={labelClass}>
                      Biggest Current Challenge *
                    </Label>
                    <Textarea
                      id="biggestChallenge"
                      value={form.biggestChallenge}
                      onChange={(e) =>
                        updateField("biggestChallenge", e.target.value)
                      }
                      placeholder="Describe the most significant challenge your business is facing right now..."
                      required
                      rows={4}
                      className="bg-surface-3 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50 focus:ring-gold/20 font-body text-base resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="primaryGoal" className={labelClass}>
                      Primary Goal for Next 6-12 Months *
                    </Label>
                    <Textarea
                      id="primaryGoal"
                      value={form.primaryGoal}
                      onChange={(e) =>
                        updateField("primaryGoal", e.target.value)
                      }
                      placeholder="What does success look like for you in the next 6-12 months? Be specific about targets and outcomes..."
                      required
                      rows={4}
                      className="bg-surface-3 border-white/10 text-white placeholder:text-white/20 focus:border-gold/50 focus:ring-gold/20 font-body text-base resize-none"
                    />
                  </div>
                </fieldset>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="btn-gold-gradient w-full h-14 text-base rounded-md font-heading font-bold tracking-wide uppercase border-0"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-white/25 text-xs font-body text-center mt-4">
                    By submitting, you agree that Alpha Radar may contact you
                    about your application. All information is kept strictly
                    confidential.
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* Trust signals */}
          {!submitted && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "NDA Protected" },
                { icon: CheckCircle, label: "100% Confidential" },
                { icon: Zap, label: "24hr Response" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 justify-center rounded-lg p-3 border"
                  style={{
                    background: "oklch(var(--surface-2))",
                    borderColor: "oklch(0.96 0 0 / 6%)",
                  }}
                >
                  <Icon size={14} className="text-gold/60" />
                  <span className="text-white/30 text-xs font-heading">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </RevealSection>
    </div>
  );
}
