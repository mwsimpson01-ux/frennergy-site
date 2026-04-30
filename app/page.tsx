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

type DayPlan = {
  day: "Friday" | "Saturday" | "Sunday";
  theme: string;
  events: Array<{
    time: string;
    label: string;
  }>;
};

const dayPlans: DayPlan[] = [
  {
    day: "Friday",
    theme: "Girls Gone Mild",
    events: [
      {
        time: "Afternoon",
        label: "Everyone arrives",
      },
      {
        time: "4:00 PM",
        label: "Check-in at the house",
      },
      {
        time: "Evening",
        label: "Rooftop + dinner in",
      },
    ],
  },
  {
    day: "Saturday",
    theme: "Pour Decisions",
    events: [
      {
        time: "10:30 AM",
        label: "Brunch in Old San Juan",
      },
      {
        time: "1:00 PM",
        label: "Bacardi cocktail class",
      },
      {
        time: "Late Afternoon",
        label: "Back to the house to get ready",
      },
      {
        time: "Evening",
        label: "Dinner",
      },
      {
        time: "Night",
        label: "Night out on the town",
      },
    ],
  },
  {
    day: "Sunday",
    theme: "Tropic Like It's Hot",
    events: [
      {
        time: "11:00 AM",
        label: "Cabana + pool day",
      },
      {
        time: "Midday",
        label: "Poolside lunch",
      },
      {
        time: "Late Afternoon",
        label: "Back to the house to refresh",
      },
      {
        time: "7:00 PM",
        label: "Dinner at Atelier Rooftop Terrace",
      },
    ],
  },
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
] as const;

type IconProps = {
  className?: string;
};

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

export default function FrennergyPage() {
  const [fridayPlan, saturdayPlan, sundayPlan] = dayPlans;

  return (
    <main className="fren-page font-sans">
      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-8 sm:pb-32 sm:pt-10">
        <section className="fren-hero relative overflow-hidden rounded-[2.4rem] px-6 pb-9 pt-8 sm:px-10 sm:pb-12 sm:pt-10">
          <div className="fren-hero-stripe absolute inset-x-0 top-0 h-3 opacity-80" />
          <div className="grid gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:items-end">
            <div className="max-w-[42rem] lg:pr-8">
              <div className="relative overflow-hidden border border-[rgba(63,103,200,0.18)] bg-[linear-gradient(140deg,rgba(248,242,232,0.98),rgba(143,179,231,0.16))] px-6 py-8 shadow-[0_18px_32px_-22px_rgba(63,103,200,0.28)] sm:px-7">
                <div className="pointer-events-none absolute -right-5 -top-4 text-[rgba(63,103,200,0.3)]">
                  <IconCamera className="h-16 w-16 rotate-[8deg]" />
                </div>
                <p className="fren-kicker">Chelsea photo moment</p>
                <p className="mt-3 font-serif text-[2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[var(--fren-blue)] sm:text-[2.3rem]">
                  Photo coming soon
                </p>
              </div>
              <p className="fren-kicker">Chelsea&apos;s Bachelorette Weekend</p>
              <p className="mt-6 inline-flex rounded-full border border-[rgba(63,103,200,0.16)] bg-[rgba(248,242,232,0.94)] px-4 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fren-blue)]">
                San Juan, Puerto Rico
              </p>
              <h1 className="mt-6 max-w-[10ch] font-serif text-[4.25rem] font-semibold leading-[0.84] tracking-[-0.055em] text-[var(--fren-ink)] sm:text-[5.3rem] lg:text-[6.35rem]">
                Hot Girl
                <br />
                Frennergy
              </h1>
              <p className="fren-copy mt-6 max-w-2xl text-[1.02rem] leading-8 sm:text-[1.18rem]">
                A San Juan weekend for Chelsea - rooftop dinners, pool days, spritzes, and one
                very well-dressed itinerary.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#itinerary"
                  className="fren-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2"
                >
                  View Itinerary
                </a>
                <a
                  href="#details"
                  className="fren-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(248,242,232,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2"
                >
                  Trip Details
                </a>
              </div>
            </div>

            <aside className="grid gap-5 border-t border-[var(--fren-line)] pt-5 lg:mb-2 lg:border-t-0 lg:pt-0">
              <div className="border-b border-[var(--fren-line)] pb-4 lg:pb-5">
                <p className="fren-kicker">San Juan, Puerto Rico</p>
                <p className="mt-4 max-w-sm font-serif text-[1.95rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--fren-blue)]">
                  Rooftop dinners, pool hangs, and Old San Juan nights.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="border-t border-[rgba(255,123,94,0.26)] pt-4">
                  <p className="fren-meta">Stay</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    Old San Juan house, rooftop included.
                  </p>
                </div>
                <div className="border-t border-[rgba(63,103,200,0.24)] pt-4">
                  <p className="fren-meta">Mood</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    Celebratory, polished, and very cute.
                  </p>
                </div>
                <div className="border-t border-[rgba(226,61,138,0.24)] pt-4">
                  <p className="fren-meta">Weekend Notes</p>
                  <p className="fren-copy mt-3 max-w-xs text-sm leading-7">
                    Pack the outfits, save the photos, and be ready for a very cute weekend.
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
            <div className="relative flex h-full min-h-[100%] flex-col overflow-hidden border border-[rgba(255,123,94,0.2)] bg-[linear-gradient(180deg,rgba(248,242,232,0.98),rgba(255,123,94,0.08))] px-7 py-8 shadow-[0_22px_34px_-22px_rgba(63,103,200,0.16)]">
              <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,rgba(255,123,94,0.84),rgba(243,181,61,0.46))]" />
              <div className="pointer-events-none absolute right-6 top-6 text-[rgba(255,123,94,0.7)]">
                <IconHeadphones className="h-14 w-14 rotate-[8deg]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fren-coral)]">
                Now Playing
              </p>
              <h2 id="music-title" className="mt-4 max-w-xs font-serif text-[2.35rem] font-semibold leading-[0.94] tracking-[-0.04em] text-[var(--fren-ink)]">
                Weekend Playlist
              </h2>
              <p className="fren-copy mt-4 max-w-sm text-sm leading-7">
                Add your favorites for the pregame, the ferry, and every getting-ready moment.
              </p>
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fren-button-warm mt-8 inline-flex items-center justify-center self-start rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-coral)] focus-visible:ring-offset-2"
              >
                Cue the Playlist
              </a>
            </div>
          </section>
        </section>

        <section
          className="fren-stripe-band mt-6 rounded-full border border-[rgba(63,103,200,0.12)] px-4 py-2.5 shadow-[0_12px_22px_-20px_rgba(63,103,200,0.16)] sm:px-6"
          aria-label="Weekend vibe strip"
        >
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fren-blue)] sm:text-xs">
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
            <h2 id="overview-title" className="mt-4 font-serif text-[2.9rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[3.7rem]">
              San Juan,
              <br />
              dressed up.
            </h2>
            <p className="fren-copy mt-5 max-w-md text-base leading-8 sm:text-[1.05rem]">
              Three days of rooftop hangs, Old San Juan dinners, pool time, and celebrating
              Chelsea.
            </p>
          </div>
          <div className="fren-section fren-section--blush grid gap-6 px-6 py-8 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:items-start">
              <p className="fren-copy max-w-xl text-base leading-8">
                A San Juan weekend for Chelsea - rooftop dinners, pool days, spritzes, and one
                very well-dressed itinerary.
              </p>
              <div className="border-l border-[var(--fren-line)] pl-4 sm:pl-5">
                <p className="fren-kicker">Weekend Notes</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-[var(--fren-copy)]">
                  Pack the outfits, save the photos, and be ready for a very cute weekend.
                </p>
              </div>
            </div>
            <div className="fren-editorial-rule pt-5">
              <div className="flex flex-wrap gap-2.5 text-[11px] font-semibold uppercase tracking-[0.13em] sm:text-xs">
                {overviewPills.map((pill, index) => (
                  <span
                    key={pill}
                    className={`rounded-full px-3 py-1.5 ${
                      index % 2 === 0
                        ? "border border-[rgba(63,103,200,0.16)] bg-[rgba(248,242,232,0.98)] text-[var(--fren-blue)]"
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
              <h2 id="itinerary-title" className="mt-3 font-serif text-[2.9rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[3.7rem]">
                Day-by-Day Guide
              </h2>
            </div>
            <p className="fren-copy max-w-md text-sm leading-7 sm:text-base sm:text-right">
              Three days, three moods, one very cute agenda.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3">
            {[fridayPlan, saturdayPlan, sundayPlan].map((plan, planIndex) => (
              <article
                key={plan.day}
                className={`fren-section px-4 py-5 sm:px-6 sm:py-7 ${
                  planIndex === 0
                    ? "fren-section--warm"
                    : planIndex === 1
                      ? "fren-section--blush"
                      : "fren-section--blue"
                }`}
              >
                <p className="fren-kicker">{plan.day}</p>
                <h3 className="mt-2 font-serif text-[1.9rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[2.3rem]">
                  {plan.theme}
                </h3>
                <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-2.5">
                  {plan.events.map((event) => (
                    <article
                      key={`${plan.day}-${event.time}`}
                      className="grid gap-1.5 border border-[rgba(63,103,200,0.15)] bg-[rgba(248,242,232,0.95)] px-3.5 py-3 sm:grid-cols-[118px_1fr] sm:items-center sm:gap-2 sm:px-4 sm:py-3.5"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--fren-blue)] sm:text-[11px] sm:tracking-[0.16em]">
                        {event.time}
                      </p>
                      <h4 className="text-[0.95rem] font-semibold leading-6 text-[var(--fren-ink)] sm:text-base">
                        {event.label}
                      </h4>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="details" className="mt-18">
          <div className="fren-section fren-section--ivory px-6 py-8 sm:px-8">
            <p className="fren-kicker">Trip Details</p>
            <h2 className="mt-4 font-serif text-[2.9rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[3.7rem]">
              Trip Details
            </h2>
            <p className="fren-copy mt-5 max-w-lg text-sm leading-7 sm:text-base">
              The essentials: where we&apos;re staying, how we&apos;re getting around, and what to
              know before the first spritz.
            </p>
            <div className="mt-8 space-y-5">
              {tripDetails.map((detail) => (
                <div key={detail.label} className="grid gap-2 border-t border-[var(--fren-line)] pt-5 sm:grid-cols-[150px_1fr]">
                  <p className="fren-meta">{detail.label}</p>
                  <p className="fren-copy text-sm leading-7 sm:text-base">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-20" aria-labelledby="photos-title">
          <div className="relative overflow-hidden border border-[rgba(63,103,200,0.18)] bg-[linear-gradient(135deg,rgba(63,103,200,0.94),rgba(63,103,200,0.88))] px-6 py-11 shadow-[0_26px_46px_-26px_rgba(63,103,200,0.24)] sm:px-10 sm:py-14">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(248,242,232,0.82)]">
                  Shared Album
                </p>
                <h2 id="photos-title" className="mt-4 max-w-sm font-serif text-[3.1rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--fren-ivory)] sm:text-[3.95rem]">
                  Shared Album
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-[rgba(248,242,232,0.9)] sm:text-base">
                  Drop the good photos here - glam shots, pool pics, dinner moments, and the ones
                  we&apos;ll laugh about later.
                </p>
              </div>
              <div className="relative border border-[rgba(248,242,232,0.22)] bg-[rgba(248,242,232,0.98)] px-7 py-8 lg:ml-auto lg:max-w-xl">
                <p className="fren-kicker">Shared Album</p>
                <p className="mt-4 font-serif text-3xl font-semibold tracking-[-0.04em] text-[var(--fren-ink)]">
                  Add your best shots.
                </p>
                <p className="fren-copy mt-4 max-w-sm text-sm leading-7">
                  Drop the good photos here - glam shots, pool pics, dinner moments, and the ones
                  we&apos;ll laugh about later.
                </p>
                <a
                  href="#photos"
                  className="fren-button-warm mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-coral)] focus-visible:ring-offset-2"
                >
                  Add Album Link
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
