import { X, Check } from "lucide-react";

const pairs = [
  {
    pain: "Втомилися відкривати ворота вручну в дощ і мороз?",
    solution: "Автоматика з пультом і додатком — ворота відкриються за 8 секунд.",
  },
  {
    pain: "Боїтесь, що до будинку чи бізнесу заберуться зловмисники?",
    solution: "Сертифіковані ролети і решітки класу безпеки RC2–RC3.",
  },
  {
    pain: "Старі ржаві ворота псують вигляд фасаду?",
    solution: "Сучасний дизайн: ламелі, алюміній, дерево, RAL-фарбування.",
  },
  {
    pain: "Не знаєте, кому довірити монтаж?",
    solution: "15+ років, 2500+ об’єктів, гарантія від 1 року.",
  },
];

export function PainSolution() {
  return (
    <section className="py-20 sm:py-28 bg-graphite text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_oklch(0.72_0.19_50/0.15),_transparent_50%)]" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
            Знайома ситуація?
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">
            Розв’язуємо ваші реальні проблеми
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {pairs.map(({ pain, solution }, i) => (
            <div
              key={i}
              className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="bg-graphite p-6">
                <div className="flex items-center gap-2 text-destructive mb-3 text-xs uppercase tracking-widest font-semibold">
                  <X className="size-4" /> Проблема
                </div>
                <p className="text-white/90 leading-relaxed">{pain}</p>
              </div>
              <div className="bg-graphite-light p-6 relative">
                <div className="flex items-center gap-2 text-ember mb-3 text-xs uppercase tracking-widest font-semibold">
                  <Check className="size-4" /> Рішення
                </div>
                <p className="text-white/90 leading-relaxed">{solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
