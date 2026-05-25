import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
            До / Після
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">
            Дивіться, як змінюється фасад
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Перетягуйте смугу, щоб порівняти результат до і після нашої роботи.
          </p>
        </div>

        <div
          ref={ref}
          className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-elegant select-none cursor-ew-resize"
          onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
          onMouseDown={(e) => move(e.clientX)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
        >
          <img src={afterImg} alt="Після встановлення" width={800} height={600} loading="lazy" className="absolute inset-0 size-full object-cover" />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={beforeImg}
              alt="До встановлення"
              width={800}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-screen max-w-none object-cover"
              style={{ width: ref.current?.offsetWidth ?? "100%" }}
            />
          </div>
          <div
            className="absolute inset-y-0 w-1 bg-ember"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full gradient-ember grid place-items-center shadow-ember">
              <MoveHorizontal className="size-5 text-graphite" />
            </div>
          </div>
          <span className="absolute top-4 left-4 bg-graphite/80 text-white text-xs px-3 py-1.5 rounded-full uppercase tracking-widest">
            До
          </span>
          <span className="absolute top-4 right-4 bg-ember text-graphite text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
            Після
          </span>
        </div>
      </div>
    </section>
  );
}
