import type { Metadata } from "next";
import { Countdown } from "@/components/frennergy/Countdown";

export const metadata: Metadata = {
  title: "Hot Girl Frennergy | San Juan Bachelorette",
  description:
    "A playful San Juan bachelorette weekend guide with timeline plans, outfits, details, and trip extras.",
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

const playlistUrl = "https://open.spotify.com/playlist/4OkCaycgBtBoghf9mWo5l9";

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
    subtitle: "An easy night in before the chaos begins.",
    cardClass: "bg-[#FFF2F8] border-[#FF4FA3]/35",
    events: [
      {
        time: "Afternoon",
        type: "arrivals",
        label: "Everyone arrives",
        detail: "Flights roll in and everyone settles into trip mode.",
      },
      {
        time: "4:00 PM",
        type: "reservation",
        label: "Airbnb check-in",
        detail: "Bag drop, room claims, and cozy reset at the house.",
      },
      {
        time: "Evening",
        type: "activity",
        label: "Girls Go Mild",
        detail: "Friday night theme: low-key, cute, and easy.",
      },
      {
        time: "Night",
        type: "nightlife",
        label: "Pajama night at the house",
        detail: "Chill night in before the busy weekend begins.",
      },
    ],
  },
  {
    day: "Saturday",
    era: "Main Character Day",
    subtitle: "Beach club energy from sunrise glow to late-night chaos.",
    cardClass: "bg-[#ECFDFC] border-[#79D9D1]/45",
    events: [
      {
        time: "10:00 AM",
        type: "activity",
        label: "Beach + pool setup",
        detail: "Chairs, sunscreen, speaker, and turquoise look check.",
      },
      {
        time: "12:30 PM",
        type: "meal",
        label: "Poolside lunch",
        detail: "Fresh bowls, fries, and frozen drinks on repeat.",
      },
      {
        time: "1:00 PM",
        type: "drinks",
        label: "Cocktail class at Bacardi",
        detail: "Confirmed activity: group cocktail class at Bacardi.",
      },
      {
        time: "2:30 PM",
        type: "drinks",
        label: "Cocktail o'clock",
        detail: "Round of signature drinks for the full squad.",
      },
      {
        time: "6:00 PM",
        type: "activity",
        label: "Sunset photo run",
        detail: "Golden hour content sprint before dinner glam.",
      },
      {
        time: "8:00 PM",
        type: "reservation",
        label: "Dinner reservation",
        detail: "Coral + gold fits, flash photos, and toasts.",
      },
      {
        time: "10:45 PM",
        type: "nightlife",
        label: "Going out",
        detail: "Dance floor, chaotic stories, and iconic group pics.",
      },
    ],
  },
  {
    day: "Sunday",
    era: "Recovery Glow",
    subtitle: "Slow morning, one more pool moment, and airport hugs.",
    cardClass: "bg-[#FFF8EE] border-[#FFA552]/45",
    events: [
      {
        time: "10:30 AM",
        type: "meal",
        label: "Recovery brunch",
        detail: "Coffee, carbs, recap, and best-story voting.",
      },
      {
        time: "12:00 PM",
        type: "activity",
        label: "Pool hang + reset",
        detail: "Final dip, hydration, and suitcase regrouping.",
      },
      {
        time: "2:30 PM",
        type: "departure",
        label: "Departures",
        detail: "Airport rides, hugs, and post-trip group chat spam.",
      },
    ],
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
    swatchClass: "bg-[#79D9D1] text-[#145057]",
  },
  {
    event: "Saturday Night",
    theme: "Coral + tangerine",
    note: "sunset sparkle",
    swatchClass: "bg-[#FF7A59] text-white",
  },
  {
    event: "Sunday Brunch",
    theme: "Cream + blush",
    note: "easy but iconic",
    swatchClass: "bg-[#FFF4EA] text-[#5B3E2F]",
  },
];

const weekendRules = [
  { label: "Take the shot", className: "bg-[#FFD966] text-[#493503] rotate-[-2deg]" },
  { label: "Take the photo", className: "bg-[#FF7A59] text-white rotate-[2deg]" },
  { label: "Drink the cocktail", className: "bg-[#79D9D1] text-[#124F4B] rotate-[-1deg]" },
  { label: "Hydrate occasionally", className: "bg-[#BFECE4] text-[#1C5E58] rotate-[1deg]" },
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
    tileClass: "bg-[#FFF8EE] border-[#FFA552]/45",
  },
  {
    label: "Transportation",
    value: "Uber is easiest for getting around",
    icon: "sunglasses",
    tileClass: "bg-[#ECFDFC] border-[#79D9D1]/45",
  },
  {
    label: "Check-in",
    value: "Details to come",
    icon: "shell",
    tileClass: "bg-[#F9DCE7] border-[#FF4FA3]/35",
  },
  {
    label: "Group Chat",
    value: "Watch the chat for live updates",
    icon: "sparkle",
    tileClass: "bg-[#F4EDFF] border-[#C9A6FF]/45",
  },
  {
    label: "Weather",
    value: "Hot, sunny, and humid - pack accordingly",
    icon: "flame",
    tileClass: "bg-[#FFF8EE] border-[#FFA552]/45",
  },
] as const;

const tripExtras = [
  {
    title: "Packing Guide",
    subtitle: "Must-pack edits",
    copy: "Swimsuits, coverups, comfy sandals, SPF, fan, and one dramatic dinner look.",
    icon: "bikini",
    cardClass: "bg-[#FFF2F8] border-[#FF4FA3]/35",
  },
  {
    title: "Villa / Hotel Info",
    subtitle: "Stay details",
    copy: "Address, room split, and keypad details will be pinned in the group chat.",
    icon: "palm",
    cardClass: "bg-[#ECFDFC] border-[#79D9D1]/45",
  },
  {
    title: "Weather",
    subtitle: "Forecast vibe",
    copy: "Hot and humid all weekend. Lightweight fabrics and hydration are non-negotiable.",
    icon: "sun",
    cardClass: "bg-[#FFF8EE] border-[#FFA552]/45",
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

function IconCamera({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 8h16v11H4z" />
      <path d="M8 8 9.4 5.8h5.2L16 8" />
      <circle cx="12" cy="13.5" r="2.7" />
    </svg>
  );
}

function IconMusic({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M9 18V6l10-2v12" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="16" r="2" />
    </svg>
  );
}

function iconByName(name: (typeof tripDetails)[number]["icon"] | (typeof tripExtras)[number]["icon"]) {
  if (name === "palm") return <IconPalm className="h-5 w-5" />;
  if (name === "sun") return <IconSunburst className="h-5 w-5" />;
  if (name === "sunglasses") return <IconSunglasses className="h-5 w-5" />;
  if (name === "shell") return <IconShell className="h-5 w-5" />;
  if (name === "sparkle") return <IconSparkle className="h-5 w-5" />;
  if (name === "bikini") return <IconBikini className="h-5 w-5" />;
  return <IconFlame className="h-5 w-5" />;
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
    <main className="relative isolate overflow-hidden bg-[#FFF4EA] text-[#3D2B57]">
      <div className="pointer-events-none absolute -left-10 top-16 -z-10 h-44 w-44 rounded-full bg-[#FFD966]/45" />
      <div className="pointer-events-none absolute right-[-2.75rem] top-36 -z-10 h-52 w-52 rounded-full bg-[#BFECE4]/70" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
        <section className="relative overflow-hidden rounded-[2.4rem] border border-[#FF4FA3]/25 bg-[linear-gradient(145deg,#FFF4EA_0%,#F9DCE7_62%,#BFECE4_100%)] px-6 pb-10 pt-8 shadow-[0_18px_36px_-22px_rgba(255,122,89,0.4)] sm:px-10 sm:pb-12 sm:pt-10">
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
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#5C3F78]">
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
                className="inline-flex items-center justify-center rounded-full border border-[#79D9D1]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#2B6970] shadow-[0_12px_22px_-14px_rgba(121,217,209,0.85)] transition duration-300 hover:-translate-y-1 hover:bg-[#EEFCFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79D9D1] focus-visible:ring-offset-2"
              >
                Trip Details
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[1.8rem] border border-[#FF4FA3]/20 bg-white p-3 shadow-[0_14px_28px_-20px_rgba(255,79,163,0.5)] sm:p-4" aria-label="Countdown card">
          <Countdown targetDate={tripStart} label="Countdown to San Juan" />
        </section>

        <section
          className="mt-5 rounded-full border border-[#FF4FA3]/25 bg-[#F9DCE7]/75 px-4 py-3 shadow-[0_12px_22px_-18px_rgba(255,79,163,0.55)] sm:px-6"
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

        <section className="mt-8 sm:mt-10" aria-labelledby="music-title">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#FF4FA3]/45 bg-[#FF7A59] px-6 py-7 shadow-[0_24px_40px_-22px_rgba(255,122,89,0.65)] sm:px-8 sm:py-8">
            <div className="pointer-events-none absolute right-4 top-4 text-[#FFD966]/85">
              <IconSparkle className="h-6 w-6" />
            </div>
            <div className="pointer-events-none absolute right-12 bottom-4 text-[#FFD966]/80">
              <IconMusic className="h-6 w-6" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
              NOW PLAYING
            </p>
            <h2
              id="music-title"
              className="mt-2 inline-flex items-center gap-2 text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              <IconMusic className="h-6 w-6 text-[#FFD966]" />
              Hot Girl Frennergy
            </h2>

            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-base font-bold text-[#FF4FA3] shadow-[0_18px_28px_-14px_rgba(61,43,87,0.45)] transition duration-300 hover:-translate-y-1 hover:bg-[#FFF4EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF7A59] sm:w-auto sm:min-w-[280px]"
            >
              🎧 Cue the Chaos
            </a>

            <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base">
              Add your favorite songs to the weekend soundtrack.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/85 bg-[#F9DCE7]/70 p-6 shadow-[0_18px_34px_-24px_rgba(255,122,89,0.35)] sm:mt-16 sm:p-10" aria-labelledby="overview-title">
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

        <section id="itinerary" className="mt-10 sm:mt-14" aria-labelledby="itinerary-title">
          <div className="rounded-[2rem] border border-white/85 bg-white p-6 shadow-[0_18px_34px_-24px_rgba(255,165,82,0.4)] sm:p-10">
            <h2 id="itinerary-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#462A62] sm:text-3xl">
              <IconPalm className="h-5 w-5 text-[#79D9D1]" />
              Day-by-Day Guide
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#7B578F]">
              itinerary flow by era
            </p>

            <div className="mt-6 space-y-5 sm:mt-8">
              {dayPlans.map((plan) => (
                <article
                  key={plan.day}
                  className={`rounded-[1.8rem] border p-5 shadow-[0_12px_24px_-18px_rgba(61,43,87,0.35)] sm:p-6 ${plan.cardClass}`}
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
                        className="rounded-2xl border border-white/90 bg-white/92 p-4 shadow-[0_10px_20px_-16px_rgba(61,43,87,0.3)]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF4FA3]">
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

        <section className="mt-10 sm:mt-14" aria-labelledby="dress-themes-title">
          <div className="rounded-[2rem] border border-white/85 bg-[#ECFDFC] p-6 shadow-[0_18px_34px_-24px_rgba(121,217,209,0.45)] sm:p-10">
            <h2 id="dress-themes-title" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#3B2A56] sm:text-3xl">
              <IconBikini className="h-5 w-5 text-[#FF4FA3]" />
              Dress Themes
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#4A6D73]">
              fashion brief for every phase
            </p>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {dressThemes.map((theme) => (
                <article
                  key={theme.event}
                  className={`relative overflow-hidden rounded-[1.8rem] px-5 py-5 shadow-[0_14px_26px_-18px_rgba(61,43,87,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-18px_rgba(61,43,87,0.45)] sm:px-6 sm:py-6 ${theme.swatchClass}`}
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
          <div className="rounded-[2rem] border border-white/85 bg-[#FFF8EE] p-6 shadow-[0_18px_34px_-24px_rgba(255,165,82,0.4)] sm:p-10">
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
                  key={rule.label}
                  className={`rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.08em] shadow-[0_10px_18px_-14px_rgba(61,43,87,0.45)] transition duration-300 hover:-translate-y-1 sm:text-base ${rule.className}`}
                >
                  {rule.label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="mt-10 sm:mt-14" aria-labelledby="trip-details-title">
          <div className="rounded-[2rem] border border-white/85 bg-white p-6 shadow-[0_18px_34px_-24px_rgba(121,217,209,0.45)] sm:p-10">
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
                  className={`rounded-[1.7rem] border px-5 py-5 shadow-[0_12px_22px_-16px_rgba(61,43,87,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_26px_-16px_rgba(61,43,87,0.35)] ${detail.tileClass}`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A3168]">
                    <span className="text-[#FF4FA3]">{iconByName(detail.icon)}</span>
                    {detail.label}
                  </div>
                  <p className="mt-3 text-base leading-7 text-[#563E71]">{detail.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14" aria-labelledby="extras-title">
          <div className="rounded-[2rem] border border-white/85 bg-[#F4EDFF]/70 p-6 shadow-[0_18px_34px_-24px_rgba(201,166,255,0.45)] sm:p-10">
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
                  className={`rounded-[1.7rem] border px-5 py-5 shadow-[0_12px_22px_-16px_rgba(61,43,87,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_26px_-16px_rgba(61,43,87,0.35)] ${item.cardClass}`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4A3168]">
                    <span className="text-[#FF4FA3]">{iconByName(item.icon)}</span>
                    {item.subtitle}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#3F2A58]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5A406F]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-12 sm:mt-16" aria-labelledby="photos-title">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#FF7A59]/35 bg-[linear-gradient(120deg,#FF7A59_0%,#FFA552_55%,#FFD966_100%)] px-6 py-9 text-[#4A2E63] shadow-[0_22px_42px_-24px_rgba(255,122,89,0.55)] sm:px-10 sm:py-11">
            <div className="pointer-events-none absolute right-6 top-4 text-white/70">
              <IconSparkle className="h-6 w-6" />
            </div>
            <div className="pointer-events-none absolute left-6 bottom-5 text-[#79D9D1]/70">
              <IconCamera className="h-7 w-7" />
            </div>

            <div className="relative rounded-[1.7rem] border border-white/70 bg-[#FFF4EA]/82 p-5 sm:p-7">
              <h2 id="photos-title" className="inline-flex items-center gap-2 text-3xl font-black tracking-tight sm:text-4xl">
                <IconCamera className="h-7 w-7 text-[#FF4FA3]" />
                Camera Roll Chaos
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5A3B74] sm:text-base">
                Drop the chaos, the glam, and the blurry late-night evidence here.
              </p>
              <a
                href="#photos"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4FA3] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_-12px_rgba(255,79,163,0.75)] transition duration-300 hover:-translate-y-1 hover:bg-[#E93593] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4FA3] focus-visible:ring-offset-2"
              >
                <IconSparkle className="h-4 w-4" />
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
