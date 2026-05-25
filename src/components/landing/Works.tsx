import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import heroImg from "@/assets/hero-gates.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const works = [
  { src: project1, alt: "Встановлені автоматичні ворота" },
  { src: project2, alt: "Готовий проект воріт" },
  { src: project3, alt: "Металева огорожа після монтажу" },
  { src: afterImg, alt: "Фасад після встановлення воріт" },
  { src: beforeImg, alt: "Об'єкт до монтажу" },
  { src: heroImg, alt: "Автоматичні ворота біля будинку" },
];

export function Works() {
  return (
    <section id="works" className="py-20 sm:py-28 bg-secondary/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-ember text-sm font-semibold uppercase tracking-widest mb-3">
            Наші роботи
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-balance">
            Реальні об'єкти, які можна оцінити з першого погляду
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {works.map((work, index) => (
            <figure
              key={work.alt}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card shadow-card"
            >
              <img
                src={work.src}
                alt={work.alt}
                width={640}
                height={480}
                loading="lazy"
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-graphite/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                Робота {index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
