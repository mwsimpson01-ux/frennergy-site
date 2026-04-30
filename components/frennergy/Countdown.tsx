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
      className="relative overflow-hidden rounded-[1.9rem] border-2 border-[var(--fren-blue)] bg-[var(--fren-blue)] shadow-[0_28px_34px_-16px_rgba(66,104,201,0.5)]"
    >
      <div className="h-3 bg-[repeating-linear-gradient(90deg,var(--fren-yellow)_0_14px,var(--fren-coral)_14px_28px,var(--fren-pink)_28px_42px,var(--fren-ivory)_42px_56px)]" />
      <div className="relative grid gap-6 px-5 py-6 sm:grid-cols-[0.84fr_1.16fr] sm:items-end sm:px-6 sm:py-8">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(248,242,232,0.92)]">
            <Spark className="h-4 w-4 text-[var(--fren-yellow)]" />
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
            className={`rounded-[0.95rem] border-2 border-[var(--fren-ivory)] bg-[rgba(248,242,232,0.16)] px-2 py-3 text-center sm:px-4 ${item.style}`}
          >
            <p className="font-serif text-[2.55rem] font-semibold leading-none tracking-[-0.05em] text-[var(--fren-ivory)] sm:text-[3.4rem]">
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
