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

    return () => {
      window.clearInterval(timer);
    };
  }, [targetDate]);

  const items = [
    {
      label: "Days",
      value: timeLeft.days,
      style: "bg-transparent text-[var(--fren-pink)]",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      style: "bg-transparent text-[var(--fren-blue)]",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      style: "bg-transparent text-[var(--fren-coral)]",
    },
  ];

  return (
    <section
      aria-label="Countdown to trip"
      className="relative overflow-hidden rounded-[1.9rem] border border-[rgba(63,103,200,0.22)] bg-[linear-gradient(140deg,rgba(63,103,200,0.88),rgba(143,179,231,0.8)_46%,rgba(248,242,232,0.98)_100%)] shadow-[0_30px_52px_-28px_rgba(63,103,200,0.42)]"
    >
      <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[rgba(226,61,138,0.28)] blur-2xl" />
      <div className="absolute -left-6 bottom-6 h-28 w-28 rounded-full bg-[rgba(243,181,61,0.35)] blur-2xl" />
      <div className="h-2 bg-[repeating-linear-gradient(90deg,rgba(248,242,232,0.54)_0_16px,rgba(255,123,94,0.44)_16px_32px)]" />
      <div className="relative grid gap-6 px-5 py-6 sm:grid-cols-[0.84fr_1.16fr] sm:items-end sm:px-6 sm:py-8">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(248,242,232,0.92)]">
            <Spark className="h-4 w-4 text-[var(--fren-marigold)]" />
            {label}
          </p>
          <p className="mt-3 max-w-[14rem] font-serif text-[2.35rem] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--fren-ivory)] sm:text-[2.9rem]">
            Weekend begins soon.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-[rgba(248,242,232,0.3)] pt-4 sm:border-t-0 sm:pt-0">
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-[0.95rem] border border-[rgba(248,242,232,0.28)] bg-[rgba(248,242,232,0.18)] px-2 py-3 text-center backdrop-blur-[2px] sm:px-4 ${item.style}`}
          >
            <p className="font-serif text-[2.5rem] font-semibold leading-none tracking-[-0.05em] text-[var(--fren-ivory)] sm:text-[3.35rem]">
              {item.value}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[rgba(248,242,232,0.92)] sm:text-xs">
              {item.label}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
