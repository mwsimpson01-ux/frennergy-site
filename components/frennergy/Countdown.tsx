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
      style:
        "border-[rgba(226,61,138,0.14)] bg-[rgba(226,61,138,0.08)] text-[var(--fren-pink)]",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      style:
        "border-[rgba(63,103,200,0.14)] bg-[rgba(143,179,231,0.16)] text-[var(--fren-blue)]",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      style:
        "border-[rgba(243,181,61,0.18)] bg-[rgba(243,181,61,0.14)] text-[var(--fren-coral)]",
    },
  ];

  return (
    <section
      aria-label="Countdown to trip"
      className="relative overflow-hidden rounded-[1.9rem] border border-[rgba(63,103,200,0.12)] bg-[rgba(248,242,232,0.88)] p-4 shadow-[0_18px_32px_-22px_rgba(34,52,104,0.2)] sm:p-5"
    >
      <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(143,179,231,0.24)_0_14px,rgba(248,242,232,0.98)_14px_28px)]" />
      <p className="inline-flex items-center gap-2 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fren-blue)]">
        <Spark className="h-4 w-4 text-[var(--fren-pink)]" />
        {label}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-[1.25rem] border px-3 py-4 text-center shadow-[0_12px_20px_-16px_rgba(34,52,104,0.18)] ${item.style}`}
          >
            <p className="font-[family-name:Georgia,Times,serif] text-3xl font-black leading-none sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--fren-copy)] sm:text-xs">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
