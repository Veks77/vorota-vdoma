import { Phone, Mail, MapPin, Clock, Instagram, Send, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-graphite text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#" className="inline-flex items-center mb-5">
              <img
                src={logo}
                alt="VOROTA"
                className="h-12 w-auto max-w-[150px] rounded-lg object-contain"
              />
            </a>
            <p className="text-sm text-white/60 leading-relaxed">
              Виготовлення та монтаж автоматичних воріт, ролет та систем безпеки
              в Україні з 2014 року.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-ember">Послуги</h4>
            <ul className="space-y-3 text-sm font-semibold text-white">
              {["Автоматичні ворота", "Ролети", "Решітки", "Шлагбауми", "Огорожі"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="relative inline-flex transition hover:text-ember after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-ember after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-white/50">Контакти</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2"><Phone className="size-4 text-ember" /> +380 99 018 37 32</li>
              <li className="flex items-center gap-2"><Mail className="size-4 text-ember" /> tv1209129@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="size-4 text-ember" /> м. Кременчук</li>
              <li className="flex items-center gap-2"><Clock className="size-4 text-ember" /> Пн–Пт: 09:00 – 19:00</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="size-10 rounded-lg bg-white/5 hover:bg-ember hover:text-graphite grid place-items-center transition"><Instagram className="size-4" /></a>
              <a href="#" aria-label="Telegram" className="size-10 rounded-lg bg-white/5 hover:bg-ember hover:text-graphite grid place-items-center transition"><Send className="size-4" /></a>
              <a href="#" aria-label="Facebook" className="size-10 rounded-lg bg-white/5 hover:bg-ember hover:text-graphite grid place-items-center transition"><Facebook className="size-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-white/50">Ми на мапі</h4>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Карта"
                src="https://www.openstreetmap.org/export/embed.html?bbox=33.31%2C49.00%2C33.50%2C49.12&amp;layer=mapnik&amp;marker=49.0658%2C33.4100"
                className="size-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} VOROTA. Усі права захищені.</div>
          <div>Зроблено з турботою про ваш дім</div>
        </div>
      </div>
    </footer>
  );
}
