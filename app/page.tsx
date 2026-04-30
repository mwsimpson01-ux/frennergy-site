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
  blurb: string;
  events: Array<{
    time: string;
    label: string;
  }>;
};

const dayPlans: DayPlan[] = [
  {
    day: "Friday",
    theme: "Girls Gone Mild",
    blurb: "Arrival day energy: cute PJs, reset mode, and a fun night in before the chaos.",
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
    blurb: "Big night loading: brunch, Bacardi cocktails, glam reset, dinner at La O, then out on the town.",
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
    blurb: "Cabana-core Sunday: poolside sun, lunch, refresh, and rooftop dinner to close it out.",
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

function IconSparkle({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M5 4 5.8 6.2 8 7l-2.2.8L5 10 4.2 7.8 2 7l2.2-.8L5 4Z" />
    </svg>
  );
}

export default function FrennergyPage() {
  const [fridayPlan, saturdayPlan, sundayPlan] = dayPlans;

  return (
    <main className="fren-page font-sans">
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
        <section className="fren-hero relative mt-1 overflow-hidden rounded-[2.1rem] px-4 pb-6 pt-5 sm:mt-0 sm:rounded-[2.4rem] sm:px-10 sm:pb-10 sm:pt-9">
          <div className="fren-hero-stripe absolute inset-x-0 top-0 h-3" />
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="order-1 max-w-[42rem] lg:order-1 lg:pr-6">
              <p className="fren-kicker">Chelsea&apos;s Bachelorette Weekend</p>
              <p className="mt-3 inline-flex rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-3.5 py-1 text-[13px] font-semibold uppercase tracking-[0.13em] text-[var(--fren-blue)] sm:mt-5 sm:px-4 sm:text-sm sm:tracking-[0.16em]">
                San Juan, Puerto Rico
              </p>
              <h1 className="mt-3 max-w-[9.5ch] font-serif text-[3.35rem] font-semibold leading-[0.86] tracking-[-0.05em] text-[var(--fren-ink)] sm:mt-5 sm:max-w-[10ch] sm:text-[5.2rem] lg:text-[6.1rem]">
                Hot Girl
                <br />
                Frennergy
              </h1>
              <p className="fren-copy mt-4 max-w-xl text-[1rem] leading-7 sm:mt-6 sm:max-w-2xl sm:text-[1.18rem] sm:leading-8">
                Chelsea&apos;s San Juan weekend: rooftop dinners, poolside glam, spritzes, and
                nonstop main-character energy.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                <a
                  href="#itinerary"
                  className="fren-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold uppercase tracking-[0.11em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2 sm:text-sm sm:tracking-[0.12em]"
                >
                  View Itinerary
                </a>
                <a
                  href="#details"
                  className="fren-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold uppercase tracking-[0.11em] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(248,242,232,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2 sm:text-sm sm:tracking-[0.12em]"
                >
                  Trip Details
                </a>
              </div>
            </div>

            <aside className="order-2 lg:order-2 lg:pt-2">
              <div className="relative mx-auto max-w-[26.5rem] lg:ml-auto lg:max-w-[30rem]">
                <div className="absolute -left-2 -top-3 z-20 rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-yellow)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--fren-blue)] shadow-[0_14px_20px_-12px_rgba(66,104,201,0.5)] sm:-left-4 sm:-top-4 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.14em]">
                  Chelsea Edition
                </div>
                <div className="absolute -right-0.5 top-6 z-0 h-full w-full rounded-[1.7rem] bg-[var(--fren-coral)] sm:top-12 sm:rounded-[2.1rem]" />
                <div className="absolute -right-1 -bottom-0.5 z-0 h-full w-full rounded-[1.7rem] border-2 border-dashed border-[var(--fren-blue)] bg-[var(--fren-pink)] sm:-right-3 sm:-bottom-2 sm:rounded-[2.1rem]" />
                <div className="relative z-10 overflow-hidden rounded-[1.7rem] border-4 border-[var(--fren-blue)] bg-[var(--fren-ivory)] p-1.5 shadow-[0_30px_36px_-18px_rgba(66,104,201,0.5)] sm:rounded-[2.1rem] sm:p-2">
                  <div className="fren-tile-band mb-2 h-3 rounded-full" />
                  <div className="relative aspect-square overflow-hidden rounded-[1rem] border-2 border-[var(--fren-blue)] bg-[#f8d5de] p-1 sm:rounded-[1.2rem]">
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
                  <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                    <span className="rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--fren-blue)] sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
                      San Juan Weekend
                    </span>
                    <span className="rounded-full border-2 border-[var(--fren-blue)] bg-[var(--fren-yellow)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--fren-blue)] sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
                      May 22-24
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="h-full">
              <Countdown targetDate={tripStart} label="Countdown to San Juan" />
            </div>

            <section aria-labelledby="music-title" className="h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-5 py-5 shadow-[0_24px_30px_-18px_rgba(225,59,134,0.45)] sm:rounded-[1.8rem] sm:px-8 sm:py-8">
                <div className="fren-tile-band absolute inset-x-0 top-0 h-3" />
                <div className="absolute -right-2 -top-2 z-0 h-full w-full rounded-[1.5rem] border-2 border-dashed border-[var(--fren-pink)] bg-[rgba(225,59,134,0.08)] sm:rounded-[1.8rem]" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fren-pink)]">
                    Now Playing
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-[var(--fren-blue)] bg-[rgba(244,183,63,0.2)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)]">
                    <IconSparkle className="h-3.5 w-3.5 text-[var(--fren-coral)]" />
                    Weekend Soundtrack
                  </div>
                  <h2 id="music-title" className="mt-2 font-serif text-[2.55rem] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--fren-ink)] sm:mt-3 sm:text-[3.2rem]">
                    Weekend Playlist
                  </h2>
                  <p className="fren-copy mt-3 max-w-[24rem] text-[1.03rem] leading-7 sm:mt-4 sm:text-[1.1rem] sm:leading-8">
                    Queue the songs for glam, spritz hour, and the night-out pregame.
                  </p>
                </div>
                <div className="mt-auto pt-5 sm:pt-6">
                  <a
                    href={playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fren-button-warm inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[1.05rem] font-semibold uppercase tracking-[0.11em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-coral)] focus-visible:ring-offset-2 sm:px-8 sm:py-4 sm:text-base sm:tracking-[0.12em]"
                  >
                    Cue the Playlist
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="itinerary" className="mt-8 sm:mt-12" aria-labelledby="itinerary-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="itinerary-title" className="mt-2 font-serif text-[2.45rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:mt-3 sm:text-[3.7rem]">
                Weekend Plans
              </h2>
            </div>
            <p className="fren-copy max-w-md text-base leading-7 sm:text-base sm:text-right">
              Three days, three moods, one very cute agenda.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
            {[fridayPlan, saturdayPlan, sundayPlan].map((plan, planIndex) => (
              <article
                key={plan.day}
                className={`fren-section relative overflow-hidden border-2 px-3.5 py-4 sm:px-6 sm:py-7 ${
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
                <h3 className="mt-1.5 font-serif text-[1.75rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:mt-2 sm:text-[2.3rem]">
                  {plan.theme}
                </h3>
                <p className="fren-copy mt-2 text-sm leading-6 sm:text-[0.98rem] sm:leading-7">
                  {plan.blurb}
                </p>
                <div className="mt-3 space-y-1.5 sm:mt-6 sm:space-y-2.5">
                  {plan.events.map((event) => (
                    <article
                      key={`${plan.day}-${event.time}`}
                      className="grid gap-1 rounded-[0.9rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-3 py-2.5 sm:grid-cols-[118px_1fr] sm:items-center sm:gap-2 sm:px-4 sm:py-3.5"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--fren-blue)] sm:text-[11px] sm:tracking-[0.16em]">
                        {event.time}
                      </p>
                      <h4 className="text-[0.92rem] font-semibold leading-6 text-[var(--fren-ink)] sm:text-base">
                        {event.label}
                      </h4>
                    </article>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="details" className="mt-12 sm:mt-16">
          <div className="fren-section fren-section--ivory border-2 px-4 py-6 sm:px-8 sm:py-8">
            <div className="fren-tile-band mb-4 h-2 rounded-full sm:mb-5" />
            <p className="fren-kicker">Trip Details</p>
            <h2 className="mt-2 font-serif text-[2.45rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:mt-4 sm:text-[3.7rem]">
              Trip Details
            </h2>
            <p className="fren-copy mt-3 max-w-lg text-base leading-7 sm:mt-5 sm:text-base">
              The essentials: where we&apos;re staying, how we&apos;re getting around, and what to
              know before the first spritz.
            </p>
            <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
              {tripDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-1.5 rounded-[0.9rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-ivory)] px-3 py-2.5 sm:grid-cols-[150px_1fr] sm:items-center sm:px-4"
                >
                  <p className="fren-meta flex items-center gap-2 text-[var(--fren-pink)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--fren-coral)]" />
                    {detail.label}
                  </p>
                  <p className="fren-copy text-[1.02rem] leading-7 sm:text-base">{detail.value}</p>
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
