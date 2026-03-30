import type { Metadata } from "next";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A chic San Juan bachelorette weekend guide with itinerary plans, travel details, and rooftop-to-cabana energy.",
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

const playlistUrl =
  "https://open.spotify.com/playlist/4OkCaycgBtBoghf9mWo5l9?si=fk42PKmhTMGDFJiw511DAQ&pi=YHW-SyMdTW6LR&pt=d7eaf428e509d5b69b308b0fa851b88b";

const overviewPills = [
  "Pool Hair",
  "Old San Juan Dinner",
  "Spritz Hour",
  "Golden Hour Photos",
];

type ActivityType =
  | "arrivals"
  | "meal"
  | "reservation"
  | "drinks"
  | "activity"
  | "nightlife"
  | "departure";

type DayPlan = {
  day: "Friday" | "Saturday" | "Sunday";
  theme: string;
  subtitle: string;
  cardClass: string;
  accentClass: string;
  events: Array<{
    time: string;
    type: ActivityType;
    label: string;
    detail: string;
  }>;
};

const dayPlans: DayPlan[] = [
  {
    day: "Friday",
    theme: "Girls Gone Mild",
    subtitle: "A cozy, low-key arrival night before the weekend fun begins.",
    cardClass: "fren-card fren-card--warm",
    accentClass: "text-[var(--fren-coral)]",
    events: [
      {
        time: "Afternoon",
        type: "arrivals",
        label: "Everyone arrives",
        detail: "Flights roll in and everyone settles into weekend mode.",
      },
      {
        time: "4:00 PM",
        type: "reservation",
        label: "Check-in at the house",
        detail: "Bags down, room picks, and time to settle in.",
      },
      {
        time: "Evening",
        type: "activity",
        label: "Rooftop + dinner in",
        detail: "Rooftop hangs, takeout, and a cozy night in.",
      },
    ],
  },
  {
    day: "Saturday",
    theme: "Pour Decisions",
    subtitle: "Brunch, Bacardi, and a night out - the recipe for Pour Decisions.",
    cardClass: "fren-card fren-card--blush",
    accentClass: "text-[var(--fren-pink)]",
    events: [
      {
        time: "10:30 AM",
        type: "meal",
        label: "Brunch in Old San Juan",
        detail: "A chic little brunch moment before the chaos begins.",
      },
      {
        time: "1:00 PM",
        type: "drinks",
        label: "Bacardi cocktail class",
        detail: "Ferry over to Bacardi for cocktails and questionable choices.",
      },
      {
        time: "Late afternoon",
        type: "activity",
        label: "Back to the house to get ready",
        detail: "Quick outfit change and glam reset.",
      },
      {
        time: "Evening",
        type: "reservation",
        label: "Dinner",
        detail: "Plans coming soon.",
      },
      {
        time: "Night",
        type: "nightlife",
        label: "Night out on the town",
        detail: "Details coming soon.",
      },
    ],
  },
  {
    day: "Sunday",
    theme: "Tropic Like It's Hot",
    subtitle: "Cabana energy, cute swimsuits, and not a single sober thought.",
    cardClass: "fren-card fren-card--blue",
    accentClass: "text-[var(--fren-blue)]",
    events: [
      {
        time: "11:00 AM",
        type: "activity",
        label: "Cabana + pool day",
        detail: "Poolside, sun-soaked, and fully in vacation mode.",
      },
      {
        time: "Midday",
        type: "meal",
        label: "Poolside lunch",
        detail: "Lunch, drinks, and cabana hangs.",
      },
      {
        time: "Late afternoon",
        type: "activity",
        label: "Back to the house to refresh",
        detail: "Quick reset before the evening.",
      },
      {
        time: "Evening",
        type: "reservation",
        label: "Dinner TBD",
        detail: "Plans to come.",
      },
    ],
  },
];

const weekendRules = [
  "Take the shot",
  "Take the photo",
  "Drink the cocktail",
  "Hydrate occasionally",
  "Celebrate Chelsea",
  "No bad vibes",
];

const tripDetails = [
  {
    label: "House",
    value: "208 Calle de la Luna, Old San Juan, 00902 San Juan",
  },
  {
    label: "Airport",
    value: "Fly into SJU",
  },
  {
    label: "Transportation",
    value: "Uber is easiest for getting around",
  },
  {
    label: "Check-in",
    value: "Details to come",
  },
  {
    label: "Group Chat",
    value: "Watch the chat for live updates",
  },
  {
    label: "Weather",
    value: "Hot, sunny, and humid - pack accordingly",
  },
] as const;

const tripExtras = [
  {
    title: "Packing Guide",
    subtitle: "Must-pack edits",
    copy: "Swimsuits, coverups, comfy sandals, SPF, fan, and one dramatic dinner look.",
  },
  {
    title: "Villa / Hotel Info",
    subtitle: "Stay details",
    copy: "Address, room split, and keypad details will be pinned in the group chat.",
  },
  {
    title: "Weather",
    subtitle: "Forecast vibe",
    copy: "Hot and humid all weekend. Lightweight fabrics and hydration are non-negotiable.",
  },
] as const;

const extraToneClasses = [
  "fren-card fren-card--warm",
  "fren-card fren-card--blue",
  "fren-card fren-card--blush",
] as const;

const ruleToneClasses = [
  "border-[rgba(63,103,200,0.18)] bg-white/92 text-[var(--fren-blue)]",
  "border-[rgba(226,61,138,0.18)] bg-[rgba(226,61,138,0.06)] text-[var(--fren-pink)]",
  "border-[rgba(255,123,94,0.18)] bg-[rgba(255,123,94,0.06)] text-[var(--fren-coral)]",
  "border-[rgba(243,181,61,0.22)] bg-[rgba(243,181,61,0.1)] text-[var(--fren-ink)]",
  "border-[rgba(63,103,200,0.18)] bg-[rgba(143,179,231,0.1)] text-[var(--fren-blue)]",
  "border-[rgba(226,61,138,0.18)] bg-white/92 text-[var(--fren-pink)]",
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

function IconCamera({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 8h16v11H4z" />
      <path d="M8 8 9.4 5.8h5.2L16 8" />
      <circle cx="12" cy="13.5" r="2.7" />
    </svg>
  );
}

function IconHeadphones({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3.5" y="12" width="4.5" height="7" rx="2" />
      <rect x="16" y="12" width="4.5" height="7" rx="2" />
      <path d="M8 18h8" />
    </svg>
  );
}

function activityIconByType(type: ActivityType) {
  if (type === "arrivals") return <IconPalm className="h-4 w-4" />;
  if (type === "meal") return <IconShell className="h-4 w-4" />;
  if (type === "reservation") return <IconSparkle className="h-4 w-4" />;
  if (type === "drinks") return <IconCocktail className="h-4 w-4" />;
  if (type === "activity") return <IconSunburst className="h-4 w-4" />;
  if (type === "nightlife") return <IconFlame className="h-4 w-4" />;
  return <IconWave className="h-4 w-4" />;
}

export default function FrennergyPage() {
  const [fridayPlan, saturdayPlan, sundayPlan] = dayPlans;

  return (
    <main className="fren-page font-sans">
      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-8 sm:pb-32 sm:pt-10">
        <section className="fren-hero fren-editorial-frame relative overflow-hidden rounded-[2.4rem] px-6 pb-9 pt-8 sm:px-10 sm:pb-12 sm:pt-10">
          <div className="fren-hero-stripe absolute inset-x-0 top-0 h-3 opacity-80" />
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl lg:pr-6">
              <p className="fren-kicker">Chelsea&apos;s Bachelorette Weekend</p>
              <div className="mt-7 flex items-start gap-5">
                <span className="hidden h-24 w-px bg-[var(--fren-line-strong)] lg:block" />
                <div>
                  <p className="inline-flex rounded-full border border-[rgba(63,103,200,0.16)] bg-white/76 px-4 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fren-blue)]">
                    San Juan, Puerto Rico
                  </p>
                  <h1 className="mt-6 font-serif text-[4.75rem] font-semibold leading-[0.82] tracking-[-0.055em] text-[var(--fren-ink)] sm:text-[6rem] lg:text-[7.8rem]">
                    Hot Girl
                    <br />
                    Frennergy
                  </h1>
                </div>
              </div>
              <p className="fren-copy mt-7 max-w-xl text-lg leading-8 sm:text-[1.35rem]">
                A destination-weekend edit for rooftop dinners, pool-club afternoons, and one
                very polished kind of chaos.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#itinerary"
                  className="fren-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2"
                >
                  View Itinerary
                </a>
                <a
                  href="#details"
                  className="fren-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2"
                >
                  Trip Details
                </a>
              </div>
            </div>

            <aside className="grid gap-5 border-t border-[var(--fren-line)] pt-5 lg:mb-2 lg:border-t-0 lg:pt-0">
              <div className="border-b border-[var(--fren-line)] pb-4 lg:pb-5">
                <p className="fren-kicker">San Juan, Puerto Rico</p>
                <p className="mt-4 max-w-md font-serif text-[2.15rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--fren-blue)]">
                  Mediterranean stripes, Old San Juan facades, and bridal main-character energy.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="border-l-2 border-[var(--fren-coral)] bg-white/62 px-4 py-4">
                  <p className="fren-kicker">Stay</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    Historic house in Old San Juan, rooftop included.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--fren-blue)] bg-white/62 px-4 py-4">
                  <p className="fren-kicker">Mood</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    Fashion weekend, destination dinner party, just enough chaos.
                  </p>
                </div>
                <div className="border-l-2 border-[var(--fren-pink)] bg-white/62 px-4 py-4">
                  <p className="fren-kicker">Pack For</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    Cute swimsuits, dinner glam, and very intentional accessories.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1.14fr_0.86fr] lg:items-stretch">
          <div>
            <Countdown targetDate={tripStart} label="Countdown to San Juan" />
          </div>

          <section aria-labelledby="music-title">
            <div className="relative flex h-full min-h-[100%] flex-col overflow-hidden border border-[rgba(255,123,94,0.22)] bg-[linear-gradient(135deg,var(--fren-coral),var(--fren-marigold))] px-7 py-8 shadow-[0_22px_34px_-20px_rgba(255,123,94,0.42)]">
              <div className="absolute inset-x-0 top-0 h-3 bg-[linear-gradient(90deg,var(--fren-marigold),rgba(248,242,232,0.95),var(--fren-pink))]" />
              <div className="pointer-events-none absolute right-6 top-6 text-[var(--fren-blue)]">
                <IconHeadphones className="h-14 w-14 rotate-[8deg]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/84">
                Now Playing
              </p>
              <h2 id="music-title" className="mt-4 max-w-xs font-serif text-4xl font-semibold tracking-[-0.04em] text-white">
                Hot Girl
                <br />
                Frennergy
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/92">
                Add your favorites before the first pour, the first ferry, and the first blurry
                dinner flash photo.
              </p>
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center border border-white/70 bg-[rgba(248,242,232,0.92)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--fren-blue)] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--fren-coral)]"
              >
                Cue the Chaos
              </a>
            </div>
          </section>
        </section>

        <section
          className="fren-stripe-band mt-6 rounded-full border border-[rgba(63,103,200,0.12)] px-4 py-3 shadow-[0_12px_22px_-18px_rgba(63,103,200,0.22)] sm:px-6"
          aria-label="Weekend vibe strip"
        >
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fren-blue)] sm:text-sm">
            {vibeStrip.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span>{item}</span>
                {index < vibeStrip.length - 1 ? <span className="text-[var(--fren-pink)]">/</span> : null}
              </span>
            ))}
          </p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby="overview-title">
          <div className="lg:pr-8">
            <p className="fren-kicker">Weekend Overview</p>
            <h2 id="overview-title" className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-6xl">
              San Juan, but
              <br />
              dressed up.
            </h2>
            <p className="fren-copy mt-5 max-w-md text-base leading-8 sm:text-lg">
              A long weekend built around rooftop resets, Old San Juan dinners, pool-club energy,
              and the kind of itinerary that looks very good in photos.
            </p>
          </div>
          <div className="fren-section fren-section--blush grid gap-6 px-6 py-8 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:items-start">
              <p className="fren-copy text-base leading-8">
                Welcome to Chelsea&apos;s San Juan bachelorette weekend: a little Mediterranean,
                a little island glam, and fully committed to the art of a really good girls&apos;
                trip.
              </p>
              <div className="border-l border-[var(--fren-line)] pl-4">
                <p className="fren-kicker">Weekend Notes</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-[var(--fren-copy)]">
                  Expect polished dinners, poolside hours, and enough outfit changes to justify the
                  extra suitcase.
                </p>
              </div>
            </div>
            <div className="fren-editorial-rule pt-5">
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                {overviewPills.map((pill, index) => (
                  <span
                    key={pill}
                    className={`rounded-full px-3 py-2 ${
                      index % 2 === 0
                        ? "border border-[rgba(63,103,200,0.16)] bg-white text-[var(--fren-blue)]"
                        : "border border-[rgba(226,61,138,0.16)] bg-[rgba(226,61,138,0.08)] text-[var(--fren-pink)]"
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="itinerary" className="mt-18 sm:mt-20" aria-labelledby="itinerary-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="fren-kicker">Day-by-Day Guide</p>
              <h2 id="itinerary-title" className="mt-3 font-serif text-5xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-6xl">
                The Day-by-Day Guide
              </h2>
            </div>
            <p className="fren-copy max-w-md text-sm leading-7 sm:text-base sm:text-right">
              Three days, three moods, one extremely well-documented weekend.
            </p>
          </div>

          <div className="mt-8 space-y-10">
            <article className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
              <div className="fren-section fren-section--warm px-6 py-8 sm:px-7">
                <p className="mt-1 text-2xl font-bold uppercase tracking-[0.18em] text-[var(--fren-blue)] sm:text-[1.85rem]">
                  Friday
                </p>
                <h3 className={`mt-3 font-serif text-5xl font-semibold tracking-[-0.04em] ${fridayPlan.accentClass}`}>
                  {fridayPlan.theme}
                </h3>
                <p className="fren-copy mt-6 max-w-sm text-base leading-8">{fridayPlan.subtitle}</p>
                <div className="fren-editorial-rule mt-6 pt-4">
                  <p className="fren-kicker">Arrival Note</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    The only agenda is getting in, getting settled, and making the rooftop feel like
                    home base.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr_0.95fr]">
                {fridayPlan.events.map((event, index) => (
                  <article
                    key={`${fridayPlan.day}-${event.time}`}
                    className={`border-t px-5 py-6 ${
                      index === 0
                        ? "border-[rgba(255,123,94,0.26)] bg-white/72"
                        : "border-[rgba(255,123,94,0.18)] bg-[rgba(255,255,255,0.58)]"
                    }`}
                  >
                    <p className="fren-kicker text-[11px]">{event.time}</p>
                    <h4 className="mt-3 text-lg font-bold text-[var(--fren-ink)]">{event.label}</h4>
                    <p className="fren-copy mt-3 text-sm leading-7">{event.detail}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="fren-section fren-section--blush overflow-hidden px-6 py-8 sm:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr]">
                <div className="border-b border-[rgba(226,61,138,0.16)] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                  <p className="mt-1 text-2xl font-bold uppercase tracking-[0.18em] text-[var(--fren-blue)] sm:text-[1.85rem]">
                    Saturday
                  </p>
                  <h3 className={`mt-3 font-serif text-6xl font-semibold tracking-[-0.05em] ${saturdayPlan.accentClass}`}>
                    {saturdayPlan.theme}
                  </h3>
                  <p className="fren-copy mt-5 text-base leading-8">{saturdayPlan.subtitle}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {saturdayPlan.events.map((event, index) => (
                    <article
                      key={`${saturdayPlan.day}-${event.time}`}
                      className={`px-5 py-6 ${
                        index === 1
                          ? "bg-[rgba(226,61,138,0.08)] border-t-2 border-[var(--fren-pink)] xl:translate-y-3"
                          : index >= 3
                            ? "bg-white/65 border-t border-[rgba(63,103,200,0.14)]"
                          : "bg-white/72 border-t border-[rgba(63,103,200,0.14)]"
                      }`}
                    >
                      <p className="fren-kicker text-[11px]">{event.time}</p>
                      <h4 className="mt-3 text-base font-bold text-[var(--fren-ink)]">{event.label}</h4>
                      <p className="fren-copy mt-3 text-sm leading-7">{event.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </article>

            <article className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <div className="fren-section fren-section--blue px-6 py-8 sm:px-8">
                <p className="mt-1 text-2xl font-bold uppercase tracking-[0.18em] text-[var(--fren-blue)] sm:text-[1.85rem]">
                  Sunday
                </p>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <h3 className={`font-serif text-5xl font-semibold tracking-[-0.05em] ${sundayPlan.accentClass}`}>
                      {sundayPlan.theme}
                    </h3>
                    <p className="fren-copy mt-4 max-w-lg text-base leading-8">{sundayPlan.subtitle}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {sundayPlan.events.map((event) => (
                    <article key={`${sundayPlan.day}-${event.time}`} className="grid gap-3 border-t border-[rgba(63,103,200,0.12)] pt-4 sm:grid-cols-[120px_1fr]">
                      <p className="fren-kicker text-[11px]">{event.time}</p>
                      <div>
                        <h4 className="text-base font-bold text-[var(--fren-ink)]">{event.label}</h4>
                        <p className="fren-copy mt-2 text-sm leading-7">{event.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="fren-section fren-section--ivory px-5 py-6">
                <p className="fren-kicker">Pool Club Details</p>
                <p className="mt-4 font-serif text-3xl font-semibold tracking-[-0.04em] text-[var(--fren-blue)]">
                  Cabana from
                  <br />
                  11 to 6.
                </p>
                <p className="fren-copy mt-4 text-sm leading-7">
                  Cute swimsuit, good shades, and enough sunscreen to make it to dinner.
                </p>
                <div className="fren-editorial-rule mt-5 pt-4">
                  <p className="fren-kicker">Packing Note</p>
                  <p className="fren-copy mt-3 text-sm leading-7">
                    Bring the suit you would wear if the cabana were also a photoshoot.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-18 grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div className="lg:pr-8">
            <p className="fren-kicker">Weekend Rules</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-6xl">
              A Few House Policies.
            </h2>
            <p className="fren-copy mt-5 max-w-md text-base leading-8">
              Playful, simple, and not especially difficult to follow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weekendRules.map((rule, index) => (
              <p
                key={rule}
                className={`border px-4 py-3 text-sm font-black uppercase tracking-[0.1em] ${ruleToneClasses[index % ruleToneClasses.length]}`}
              >
                {rule}
              </p>
            ))}
          </div>
        </section>

        <section id="details" className="mt-18 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="fren-section fren-section--ivory px-6 py-8 sm:px-8">
            <p className="fren-kicker">Trip Details</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-6xl">
              Trip Details
            </h2>
            <p className="fren-copy mt-5 max-w-lg text-sm leading-7 sm:text-base">
              Addresses, arrivals, and the few logistical notes worth reading before you start
              ordering spritzes.
            </p>
            <div className="mt-8 space-y-5">
              {tripDetails.map((detail) => (
                <div key={detail.label} className="grid gap-2 border-t border-[var(--fren-line)] pt-4 sm:grid-cols-[150px_1fr]">
                  <p className="fren-kicker text-[11px]">{detail.label}</p>
                  <p className="fren-copy text-sm leading-7 sm:text-base">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="fren-section fren-section--blue px-6 py-8 sm:px-8">
              <p className="fren-kicker">Trip Extras</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)]">
                Trip Extras
              </h2>
              <p className="fren-copy mt-4 max-w-md text-sm leading-7">
                Consider this the service page: what to bring, what to expect, and what not to
                forget.
              </p>
            </div>
            <div className="grid gap-4">
              {tripExtras.map((item, index) => (
                <article
                  key={item.title}
                  className={`border px-5 py-5 ${extraToneClasses[index % extraToneClasses.length]}`}
                >
                  <p className="fren-kicker text-[11px]">{item.subtitle}</p>
                  <h3 className="mt-3 text-lg font-bold text-[var(--fren-ink)]">{item.title}</h3>
                  <p className="fren-copy mt-3 text-sm leading-7">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-20" aria-labelledby="photos-title">
          <div className="relative overflow-hidden border border-[rgba(63,103,200,0.16)] bg-[linear-gradient(135deg,var(--fren-blue),rgba(63,103,200,0.88) 47%,rgba(248,242,232,0.96) 47%,rgba(248,242,232,0.96) 100%)] px-6 py-11 shadow-[0_26px_46px_-26px_rgba(63,103,200,0.34)] sm:px-10 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/76">
                  Shared Album
                </p>
                <h2 id="photos-title" className="mt-4 max-w-sm font-serif text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                  A very photogenic mess.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/88 sm:text-base">
                  Drop the tablescapes, the glam, the pool-club candids, and the blurry evidence
                  from everything after dinner.
                </p>
              </div>
              <div className="relative border border-[rgba(63,103,200,0.16)] bg-[rgba(248,242,232,0.98)] px-6 py-8 lg:ml-auto lg:max-w-lg">
                <div className="absolute right-0 top-0 h-full w-12 border-l border-[rgba(63,103,200,0.12)] bg-[repeating-linear-gradient(180deg,rgba(143,179,231,0.2)_0_10px,transparent_10px_22px)]" />
                <p className="fren-kicker">Shared Album</p>
                <p className="mt-4 font-serif text-3xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)]">
                  The post-weekend archive starts here.
                </p>
                <p className="fren-copy mt-4 max-w-sm text-sm leading-7">
                  Add the polished ones, the blurry ones, and the ones that probably should not
                  have happened after midnight.
                </p>
                <a
                  href="#photos"
                  className="fren-button-warm mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-coral)] focus-visible:ring-offset-2"
                >
                  Add Shared Album Link
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 pb-4">
          <div className="fren-editorial-rule pt-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-serif text-3xl font-semibold tracking-[-0.04em] text-[var(--fren-blue)]">
                  Hot Girl Frennergy
                </p>
                <p className="fren-copy mt-2 text-sm">
                  San Juan, Puerto Rico. May 22 to May 24. Best dressed only.
                </p>
              </div>
              <div className="sm:text-right">
                <p className="fren-kicker">San Juan, Puerto Rico</p>
                <p className="fren-copy mt-2 text-sm">May 22 to May 24, 2026.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
