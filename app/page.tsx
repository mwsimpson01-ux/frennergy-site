import type { Metadata } from "next";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A playful San Juan bachelorette weekend guide with timeline plans, details, and trip extras.",
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
  era: string;
  subtitle: string;
  cardClass: string;
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
    era: "Arrival Era",
    subtitle: "A cozy, low-key arrival night before the weekend fun begins.",
    cardClass: "bg-[#FFF4EA] border-[#F9DCE7]",
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
        detail: "Bags down, room picks, and time to settle in before the weekend begins.",
      },
      {
        time: "Evening",
        type: "activity",
        label: "Girls Gone Mild",
        detail: "Rooftop hangs, dinner ordered in, and a low-key night to relax before the fun starts.",
      },
      {
        time: "Night",
        type: "nightlife",
        label: "Chill night at the house",
        detail: "An easy, cozy night in to unwind, catch up, and get ready for the weekend ahead.",
      },
    ],
  },
  {
    day: "Saturday",
    era: "Main Character Day",
    subtitle: "Brunch, Bacardi, and a night out - the recipe for Pour Decisions.",
    cardClass: "bg-[#FFF4EA] border-[#F9DCE7]",
    events: [
      {
        time: "10:30 AM",
        type: "meal",
        label: "Brunch in Old San Juan",
        detail: "Start the day with brunch in Old San Juan before the fun officially begins.",
      },
      {
        time: "1:00 PM",
        type: "drinks",
        label: "Bacardi cocktail class",
        detail: "Head to Bacardi for a cocktail class, good drinks, and plenty of weekend energy.",
      },
      {
        time: "Afternoon",
        type: "drinks",
        label: "Ferry to Catano",
        detail: "Take the ferry from San Juan to Catano and keep the day rolling.",
      },
      {
        time: "Late afternoon",
        type: "activity",
        label: "Back to the house to get ready",
        detail: "Head back to the house to refresh, get dressed, and get ready for the night ahead.",
      },
      {
        time: "Evening",
        type: "reservation",
        label: "Dinner + bars",
        detail: "Dinner plans are still TBD, followed by bars and a fun night out.",
      },
    ],
  },
  {
    day: "Sunday",
    era: "Recovery Glow",
    subtitle: "Sun, swimsuits, and poolside energy all day long.",
    cardClass: "bg-[#FFF4EA] border-[#F9DCE7]",
    events: [
      {
        time: "11:00 AM",
        type: "activity",
        label: "Cabana + pool day",
        detail:
          "Meet at Condado Ocean Club, 1045 Ashford Ave, San Juan, Puerto Rico 00907, for a poolside cabana day in the sun.",
      },
      {
        time: "Midday",
        type: "meal",
        label: "Poolside lunch",
        detail:
          "Lunch will be ordered to the cabana so everyone can relax, snack, and stay by the pool.",
      },
      {
        time: "Late afternoon",
        type: "activity",
        label: "Back to the house to refresh",
        detail: "Head back to the house to reset, get ready, and transition into the evening.",
      },
      {
        time: "Evening",
        type: "reservation",
        label: "Dinner TBD",
        detail: "Evening plans to come, but expect something fun to close out the day.",
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
    <main className="bg-[#FFF4EA] text-[#3D2B57]">
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
        <section className="rounded-[2rem] border border-[#F9DCE7] bg-[#F9DCE7] px-6 pb-10 pt-8 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.35)] sm:px-10 sm:pb-12 sm:pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5C3F78]">
                bach mode
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B4A84]">
              Chelsea&apos;s Bachelorette Weekend
            </p>
            <h1 className="mt-3 font-[family-name:Georgia,Times,serif] text-6xl font-black leading-[0.9] tracking-tight text-[#4B2C66] sm:text-7xl lg:text-8xl">
              Hot Girl Frennergy
            </h1>
            <p className="mt-3 inline-flex rounded-full bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#5C3F78]">
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
                className="inline-flex items-center justify-center rounded-full border border-[#79D9D1]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#2B6970] shadow-[0_12px_22px_-14px_rgba(121,217,209,0.85)] transition duration-300 hover:-translate-y-1 hover:bg-[#EEFCFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79D9D1] focus-visible:ring-offset-2"
              >
                Trip Details
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[2rem] border border-[#FF4FA3]/20 bg-white p-3 shadow-[0_14px_28px_-20px_rgba(255,79,163,0.5)] sm:p-4" aria-label="Countdown card">
          <Countdown targetDate={tripStart} label="Countdown to San Juan" />
        </section>

        <section className="mt-6 sm:mt-8" aria-labelledby="music-title">
          <div className="relative rounded-[2rem] border border-[#FF4FA3]/45 bg-[#FF7A59] px-7 py-9 pr-24 shadow-[0_22px_34px_-20px_rgba(255,122,89,0.58)] sm:px-10 sm:py-10 sm:pr-32">
            <div className="pointer-events-none absolute -right-5 -top-6 rotate-[10deg] rounded-[1.7rem] border-4 border-white bg-[#FFD966] p-4 text-[#FF4FA3] shadow-[0_18px_28px_-14px_rgba(61,43,87,0.35)] sm:-right-6 sm:-top-7 sm:p-5">
              <IconHeadphones className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">NOW PLAYING</p>
            <h2 id="music-title" className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Hot Girl Frennergy
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/95 sm:text-base">
              Add your favorite songs to the weekend soundtrack.
            </p>

            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#FF4FA3] px-6 py-4 text-base font-bold text-white shadow-[0_18px_30px_-16px_rgba(61,43,87,0.48)] transition duration-300 hover:-translate-y-1 hover:bg-[#EA3793] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF7A59] sm:w-auto sm:min-w-[280px]"
            >
              🎧 Cue the Chaos
            </a>
          </div>
        </section>

        <section
          className="mt-5 rounded-full border border-[#FF4FA3]/25 bg-[#F9DCE7] px-4 py-3 shadow-[0_12px_22px_-18px_rgba(255,79,163,0.55)] sm:px-6"
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

        <section className="mt-14 rounded-[2rem] border border-white/85 bg-[#F9DCE7] p-6 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.28)] sm:mt-16 sm:p-10" aria-labelledby="overview-title">
          <h2 id="overview-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#43285F] sm:text-3xl">
            <IconCocktail className="h-5 w-5 text-[#FF7A59]" />
            Weekend Overview
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7B578F]">
            quick moodboard before the chaos starts
          </p>
          <p className="mt-4 text-base leading-8 text-[#5A406F] sm:text-lg">
            Welcome to Chelsea&apos;s San Juan bachelorette weekend - beach clubs, dinner glam,
            frozen drinks, late nights, and elite memory-making across Old San Juan.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4C3366]">
            {overviewPills.map((pill) => (
              <span key={pill} className="rounded-full bg-white/80 px-3 py-2">
                {pill}
              </span>
            ))}
          </div>
        </section>

        <section id="itinerary" className="mt-12 sm:mt-16" aria-labelledby="itinerary-title">
          <div className="rounded-[2rem] border border-white/85 bg-[#FFF4EA] p-6 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.28)] sm:p-10">
            <h2 id="itinerary-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#462A62] sm:text-3xl">
              <IconPalm className="h-5 w-5 text-[#79D9D1]" />
              Day-by-Day Guide
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7B578F]">
              itinerary flow by era
            </p>

            <div className="mt-6 space-y-6 sm:mt-8">
              {dayPlans.map((plan) => (
                <article
                  key={plan.day}
                  className={`rounded-[1.4rem] border p-5 shadow-[0_12px_24px_-18px_rgba(61,43,87,0.28)] sm:p-6 ${plan.cardClass}`}
                >
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF4FA3]">
                        {plan.era}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-[#3D2B57]">{plan.day}</h3>
                    </div>
                    <p className="text-sm font-semibold text-[#5B426F]">{plan.subtitle}</p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {plan.events.map((event) => (
                      <article
                        key={`${plan.day}-${event.time}-${event.label}`}
                        className="rounded-[1.2rem] border border-[#F9DCE7] bg-white p-4 shadow-[0_10px_20px_-16px_rgba(61,43,87,0.25)]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4EA] text-[#FF4FA3]">
                            {activityIconByType(event.type)}
                          </span>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7B578F]">
                              {event.time}
                            </p>
                            <h4 className="mt-1 text-sm font-bold text-[#402E59]">{event.label}</h4>
                            <p className="mt-1 text-sm leading-6 text-[#5A406F]">{event.detail}</p>
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
          <div className="rounded-[2rem] border border-white/85 bg-[#FFF4EA] p-6 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.28)] sm:p-10">
            <h2 id="rules-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#40275F] sm:text-3xl">
              <IconSparkle className="h-5 w-5 text-[#FF4FA3]" />
              Weekend Rules
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7B578F]">
              sticker commandments
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {weekendRules.map((rule) => (
                <p
                  key={rule}
                  className="rounded-full border border-[#FF4FA3]/25 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#553873] shadow-[0_10px_18px_-14px_rgba(61,43,87,0.25)] transition duration-300 hover:-translate-y-1 sm:text-base"
                >
                  {rule}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="mt-12 sm:mt-16" aria-labelledby="trip-details-title">
          <div className="rounded-[2rem] border border-white/85 bg-[#BFECE4]/35 p-6 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.28)] sm:p-10">
            <h2 id="trip-details-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#40275F] sm:text-3xl">
              <IconShell className="h-5 w-5 text-[#FF8A3D]" />
              Trip Details
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7B578F]">
              cute travel tiles
            </p>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {tripDetails.map((detail) => (
                <article
                  key={detail.label}
                  className="rounded-[1.4rem] border border-[#F9DCE7] bg-white px-5 py-5 shadow-[0_12px_22px_-16px_rgba(61,43,87,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_26px_-16px_rgba(61,43,87,0.28)]"
                >
                  <div className="inline-flex rounded-full bg-[#FFF4EA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A3168]">
                    {detail.label}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#563E71]">{detail.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16" aria-labelledby="extras-title">
          <div className="rounded-[2rem] border border-white/85 bg-[#F4EDFF] p-6 shadow-[0_20px_34px_-24px_rgba(61,43,87,0.28)] sm:p-10">
            <h2 id="extras-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#40275F] sm:text-3xl">
              <IconWave className="h-5 w-5 text-[#79D9D1]" />
              Trip Extras
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#67828A]">
              helpful links and prep
            </p>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {tripExtras.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.4rem] border border-[#F9DCE7] bg-white px-5 py-5 shadow-[0_12px_22px_-16px_rgba(61,43,87,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_26px_-16px_rgba(61,43,87,0.28)]"
                >
                  <div className="inline-flex rounded-full bg-[#FFF4EA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A3168]">
                    {item.subtitle}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#3F2A58]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5A406F]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-14 sm:mt-16" aria-labelledby="photos-title">
          <div className="rounded-[2rem] border border-[#FF7A59]/35 bg-[#FFA552] px-6 py-9 text-[#4A2E63] shadow-[0_22px_40px_-24px_rgba(255,122,89,0.5)] sm:px-10 sm:py-11">
            <div className="rounded-[1.4rem] border border-white/75 bg-[#FFF4EA] p-5 sm:p-7">
              <h2 id="photos-title" className="inline-flex items-center gap-2 text-3xl font-black tracking-tight sm:text-4xl">
                <IconCamera className="h-7 w-7 text-[#FF4FA3]" />
                Camera Roll Chaos
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5A3B74] sm:text-base">
                Drop the chaos, the glam, and the blurry late-night evidence here.
              </p>
              <a
                href="#photos"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#FF4FA3] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_-12px_rgba(255,79,163,0.75)] transition duration-300 hover:-translate-y-1 hover:bg-[#E93593] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4FA3] focus-visible:ring-offset-2"
              >
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
