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
      style: "bg-[var(--fren-ivory)] text-[var(--fren-blue)]",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      style: "bg-[var(--fren-ivory)] text-[var(--fren-blue)]",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      style: "bg-[var(--fren-ivory)] text-[var(--fren-blue)]",
    },
  ];

  return (
    <section
      aria-label="Countdown to trip"
      className="relative overflow-hidden rounded-[1.6rem] bg-[var(--fren-blue)] shadow-[0_28px_34px_-16px_rgba(66,104,201,0.5)] sm:rounded-[1.9rem]"
    >
      <div className="h-3 bg-[repeating-linear-gradient(90deg,var(--fren-yellow)_0_14px,var(--fren-coral)_14px_28px,var(--fren-pink)_28px_42px,var(--fren-ivory)_42px_56px)]" />
      <div className="relative grid gap-4 px-4 py-4 sm:grid-cols-[0.86fr_1.14fr] sm:items-end sm:gap-6 sm:px-6 sm:py-8">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(248,242,232,0.92)]">
            <Spark className="h-4 w-4 text-[var(--fren-yellow)]" />
            {label}
          </p>
          <p className="mt-2 max-w-[13rem] font-serif text-[2.05rem] font-semibold leading-[0.94] tracking-[-0.04em] text-[var(--fren-ivory)] sm:mt-3 sm:max-w-[15rem] sm:text-[2.95rem] sm:tracking-[-0.05em]">
            It&apos;s almost go time.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-[rgba(248,242,232,0.28)] pt-3 sm:border-t-0 sm:pt-0">
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-[0.85rem] border border-[rgba(66,104,201,0.15)] px-2 py-2.5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] sm:rounded-[0.95rem] sm:px-4 sm:py-3 ${item.style}`}
          >
            <p className="font-serif text-[2.15rem] font-semibold leading-none tracking-[-0.04em] text-[var(--fren-blue)] sm:text-[3.4rem] sm:tracking-[-0.05em]">
              {item.value}
            </p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--fren-blue)] sm:mt-2 sm:text-xs sm:tracking-[0.16em]">
              {item.label}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
