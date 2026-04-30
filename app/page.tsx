import type { Metadata } from "next";
import Image from "next/image";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A chic San Juan bachelorette weekend guide with itinerary plans, travel details, and rooftop-to-cabana energy.",
};

const tripStart = "2026-05-22T00:00:00-04:00";

const playlistUrl =
  "https://open.spotify.com/playlist/4OkCaycgBtBoghf9mWo5l9?si=fk42PKmhTMGDFJiw511DAQ&pi=YHW-SyMdTW6LR&pt=d7eaf428e509d5b69b308b0fa851b88b";

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
        time: "7:30 PM",
        label: "Dinner at La O",
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
      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
        <section className="fren-hero relative overflow-hidden rounded-[2.4rem] px-6 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
          <div className="fren-hero-stripe absolute inset-x-0 top-0 h-3" />
          <div className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="order-2 max-w-[42rem] lg:order-1 lg:pr-6">
              <p className="fren-kicker">Chelsea&apos;s Bachelorette Weekend</p>
              <p className="mt-5 inline-flex rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-4 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--fren-blue)]">
                San Juan, Puerto Rico
              </p>
              <h1 className="mt-5 max-w-[10ch] font-serif text-[4rem] font-semibold leading-[0.84] tracking-[-0.055em] text-[var(--fren-ink)] sm:text-[5.2rem] lg:text-[6.1rem]">
                Hot Girl
                <br />
                Frennergy
              </h1>
              <p className="fren-copy mt-6 max-w-2xl text-[1.02rem] leading-8 sm:text-[1.18rem]">
                A San Juan weekend for Chelsea — rooftop dinners, pool days, spritzes, and one
                very well-dressed itinerary.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <aside className="order-1 lg:order-2 lg:pt-2">
              <div className="relative mx-auto max-w-[30rem] lg:ml-auto">
                <div className="absolute -left-4 -top-4 z-20 rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-yellow)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)] shadow-[0_14px_20px_-12px_rgba(66,104,201,0.5)]">
                  Chelsea Edition
                </div>
                <div className="absolute -right-1 top-12 z-0 h-full w-full rounded-[2.1rem] bg-[var(--fren-coral)]" />
                <div className="absolute -right-3 -bottom-2 z-0 h-full w-full rounded-[2.1rem] border-2 border-dashed border-[var(--fren-blue)] bg-[var(--fren-pink)]" />
                <div className="relative z-10 overflow-hidden rounded-[2.1rem] border-4 border-[var(--fren-blue)] bg-[var(--fren-ivory)] p-2 shadow-[0_30px_36px_-18px_rgba(66,104,201,0.5)]">
                  <div className="fren-tile-band mb-2 h-3 rounded-full" />
                  <div className="relative aspect-square overflow-hidden rounded-[1.2rem] border-2 border-[var(--fren-blue)] bg-[#f8d5de] p-1">
                    <div className="relative h-full w-full overflow-hidden rounded-full border border-[var(--fren-blue)] bg-[var(--fren-ivory)]">
                      <Image
                        src="/chelsea-hero-circle-v2.png"
                        alt="Chelsea in pink against a sparkly pink backdrop"
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        priority
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)]">
                      San Juan Weekend
                    </span>
                    <span className="rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-yellow)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)]">
                      May 22-24
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8">
          <Countdown targetDate={tripStart} label="Countdown to San Juan" />
        </section>

        <section className="mt-5" aria-labelledby="music-title">
          <div className="relative overflow-hidden rounded-[1.8rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-7 py-8 shadow-[0_24px_30px_-18px_rgba(225,59,134,0.45)] sm:px-9 sm:py-9">
            <div className="fren-tile-band absolute inset-x-0 top-0 h-3" />
            <div className="pointer-events-none absolute right-7 top-7 text-[rgba(255,123,94,0.9)]">
              <IconHeadphones className="h-16 w-16 rotate-[8deg]" />
            </div>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fren-pink)]">
                Now Playing
              </p>
              <h2 id="music-title" className="mt-3 font-serif text-[3.15rem] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[3.5rem]">
                Weekend Playlist
              </h2>
              <p className="fren-copy mt-4 max-w-2xl text-lg leading-8">
                Add your favorites for the pregame, the ferry, and every getting-ready moment.
              </p>
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fren-button-warm mt-7 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-coral)] focus-visible:ring-offset-2"
              >
                Cue the Playlist
              </a>
            </div>
          </div>
        </section>

        <section id="itinerary" className="mt-12 sm:mt-14" aria-labelledby="itinerary-title">
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
                className={`fren-section relative overflow-hidden border-2 px-4 py-5 sm:px-6 sm:py-7 ${
                  planIndex === 0
                    ? "fren-section--warm"
                    : planIndex === 1
                      ? "fren-section--blush"
                      : "fren-section--blue"
                }`}
              >
                <div
                  className={`-mx-4 -mt-5 mb-4 h-2 rounded-t-[1.2rem] sm:-mx-6 sm:-mt-7 ${
                    planIndex === 0
                      ? "bg-[linear-gradient(90deg,var(--fren-coral),var(--fren-pink))]"
                      : planIndex === 1
                        ? "bg-[linear-gradient(90deg,var(--fren-pink),var(--fren-coral))]"
                        : "bg-[linear-gradient(90deg,var(--fren-blue-soft),var(--fren-yellow))]"
                  }`}
                />
                <p className="fren-kicker">{plan.day}</p>
                <h3 className="mt-2 font-serif text-[1.9rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[2.3rem]">
                  {plan.theme}
                </h3>
                <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-2.5">
                  {plan.events.map((event) => (
                    <article
                      key={`${plan.day}-${event.time}`}
                      className="grid gap-1.5 rounded-[0.95rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-3.5 py-3 sm:grid-cols-[118px_1fr] sm:items-center sm:gap-2 sm:px-4 sm:py-3.5"
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

        <section id="details" className="mt-16">
          <div className="fren-section fren-section--ivory border-2 px-6 py-8 sm:px-8">
            <div className="fren-tile-band mb-5 h-2 rounded-full" />
            <p className="fren-kicker">Trip Details</p>
            <h2 className="mt-4 font-serif text-[2.9rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:text-[3.7rem]">
              Trip Details
            </h2>
            <p className="fren-copy mt-5 max-w-lg text-sm leading-7 sm:text-base">
              The essentials: where we&apos;re staying, how we&apos;re getting around, and what to
              know before the first spritz.
            </p>
            <div className="mt-5 space-y-2.5">
              {tripDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-2 rounded-[0.95rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-4 py-2.5 sm:grid-cols-[150px_1fr] sm:items-center"
                >
                  <p className="fren-meta flex items-center gap-2 text-[var(--fren-pink)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--fren-coral)]" />
                    {detail.label}
                  </p>
                  <p className="fren-copy text-sm leading-7 sm:text-base">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-14 pb-4">
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
