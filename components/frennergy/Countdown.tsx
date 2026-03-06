"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
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

export function Countdown({ targetDate }: CountdownProps) {
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
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
  ];

  return (
    <section aria-label="Countdown to trip" className="mt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A3A6E]">
        Countdown To San Juan
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/70 bg-white/70 px-3 py-3 text-center shadow-[0_12px_24px_-18px_rgba(31,20,58,0.55)] backdrop-blur-sm"
          >
            <p className="text-2xl font-semibold leading-none text-[#1F143A] sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#6D4A77]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
