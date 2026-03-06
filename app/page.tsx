import type { Metadata } from "next";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A playful tropical bachelorette invite and weekend guide for Chelsea's San Juan trip.",
};

const tripStart = "2026-05-22T12:00:00-04:00";

const vibeStrip = ["Bikinis", "Beach Clubs", "Spritzes", "Sunsets", "Chaos", "Chelsea"];

const itinerary = [
  {
    day: "Friday",
    tone: "Pink Start",
    highlights: [
      "Arrivals & check-in",
      "Welcome drinks",
      "Dinner in Old San Juan",
      "Night out",
    ],
  },
  {
    day: "Saturday",
    tone: "Main Character Day",
    highlights: [
      "Beach / pool day",
      "Cocktails",
      "Sunset photos",
      "Dinner + going out",
    ],
  },
  {
    day: "Sunday",
    tone: "Recovery Glow",
    highlights: ["Brunch", "Pool hang", "Departures"],
  },
];

const dressThemes = [
  {
    event: "Friday Night",
    theme: "Hot Pink",
    note: "statement glam",
    swatch: "bg-[#FF2E8B] text-white",
  },
  {
    event: "Saturday Day",
    theme: "Turquoise / tropical",
    note: "beach club energy",
    swatch: "bg-[#17C3C8] text-[#143741]",
  },
  {
    event: "Saturday Night",
    theme: "Coral + gold",
    note: "sunset with sparkle",
    swatch: "bg-[#FF6B4A] text-white",
  },
  {
    event: "Sunday Brunch",
    theme: "Cream / relaxed chic",
    note: "cute and effortless",
    swatch: "bg-[#F8EBDD] text-[#5A3B2A]",
  },
];

const weekendRules = [
  { label: "Take the shot", sticker: "bg-[#FFD55C] text-[#3F2D00] rotate-[-2deg]" },
  { label: "Take the photo", sticker: "bg-[#FF8A3D] text-white rotate-[2deg]" },
  { label: "Drink the cocktail", sticker: "bg-[#17C3C8] text-[#12353A] rotate-[-1deg]" },
  { label: "Hydrate occasionally", sticker: "bg-[#F8EBDD] text-[#5A4865] rotate-[1deg]" },
  { label: "Celebrate Chelsea", sticker: "bg-[#FF2E8B] text-white rotate-[-2deg]" },
  { label: "No bad vibes", sticker: "bg-[#241243] text-[#F8EBDD] rotate-[1deg]" },
];

const tripDetails = [
  { label: "House", value: "Villa details coming soon", icon: "palm" },
  { label: "Airport", value: "Fly into SJU", icon: "sun" },
  { label: "Transportation", value: "Uber is easiest for getting around", icon: "sunglasses" },
  { label: "Check-in", value: "Details to come", icon: "shell" },
  { label: "Group Chat", value: "Watch the chat for live updates", icon: "sparkle" },
  { label: "Weather", value: "Hot, sunny, and humid - pack accordingly", icon: "flame" },
] as const;

type IconProps = {
  className?: string;
};

function IconPalm({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 20V9" />
      <path d="M12 11c-1.5-3.5-5-5.5-8-5" />
      <path d="M12 11c1.5-3.5 5-5.5 8-5" />
      <path d="M12 12c-3-1.8-6.2-1.6-9 .3" />
      <path d="M12 12c3-1.8 6.2-1.6 9 .3" />
      <path d="M9 20h6" />
    </svg>
  );
}

function IconCocktail({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 5h16l-7 8v6" />
      <path d="M10 19h4" />
      <path d="M16 3l3-2" />
      <path d="M15 8h2" />
    </svg>
  );
}

function IconSunburst({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.9 4.9 7 7" />
      <path d="m17 17 2.1 2.1" />
      <path d="m17 7 2.1-2.1" />
      <path d="M4.9 19.1 7 17" />
    </svg>
  );
}

function IconSparkle({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M5 4 5.8 6.2 8 7l-2.2.8L5 10 4.2 7.8 2 7l2.2-.8L5 4Z" />
    </svg>
  );
}

function IconBikini({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 6c1.8 0 2.6 1.4 3 2.5" />
      <path d="M17 6c-1.8 0-2.6 1.4-3 2.5" />
      <path d="M4 10h16" />
      <path d="M8.5 14.5c1.3 1.5 1.3 4.5 0 6" />
      <path d="M15.5 14.5c-1.3 1.5-1.3 4.5 0 6" />
      <path d="M8.5 14.5h7" />
    </svg>
  );
}

function IconShell({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 20c5 0 8-3.4 8-7.2C20 8.5 16.9 5 12 5S4 8.5 4 12.8C4 16.6 7 20 12 20Z" />
      <path d="M12 5v15" />
      <path d="M8.8 6.2 10 20" />
      <path d="M15.2 6.2 14 20" />
      <path d="M6.5 9.3 9.6 19.4" />
      <path d="M17.5 9.3 14.4 19.4" />
    </svg>
  );
}

function IconSunglasses({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3.5 11.2h17" />
      <path d="M4.5 11.2 6 16c.2.6.8 1 1.4 1h2.2c.6 0 1.2-.4 1.4-1l1-3.1" />
      <path d="M19.5 11.2 18 16c-.2.6-.8 1-1.4 1h-2.2c-.6 0-1.2-.4-1.4-1l-1-3.1" />
    </svg>
  );
}

function IconFlame({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12.5 3.5c.2 3.1-2.3 4.5-3.7 6.5-1.3 1.8-1.8 3.3-1.8 4.9 0 3.1 2.4 5.6 5.5 5.6s5.5-2.5 5.5-5.6c0-3.2-2-5.2-3.5-6.9-.8-.9-1.8-2.2-1.9-4.5Z" />
      <path d="M11.8 12.6c.1 1.5-1.3 2.2-1.3 3.5 0 1.2.9 2.1 2 2.1s2-.9 2-2.1c0-1.2-.8-2-1.3-2.6-.3-.3-.7-.8-.7-1.6Z" />
    </svg>
  );
}

function iconByName(name: (typeof tripDetails)[number]["icon"]) {
  if (name === "palm") return <IconPalm className="h-5 w-5" />;
  if (name === "sun") return <IconSunburst className="h-5 w-5" />;
  if (name === "sunglasses") return <IconSunglasses className="h-5 w-5" />;
  if (name === "shell") return <IconShell className="h-5 w-5" />;
  if (name === "sparkle") return <IconSparkle className="h-5 w-5" />;
  return <IconFlame className="h-5 w-5" />;
}

export default function FrennergyPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#F8EBDD] text-[#241243]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(68%_58%_at_50%_0%,rgba(255,46,139,0.24),rgba(248,235,221,0)_76%)]" />
      <div className="pointer-events-none absolute -top-14 left-[-4rem] -z-10 h-72 w-72 rounded-full bg-[#FFD55C]/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-[-5rem] -z-10 h-72 w-72 rounded-full bg-[#17C3C8]/24 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
        <section className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/70 bg-[linear-gradient(140deg,#ffd4ea_0%,#ffb793_32%,#ff8a3d_58%,#17c3c8_100%)] px-6 pb-10 pt-8 shadow-[0_34px_80px_-30px_rgba(36,18,67,0.8)] sm:px-10 sm:pb-12 sm:pt-11">
          <div className="pointer-events-none absolute -right-14 -top-10 text-[#FFD55C] opacity-85">
            <IconSunburst className="h-20 w-20" />
          </div>
          <div className="pointer-events-none absolute left-4 top-4 text-[#241243]/35">
            <IconPalm className="h-8 w-8" />
          </div>
          <div className="pointer-events-none absolute right-8 top-24 text-[#F8EBDD]/80">
            <IconBikini className="h-8 w-8" />
          </div>
          <div className="pointer-events-none absolute bottom-8 left-6 text-[#F8EBDD]/90">
            <IconCocktail className="h-8 w-8" />
          </div>
          <div className="pointer-events-none absolute bottom-10 right-8 text-[#FFD55C]">
            <IconFlame className="h-8 w-8" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 text-[#F8EBDD]/80">
            <IconSparkle className="h-7 w-7" />
          </div>

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#241243]">
              <span className="font-[cursive] text-base lowercase tracking-normal">bach mode</span>
              <span className="font-semibold">San Juan, Puerto Rico</span>
            </p>

            <h1 className="mt-5 font-[family-name:Georgia,Times,serif] text-6xl font-black leading-[0.9] tracking-tight text-[#241243] sm:text-7xl lg:text-8xl">
              Hot Girl Frennergy
            </h1>
            <p className="mt-4 text-xl font-semibold text-[#241243] sm:text-2xl">
              Chelsea&apos;s Bachelorette Weekend
            </p>
            <p className="mt-3 max-w-2xl text-lg font-semibold leading-7 text-[#3B225F]">
              Bikinis, beach clubs, and bad decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center rounded-full bg-[#241243] px-6 py-3 text-sm font-semibold text-[#F8EBDD] shadow-[0_16px_28px_-14px_rgba(36,18,67,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#361A68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241243] focus-visible:ring-offset-2"
              >
                View Itinerary
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/55 px-6 py-3 text-sm font-semibold text-[#241243] shadow-[0_14px_24px_-14px_rgba(36,18,67,0.55)] transition duration-300 hover:-translate-y-1 hover:bg-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241243] focus-visible:ring-offset-2"
              >
                Trip Details
              </a>
            </div>

            <Countdown targetDate={tripStart} label="Hot Girl Summer begins in..." />
          </div>
        </section>

        <section className="mt-5 rounded-full border border-[#241243]/15 bg-[#241243] px-4 py-3 text-[#F8EBDD] shadow-[0_18px_28px_-20px_rgba(36,18,67,0.8)] sm:px-6" aria-label="Weekend vibe strip">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">
            {vibeStrip.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span>{item}</span>
                {index < vibeStrip.length - 1 ? <span className="text-[#FFD55C]">•</span> : null}
              </span>
            ))}
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] bg-white/65 p-6 shadow-[0_24px_44px_-28px_rgba(36,18,67,0.65)] sm:mt-16 sm:p-10" aria-labelledby="overview-title">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 id="overview-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
                <IconSunglasses className="h-5 w-5 text-[#FF2E8B]" />
                Weekend Overview
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A3A62] sm:text-lg">
                Welcome to Chelsea&apos;s San Juan bachelorette weekend - a few days of beach clubs,
                dinner glam, frozen drinks, late nights, recovery brunches, and elite memories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#241243] sm:w-72">
              <span className="rounded-full bg-[#FFD55C]/50 px-3 py-2 text-center">Pool Hair</span>
              <span className="rounded-full bg-[#17C3C8]/40 px-3 py-2 text-center">Spritz Hour</span>
              <span className="rounded-full bg-[#FF8A3D]/40 px-3 py-2 text-center">Golden Hour</span>
              <span className="rounded-full bg-[#FF2E8B]/30 px-3 py-2 text-center">Main Character</span>
            </div>
          </div>
        </section>

        <section id="itinerary" className="mt-10 sm:mt-14" aria-labelledby="itinerary-title">
          <div className="rounded-[2rem] border border-[#241243]/10 bg-[#FFF5E9] p-6 shadow-[0_24px_44px_-28px_rgba(36,18,67,0.65)] sm:p-10">
            <div className="flex items-end justify-between gap-3">
              <h2 id="itinerary-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
                <IconPalm className="h-5 w-5 text-[#17C3C8]" />
                Itinerary
              </h2>
              <span className="rounded-full bg-[#FFD55C]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5D4305]">
                Weekend Flow
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-3">
              {itinerary.map((item) => (
                <article
                  key={item.day}
                  className="rounded-[1.7rem] border border-white/75 bg-white/90 p-5 shadow-[0_20px_36px_-24px_rgba(36,18,67,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_45px_-24px_rgba(36,18,67,0.7)] sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF2E8B]">{item.tone}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#241243]">{item.day}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#46355F] sm:text-base">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-[#FF8A3D]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14" aria-labelledby="dress-themes-title">
          <div className="rounded-[2rem] bg-white/68 p-6 shadow-[0_24px_44px_-28px_rgba(36,18,67,0.65)] sm:p-10">
            <h2 id="dress-themes-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
              <IconBikini className="h-5 w-5 text-[#FF2E8B]" />
              Dress Themes
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {dressThemes.map((theme) => (
                <article
                  key={theme.event}
                  className={`${theme.swatch} relative overflow-hidden rounded-[1.8rem] px-5 py-5 shadow-[0_22px_36px_-24px_rgba(36,18,67,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_44px_-24px_rgba(36,18,67,0.72)] sm:px-6 sm:py-6`}
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/25" />
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] opacity-90">{theme.event}</p>
                  <p className="mt-2 text-2xl font-black tracking-tight">{theme.theme}</p>
                  <p className="mt-1 text-sm font-semibold opacity-90">{theme.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14" aria-labelledby="rules-title">
          <div className="rounded-[2rem] border border-[#241243]/10 bg-[#FFF5E9] p-6 shadow-[0_24px_44px_-28px_rgba(36,18,67,0.65)] sm:p-10">
            <h2 id="rules-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
              <IconSparkle className="h-5 w-5 text-[#FF2E8B]" />
              Weekend Rules
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
              {weekendRules.map((rule) => (
                <p
                  key={rule.label}
                  className={`${rule.sticker} rounded-2xl px-4 py-3 text-center text-sm font-black uppercase tracking-[0.08em] shadow-[0_14px_24px_-20px_rgba(36,18,67,0.8)] transition duration-300 hover:-translate-y-1 sm:text-base`}
                >
                  {rule.label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="mt-10 sm:mt-14" aria-labelledby="trip-details-title">
          <div className="rounded-[2rem] bg-white/68 p-6 shadow-[0_24px_44px_-28px_rgba(36,18,67,0.65)] sm:p-10">
            <h2 id="trip-details-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
              <IconShell className="h-5 w-5 text-[#FF8A3D]" />
              Trip Details
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {tripDetails.map((detail) => (
                <article
                  key={detail.label}
                  className="rounded-[1.7rem] border border-white/70 bg-white/92 px-5 py-5 shadow-[0_20px_36px_-24px_rgba(36,18,67,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_44px_-24px_rgba(36,18,67,0.66)]"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#241243]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#241243]">
                    <span className="text-[#FF2E8B]">{iconByName(detail.icon)}</span>
                    {detail.label}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#46355F]">{detail.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-12 sm:mt-16" aria-labelledby="photos-title">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#35205F] bg-[linear-gradient(132deg,#241243_0%,#2F1A55_45%,#4B1F66_100%)] px-6 py-9 text-[#F8EBDD] shadow-[0_34px_72px_-30px_rgba(36,18,67,0.95)] sm:px-10 sm:py-11">
            <div className="pointer-events-none absolute -right-10 top-3 h-44 w-44 rounded-full bg-[#FF2E8B]/22 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-1 h-44 w-44 rounded-full bg-[#17C3C8]/20 blur-3xl" />

            <div className="relative">
              <h2 id="photos-title" className="inline-flex items-center gap-2 text-3xl font-black tracking-tight sm:text-4xl">
                <IconSparkle className="h-6 w-6 text-[#FFD55C]" />
                Frennenergy Photo Dump
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#FAD8E8] sm:text-base">
                Upload all the chaos, candids, glam, and blurry late-night masterpieces here.
              </p>
              <a
                href="#photos"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(118deg,#FF2E8B_0%,#FF6B4A_55%,#FF8A3D_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_-16px_rgba(255,46,139,0.85)] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD55C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#241243]"
              >
                <IconCocktail className="h-4 w-4" />
                Add Shared Album Link
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-14 text-center text-sm text-[#5B4976] sm:pt-16">
          <p className="font-black uppercase tracking-[0.2em] text-[#FF2E8B]">Hot Girl Frennergy</p>
          <p className="mt-2">Made for Chelsea&apos;s San Juan weekend</p>
        </footer>
      </div>
    </main>
  );
}
