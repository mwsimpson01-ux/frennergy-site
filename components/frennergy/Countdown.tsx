"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
  label?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
};

function getTimeLeft(targetDate: string): TimeLeft {
  const targetTime = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = Math.max(0, targetTime - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  return { days, hours, minutes };
}

function Spark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M5 4 5.8 6.2 8 7l-2.2.8L5 10 4.2 7.8 2 7l2.2-.8L5 4Z" />
    </svg>
  );
}

export function Countdown({ targetDate, label = "Hot Girl Summer begins in..." }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 60_000);

    setTimeLeft(getTimeLeft(targetDate));

    return () => {
      window.clearInterval(timer);
    };
  }, [targetDate]);

  const items = [
    {
      label: "Days",
      value: timeLeft.days,
      style: "border-[#FFD55C]/70 bg-[#FFD55C]/25 text-[#241243]",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      style: "border-[#17C3C8]/70 bg-[#17C3C8]/25 text-[#241243]",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      style: "border-[#FF2E8B]/70 bg-[#FF2E8B]/25 text-[#241243]",
    },
  ];

  return (
    <section aria-label="Countdown to trip" className="mt-8 rounded-[1.7rem] border border-white/40 bg-[#241243]/90 p-4 text-[#F8EBDD] shadow-[0_24px_40px_-24px_rgba(36,18,67,0.95)] sm:p-5">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD55C]">
        <Spark className="h-4 w-4" />
        {label}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl border px-3 py-3 text-center shadow-[0_14px_24px_-18px_rgba(36,18,67,0.75)] ${item.style}`}
          >
            <p className="text-2xl font-black leading-none sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F8EBDD] sm:text-xs">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
