import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

const OPTIONS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "AR" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = OPTIONS.find((o) => o.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 text-xs font-medium text-foreground backdrop-blur transition hover:bg-accent"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.short}
      </button>
      {open && (
        <div className="absolute end-0 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-elegant">
          {OPTIONS.map((o) => (
            <button
              key={o.code}
              onClick={() => {
                setLang(o.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-accent ${
                lang === o.code ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <span>{o.label}</span>
              {lang === o.code && <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
