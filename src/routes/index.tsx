import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Instagram,
  Phone,
  Sparkles,
  Smartphone,
  MapPin,
  Search,
  Zap,
  Palette,
  ShieldCheck,
  Clock,
  TrendingUp,
  Star,
  Scissors,
  Coffee,
  UtensilsCrossed,
  Dumbbell,
  Store,
  Briefcase,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/212701179697?text=Bonjour%20je%20veux%20un%20site%20web";
const INSTAGRAM_URL = "https://instagram.com/siteflow.official";
const TEL_URL = "tel:+212701179697";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siteflow — Websites that turn visitors into real customers" },
      {
        name: "description",
        content:
          "Premium website creation for salons, cafés, restaurants, gyms and local shops in Morocco. Modern, fast, mobile-first sites built to convert.",
      },
      { property: "og:title", content: "Siteflow — Websites that convert" },
      {
        property: "og:description",
        content:
          "Premium custom websites for small businesses in Morocco. Built for trust, speed and growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ForWho />
        <Features />
        <Benefits />
        <Process />
        <WhyNow />
        <Visibility />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-display text-lg tracking-tight">Siteflow</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["Features", "#features"],
            ["Process", "#process"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-accent sm:inline-flex"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--whatsapp)]" />
            Available — replying on WhatsApp within minutes
          </div>

          <h1 className="mt-6 text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Websites that turn
            <br />
            visitors into{" "}
            <span className="gold-text italic">real customers</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            Premium, modern websites for salons, cafés, restaurants, gyms and
            local businesses in Morocco. Built fast, designed to convert.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Contact on WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-accent sm:w-auto"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              Fully custom design
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              Mobile + desktop optimized
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              Fast delivery
            </span>
          </div>
        </div>

        {/* Browser mock */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="animate-float rounded-2xl border border-border bg-card shadow-elegant">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <div className="ml-4 flex-1 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
                yourbusiness.ma
              </div>
            </div>
            <div className="grid gap-6 p-8 md:grid-cols-5">
              <div className="space-y-3 md:col-span-3">
                <div className="h-3 w-24 rounded-full bg-[color:var(--gold-soft)]" />
                <div className="h-8 w-3/4 rounded-md bg-foreground/90" />
                <div className="h-8 w-2/3 rounded-md bg-foreground/80" />
                <div className="h-3 w-full rounded-full bg-muted" />
                <div className="h-3 w-5/6 rounded-full bg-muted" />
                <div className="flex gap-2 pt-3">
                  <div className="h-9 w-32 rounded-full bg-primary" />
                  <div className="h-9 w-28 rounded-full border border-border" />
                </div>
              </div>
              <div className="rounded-xl bg-secondary p-4 md:col-span-2">
                <div className="mb-2 h-3 w-20 rounded-full bg-foreground/60" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between rounded-md bg-background p-2.5">
                      <div className="h-2.5 w-20 rounded-full bg-muted" />
                      <div className="h-2.5 w-10 rounded-full bg-[color:var(--gold)]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const items = [
    "Salons", "Cafés", "Restaurants", "Gyms", "Boutiques", "Freelancers",
  ];
  return (
    <section className="border-y border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-xs text-muted-foreground/70">Trusted by local businesses —</span>
        {items.map((i) => (
          <span key={i} className="font-display text-base normal-case tracking-normal text-foreground/70">
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- For Who ---------------- */
function ForWho() {
  const cards = [
    { icon: Scissors, title: "Salons & Spas", desc: "Showcase services, prices and let clients book in seconds." },
    { icon: Coffee, title: "Cafés", desc: "A beautiful menu, hours and location — always up to date." },
    { icon: UtensilsCrossed, title: "Restaurants", desc: "Menu, reservations, photos and reviews in one place." },
    { icon: Dumbbell, title: "Gyms & Studios", desc: "Classes, coaches, schedules and membership info." },
    { icon: Store, title: "Local Shops", desc: "Present your products and bring foot traffic in." },
    { icon: Briefcase, title: "Freelancers", desc: "A premium portfolio that builds instant credibility." },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow="Who it's for"
        title="Built for the businesses that make Morocco move."
        subtitle="Every site is shaped around your specific business — not a generic template."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:border-[color:var(--gold)] hover:shadow-elegant"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition group-hover:bg-[color:var(--gold-soft)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  const features = [
    { icon: Palette, title: "Premium custom design", desc: "A unique look that matches your brand, colors and atmosphere — no recycled templates." },
    { icon: Smartphone, title: "Mobile-first & desktop perfect", desc: "Looks flawless on every phone, tablet and screen your customers use." },
    { icon: MessageCircle, title: "WhatsApp integration", desc: "One tap and your client is in your chat — ready to book or buy." },
    { icon: MapPin, title: "Google Maps built in", desc: "Customers find you and get directions without leaving your site." },
    { icon: Instagram, title: "Social media connected", desc: "Instagram, TikTok, Facebook — all your channels, neatly integrated." },
    { icon: Search, title: "SEO-ready structure", desc: "Built so Google can read, rank and recommend you locally." },
    { icon: Zap, title: "Fast loading performance", desc: "Optimized for speed so visitors stay and convert." },
    { icon: ShieldCheck, title: "Secure & reliable", desc: "Clean code, HTTPS by default, and zero shady plugins." },
  ];
  return (
    <section id="features" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="What's included"
          title="Everything your business needs, nothing it doesn't."
          subtitle="A complete, ready-to-grow online presence — engineered to convert visitors into customers."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-6">
              <Icon className="h-5 w-5 text-[color:var(--gold)]" />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const benefits = [
    { icon: TrendingUp, title: "Gain more customers", desc: "Turn online searches and Instagram visits into real bookings and walk-ins." },
    { icon: ShieldCheck, title: "Look more professional", desc: "A premium website instantly builds trust — before a client even calls you." },
    { icon: Search, title: "Appear on Google", desc: "Be the business that shows up when locals search what you offer." },
    { icon: Clock, title: "Open 24/7", desc: "Your website sells, books and informs even while you're closed." },
    { icon: MapPin, title: "Boost local visibility", desc: "Strengthen your presence on Google Maps and social platforms." },
    { icon: Sparkles, title: "Convert more visitors", desc: "Clear CTAs, smart structure, and trust signals that turn clicks into clients." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow="The result"
        title="Not just a website. A business growth tool."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-lg">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Quick chat", desc: "Message us on WhatsApp or Instagram. We listen to your business, your style and your goals." },
    { n: "02", title: "Personalized design", desc: "Colors, atmosphere, branding, menu, services — we tailor every detail to you." },
    { n: "03", title: "Fast delivery", desc: "Your website goes live quickly, ready to attract customers from day one." },
  ];
  return (
    <section id="process" className="navy-section text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="How it works"
          title="A premium consultation. A simple process."
          subtitle="Full transparency. You're involved at every step — your business, your decisions."
          dark
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="font-display text-3xl gold-text">{s.n}</div>
              <h3 className="mt-3 text-xl text-primary-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-primary shadow-gold transition hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            Start the conversation on WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" />
            Or DM us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why now ---------------- */
function WhyNow() {
  const points = [
    "Every day without a website, customers are choosing your competitors.",
    "Fully personalized — colors, atmosphere, branding and content shaped around your business.",
    "A real time saver: we handle everything end-to-end while you focus on running your business.",
    "Total transparency — direct communication on WhatsApp or Instagram, no agency middlemen.",
    "Fast delivery, premium quality, and ongoing support if you need it.",
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Why now"
            title="Not having a website costs more than getting one."
            subtitle="Customers expect to find you online. If they can't, they pick the business that they can."
            align="left"
          />
        </div>
        <ul className="space-y-4">
          {points.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
              <span className="text-sm text-foreground/90">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Visibility ---------------- */
function Visibility() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Visibility"
          title="Your business — everywhere it should be."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: "Google Maps", desc: "Linked to your business profile so locals find you instantly." },
            { icon: Search, title: "Google Search", desc: "Discoverable when customers search what you actually offer." },
            { icon: Instagram, title: "Instagram & TikTok", desc: "Share one link that does everything — bookings, menu, contact." },
            { icon: MessageCircle, title: "WhatsApp", desc: "Direct conversations with customers in a single tap." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const quotes = [
    { name: "Yasmine — Salon owner, Casablanca", text: "Our new site brought in bookings within the first week. Clean, fast, and exactly what we wanted." },
    { name: "Karim — Café manager, Rabat", text: "Customers find us on Google now. The WhatsApp button alone changed everything." },
    { name: "Sara — Boutique, Marrakech", text: "Premium feel for a price I didn't think was possible. Worth every dirham." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Trust" title="Loved by local business owners." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.name} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-0.5 text-[color:var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-lg leading-snug text-foreground">
              "{q.text}"
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
              {q.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const includes = [
    "Full professional website",
    "Custom premium design",
    "Mobile + desktop optimization",
    "SEO-ready structure",
    "WhatsApp integration",
    "Google Maps integration",
    "Social media links",
    "Business-specific sections (menu, services, booking…)",
    "Fast loading performance",
    "Fast delivery",
  ];
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="navy-section">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            One simple offer
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-tight md:text-6xl">
            Complete Website Package
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Everything above — designed, built and delivered. No hidden costs,
            no monthly traps.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur md:p-12">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl gold-text md:text-7xl">
                  1499
                </span>
                <span className="text-lg text-primary-foreground/80">MAD</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
                One-time payment
              </p>
            </div>

            <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-medium text-primary shadow-gold transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                DM on Instagram
              </a>
            </div>

            <p className="mt-6 text-xs text-primary-foreground/60">
              One of the most affordable professional website offers on the
              market — without compromising on premium quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-balance text-4xl leading-tight md:text-5xl">
        Ready to turn your visitors into{" "}
        <span className="gold-text italic">real customers?</span>
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
        Tell us about your business. We'll handle the rest — quickly, transparently,
        and with the quality your brand deserves.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          Contact on WhatsApp
        </a>
        <a
          href={TEL_URL}
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
        >
          <Phone className="h-4 w-4" />
          +212 701 179 697
        </a>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display text-lg">Siteflow</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Websites that turn visitors into real customers. Made in Morocco.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium transition hover:bg-accent"
          >
            <Instagram className="h-4 w-4" />
            @siteflow.official
          </a>
          <a
            href={TEL_URL}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium transition hover:bg-accent"
          >
            <Phone className="h-4 w-4" />
            +212 701 179 697
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Siteflow. All rights reserved.</span>
          <span>Made with care in Morocco</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-elegant transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--whatsapp)] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[color:var(--whatsapp)] border-2 border-background" />
      </span>
    </a>
  );
}

/* ---------------- Section header ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span
        className={`inline-block text-xs uppercase tracking-[0.25em] ${
          dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-balance text-4xl leading-tight md:text-5xl ${
          dark ? "text-primary-foreground" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-balance ${
            dark ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
