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

const detailToneClasses = [
  "fren-card fren-card--blue",
  "fren-card fren-card--warm",
  "fren-card fren-card--blush",
  "fren-card fren-card--blue",
  "fren-card fren-card--warm",
  "fren-card fren-card--blush",
] as const;

const extraToneClasses = [
  "fren-card fren-card--warm",
  "fren-card fren-card--blue",
  "fren-card fren-card--blush",
] as const;

const ruleToneClasses = [
  "border-[rgba(63,103,200,0.18)] bg-white text-[var(--fren-blue)]",
  "border-[rgba(226,61,138,0.18)] bg-[rgba(226,61,138,0.08)] text-[var(--fren-pink)]",
  "border-[rgba(255,123,94,0.18)] bg-[rgba(255,123,94,0.08)] text-[var(--fren-coral)]",
  "border-[rgba(243,181,61,0.22)] bg-[rgba(243,181,61,0.14)] text-[var(--fren-ink)]",
  "border-[rgba(63,103,200,0.18)] bg-[rgba(143,179,231,0.14)] text-[var(--fren-blue)]",
  "border-[rgba(226,61,138,0.18)] bg-white text-[var(--fren-pink)]",
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
  return (
    <main className="fren-page font-sans">
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
        <section className="fren-hero relative overflow-hidden rounded-[2.2rem] px-6 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10">
          <div className="fren-hero-stripe absolute inset-x-0 top-0 h-4 opacity-90" />
          <div className="absolute right-6 top-6 hidden h-24 w-24 rounded-full border border-[rgba(226,61,138,0.18)] bg-[rgba(255,123,94,0.12)] lg:block" />
          <div className="absolute bottom-6 left-6 hidden h-14 w-14 rounded-[1.2rem] border border-[rgba(63,103,200,0.16)] bg-[rgba(143,179,231,0.16)] lg:block" />
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <span className="fren-chip fren-chip--accent rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                rooftop season
              </span>
            </div>

            <p className="fren-kicker mt-6">Chelsea&apos;s Bachelorette Weekend</p>
            <h1 className="fren-title mt-4 font-[family-name:Georgia,Times,serif] text-6xl leading-[0.88] sm:text-7xl lg:text-8xl">
              Hot Girl Frennergy
            </h1>
            <p className="mt-4 inline-flex rounded-full border border-[rgba(63,103,200,0.14)] bg-white/84 px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fren-blue)]">
              San Juan, Puerto Rico
            </p>
            <p className="fren-copy mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 sm:text-xl">
              Mediterranean stripes, rooftop dinners, poolside pours, and one very well-dressed
              weekend.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
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

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
              <div className="fren-card rounded-[1.4rem] p-4">
                <p className="fren-kicker">Stay</p>
                <p className="mt-2 text-sm font-semibold text-[var(--fren-copy)]">Old San Juan house energy with a rooftop reset built in.</p>
              </div>
              <div className="fren-card rounded-[1.4rem] p-4">
                <p className="fren-kicker">Mood</p>
                <p className="mt-2 text-sm font-semibold text-[var(--fren-copy)]">Preppy, polished, and a little bit chaotic in the best way.</p>
              </div>
              <div className="fren-card rounded-[1.4rem] p-4">
                <p className="fren-kicker">Dress Code</p>
                <p className="mt-2 text-sm font-semibold text-[var(--fren-copy)]">Cute swimsuits, chic dinners, and strong main-character behavior.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5" aria-label="Countdown card">
          <Countdown targetDate={tripStart} label="Countdown to San Juan" />
        </section>

        <section className="mt-6 sm:mt-8" aria-labelledby="music-title">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,123,94,0.22)] bg-[linear-gradient(135deg,var(--fren-coral),var(--fren-marigold))] px-7 py-9 pr-24 shadow-[0_22px_34px_-20px_rgba(255,123,94,0.46)] sm:px-10 sm:py-10 sm:pr-32">
            <div className="absolute inset-x-0 top-0 h-3 bg-[linear-gradient(90deg,var(--fren-marigold),rgba(248,242,232,0.95),var(--fren-pink))]" />
            <div className="pointer-events-none absolute -right-5 -top-6 rotate-[10deg] rounded-[1.7rem] border-4 border-white bg-[var(--fren-marigold)] p-4 text-[var(--fren-blue)] shadow-[0_18px_28px_-14px_rgba(61,43,87,0.35)] sm:-right-6 sm:-top-7 sm:p-5">
              <IconHeadphones className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">NOW PLAYING</p>
            <h2 id="music-title" className="mt-2 font-[family-name:Georgia,Times,serif] text-3xl font-black tracking-tight text-white sm:text-4xl">
              Hot Girl Frennergy
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/95 sm:text-base">
              Add your favorites to the soundtrack before the first spritz gets poured.
            </p>

            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fren-button-secondary mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-bold transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--fren-coral)] sm:w-auto sm:min-w-[280px]"
            >
              🎧 Cue the Chaos
            </a>
          </div>
        </section>

        <section
          className="fren-stripe-band mt-6 rounded-full border border-[rgba(63,103,200,0.12)] px-4 py-3 shadow-[0_12px_22px_-18px_rgba(63,103,200,0.24)] sm:px-6"
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

        <section className="fren-section fren-section--blush mt-14 rounded-[2rem] p-6 sm:mt-16 sm:p-10" aria-labelledby="overview-title">
          <h2 id="overview-title" className="fren-title inline-flex items-center gap-2 text-2xl sm:text-3xl">
            <IconCocktail className="h-5 w-5 text-[var(--fren-coral)]" />
            Weekend Overview
          </h2>
          <p className="fren-kicker mt-2">old san juan, but make it very bridal</p>
          <p className="fren-copy mt-4 max-w-3xl text-base leading-8 sm:text-lg">
            Welcome to Chelsea&apos;s San Juan bachelorette weekend: rooftop dinners, Bacardi pours,
            poolside cabanas, and a lot of excellent stories in very cute outfits.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            {overviewPills.map((pill) => (
              <span key={pill} className="fren-chip rounded-full px-3 py-2">
                {pill}
              </span>
            ))}
          </div>
        </section>

        <section id="itinerary" className="mt-12 sm:mt-16" aria-labelledby="itinerary-title">
          <div className="fren-section fren-section--ivory rounded-[2rem] p-6 sm:p-10">
            <h2 id="itinerary-title" className="fren-title inline-flex items-center gap-2 text-2xl sm:text-3xl">
              <IconPalm className="h-5 w-5 text-[var(--fren-blue)]" />
              Day-by-Day Guide
            </h2>
            <p className="fren-kicker mt-2">from rooftop reset to cabana closeout</p>
            <p className="fren-copy mt-4 max-w-2xl text-sm leading-7 sm:text-base">
              Every day gets its own little mood, but the energy stays the same: polished,
              playful, and fully committed to a good time.
            </p>

            <div className="mt-6 space-y-6 sm:mt-8">
              {dayPlans.map((plan) => (
                <article
                  key={plan.day}
                  className={`rounded-[1.7rem] p-5 sm:p-6 ${plan.cardClass}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-5 border-b border-[rgba(63,103,200,0.1)] pb-5">
                    <div className="max-w-md">
                      <p className="fren-kicker">Weekend Theme</p>
                      <h3 className={`mt-2 font-[family-name:Georgia,Times,serif] text-3xl font-black tracking-tight sm:text-4xl ${plan.accentClass}`}>
                        {plan.theme}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fren-blue)]">
                        {plan.day}
                      </p>
                    </div>
                    <div className="max-w-md sm:text-right">
                      <p className="fren-copy text-sm font-semibold leading-7">{plan.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {plan.events.map((event) => (
                      <article
                        key={`${plan.day}-${event.time}-${event.label}`}
                        className="fren-card rounded-[1.3rem] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(63,103,200,0.08)] text-[var(--fren-blue)]">
                            {activityIconByType(event.type)}
                          </span>
                          <div>
                            <p className="fren-kicker text-[11px]">
                              {event.time}
                            </p>
                            <h4 className="mt-1 text-sm font-bold text-[var(--fren-ink)]">{event.label}</h4>
                            <p className="fren-copy mt-1 text-sm leading-6">{event.detail}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16" aria-labelledby="rules-title">
          <div className="fren-section fren-section--blue rounded-[2rem] p-6 sm:p-10">
            <h2 id="rules-title" className="fren-title inline-flex items-center gap-2 text-2xl sm:text-3xl">
              <IconSparkle className="h-5 w-5 text-[var(--fren-pink)]" />
              Weekend Rules
            </h2>
            <p className="fren-kicker mt-2">tiny policies for a very good weekend</p>
            <p className="fren-copy mt-4 max-w-2xl text-sm leading-7 sm:text-base">
              The rules are simple: be cute, stay hydrated enough, and commit to the bit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {weekendRules.map((rule, index) => (
                <p
                  key={rule}
                  className={`rounded-full border px-4 py-3 text-sm font-black uppercase tracking-[0.08em] shadow-[0_10px_18px_-14px_rgba(61,43,87,0.18)] transition duration-300 hover:-translate-y-1 sm:text-base ${ruleToneClasses[index % ruleToneClasses.length]}`}
                >
                  {rule}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="mt-12 sm:mt-16" aria-labelledby="trip-details-title">
          <div className="fren-section fren-section--blue rounded-[2rem] p-6 sm:p-10">
            <h2 id="trip-details-title" className="fren-title inline-flex items-center gap-2 text-2xl sm:text-3xl">
              <IconShell className="h-5 w-5 text-[var(--fren-coral)]" />
              Trip Details
            </h2>
            <p className="fren-kicker mt-2">the practical part, but prettier</p>
            <p className="fren-copy mt-4 max-w-2xl text-sm leading-7 sm:text-base">
              Everything you need to get in, get around, and keep up with the plan.
            </p>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {tripDetails.map((detail, index) => (
                <article
                  key={detail.label}
                  className={`rounded-[1.5rem] px-5 py-5 transition duration-300 hover:-translate-y-1 ${detailToneClasses[index % detailToneClasses.length]}`}
                >
                  <div className="fren-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                    {detail.label}
                  </div>
                  <p className="fren-copy mt-3 text-base leading-7">{detail.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16" aria-labelledby="extras-title">
          <div className="fren-section fren-section--ivory rounded-[2rem] p-6 sm:p-10">
            <h2 id="extras-title" className="fren-title inline-flex items-center gap-2 text-2xl sm:text-3xl">
              <IconWave className="h-5 w-5 text-[var(--fren-blue-soft)]" />
              Trip Extras
            </h2>
            <p className="fren-kicker mt-2">little prep notes before wheels up</p>
            <p className="fren-copy mt-4 max-w-2xl text-sm leading-7 sm:text-base">
              Packing notes, stay reminders, and the weather read so nobody shows up underdressed
              or overpacked.
            </p>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {tripExtras.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[1.5rem] px-5 py-5 transition duration-300 hover:-translate-y-1 ${extraToneClasses[index % extraToneClasses.length]}`}
                >
                  <div className="fren-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                    {item.subtitle}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[var(--fren-ink)]">{item.title}</h3>
                  <p className="fren-copy mt-2 text-sm leading-7">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-14 sm:mt-16" aria-labelledby="photos-title">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(63,103,200,0.16)] bg-[linear-gradient(140deg,var(--fren-blue),var(--fren-blue-soft)_55%,rgba(248,242,232,0.96))] px-6 py-9 shadow-[0_24px_44px_-24px_rgba(63,103,200,0.42)] sm:px-10 sm:py-11">
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 [background-image:repeating-linear-gradient(90deg,rgba(248,242,232,0.95)_0_10px,transparent_10px_20px)]" />
            <div className="relative rounded-[1.5rem] border border-white/75 bg-[rgba(248,242,232,0.94)] p-5 sm:p-7">
              <p className="fren-kicker">Camera Roll Chaos</p>
              <h2 id="photos-title" className="mt-2 inline-flex items-center gap-2 font-[family-name:Georgia,Times,serif] text-3xl font-black tracking-tight text-[var(--fren-ink)] sm:text-4xl">
                <IconCamera className="h-7 w-7 text-[var(--fren-coral)]" />
                Camera Roll Chaos
              </h2>
              <p className="fren-copy mt-3 max-w-2xl text-sm leading-7 sm:text-base">
                Drop the chaos, the glam, the tablescapes, and the blurry late-night evidence
                right here.
              </p>
              <a
                href="#photos"
                className="fren-button-warm mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-coral)] focus-visible:ring-offset-2"
              >
                Add Shared Album Link
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-14 sm:pt-16">
          <div className="fren-stripe-band mb-6 h-3 rounded-full border border-[rgba(63,103,200,0.1)]" />
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-[family-name:Georgia,Times,serif] text-2xl font-black tracking-tight text-[var(--fren-blue)]">
                Hot Girl Frennergy
              </p>
              <p className="fren-copy mt-2 text-sm">Made for Chelsea&apos;s San Juan weekend.</p>
            </div>
            <p className="fren-kicker">Old San Juan / May 2026 / Best dressed only</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
