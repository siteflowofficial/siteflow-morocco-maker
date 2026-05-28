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
  Scissors,
  Coffee,
  UtensilsCrossed,
  Dumbbell,
  Store,
  Briefcase,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const WHATSAPP_URL =
  "https://wa.me/212701179697?text=Bonjour%20je%20veux%20un%20site%20web";
const INSTAGRAM_URL = "https://instagram.com/siteflow.official";
const TEL_URL = "tel:+212701179697";

export default function App() {
  const { lang } = useI18n();
  return (
    <div
      className="min-h-screen bg-background text-foreground antialiased"
      style={{
        fontFamily:
          lang === "ar"
            ? '"Noto Kufi Arabic", "Inter", system-ui, sans-serif'
            : undefined,
      }}
    >
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
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: [string, string][] = [
    [t("nav.services"), "#services"],
    [t("nav.features"), "#features"],
    [t("nav.process"), "#process"],
    [t("nav.pricing"), "#pricing"],
  ];

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
          {navItems.map(([label, href]) => (
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
          <LanguageSwitcher />
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
            <span className="hidden sm:inline">{t("cta.whatsapp")}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--whatsapp)]" />
            {t("hero.badge")}
          </div>

          <h1 className="mt-6 text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}{" "}
            <span className="gold-text italic">{t("hero.title3")}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.whatsappFull")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:rotate-180" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-accent sm:w-auto"
            >
              <Instagram className="h-4 w-4" />
              {t("cta.instagram")}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {[t("hero.tag1"), t("hero.tag2"), t("hero.tag3")].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Browser mock */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="animate-float rounded-2xl border border-border bg-card shadow-elegant">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <div className="ms-4 flex-1 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
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
  const { t } = useI18n();
  const items = [
    t("trust.salons"),
    t("trust.cafes"),
    t("trust.restaurants"),
    t("trust.gyms"),
    t("trust.shops"),
    t("trust.freelancers"),
  ];
  return (
    <section className="border-y border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-xs text-muted-foreground/70">{t("trust.label")}</span>
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
  const { t } = useI18n();
  const cards = [
    { icon: Scissors, title: t("who.salons.t"), desc: t("who.salons.d") },
    { icon: Coffee, title: t("who.cafes.t"), desc: t("who.cafes.d") },
    { icon: UtensilsCrossed, title: t("who.rest.t"), desc: t("who.rest.d") },
    { icon: Dumbbell, title: t("who.gyms.t"), desc: t("who.gyms.d") },
    { icon: Store, title: t("who.shops.t"), desc: t("who.shops.d") },
    { icon: Briefcase, title: t("who.free.t"), desc: t("who.free.d") },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow={t("who.eyebrow")}
        title={t("who.title")}
        subtitle={t("who.subtitle")}
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
  const { t } = useI18n();
  const features = [
    { icon: Palette, title: t("feat.design.t"), desc: t("feat.design.d") },
    { icon: Smartphone, title: t("feat.mobile.t"), desc: t("feat.mobile.d") },
    { icon: MessageCircle, title: t("feat.wa.t"), desc: t("feat.wa.d") },
    { icon: MapPin, title: t("feat.maps.t"), desc: t("feat.maps.d") },
    { icon: Instagram, title: t("feat.social.t"), desc: t("feat.social.d") },
    { icon: Search, title: t("feat.seo.t"), desc: t("feat.seo.d") },
    { icon: Zap, title: t("feat.speed.t"), desc: t("feat.speed.d") },
    { icon: ShieldCheck, title: t("feat.secure.t"), desc: t("feat.secure.d") },
  ];
  return (
    <section id="features" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow={t("feat.eyebrow")}
          title={t("feat.title")}
          subtitle={t("feat.subtitle")}
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
  const { t } = useI18n();
  const benefits = [
    { icon: TrendingUp, title: t("ben.gain.t"), desc: t("ben.gain.d") },
    { icon: ShieldCheck, title: t("ben.pro.t"), desc: t("ben.pro.d") },
    { icon: Search, title: t("ben.google.t"), desc: t("ben.google.d") },
    { icon: Clock, title: t("ben.open.t"), desc: t("ben.open.d") },
    { icon: MapPin, title: t("ben.local.t"), desc: t("ben.local.d") },
    { icon: Sparkles, title: t("ben.convert.t"), desc: t("ben.convert.d") },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow={t("ben.eyebrow")} title={t("ben.title")} />
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
  const { t } = useI18n();
  const steps = [
    { n: "01", title: t("proc.s1.t"), desc: t("proc.s1.d") },
    { n: "02", title: t("proc.s2.t"), desc: t("proc.s2.d") },
    { n: "03", title: t("proc.s3.t"), desc: t("proc.s3.d") },
  ];
  return (
    <section id="process" className="navy-section text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow={t("proc.eyebrow")}
          title={t("proc.title")}
          subtitle={t("proc.subtitle")}
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
            {t("cta.startConv")}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" />
            {t("cta.orDm")}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why now ---------------- */
function WhyNow() {
  const { t } = useI18n();
  const points = [t("why.p1"), t("why.p2"), t("why.p3"), t("why.p4"), t("why.p5")];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            subtitle={t("why.subtitle")}
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
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow={t("vis.eyebrow")} title={t("vis.title")} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: t("vis.maps.t"), desc: t("vis.maps.d") },
            { icon: Search, title: t("vis.search.t"), desc: t("vis.search.d") },
            { icon: Instagram, title: t("vis.social.t"), desc: t("vis.social.d") },
            { icon: MessageCircle, title: t("vis.wa.t"), desc: t("vis.wa.d") },
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

/* ---------------- Pricing ---------------- */
function Pricing() {
  const { t } = useI18n();
  const includes = [
    t("price.i1"), t("price.i2"), t("price.i3"), t("price.i4"), t("price.i5"),
    t("price.i6"), t("price.i7"), t("price.i8"), t("price.i9"), t("price.i10"),
  ];
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="navy-section">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            {t("price.badge")}
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-tight md:text-6xl">
            {t("price.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            {t("price.subtitle")}
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
                {t("price.once")}
              </p>
            </div>

            <ul className="mt-8 grid gap-3 text-start sm:grid-cols-2">
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
                {t("cta.orderWhatsapp")}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                {t("cta.dmInstagram")}
              </a>
            </div>

            <p className="mt-6 text-xs text-primary-foreground/60">
              {t("price.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-balance text-4xl leading-tight md:text-5xl">
        {t("final.title1")}{" "}
        <span className="gold-text italic">{t("final.title2")}</span>
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
        {t("final.subtitle")}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          {t("cta.whatsappFull")}
        </a>
        <a
          href={TEL_URL}
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
          dir="ltr"
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
  const { t } = useI18n();
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
            {t("foot.tag")}
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
            {t("cta.whatsapp")}
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
            dir="ltr"
          >
            <Phone className="h-4 w-4" />
            +212 701 179 697
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Siteflow. {t("foot.rights")}</span>
          <span>{t("foot.made")}</span>
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
      className="fixed bottom-5 end-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-elegant transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -end-1 flex h-3 w-3">
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
