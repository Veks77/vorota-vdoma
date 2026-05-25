import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
}

function Stat({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const { val, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-5xl sm:text-7xl text-ember">
        {val.toLocaleString("uk-UA")}{suffix}
      </div>
      <div className="mt-3 text-white/70 text-sm sm:text-base uppercase tracking-widest">{label}</div>
    </div>
  );
}

export function Counters() {
  return (
    <section className="py-20 sm:py-28 bg-graphite text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_oklch(0.72_0.19_50/0.12),_transparent_60%)]" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat target={2500} suffix="+" label="реалізованих проєктів" />
          <Stat target={15} suffix="+" label="років на ринку" />
          <Stat target={1800} suffix="+" label="задоволених клієнтів" />
          <Stat target={1} suffix="+" label="рік гарантії" />
        </div>
      </div>
    </section>
  );
}
