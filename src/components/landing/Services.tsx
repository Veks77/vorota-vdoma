import {
  DoorOpen,
  Blinds,
  Grid3x3,
  ParkingSquare,
  Cpu,
  Fence,
  Building2,
  Sun,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: DoorOpen, title: "Автоматичні ворота", desc: "Відкатні, розпашні, секційні. Тихий хід, надійна автоматика." },
  { icon: Blinds, title: "Захисні ролети", desc: "Захист вікон і вітрин від злому, шуму та погоди." },
  { icon: Grid3x3, title: "Захисні решітки", desc: "Стильні рішення для квартир, магазинів та офісів." },
  { icon: ParkingSquare, title: "Шлагбауми", desc: "Контроль в’їзду для бізнесу, ЖК та паркінгів." },
  { icon: Cpu, title: "Автоматика", desc: "Came, Nice, FAAC, Bft — встановлення та обслуговування." },
  { icon: Fence, title: "Огорожі", desc: "Сучасні паркани з металу, ламелей та алюмінію." },
  { icon: Building2, title: "Алюмінієві конструкції", desc: "Вітражі, перегородки, вхідні групи преміум класу." },
  { icon: Sun, title: "Сонцезахисні системи", desc: "Маркізи, рулонні штори, зовнішні жалюзі." },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
            Наші послуги
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">
            Повний цикл — від заміру до сервісу
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Працюємо з приватними будинками, бізнесом та промисловими об’єктами.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden hover:border-ember/40 hover:-translate-y-1 transition-all duration-300 shadow-card"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-ember/0 group-hover:bg-ember/10 blur-3xl transition-all duration-500" />
              <div className="relative">
                <div className="service-icon size-12 rounded-xl bg-graphite text-ember grid place-items-center mb-5 group-hover:gradient-ember group-hover:text-graphite transition">
                  <Icon className="service-icon-svg size-6" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
                <a href="#process" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-ember transition">
                  Дізнатись більше
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
