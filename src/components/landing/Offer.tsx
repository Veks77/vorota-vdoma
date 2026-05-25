import { useEffect, useState } from "react";
import { Gift, Percent, Zap, ArrowRight } from "lucide-react";

function useCountdown(hours: number) {
  const [t, setT] = useState(hours * 3600);
  useEffect(() => {
    const i = setInterval(() => setT((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const h = String(Math.floor(t / 3600)).padStart(2, "0");
  const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  return { h, m, s };
}

export function Offer() {
  const { h, m, s } = useCountdown(47);
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative bg-graphite rounded-3xl overflow-hidden p-8 sm:p-14 shadow-elegant">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_oklch(0.72_0.19_50/0.25),_transparent_60%)]" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ember/15 border border-ember/30 text-ember px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
                <Zap className="size-3.5" /> Обмежена пропозиція
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white text-balance">
                Замовте до кінця тижня — отримайте <span className="text-ember">3 бонуси</span>
              </h2>

              <ul className="mt-7 space-y-3 text-white/85">
                {[
                  { icon: Gift, t: "Безкоштовний виїзд та замір" },
                  { icon: Percent, t: "Знижка −15% на автоматику Came / Nice" },
                  { icon: Zap, t: "Прискорений монтаж за 24 години" },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="size-9 rounded-lg gradient-ember grid place-items-center text-graphite">
                      <Icon className="size-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 gradient-ember text-graphite font-semibold px-7 py-4 rounded-xl shadow-ember hover:-translate-y-0.5 transition group"
              >
                Замовити консультацію
                <ArrowRight className="size-5 group-hover:translate-x-1 transition" />
              </a>
            </div>

            <div className="lg:justify-self-end w-full max-w-md">
              <div className="text-white/60 uppercase tracking-widest text-xs mb-3">До завершення акції</div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Години", h],
                  ["Хвилини", m],
                  ["Секунди", s],
                ].map(([label, v]) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <div className="font-display font-bold text-4xl sm:text-5xl text-white tabular-nums">{v}</div>
                    <div className="mt-1 text-xs text-white/50 uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
