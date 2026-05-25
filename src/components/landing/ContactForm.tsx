import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Phone, MapPin, Mail, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Вкажіть ім'я").max(80),
  phone: z.string().trim().min(7, "Невірний номер").max(20).regex(/^[+\d\s()-]+$/, "Лише цифри"),
  interest: z.string().trim().max(200).optional(),
});

const options = [
  "Автоматичні ворота",
  "Гаражні ворота",
  "Захисні ролети",
  "Решітки",
  "Шлагбауми",
  "Огорожі",
  "Алюмінієві конструкції",
  "Інше",
];

const formspreeEndpoint = "https://formspree.io/f/xykvpgow";

export function ContactForm() {
  const [state, setState] = useState({ name: "", phone: "", interest: options[0] });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(state);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: r.data.name,
          phone: r.data.phone,
          interest: r.data.interest || "Не вказано",
          subject: "Нова заявка з сайту VOROTA",
        }),
      });

      if (!response.ok) throw new Error("Formspree request failed");

      setStatus("success");
      setState({ name: "", phone: "", interest: options[0] });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-graphite text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_oklch(0.72_0.19_50/0.15),_transparent_60%)]" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
              Залишити заявку
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-balance">
              Отримайте прорахунок за 15 хвилин
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Заповніть форму — наш менеджер передзвонить вам, відповість на питання та
              запропонує оптимальне рішення.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "+380 99 018 37 32", href: "tel:+380990183732" },
                { icon: Mail, label: "tv1209129@gmail.com", href: "mailto:tv1209129@gmail.com" },
                { icon: MapPin, label: "м. Кременчук" },
                { icon: Clock, label: "Пн–Пт: 09:00 – 19:00" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 text-white/85 hover:text-ember transition"
                >
                  <span className="size-11 rounded-xl bg-white/5 grid place-items-center">
                    <Icon className="size-5 text-ember" />
                  </span>
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white text-foreground rounded-3xl p-7 sm:p-10 shadow-elegant">
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 className="size-16 text-ember mx-auto mb-5" />
                <h3 className="text-2xl font-bold">Дякуємо за заявку!</h3>
                <p className="mt-3 text-muted-foreground">
                  Наш менеджер передзвонить вам протягом 15 хвилин.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="text-sm font-medium block mb-2">Ім’я</label>
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) => setState({ ...state, name: e.target.value })}
                    maxLength={80}
                    placeholder="Олександр"
                    className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={state.phone}
                    onChange={(e) => setState({ ...state, phone: e.target.value })}
                    maxLength={20}
                    placeholder="+380 __ ___ __ __"
                    className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition"
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Що вас цікавить</label>
                  <select
                    value={state.interest}
                    onChange={(e) => setState({ ...state, interest: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:border-ember outline-none transition"
                  >
                    {options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-14 gradient-ember text-graphite font-semibold rounded-xl shadow-ember hover:-translate-y-0.5 transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <><Loader2 className="size-5 animate-spin" /> Надсилаємо…</>
                  ) : (
                    "Отримати прорахунок"
                  )}
                </button>
                {status === "error" && (
                  <p className="text-destructive text-sm text-center">
                    Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.
                  </p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
