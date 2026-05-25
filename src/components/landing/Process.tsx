import { PhoneCall, MapPin, Calculator, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Заявка", desc: "Залишаєте телефон — передзвонюємо за 15 хвилин." },
  { icon: MapPin, title: "Виїзд спеціаліста", desc: "Безкоштовний замір та консультація на об’єкті." },
  { icon: Calculator, title: "Прорахунок", desc: "Прозорий кошторис і 3D-візуалізація рішення." },
  { icon: Wrench, title: "Монтаж", desc: "Встановлення за 1–2 дні власною бригадою." },
  { icon: ShieldCheck, title: "Гарантія", desc: "Договір, сервісне обслуговування та гарантія від 1 року." },
];

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
            Як ми працюємо
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">
            5 простих кроків до ваших нових воріт
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative bg-card border border-border rounded-2xl p-6 hover:border-ember/40 hover:-translate-y-1 transition shadow-card">
                <div className="absolute -top-3 -right-3 size-9 rounded-full bg-graphite text-ember font-display font-bold text-sm grid place-items-center">
                  0{i + 1}
                </div>
                <div className="size-12 rounded-xl gradient-ember text-graphite grid place-items-center mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
