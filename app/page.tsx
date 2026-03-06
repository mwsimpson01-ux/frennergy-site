import type { Metadata } from "next";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A tropical, editorial weekend guide for Chelsea's San Juan bachelorette trip.",
};

const tripStart = "2026-08-14T15:00:00-04:00";

const itinerary = [
  {
    day: "Friday",
    highlights: [
      "Arrivals & check-in",
      "Welcome drinks",
      "Dinner in Old San Juan",
      "Night out",
    ],
  },
  {
    day: "Saturday",
    highlights: [
      "Beach / pool day",
      "Cocktails",
      "Sunset photos",
      "Dinner + going out",
    ],
  },
  {
    day: "Sunday",
    highlights: ["Brunch", "Pool hang", "Departures"],
  },
];

const dressThemes = [
  {
    event: "Friday Night",
    theme: "Hot Pink",
    swatch: "bg-[#FF2E8B]",
    text: "text-white",
  },
  {
    event: "Saturday Day",
    theme: "Turquoise / tropical",
    swatch: "bg-[#17C3C8]",
    text: "text-[#11343A]",
  },
  {
    event: "Saturday Night",
    theme: "Coral + gold",
    swatch: "bg-[#FF6B4A]",
    text: "text-white",
  },
  {
    event: "Sunday Brunch",
    theme: "Cream / relaxed chic",
    swatch: "bg-[#F6E9DB]",
    text: "text-[#5A3A28]",
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
  { label: "House", value: "Villa details coming soon" },
  { label: "Airport", value: "Fly into SJU" },
  { label: "Transportation", value: "Uber is easiest for getting around" },
  { label: "Check-in", value: "Details to come" },
  { label: "Group Chat", value: "Watch the chat for live updates" },
  { label: "Weather", value: "Hot, sunny, and humid - pack accordingly" },
];

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

function IconSun({ className = "h-5 w-5" }: IconProps) {
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

export default function FrennergyPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#F6E9DB] text-[#1F143A]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(62%_55%_at_50%_0%,rgba(255,46,139,0.24),rgba(246,233,219,0)_75%)]" />
      <div className="pointer-events-none absolute -top-20 right-[-6rem] -z-10 h-72 w-72 rounded-full bg-[#17C3C8]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-[-5rem] -z-10 h-80 w-80 rounded-full bg-[#FF6B4A]/20 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
        <section className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(135deg,#ffe4f2_0%,#ffeedf_42%,#d7fbfb_100%)] px-6 pb-10 pt-8 shadow-[0_30px_80px_-32px_rgba(31,20,58,0.7)] sm:px-10 sm:pb-12 sm:pt-12">
          <div className="pointer-events-none absolute -right-10 -top-14 h-56 w-56 rounded-full bg-[#FF2E8B]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-[#17C3C8]/30 blur-3xl" />

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4E3566]">
              <IconSun className="h-4 w-4" />
              San Juan, Puerto Rico
            </p>
            <h1 className="mt-5 font-[family-name:Georgia,Times,serif] text-6xl font-semibold leading-[0.9] tracking-tight text-[#1F143A] sm:text-7xl lg:text-8xl">
              Hot Girl Frennergy
            </h1>
            <p className="mt-4 text-xl font-semibold text-[#FF2E8B] sm:text-2xl">
              Chelsea&apos;s Bachelorette Weekend
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#4D3A61] sm:text-lg">
              Sun, chaos, cocktails, and the bride.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center rounded-full bg-[#FF2E8B] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_-12px_rgba(255,46,139,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#EB197D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E8B] focus-visible:ring-offset-2"
              >
                View Itinerary
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center rounded-full border border-[#17C3C8]/45 bg-white/90 px-6 py-3 text-sm font-semibold text-[#0E5960] shadow-[0_12px_20px_-14px_rgba(23,195,200,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#E4FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17C3C8] focus-visible:ring-offset-2"
              >
                Trip Details
              </a>
            </div>

            <Countdown targetDate={tripStart} />
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] bg-white/60 p-6 shadow-[0_20px_50px_-30px_rgba(31,20,58,0.55)] sm:mt-16 sm:p-10" aria-labelledby="overview-title">
          <h2 id="overview-title" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <IconCocktail className="h-5 w-5 text-[#FF6B4A]" />
            Weekend Overview
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A3B61] sm:text-lg">
            Welcome to Chelsea&apos;s San Juan bachelorette weekend - a few days of beach clubs,
            dinner glam, frozen drinks, late nights, recovery brunches, and elite memories.
          </p>
        </section>

        <section
          id="itinerary"
          className="mt-10 rounded-[2rem] bg-[#FFF6EE]/85 p-6 shadow-[0_20px_50px_-30px_rgba(31,20,58,0.55)] sm:mt-14 sm:p-10"
          aria-labelledby="itinerary-title"
        >
          <div className="flex items-end justify-between gap-3">
            <h2 id="itinerary-title" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              <IconPalm className="h-5 w-5 text-[#17C3C8]" />
              Itinerary
            </h2>
            <span className="rounded-full bg-[#F2C94C]/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6F5108]">
              Weekend Flow
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-3">
            {itinerary.map((item) => (
              <article
                key={item.day}
                className="rounded-[1.6rem] border border-white/75 bg-white/92 p-5 shadow-[0_20px_40px_-24px_rgba(31,20,58,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(31,20,58,0.65)] sm:p-6"
              >
                <h3 className="text-xl font-semibold text-[#1F143A]">{item.day}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4A3B61] sm:text-base">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-[#FF2E8B]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-white/60 p-6 shadow-[0_20px_50px_-30px_rgba(31,20,58,0.55)] sm:mt-14 sm:p-10" aria-labelledby="dress-themes-title">
          <h2 id="dress-themes-title" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <IconSun className="h-5 w-5 text-[#F2C94C]" />
            Dress Themes
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
            {dressThemes.map((theme) => (
              <article
                key={theme.event}
                className={`${theme.swatch} ${theme.text} rounded-[1.6rem] p-5 shadow-[0_20px_35px_-24px_rgba(31,20,58,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_45px_-24px_rgba(31,20,58,0.7)] sm:p-6`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-90">{theme.event}</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight">{theme.theme}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-[#FFF6EE]/85 p-6 shadow-[0_20px_50px_-30px_rgba(31,20,58,0.55)] sm:mt-14 sm:p-10" aria-labelledby="rules-title">
          <h2 id="rules-title" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <IconSparkle className="h-5 w-5 text-[#FF2E8B]" />
            Weekend Rules
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
            {weekendRules.map((rule) => (
              <p
                key={rule}
                className="rounded-2xl border border-white/75 bg-white/90 px-4 py-3 text-center text-sm font-semibold text-[#43365A] shadow-[0_12px_26px_-20px_rgba(31,20,58,0.7)] transition duration-300 hover:-translate-y-1 sm:text-base"
              >
                {rule}
              </p>
            ))}
          </div>
        </section>

        <section
          id="details"
          className="mt-10 rounded-[2rem] bg-white/60 p-6 shadow-[0_20px_50px_-30px_rgba(31,20,58,0.55)] sm:mt-14 sm:p-10"
          aria-labelledby="trip-details-title"
        >
          <h2 id="trip-details-title" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <IconCocktail className="h-5 w-5 text-[#17C3C8]" />
            Trip Details
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {tripDetails.map((detail) => (
              <article
                key={detail.label}
                className="rounded-[1.6rem] border border-white/70 bg-white/92 px-5 py-5 shadow-[0_20px_40px_-24px_rgba(31,20,58,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_45px_-24px_rgba(31,20,58,0.65)]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#17C3C8]">
                  {detail.label}
                </h3>
                <p className="mt-2 text-base leading-7 text-[#473A5E]">{detail.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="photos" className="mt-12 sm:mt-16" aria-labelledby="photos-title">
          <div className="relative overflow-hidden rounded-[2.1rem] border border-[#2A1C4D] bg-[linear-gradient(130deg,#1F143A_0%,#2A1A4B_60%,#3A1E58_100%)] px-6 py-9 text-[#F6E9DB] shadow-[0_30px_70px_-28px_rgba(31,20,58,0.95)] sm:px-10 sm:py-11">
            <div className="pointer-events-none absolute -right-10 top-2 h-44 w-44 rounded-full bg-[#FF2E8B]/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-[#17C3C8]/20 blur-3xl" />

            <div className="relative">
              <h2 id="photos-title" className="inline-flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                <IconSparkle className="h-6 w-6 text-[#F2C94C]" />
                Frennenergy Photo Dump
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#F8D9E9] sm:text-base">
                Upload all the chaos, candids, glam, and blurry late-night masterpieces here.
              </p>
              <a
                href="#photos"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[linear-gradient(120deg,#FF2E8B_0%,#FF6B4A_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_-16px_rgba(255,46,139,0.8)] transition duration-300 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F143A]"
              >
                Add Shared Album Link
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-14 text-center text-sm text-[#5A4B71] sm:pt-16">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#FF2E8B]">Hot Girl Frennergy</p>
          <p className="mt-2">Made for Chelsea&apos;s San Juan weekend</p>
        </footer>
      </div>
    </main>
  );
}
