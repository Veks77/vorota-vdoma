import { Award, ShieldCheck, Wrench, Truck, BadgeCheck } from "lucide-react";

const items = [
  { icon: Award, label: "15+ років на ринку" },
  { icon: BadgeCheck, label: "2500+ реалізованих проєктів" },
  { icon: ShieldCheck, label: "Гарантія від 1 року" },
  { icon: Truck, label: "Монтаж за 1 день" },
  { icon: Wrench, label: "Сертифіковані матеріали" },
];

export function Trust() {
  return (
    <section className="bg-graphite border-y border-white/5 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-white/80 hover:text-white transition"
            >
              <div className="size-10 rounded-lg bg-white/5 grid place-items-center">
                <Icon className="size-5 text-ember" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
