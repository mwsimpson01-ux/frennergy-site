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
        <section className="fren-hero relative mt-1 overflow-hidden rounded-[2.1rem] px-4 pb-7 pt-6 sm:mt-0 sm:rounded-[2.5rem] sm:px-10 sm:pb-11 sm:pt-10">
          <div className="fren-hero-stripe absolute inset-x-0 top-0 h-3" />
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="order-1 max-w-[42rem] lg:pr-6">
              <p className="fren-kicker">Chelsea&apos;s Bachelorette Weekend</p>
              <div className="mt-2 flex flex-col items-center gap-1.5 sm:mt-4 sm:items-start sm:gap-2">
                <p className="inline-flex rounded-full border border-[var(--fren-blue)]/55 bg-[var(--fren-ivory)] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--fren-blue)] sm:px-4 sm:py-1 sm:text-sm sm:tracking-[0.16em]">
                  San Juan, Puerto Rico
                </p>
                <div className="flex items-center gap-3 sm:hidden">
                  <span className="h-px w-8 bg-[rgba(66,104,201,0.34)]" />
                  <p className="inline-flex rounded-full bg-[var(--fren-yellow)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--fren-blue)]">
                    May 22-24
                  </p>
                  <span className="h-px w-8 bg-[rgba(66,104,201,0.34)]" />
                </div>
              </div>

              <div className="relative mt-4 sm:mt-5">
                <h1 className="relative z-10">
                  <span className="sr-only">Hot Girl Frennergy</span>
                  <span className="relative block w-fit sm:w-fit">
                    <span className="mb-0.5 flex items-end justify-center gap-1.5 pl-0 sm:mb-2 sm:justify-start sm:gap-2.5 sm:pl-1">
                      <span className="-rotate-[6deg] rounded-[0.65rem] bg-[var(--fren-pink)] px-2.5 py-0.5 font-sans text-[1.7rem] font-black uppercase leading-none tracking-[0.11em] text-[var(--fren-ivory)] shadow-[0_8px_14px_-10px_rgba(225,59,134,0.8)] sm:rounded-[0.7rem] sm:px-4 sm:py-1.5 sm:text-[2.35rem]">
                        Hot
                      </span>
                      <span className="rotate-[3deg] rounded-[0.65rem] bg-[var(--fren-yellow)] px-2.5 py-0.5 font-sans text-[1.7rem] font-black uppercase leading-none tracking-[0.11em] text-[var(--fren-ivory)] shadow-[0_8px_14px_-10px_rgba(244,183,63,0.8)] sm:rounded-[0.7rem] sm:px-4 sm:py-1.5 sm:text-[2.35rem]">
                        Girl
                      </span>
                    </span>
                    <span className="pointer-events-none absolute -left-4 top-10 text-[var(--fren-yellow)] sm:-left-6 sm:top-12">
                      <IconSparkle className="h-5 w-5 sm:h-7 sm:w-7" />
                    </span>
                    <span className="pointer-events-none absolute -right-3 top-1 text-[var(--fren-yellow)] sm:-right-7 sm:top-4">
                      <IconSparkle className="h-4 w-4 sm:h-6 sm:w-6" />
                    </span>
                    <span className="relative block -rotate-[2deg] font-serif text-[3.9rem] font-semibold leading-[0.88] tracking-[-0.06em] text-[var(--fren-blue)] [text-shadow:0_2px_0_#f8f1e7,2px_0_0_#f8f1e7,-2px_0_0_#f8f1e7,0_-2px_0_#f8f1e7,0_7px_0_rgba(255,118,94,0.34)] sm:text-[6.65rem] lg:text-[7.2rem]">
                      Frennergy
                      <span className="absolute -bottom-1 left-[10%] h-1 w-[58%] rotate-[1deg] rounded-full bg-[rgba(225,59,134,0.82)] sm:-bottom-2 sm:h-1.5" />
                      <span className="absolute -bottom-4 right-[11%] h-1 w-[44%] -rotate-[3deg] rounded-full bg-[rgba(225,59,134,0.68)] sm:-bottom-6 sm:h-1.5" />
                    </span>
                    <span className="pointer-events-none absolute -right-2 -bottom-12 hidden text-[var(--fren-blue)] sm:block">
                      <svg viewBox="0 0 88 28" className="h-7 w-24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 8c5 0 5-6 10-6s5 6 10 6 5-6 10-6 5 6 10 6 5-6 10-6 5 6 10 6 5-6 10-6" />
                        <path d="M2 22c5 0 5-6 10-6s5 6 10 6 5-6 10-6 5 6 10 6 5-6 10-6 5 6 10 6 5-6 10-6" />
                      </svg>
                    </span>
                  </span>
                </h1>

                <div className="relative z-0 mt-2 mr-0 ml-auto w-[74%] max-w-[15.25rem] sm:hidden">
                  <div className="relative aspect-square overflow-hidden rounded-full border-2 border-[var(--fren-blue)] bg-[#f8d5de] shadow-[0_18px_28px_-16px_rgba(66,104,201,0.45)]">
                    <Image
                      src="/chelsea-hero-circle-v2.png"
                      alt="Chelsea in pink against a sparkly pink backdrop"
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
              </div>
              <p className="fren-copy mt-4 max-w-xl text-[1rem] leading-7 sm:mt-6 sm:max-w-2xl sm:text-[1.13rem] sm:leading-8">
                Sunshine, spritzes, rooftop dinners, poolside glam, and just the right amount of
                chaos.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                <a
                  href="#itinerary"
                  className="fren-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold uppercase tracking-[0.11em] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2 sm:px-7 sm:text-sm sm:tracking-[0.12em]"
                >
                  View Itinerary
                </a>
                <a
                  href="#details"
                  className="fren-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold uppercase tracking-[0.11em] transition duration-300 hover:-translate-y-1 hover:bg-[rgba(248,242,232,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fren-blue)] focus-visible:ring-offset-2 sm:text-sm sm:tracking-[0.12em]"
                >
                  Details
                </a>
              </div>
            </div>

            <aside className="order-2 mt-1 hidden lg:mt-0 lg:order-2 lg:block lg:pt-2">
              <div className="relative mx-auto max-w-[18.5rem] sm:max-w-[23rem] lg:ml-auto lg:max-w-[35rem]">
                <div className="absolute -left-1 top-2 z-20 rounded-full border border-[var(--fren-blue)] bg-[var(--fren-yellow)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--fren-blue)] shadow-[0_12px_20px_-14px_rgba(66,104,201,0.5)] sm:-left-2 sm:top-3 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.14em]">
                  Chelsea Edition
                </div>
                <div className="absolute -left-2 top-8 z-0 h-[78%] w-[92%] rounded-[2rem] bg-[rgba(255,118,94,0.2)] sm:-left-4 sm:top-9" />
                <div className="relative z-10 px-3 pb-3 pt-8 sm:px-6 sm:pb-6 sm:pt-10">
                  <div className="relative aspect-square overflow-hidden rounded-full border-2 border-[var(--fren-blue)] bg-[#f8d5de] shadow-[0_24px_35px_-16px_rgba(66,104,201,0.45)]">
                    <Image
                      src="/chelsea-hero-circle-v2.png"
                      alt="Chelsea in pink against a sparkly pink backdrop"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      priority
                    />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                    <span className="rounded-full bg-[var(--fren-ivory)]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)] shadow-[0_10px_16px_-14px_rgba(66,104,201,0.5)] sm:px-3 sm:text-[10px]">
                      San Juan Weekend
                    </span>
                    <span className="rounded-full bg-[var(--fren-yellow)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)] shadow-[0_10px_16px_-14px_rgba(66,104,201,0.5)] sm:px-3 sm:text-[10px]">
                      May 22-24
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 sm:mt-10">
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="h-full">
              <Countdown targetDate={tripStart} label="Countdown to San Juan" />
            </div>

            <section aria-labelledby="music-title" className="h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-[linear-gradient(150deg,#ffe2d9_0%,#ffd8eb_40%,#fff4ed_100%)] px-5 py-5 shadow-[0_26px_30px_-18px_rgba(225,59,134,0.45)] sm:rounded-[1.9rem] sm:px-8 sm:py-7">
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-7 rounded-full bg-[rgba(244,183,63,0.58)]" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fren-pink)]">
                    Now Playing
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[rgba(66,104,201,0.12)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fren-blue)]">
                    <IconSparkle className="h-3.5 w-3.5 text-[var(--fren-coral)]" />
                    Weekend Soundtrack
                  </div>
                  <h2 id="music-title" className="mt-2 font-serif text-[2.6rem] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--fren-ink)] sm:mt-3 sm:text-[3.45rem]">
                    Weekend Playlist
                  </h2>
                  <p className="fren-copy mt-3 max-w-[24rem] text-[1.04rem] leading-7 sm:mt-4 sm:text-[1.1rem] sm:leading-8">
                    Add your favorite songs to the playlist for glam time, spritz hour, and the
                    night-out pregame.
                  </p>
                </div>
                <div className="relative z-10 mt-auto pt-5 sm:pt-6">
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

        <section id="itinerary" className="mt-11 sm:mt-14" aria-labelledby="itinerary-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="fren-kicker text-[var(--fren-pink)]">Weekend Lineup</p>
              <h2 id="itinerary-title" className="mt-1.5 font-serif text-[2.7rem] font-semibold tracking-[-0.045em] text-[var(--fren-ink)] sm:mt-2 sm:text-[4rem]">
                Agenda
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-6 lg:grid-cols-3">
            {[fridayPlan, saturdayPlan, sundayPlan].map((plan, planIndex) => (
              <article
                key={plan.day}
                className={`relative overflow-hidden rounded-[1.45rem] px-4 py-5 shadow-[0_16px_24px_-20px_rgba(66,104,201,0.26)] sm:rounded-[1.7rem] sm:px-7 sm:py-7 ${
                  planIndex === 0
                    ? "bg-[rgba(255,118,94,0.11)]"
                    : planIndex === 1
                      ? "bg-[rgba(225,59,134,0.08)]"
                      : "bg-[rgba(145,182,232,0.22)]"
                }`}
              >
                <div
                  className={`-mx-4 -mt-5 mb-4 h-1 rounded-full sm:-mx-7 sm:-mt-7 ${
                    planIndex === 0
                      ? "bg-[linear-gradient(90deg,var(--fren-coral),var(--fren-pink))]"
                      : planIndex === 1
                        ? "bg-[linear-gradient(90deg,var(--fren-pink),var(--fren-coral))]"
                        : "bg-[linear-gradient(90deg,var(--fren-blue-soft),var(--fren-yellow))]"
                  }`}
                />
                <p className="inline-flex w-fit rounded-full bg-[rgba(66,104,201,0.12)] px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--fren-blue)] sm:text-[0.72rem]">
                  {plan.day}
                </p>
                <h3
                  className={`mt-2 font-serif text-[1.9rem] font-semibold tracking-[-0.045em] sm:text-[2.5rem] ${
                    planIndex === 0
                      ? "text-[color:rgba(66,104,201,0.98)]"
                      : planIndex === 1
                        ? "text-[color:rgba(58,96,194,0.98)]"
                        : "text-[color:rgba(59,97,194,0.95)]"
                  }`}
                >
                  {plan.theme}
                </h3>
                <p className="fren-copy mt-2 text-sm leading-6 sm:text-[0.98rem] sm:leading-7">
                  {plan.blurb}
                </p>
                <div className="mt-4 divide-y divide-[rgba(66,104,201,0.16)] rounded-[1rem] bg-[rgba(248,241,231,0.78)] px-3 sm:mt-6 sm:px-4">
                  {plan.events.map((event) => (
                    <article
                      key={`${plan.day}-${event.time}`}
                      className="grid gap-1 py-3 first:pt-3.5 last:pb-3.5 sm:grid-cols-[112px_1fr] sm:items-center sm:gap-3 sm:py-3.5"
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
          <div className="rounded-[1.6rem] border border-[rgba(66,104,201,0.3)] bg-[rgba(248,241,231,0.92)] px-4 py-6 shadow-[0_18px_24px_-22px_rgba(66,104,201,0.3)] sm:rounded-[1.9rem] sm:px-8 sm:py-9">
            <p className="fren-kicker">Trip Details</p>
            <h2 className="mt-2 font-serif text-[2.45rem] font-semibold tracking-[-0.04em] text-[var(--fren-ink)] sm:mt-4 sm:text-[3.7rem]">
              Trip Details
            </h2>
            <p className="fren-copy mt-3 max-w-lg text-base leading-7 sm:mt-5 sm:text-base">
              The essentials: where we&apos;re staying, how we&apos;re getting around, and what to
              know before the first spritz.
            </p>
            <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {tripDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-1.5 rounded-[0.9rem] border border-[rgba(66,104,201,0.2)] bg-[rgba(255,255,255,0.62)] px-3 py-3 sm:grid-cols-[150px_1fr] sm:items-center sm:px-4"
                >
                  <p className="fren-meta flex items-center gap-2 text-[var(--fren-blue)]">
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
                  San Juan, Puerto Rico. May 22 to May 24.
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
