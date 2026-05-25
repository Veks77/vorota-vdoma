import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["Послуги", "#services"],
    ["Наші роботи", "#works"],
    ["Етапи", "#process"],
    ["Відгуки", "#reviews"],
    ["Контакти", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-graphite/85 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img
            src={logo}
            alt="VOROTA"
            className="h-12 sm:h-14 w-auto max-w-[150px] rounded-lg object-contain transition group-hover:scale-105"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-semibold text-white transition hover:text-ember after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-ember after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+380990183732"
          className="hidden sm:inline-flex items-center gap-2 text-white text-sm font-medium hover:text-ember transition"
        >
          <Phone className="size-4 text-ember" />
          +380 99 018 37 32
        </a>
      </div>
    </header>
  );
}
