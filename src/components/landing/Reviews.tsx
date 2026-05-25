import { Star } from "lucide-react";

const reviews = [
  {
    name: "Олег Ткаченко",
    role: "Власник будинку, Львів",
    text: "Замовляв відкатні ворота з автоматикою Came. Замір зробили в день звернення, монтаж — за один день. Якість бездоганна, працюють тихо. Рекомендую!",
    rating: 5,
  },
  {
    name: "Ірина Бондар",
    role: "Директор магазину, Київ",
    text: "Встановили ролети на вітрини. Дуже задоволена сервісом — все чітко, в строк і за обумовлену ціну. Через рік користування — жодних нарікань.",
    rating: 5,
  },
  {
    name: "Андрій Мельник",
    role: "Керівник складу, Рівне",
    text: "Зробили нам шлагбаум і систему контролю доступу. Хлопці професіонали — врахували всі побажання, навчили персонал. Гарантія працює.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-graphite text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
            Відгуки клієнтів
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">
            Нам довіряють тисячі українців
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="glass rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1 transition"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-ember text-ember" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed">«{r.text}»</p>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="size-10 rounded-full gradient-ember grid place-items-center font-semibold text-graphite">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-white/55">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
