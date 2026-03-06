import type { Metadata } from "next";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A vibrant San Juan bachelorette weekend invite, itinerary, and moodboard for Chelsea.",
};

const tripStart = "2026-05-22T00:00:00-04:00";

const vibeStrip = [
  "Bikinis",
  "Beach Clubs",
  "Spritzes",
  "Sunsets",
  "Chaos",
  "Chelsea",
];

const itinerary = [
  {
    day: "Friday",
    tone: "Pink Start",
    cardClass: "bg-[#FFF2F8] border-[#FF4FA3]/35",
    dotClass: "bg-[#FF4FA3]",
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
    cardClass: "bg-[#EFFBFA] border-[#27C7C8]/35",
    dotClass: "bg-[#27C7C8]",
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
    cardClass: "bg-[#FFF7EC] border-[#FFA552]/40",
    dotClass: "bg-[#FFA552]",
    highlights: ["Brunch", "Pool hang", "Departures"],
  },
];

const dressThemes = [
  {
    event: "Friday Night",
    theme: "Hot Pink",
    note: "statement glam",
    swatchClass: "bg-[#FF4FA3] text-white",
  },
  {
    event: "Saturday Day",
    theme: "Turquoise / tropical",
    note: "beach club energy",
    swatchClass: "bg-[#27C7C8] text-[#0E3D40]",
  },
  {
    event: "Saturday Night",
    theme: "Coral + gold",
    note: "sunset sparkle",
    swatchClass: "bg-[#FF6B4A] text-white",
  },
  {
    event: "Sunday Brunch",
    theme: "Sand / cute and effortless",
    note: "easy but iconic",
    swatchClass: "bg-[#F8EBDD] text-[#573B2F]",
  },
];

const weekendRules = [
  { label: "Take the shot", className: "bg-[#FFD966] text-[#493503] rotate-[-2deg]" },
  { label: "Take the photo", className: "bg-[#FF6B4A] text-white rotate-[2deg]" },
  { label: "Drink the cocktail", className: "bg-[#27C7C8] text-[#103A40] rotate-[-1deg]" },
  { label: "Hydrate occasionally", className: "bg-[#8DE1D2] text-[#1A5553] rotate-[1deg]" },
  { label: "Celebrate Chelsea", className: "bg-[#FF4FA3] text-white rotate-[-2deg]" },
  { label: "No bad vibes", className: "bg-[#C9A6FF] text-[#341A57] rotate-[1deg]" },
];

const tripDetails = [
  {
    label: "House",
    value: "Villa details coming soon",
    icon: "palm",
    tileClass: "bg-[#FFF2F8] border-[#FF4FA3]/35",
  },
  {
    label: "Airport",
    value: "Fly into SJU",
    icon: "sun",
    tileClass: "bg-[#FFF7EC] border-[#FFA552]/45",
  },
  {
    label: "Transportation",
    value: "Uber is easiest for getting around",
    icon: "sunglasses",
    tileClass: "bg-[#EFFBFA] border-[#27C7C8]/35",
  },
  {
    label: "Check-in",
    value: "Details to come",
    icon: "shell",
    tileClass: "bg-[#F7D8E3] border-[#FF4FA3]/35",
  },
  {
    label: "Group Chat",
    value: "Watch the chat for live updates",
    icon: "sparkle",
    tileClass: "bg-[#F2ECFF] border-[#C9A6FF]/45",
  },
  {
    label: "Weather",
    value: "Hot, sunny, and humid - pack accordingly",
    icon: "flame",
    tileClass: "bg-[#FFF7EC] border-[#FF8A3D]/45",
  },
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

function IconWave({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M2 8c2.2 0 2.2 2 4.4 2s2.2-2 4.4-2 2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 2.4 2" />
      <path d="M2 14c2.2 0 2.2 2 4.4 2s2.2-2 4.4-2 2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 2.4 2" />
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
    <main className="relative isolate overflow-hidden bg-[#F8EBDD] text-[#3D2B57]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(68%_58%_at_50%_0%,rgba(255,79,163,0.24),rgba(248,235,221,0)_78%)]" />
      <div className="pointer-events-none absolute -top-16 left-[-4rem] -z-10 h-72 w-72 rounded-full bg-[#FFD966]/35 blur-3xl" />
      <div className="pointer-events-none absolute top-36 right-[-5rem] -z-10 h-72 w-72 rounded-full bg-[#27C7C8]/24 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[#FF4FA3]/25 bg-[linear-gradient(180deg,#FFF4EA_0%,#F9DCE7_100%)] px-6 pb-10 pt-8 shadow-[0_24px_48px_-28px_rgba(255,79,163,0.45)] sm:px-10 sm:pb-12 sm:pt-10">
          <div className="pointer-events-none absolute -left-10 top-10 h-24 w-24 rounded-full bg-[#FFD966]/45" />
          <div className="pointer-events-none absolute right-[-2.25rem] top-[-1.75rem] h-28 w-28 rounded-full bg-[#79D9D1]/35" />
          <div className="pointer-events-none absolute bottom-[-1.5rem] left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#FF7A59]/25" />
          <div className="pointer-events-none absolute left-4 top-5 text-[#FFA552]">
            <IconPalm className="h-7 w-7" />
          </div>
          <div className="pointer-events-none absolute right-6 top-6 text-[#FF4FA3]">
            <IconSunburst className="h-7 w-7" />
          </div>
          <div className="pointer-events-none absolute right-4 top-20 text-[#FF7A59]">
            <IconBikini className="h-7 w-7" />
          </div>
          <div className="pointer-events-none absolute left-6 bottom-7 text-[#79D9D1]">
            <IconCocktail className="h-7 w-7" />
          </div>
          <div className="pointer-events-none absolute right-10 bottom-7 text-[#FF4FA3]">
            <IconSparkle className="h-6 w-6" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 text-[#FF7A59]/70">
            <IconWave className="h-8 w-8" />
          </div>
          <div className="pointer-events-none absolute right-1/3 bottom-4 text-[#FFA552]">
            <IconShell className="h-6 w-6" />
          </div>
          <div className="pointer-events-none absolute left-1/4 bottom-5 text-[#FF7A59]">
            <IconFlame className="h-6 w-6" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-2">
              <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5C3F78]">
                bach mode
              </span>
              <span className="rounded-full bg-[#FFD966]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6B490C]">
                hot girls only
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4A84]">
              Chelsea&apos;s Bachelorette Weekend
            </p>
            <h1 className="mt-3 font-[family-name:Georgia,Times,serif] text-6xl font-black leading-[0.9] tracking-tight text-[#4B2C66] sm:text-7xl lg:text-8xl">
              Hot Girl Frennergy
            </h1>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#5C3F78]">
              <IconShell className="h-4 w-4 text-[#FF7A59]" />
              San Juan, Puerto Rico
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-7 text-[#5A3E71]">
              Bikinis, beach clubs, and bad decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center rounded-full bg-[#FF4FA3] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_-12px_rgba(255,79,163,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#EA3793] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4FA3] focus-visible:ring-offset-2"
              >
                View Itinerary
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center rounded-full border border-[#79D9D1]/65 bg-white/75 px-6 py-3 text-sm font-semibold text-[#2B6970] shadow-[0_12px_22px_-14px_rgba(121,217,209,0.85)] transition duration-300 hover:-translate-y-1 hover:bg-[#EEFCFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79D9D1] focus-visible:ring-offset-2"
              >
                Trip Details
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4" aria-label="Countdown card">
          <div className="rounded-[1.8rem] border border-[#FF4FA3]/20 bg-[#FFF4EA] p-3 shadow-[0_18px_30px_-24px_rgba(255,79,163,0.5)] sm:p-4">
            <Countdown targetDate={tripStart} label="Hot Girl Summer begins in..." />
          </div>
        </section>

        <section
          className="mt-5 rounded-full border border-[#FF4FA3]/25 bg-[#F7D8E3]/65 px-4 py-3 shadow-[0_14px_24px_-18px_rgba(255,79,163,0.55)] sm:px-6"
          aria-label="Weekend vibe strip"
        >
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#5A3A73] sm:text-sm">
            {vibeStrip.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span>{item}</span>
                {index < vibeStrip.length - 1 ? <span className="text-[#FF4FA3]">/</span> : null}
              </span>
            ))}
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] bg-[#F7D8E3]/55 p-6 shadow-[0_22px_40px_-28px_rgba(255,79,163,0.55)] sm:mt-16 sm:p-10" aria-labelledby="overview-title">
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
            <div>
              <h2 id="overview-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#43285F] sm:text-3xl">
                <IconCocktail className="h-5 w-5 text-[#FF6B4A]" />
                Weekend Overview
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5A406F] sm:text-lg">
                Welcome to Chelsea&apos;s San Juan bachelorette weekend - a few days of beach clubs,
                dinner glam, frozen drinks, late nights, recovery brunches, and elite memories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4C3366]">
              <span className="rounded-full bg-[#FFD966]/65 px-3 py-2 text-center">bikini lineup</span>
              <span className="rounded-full bg-[#8DE1D2]/65 px-3 py-2 text-center">spritz hour</span>
              <span className="rounded-full bg-[#FFA552]/65 px-3 py-2 text-center">sunset shots</span>
              <span className="rounded-full bg-[#C9A6FF]/60 px-3 py-2 text-center">main character</span>
            </div>
          </div>
        </section>

        <section id="itinerary" className="mt-10 sm:mt-14" aria-labelledby="itinerary-title">
          <div className="rounded-[2rem] bg-white/75 p-6 shadow-[0_22px_40px_-28px_rgba(255,165,82,0.55)] sm:p-10">
            <div className="flex items-end justify-between gap-3">
              <h2 id="itinerary-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#462A62] sm:text-3xl">
                <IconPalm className="h-5 w-5 text-[#27C7C8]" />
                Itinerary
              </h2>
              <span className="rounded-full bg-[#FFD966]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5D4305]">
                Weekend Flow
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-3">
              {itinerary.map((item) => (
                <article
                  key={item.day}
                  className={`rounded-[1.7rem] border p-5 shadow-[0_18px_34px_-24px_rgba(61,43,87,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_40px_-24px_rgba(61,43,87,0.55)] sm:p-6 ${item.cardClass}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF4FA3]">{item.tone}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#3D2B57]">{item.day}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5A406F] sm:text-base">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className={`mt-[0.45rem] h-2 w-2 shrink-0 rounded-full ${item.dotClass}`} />
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
          <div className="rounded-[2rem] bg-[#EFFBFA] p-6 shadow-[0_22px_40px_-28px_rgba(39,199,200,0.55)] sm:p-10">
            <h2 id="dress-themes-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#3B2A56] sm:text-3xl">
              <IconBikini className="h-5 w-5 text-[#FF4FA3]" />
              Dress Themes
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {dressThemes.map((theme) => (
                <article
                  key={theme.event}
                  className={`relative overflow-hidden rounded-[1.8rem] px-5 py-5 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_40px_-24px_rgba(61,43,87,0.55)] sm:px-6 sm:py-6 ${theme.swatchClass}`}
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
          <div className="rounded-[2rem] bg-[#FFF6E5] p-6 shadow-[0_22px_40px_-28px_rgba(255,165,82,0.55)] sm:p-10">
            <h2 id="rules-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#40275F] sm:text-3xl">
              <IconSparkle className="h-5 w-5 text-[#FF4FA3]" />
              Weekend Rules
            </h2>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {weekendRules.map((rule) => (
                <p
                  key={rule.label}
                  className={`rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.08em] shadow-[0_12px_22px_-18px_rgba(61,43,87,0.6)] transition duration-300 hover:-translate-y-1 sm:text-base ${rule.className}`}
                >
                  {rule.label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="mt-10 sm:mt-14" aria-labelledby="trip-details-title">
          <div className="rounded-[2rem] bg-white/75 p-6 shadow-[0_22px_40px_-28px_rgba(141,225,210,0.7)] sm:p-10">
            <h2 id="trip-details-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#40275F] sm:text-3xl">
              <IconShell className="h-5 w-5 text-[#FF8A3D]" />
              Trip Details
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {tripDetails.map((detail) => (
                <article
                  key={detail.label}
                  className={`rounded-[1.7rem] border px-5 py-5 shadow-[0_18px_32px_-24px_rgba(61,43,87,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_38px_-24px_rgba(61,43,87,0.6)] ${detail.tileClass}`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A3168]">
                    <span className="text-[#FF4FA3]">{iconByName(detail.icon)}</span>
                    {detail.label}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#563E71]">{detail.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-12 sm:mt-16" aria-labelledby="photos-title">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(118deg,#FF6B4A_0%,#FFA552_34%,#FFD966_64%,#27C7C8_100%)] px-6 py-9 text-[#43275F] shadow-[0_26px_56px_-24px_rgba(255,107,74,0.6)] sm:px-10 sm:py-11">
            <div className="pointer-events-none absolute -right-10 top-2 h-44 w-44 rounded-full bg-[#FF4FA3]/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-[#8DE1D2]/35 blur-3xl" />

            <div className="relative">
              <h2 id="photos-title" className="inline-flex items-center gap-2 text-3xl font-black tracking-tight sm:text-4xl">
                <IconSparkle className="h-6 w-6 text-[#FF4FA3]" />
                Frennenergy Photo Dump
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#50326C] sm:text-base">
                Upload all the chaos, candids, glam, and blurry late-night masterpieces here.
              </p>
              <a
                href="#photos"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4FA3] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_28px_-14px_rgba(255,79,163,0.75)] transition duration-300 hover:-translate-y-1 hover:bg-[#E93593] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4FA3] focus-visible:ring-offset-2"
              >
                <IconCocktail className="h-4 w-4" />
                Add Shared Album Link
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-14 text-center text-sm text-[#684A7B] sm:pt-16">
          <p className="font-black uppercase tracking-[0.2em] text-[#FF4FA3]">Hot Girl Frennergy</p>
          <p className="mt-2">Made for Chelsea&apos;s San Juan weekend</p>
        </footer>
      </div>
    </main>
  );
}
