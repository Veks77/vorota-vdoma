import { Phone } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 lg:hidden">
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 w-full h-14 gradient-ember text-graphite font-semibold rounded-2xl shadow-ember animate-pulse-ring"
      >
        <Phone className="size-5" />
        Отримати безкоштовний прорахунок
      </a>
    </div>
  );
}
