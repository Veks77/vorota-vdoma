import heroImg from "@/assets/hero-gates.jpg";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-graphite">
      <img
        src={heroImg}
        alt="Сучасні автоматичні ворота преміум класу"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover object-[center_42%] opacity-60"
      />
      <div className="absolute inset-0 gradient-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 text-sm sm:text-base text-white shadow-2xl mb-6">
            <span className="size-1.5 rounded-full bg-ember animate-pulse-ring" />
            №1 на ринку автоматичних воріт у Центральній  Україні
          </div>

         <h1 className="font-display font-bold text-white text-balance text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
  Безпека та комфорт,{" "}
  <span className="text-ember">
    починаються з правильних воріт
  </span>{" "}
  {" "}
    <br />
  <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
       15+ років досвіду
  </span>
</h1>

          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl text-balance">
            Виготовляємо, встановлюємо та обслуговуємо ворота, ролети,
            шлагбауми та системи безпеки під ключ. Гарантія від 1 року.
            Замір — безкоштовно.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 gradient-ember text-graphite font-semibold px-7 py-4 rounded-xl shadow-ember hover:translate-y-[-2px] hover:shadow-2xl transition-all"
            >
              Отримати безкоштовний прорахунок
              <ArrowRight className="size-5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 glass text-white font-medium px-7 py-4 rounded-xl hover:bg-white/10 transition"
            >
              Наші послуги
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {[
              { icon: Award, t: "15+", s: "років досвіду" },
              { icon: ShieldCheck, t: "1+", s: "рік гарантії" },
              { icon: Clock, t: "24/7", s: "сервіс" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={s} className="text-white">
                <Icon className="size-5 text-ember mb-2" />
                <div className="font-display font-bold text-2xl sm:text-3xl">{t}</div>
                <div className="text-xs sm:text-sm text-white/60">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center z-10">
        <div className="text-white/40 text-xs tracking-widest uppercase animate-pulse">
          гортайте нижче
        </div>
      </div>
    </section>
  );
}
