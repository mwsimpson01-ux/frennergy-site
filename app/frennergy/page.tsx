import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "Chelsea's bachelorette weekend in San Juan: itinerary, dress themes, trip details, and photo drop.",
};

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
    bg: "bg-[#FF2E8B]",
    text: "text-white",
  },
  {
    event: "Saturday Day",
    theme: "Turquoise / tropical",
    bg: "bg-[#17C3C8]",
    text: "text-[#0f2a2b]",
  },
  {
    event: "Saturday Night",
    theme: "Coral + gold",
    bg: "bg-[#FF6B4A]",
    text: "text-white",
  },
  {
    event: "Sunday Brunch",
    theme: "Cream / relaxed chic",
    bg: "bg-[#FFF4E8]",
    text: "text-[#513726]",
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

export default function FrennergyPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#FFF4E8] text-[#1E1D2A]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(65%_65%_at_50%_0%,rgba(255,46,139,0.24),rgba(255,244,232,0)_70%)]" />
      <div className="pointer-events-none absolute -top-16 right-[-6rem] -z-10 h-72 w-72 rounded-full bg-[#17C3C8]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-28 left-[-5rem] -z-10 h-80 w-80 rounded-full bg-[#FF6B4A]/20 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10">
        <section className="rounded-[2rem] bg-white/80 px-6 pb-10 pt-8 shadow-[0_20px_60px_-24px_rgba(255,46,139,0.45)] backdrop-blur-sm sm:px-10 sm:pb-12 sm:pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#17C3C8]">
            San Juan, Puerto Rico
          </p>
          <h1 className="mt-4 font-[family-name:Georgia,Times,serif] text-5xl font-semibold leading-[0.95] tracking-tight text-[#1B1231] sm:text-6xl md:text-7xl">
            Hot Girl Frennergy
          </h1>
          <p className="mt-4 text-xl font-semibold text-[#FF2E8B] sm:text-2xl">
            Chelsea&apos;s Bachelorette Weekend
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#483E5D] sm:text-lg">
            Sun, chaos, cocktails, and the bride.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="#itinerary"
              className="inline-flex items-center justify-center rounded-full bg-[#FF2E8B] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(255,46,139,0.85)] transition hover:-translate-y-0.5 hover:bg-[#eb1778] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E8B] focus-visible:ring-offset-2"
            >
              View Itinerary
            </a>
            <a
              href="#details"
              className="inline-flex items-center justify-center rounded-full border border-[#17C3C8]/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#0E4F53] shadow-[0_10px_20px_-15px_rgba(23,195,200,0.8)] transition hover:-translate-y-0.5 hover:bg-[#DFF9FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17C3C8] focus-visible:ring-offset-2"
            >
              Trip Details
            </a>
          </div>
        </section>

        <section className="pt-12 sm:pt-16" aria-labelledby="overview-title">
          <h2 id="overview-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Weekend Overview
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#4A3F60] sm:text-lg">
            Welcome to Chelsea&apos;s San Juan bachelorette weekend - a few days of beach clubs,
            dinner glam, frozen drinks, late nights, recovery brunches, and elite memories.
          </p>
        </section>

        <section id="itinerary" className="pt-12 sm:pt-16" aria-labelledby="itinerary-title">
          <div className="flex items-end justify-between gap-3">
            <h2 id="itinerary-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Itinerary
            </h2>
            <span className="rounded-full bg-[#F2C94C]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#6D5606]">
              Weekend Flow
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-3">
            {itinerary.map((item) => (
              <article
                key={item.day}
                className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_-24px_rgba(31,26,57,0.6)] sm:p-6"
              >
                <h3 className="text-xl font-semibold text-[#1B1231]">{item.day}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4A3F60] sm:text-base">
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

        <section className="pt-12 sm:pt-16" aria-labelledby="dress-themes-title">
          <h2 id="dress-themes-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dress Themes
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
            {dressThemes.map((theme) => (
              <article
                key={theme.event}
                className={`${theme.bg} ${theme.text} rounded-3xl p-5 shadow-[0_16px_32px_-20px_rgba(31,26,57,0.6)] sm:p-6`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-90">
                  {theme.event}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight">{theme.theme}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-12 sm:pt-16" aria-labelledby="rules-title">
          <h2 id="rules-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Weekend Rules
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
            {weekendRules.map((rule) => (
              <p
                key={rule}
                className="rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-center text-sm font-semibold text-[#43395A] shadow-[0_12px_26px_-20px_rgba(31,26,57,0.7)] sm:text-base"
              >
                {rule}
              </p>
            ))}
          </div>
        </section>

        <section id="details" className="pt-12 sm:pt-16" aria-labelledby="trip-details-title">
          <h2 id="trip-details-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Trip Details
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {tripDetails.map((detail) => (
              <article
                key={detail.label}
                className="rounded-3xl bg-white px-5 py-5 shadow-[0_18px_36px_-24px_rgba(31,26,57,0.65)]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#17C3C8]">
                  {detail.label}
                </h3>
                <p className="mt-2 text-base leading-7 text-[#44395A]">{detail.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="photos" className="pt-12 sm:pt-16" aria-labelledby="photos-title">
          <div className="rounded-[2rem] bg-[#1B1231] px-6 py-8 text-[#FFF4E8] shadow-[0_24px_50px_-28px_rgba(27,18,49,0.8)] sm:px-10 sm:py-10">
            <h2 id="photos-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Frennenergy Photo Dump
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#FFE9F4] sm:text-base">
              Upload all the chaos, candids, glam, and blurry late-night masterpieces here.
            </p>
            <a
              href="#photos"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F2C94C] px-6 py-3 text-sm font-semibold text-[#2D2200] transition hover:-translate-y-0.5 hover:bg-[#F5D772] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1231]"
            >
              Add Shared Album Link
            </a>
          </div>
        </section>

        <footer className="pt-14 text-center text-sm text-[#5A5070] sm:pt-16">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#FF2E8B]">Hot Girl Frennergy</p>
          <p className="mt-2">Made for Chelsea&apos;s San Juan weekend</p>
        </footer>
      </div>
    </main>
  );
}
